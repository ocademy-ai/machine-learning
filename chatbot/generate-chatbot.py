## import libraries
from itertools import count
import os
from vectordb import ChatbotAgent


  #''' GitHub Copilot '''
# main function
def main():	
	## OpenAI API Key
	os.environ["OPENAI_API_KEY"] = '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'
	print("OpenAI API Key Set\n")

	## Configure Chroma
	persist_directory = "vector-db-persist-directory"

	
	## Load the data
	# URLs of the files to be merged from Project Open-academy
	_sources_urls = [
		# MACHINE LEARNING PRODUCTIONIZATION
		'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/overview.md',
		'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/problem-framing.md',
		'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/data-engineering.md',
		'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/model-training-and-evaluation.md',
		'https://open-academy.github.io/machine-learning/_sources/machine-learning-productionization/model-deployment.md',
	]


	## Initialize the ChatbotAgent
	chatbot_agent = ChatbotAgent(_openai_api_key=os.environ["OPENAI_API_KEY"], _sources_urls=_sources_urls, _persist_directory=persist_directory)
	
	print("\n\n****Chatbot Agent Initialized****")
	# start the conversation
	while 1:
		print("[{}]".format(chatbot_agent.count))
		markdown_text = input("Query   : ")
		chatbot_agent.query = chatbot_agent.markdown_to_python(markdown_text)
		chatbot_agent.result = chatbot_agent.chatbot_qa({"question": chatbot_agent.query, "chat_history": chatbot_agent.chat_history})
		chatbot_agent.count = chatbot_agent.count + 1
		# update chat_history
		chatbot_agent.chat_history = chatbot_agent.chat_history + [(chatbot_agent.query, chatbot_agent.result["answer"])]
		# print answer
		print("Chat Bot: {}\n".format(chatbot_agent.result["answer"]))
	return 0


# call main function
if __name__ == "__main__":
	main()