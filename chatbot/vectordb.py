## Import Python Packages
import os
import platform
import textwrap
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



## OpenAI API Key
os.environ["OPENAI_API_KEY"] = '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'



## Configure Chroma
persist_directory = "vector-db-persist-directory"



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


def get_openacademysources(path):
    loader = OpenAcademySourcesLoader(path)
    data = loader.load()
    return data


def markdown_to_python(markdown_text):
    # Escape quotes and backslashes in the input
    escaped_input = markdown_text.replace("\\", "\\\\").replace("'", "\\'")

    # Generate the Python string
    python_string = f"'{escaped_input}'"

    return python_string



## Load the data
# Set the defualt URL prefix
defaultURLPrefix = "https://open-academy.github.io"
_sources_path = '_sources_merged.md'

# URLs of the files to be merged from Project Open-academy
_sources_urls = [
    # MACHINE LEARNING PRODUCTIONIZATION
    'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/overview.md',
    'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/problem-framing.md',
    'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/data-engineering.md',
    'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/model-training-and-evaluation.md',
    'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/model-deployment.md',
]

# Fetch the contents of each file and write to a local Markdown file
with open(_sources_path, 'w') as f:
    for url in _sources_urls:
        if not url.startswith(defaultURLPrefix):
          raise ValueError("file path must start with '{}'".format(defaultURLPrefix))
        response = requests.get(url, verify=False)
        f.write(response.text)
        f.write('\n')


# loader.load()
_sources_data = get_openacademysources(_sources_path)

# Initializing a TokenTextSplitter object to split the text into chunks of 1000 tokens with 0 token overlap
text_splitter = TokenTextSplitter(chunk_size=1000, chunk_overlap=0)

# Splitting the Romeo and Juliet text into chunks using the TokenTextSplitter object
_sources_data_doc = text_splitter.split_documents(_sources_data)

# Initializing an OpenAIEmbeddings object for word embeddings
embeddings = OpenAIEmbeddings()

# Generating Chroma vectors from the text chunks using the OpenAIEmbeddings object and persisting them to disk
vectordb = Chroma.from_documents(_sources_data_doc, embeddings, persist_directory=persist_directory)

# This can be used to explicitly persist the data to disk. It will also be called automatically when the object is destroyed.
vectordb.persist()



## Configure LangChain QA
romeoandjuliet_qa = ChatVectorDBChain.from_llm(OpenAI(temperature=1, model_name="gpt-3.5-turbo"), vectordb, return_source_documents=True)



## start the conversation
chat_history = [("", "")]
count = 0

# while loop for typing
while 1:
  markdown_text = input("\nQuery[{}]:".format(count))
  query = markdown_to_python(markdown_text)
  result = romeoandjuliet_qa({"question": query, "chat_history": chat_history})
  chat_history = chat_history + [(query, result["answer"])]
  formatted_history = "\n".join([f"Question: {q}\nAnswer: {a}" for q, a in chat_history])
  wrapped_history = textwrap.fill(formatted_history, width=120)
  print(wrapped_history + "\n")
  result["answer"]