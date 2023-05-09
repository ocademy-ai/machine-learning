import os
import requests
from typing import List

import openai
import chromadb
import langchain

from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.text_splitter import TokenTextSplitter
from langchain.llms import OpenAI
from langchain.chains import ChatVectorDBChain
from langchain.chains import RetrievalQA

from langchain.document_loaders import GutenbergLoader
from langchain.docstore.document import Document
from langchain.document_loaders.base import BaseLoader

from langchain.prompts import PromptTemplate
from langchain.chains.qa_with_sources import load_qa_with_sources_chain
from langchain.chains.question_answering import load_qa_chain



# chatbot agent
class ChatbotAgent:
    def __init__(self, openai_api_key: str, sources_urls: List[str], persist_directory: str):
        """
        Initializes an instance of the ChatbotAgent class.

        :param openai_api_key (str): OpenAI API key.
	:param sources_urls (List[str]): URLs of the files to be merged from Project Open-academy.
	:param persist_directory (str): Directory where the Chroma vectors will be persisted.
        """
        # Set OpenAI API key.
        self._openai_api_key = openai_api_key
        os.environ["OPENAI_API_KEY"] = self._openai_api_key
        self._sources_urls = sources_urls
        self._persist_directory = persist_directory


        # Fetch the contents of each file and write to a local Markdown file.
        self._sources_path = r'\chatbot\vector-db-persist-directory\sources_merged.md'
        self._default_url_prefix = "https://github.com/open-academy/machine-learning/tree/main/open-machine-learning-jupyter-book"
        with open(self._sources_path, "w", encoding="utf-8") as f:
            for url in self._sources_urls:
                if not url.startswith(self._default_url_prefix):
                    raise ValueError(f"file path must start with '{self._default_url_prefix}'")
                response = requests.get(url, verify=False)
                f.write(response.text)
                f.write("\n")


        # Initialize the chat history.
        self.chat_history = []
        self.query = ""
        self.result = ""
        self.count = 1  # Count the number of times the chatbot has been called.


        # Load the data.
        self.sources_data = self.get_embeddings(self._sources_path)
        text_splitter = TokenTextSplitter(chunk_size=1000, chunk_overlap=0)  # Initialize a TokenTextSplitter object.
        sources_data_doc = text_splitter.split_documents(self.sources_data)  # Split the text into chunks.


        # Initialize an OpenAIEmbeddings object for word embeddings.
        embeddings = OpenAIEmbeddings()


        # Generating Chroma vectors from the text chunks using the OpenAIEmbeddings object and persisting them to disk.
        self.vectordb = Chroma.from_documents(sources_data_doc, embeddings, persist_directory=self._persist_directory)
        self.vectordb.persist()


        # Find the similar text in vectordb with query.
        if self.query != "":
            self.similarity_doc_search = self.vectordb.similarity_search_with_score(query=self.query)
        else:
            self.similarity_doc_search = ""


        # Configure LangChain QA.
	# The chatbot_qa supports qa_prompt (prompt engineering) and qa (no prompt engineering).
        self.chatbot_qa = ChatVectorDBChain.from_llm(
            OpenAI(temperature=1.2, model_name="gpt-3.5-turbo"), 
            self.vectordb,
            return_source_documents=True
        )
        
        # chain type: stuff
        self.chatbot_qa_retrieval_map_reduce_chain_type = RetrievalQA.from_chain_type(
            llm=OpenAI(temperature=1.2, model_name="gpt-3.5-turbo"), 
            chain_type="stuff", 
            retriever=self.vectordb.as_retriever()
        )
        
        # chain type: map_reduce
        self.chatbot_qa_retrieval_map_reduce_chain_type = RetrievalQA.from_chain_type(
            llm=OpenAI(temperature=1.2, model_name="gpt-3.5-turbo"), 
            chain_type="map_reduce", 
            retriever=self.vectordb.as_retriever()
        )
        # chain type: refine
        self.chatbot_qa_retrieval_refine_chain_type = RetrievalQA.from_chain_type(
            llm=OpenAI(temperature=1.2, model_name="gpt-3.5-turbo"), 
            chain_type="refine", 
            retriever=self.vectordb.as_retriever()
        )


    # Promtp the chatbot, chain type: stuff.
    def chatbot_qa_retrieval_stuff_chain_type_with_prompt(self):
	"""
	
	"""
        template = """Given the following extracted parts of a long document and a question, create a final answer with references ("SOURCES"). 
            If you don't know the answer, just say that you don't know. Don't try to make up an answer.
            ALWAYS return a "SOURCES" part in your answer.
            Respond in English.

            QUESTION: {question}
            =========
            {summaries}
            =========
            FINAL ANSWER IN ENGLISH:"""
        PROMPT = PromptTemplate(template=template, input_variables=["summaries", "question"])  # Parameter the prompt template.
        chain = load_qa_with_sources_chain(
            llm=OpenAI(temperature=0, model_name="gpt-3.5-turbo"),
            chain_type="stuff",
            promt=PROMPT
        )
        return chain({"input_documents": self.vectordb, "question": self.query}, return_only_outputs=True)


    # Prompt the chatbot, chain type: map_reduce.
    def chatbot_qa_retrieval_map_reduce_chain_type_with_prompt(self):
        # question template
        question_template = """Use the following portion of a long document to see if any of the text is relevant to answer the question. 
            Return any relevant text in English.
            {context}
            Question: {question}
            Relevant text, if any, in English:"""
        QUESTION_PROMPT = PromptTemplate(template=question_template, input_variables=["context", "question"])  # parameter the prompt template

        # combine template
        combine_template = """
            Given the following extracted parts of a long document and a question, create a final answer with references ("SOURCES"). 
            If you don't know the answer, just say that you don't know. Don't try to make up an answer.
            ALWAYS return a "SOURCES" part in your answer.
            Respond in English.

            QUESTION: {question}
            =========
            {summaries}
            =========
            FINAL ANSWER IN ENGLISH:"""
        COMBINE_PROMPT = PromptTemplate(template=combine_template, input_variables=["summaries", "question"])  # parameter the prompt template

        chain = load_qa_with_sources_chain(
            # If batch_size is too high, it could cause rate limiting errors.
            llm=OpenAI(temperature=0, model_name="gpt-3.5-turbo"),
            chain_type="map_reduce",
            return_intermediate_steps=True,
            question_prompt=QUESTION_PROMPT,
            combine_prompt=COMBINE_PROMPT
        )
        doc_relevant_tuple = self.vectordb.similarity_search_with_score(self.query)
        docs_relevant = ([doc[0] for doc in doc_relevant_tuple])

        return chain({"input_documents": [docs_relevant[0]], "question": self.query}, return_only_outputs=True)


    # Prompt the chatbot, chain type: refine.
    def chatbot_qa_retrieval_refine_chain_type_with_prompt(self):
        # question template
        initial_template = """
            Context information is below.
            ---------------------
            {context_str}
            ---------------------
            Given the context information and not prior knowledge,
            answer the question in English: {question}"""
        INITIAL_TEMPLATE = PromptTemplate(
            input_variables=["context_str", "question"],
            template=initial_template,
        )

        # refine template
        refine_template = """
            The original question is as follows: {question}
            We have provided an existing answer, including sources: {existing_answer}
            We have the opportunity to refine the existing answer
            (only if needed) with some more context below.
            ------------
            {context_str}
            ------------
            Given the new context, refine the original answer to better
            answer the question (in English)
            If you do update it, please update the sources as well.
            If the context isn't useful, return the original answer."""
        REFINE_TEMPLATE = PromptTemplate(
            input_variables=["question", "existing_anwser", "context_str"],
            template=refine_template,
        )

        chain = load_qa_with_sources_chain(
            # If batch_size is too high, it could cause rate limiting errors.
            llm=OpenAI(batch_size=5, temperature=0, model_name="gpt-3.5-turbo"),
            chain_type="refine",
            return_intermediate_steps=True,
            question_prompt=INITIAL_TEMPLATE,
            refine_prompt=REFINE_TEMPLATE,
        )
        return chain({"input_documents": self.vectordb, "question": self.query}, return_only_outputs=True)


    # Get the data from the merged file.
    def get_Embeddings(self, path):
        loader = EmbeddingsLoader(path)
        data = loader.load()
        return data


    # Convert Markdown to Python.
    def markdown_to_python(self, markdown_text):
        # Escape quotes and backslashes in the input.
        escaped_input = markdown_text.replace("\\", "\\\\").replace("'", "\\'")

        # Generate the Python string.
        python_string = f"'{escaped_input}'"

        return python_string


    def chatbot_pipeline(self, query_pipeline, choose_GPTModel = False, updateChatHistory = False):
        # Choose which GPT model.
        if choose_GPTModel:
            result_pipeline = openai.Completion.create(
                engine="davinci",
                prompt = query_pipeline,
                temperature=0.7,
                max_tokens=150,
                n=1,
                stop=None,
            ).choice[0].text.strip()  # Choose the first answer whose score/probability is the highest.
        else:
            result_pipeline = self.chatbot_qa({"question": query_pipeline, "chat_history": self.chat_history})
        
        if updateChatHistory:
            self.query = query_pipeline
            self.result = result_pipeline
            self.chat_history = self.chat_history + [(self.query, self.reslut["answer"])]
            return self.reslut
        else:
            return result_pipeline
            


    # Prompt the chatbot for map_reduce chain type.
    def promtp_engineering_for_map_reduce_chain_type(self):
        self.chatbot_qchatbot_qa_retrieval_map_reduce_chain_type({"input_documents": self.vectordb, "question": self.query}, return_only_outputs=True)


    # Prompt the chatbot for non libary content.
    def promtp_engineering_for_non_library_content(self, query):  # Please do not modify the value of query.
        query_prompted = query + " Please provide a verbose answer."

        result_prompted = self.chatbot_pipeline(query_prompted)
        result_not_know_answer = []  # To be done.
        result_non_library_query = []  # To be done.
        result_official_keywords = []  # To be done.
        result_cheeting = []  # To be done.
        
        return result_prompted



# Convert Document to Embedding.
class EmbeddingsLoader(BaseLoader):
    """
    Loader that uses urllib to load .txt web files.
    
    :param BaseLoader: a specifyed class in ChromaDB
    """
    def __init__(self, file_path: str):
        """Initialize with file path."""
        if not file_path.endswith(".md"):
            raise ValueError("file path must end with '.md'")

        self.file_path = file_path
        

    def load(self) -> List[Document]:
        """Load file."""
        with open(self.file_path, "r", encoding="utf-8") as f:
            text = f.read()
        metadata = {"source": self.file_path}
        return [Document(page_content=text, metadata=metadata)]
