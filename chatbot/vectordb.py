## Import Python Packages
import os
from urllib.parse import non_hierarchical
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
from langchain.document_loaders import GutenbergLoader
from langchain.docstore.document import Document
from langchain.document_loaders.base import BaseLoader




## chatbot agent class
class ChatbotAgent:
    def __init__(self, _openai_api_key: str, _sources_urls: List[str], _persist_directory: str):
        """
        Initializes an instance of the ChatbotAgent class.

        Args:
            openai_api_key (str): OpenAI API key.
            sources_urls (List[str]): URLs of the files to be merged from Project Open-academy.
            persist_directory (str): Directory where the Chroma vectors will be persisted.
        """
        # Set OpenAI API key
        self.__openai_api_key = _openai_api_key
        os.environ["OPENAI_API_KEY"] = self.__openai_api_key
        self.sources_urls = _sources_urls
        self.persist_directory = _persist_directory


        # Fetch the contents of each file and write to a local Markdown file
        self.__sources_path = '_sources_merged.md'
        self.__default_url_prefix = "https://github.com/open-academy/machine-learning/tree/main/open-machine-learning-jupyter-book"
        with open(self.__sources_path, "w", encoding="utf-8") as f:
            for url in self.sources_urls:
                if not url.startswith(self.__default_url_prefix):
                    raise ValueError(f"file path must start with '{self.__default_url_prefix}'")
                response = requests.get(url, verify=False)
                f.write(response.text)
                f.write("\n")

        # Initialize the chat history
        self.chat_history = []
        self.query = []
        self.reslut = []
        self.count = 1 # count the number of times the chatbot has been called

        ## Load the data    
        self.sources_data = self.get_openacademysources(self.__sources_path)
        text_splitter = TokenTextSplitter(chunk_size=1000, chunk_overlap=0) # Initializing a TokenTextSplitter object
        sources_data_doc = text_splitter.split_documents(self.sources_data) # Splitting the text into chunks

        # Initializing an OpenAIEmbeddings object for word embeddings
        embeddings = OpenAIEmbeddings()

        # Generating Chroma vectors from the text chunks using the OpenAIEmbeddings object and persisting them to disk
        self.vectordb = Chroma.from_documents(sources_data_doc, embeddings, persist_directory=self.persist_directory)

        # This can be used to explicitly persist the data to disk. 
        # It will also be called automatically when the object is destroyed.
        self.vectordb.persist()

        # Configure LangChain QA
		# chatbot_qa supports qa_prompt (prompt engineering)
        self.chatbot_qa = ChatVectorDBChain.from_llm(
            OpenAI(temperature=1.2, model_name="gpt-3.5-turbo"), 
            self.vectordb,
            return_source_documents=True
        )


    # Get the data from the merged file
    @classmethod
    def get_openacademysources(self, path):
        loader = OpenAcademySourcesLoader(path)
        data = loader.load()
        return data



    # Convert Markdown to Python
    @classmethod
    def markdown_to_python(self, markdown_text):
        # Escape quotes and backslashes in the input
        escaped_input = markdown_text.replace("\\", "\\\\").replace("'", "\\'")

        # Generate the Python string
        python_string = f"'{escaped_input}'"

        return python_string



    def chatbot_pipeline(self, query_pipeline, choose_GPTModel = False, updateChatHistory = False):
        # choose which GPT model
        if choose_GPTModel:
            result_pipeline = openai.Completion.create(
                engine="davinci",
                prompt = query_pipeline,
                temperature=0.7,
                max_tokens=150,
                n=1,
                stop=None,
            ).choice[0].text.strip() # choose the first answer whose score/probability is the highest
        else:
            result_pipeline = self.chatbot_qa({"question": query_pipeline, "chat_history": self.chat_history})
        
        if updateChatHistory:
            self.query = query_pipeline
            self.result = result_pipeline
            self.chat_history = self.chat_history + [(self.query, self.reslut["answer"])]
            return self.reslut
        else:
            return result_pipeline
            

    # Prompt the chatbot
    def promtp_engineering_for_non_library_content(self, query): # please do not modify the value of query
        query_prompted = query + " Please provide a verbose answer."

        result_prompted = self.chatbot_pipeline(query_prompted)
        result_not_know_answer = []
        result_non_library_query = []
        result_official_keywords = []
        result_cheeting = []

        

        # Return the prompted query
        return result_prompted


## Convert Document to Embedding
class OpenAcademySourcesLoader(BaseLoader):
    """Loader that uses urllib to load .txt web files."""

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
