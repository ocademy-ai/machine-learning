## import libraries
import os
from vectordb import ChatbotAgent


  #''' GitHub Copilot '''
# main function
def main():	
	## OpenAI API Key
	with open(r'chatbot\OpenAI-API-key\OpenAI_API_key.txt', 'r') as f:
		api_key = f.read().strip()
	os.environ['OPENAI_API_KEY'] = api_key
	print("OpenAI API Key Set\n")

	## Configure Chroma
	persist_directory = r'chatbot\vector-db-persist-directory\chroma\chatbot'

	# URLs of the files to be merged from Project Open-academy
	_resources_path = r'chatbot\vector-db-persist-directory\resources\md_files.txt'
	with open(_resources_path, 'r') as f:
		lines = f.readlines()
	_sources_urls = []
	for line in lines:
		if line.startswith("'https://") and line.endswith("',\n"):
			path_temp = line.strip()[1:-2]
			_sources_urls.append(path_temp)
	print("Sources URLs:")
	print(_sources_urls)

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







