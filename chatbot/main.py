import os
from chatbot_agent import ChatbotAgent
from prep_data import load_data



def main():
	# Set the OpenAI API key.
	with open(r'chatbot\OpenAI-API-key\OpenAI_API_key.txt', 'r') as f:
		api_key = f.read().strip()
	os.environ['OPENAI_API_KEY'] = api_key
	print("OpenAI API Key Set\n")

	# Configure ChromaDB.
	persist_directory = r'chatbot\vector-db-persist-directory\chroma\chatbot'

	# Load the data.
	sources_urls = load_data()

	# Initialize the ChatbotAgent.
	chatbot_agent = ChatbotAgent(_openai_api_key=os.environ["OPENAI_API_KEY"], _sources_urls=_sources_urls, _persist_directory=persist_directory)
	
	# Start the conversation.
	print("\n\n****Chatbot Agent Initialized****")
	while 1:
		print("[{}]".format(chatbot_agent.count))
		markdown_text = input("Query   : ")
		chatbot_agent.query = chatbot_agent.markdown_to_python(markdown_text)
		if chatbot_agent.count == 0:
			chatbot_agent.result = chatbot_agent.chatbot_qa({"question": chatbot_agent.query, "chat_history": chatbot_agent.chat_history})
		else:
			output_chain = chatbot_agent.chatbot_qa_retrieval_map_reduce_chain_type_with_prompt()
			anwser_1 = output_chain['output_text']
			# The following code is for comparison and reference. 
			# anwser_2 = chatbot_agent.chatbot_qa({"question": chatbot_agent.query, "chat_history": chatbot_agent.chat_history})["answer"]
			anwser_2 = ""
			prompt_query = '''
				Query: 
				{}
				*******
				Answer 1: 
				{}
				*******
				Answer 2: 
				{}
				*******
				Given the Query, I come up with Answer 1 and Answer 2, now combine and Insert the Answer 1 into the Answer 2.
				If there are repeated expression in the answers (expressing the same meaning), you should revise your answer to avoid the repetition.
				Show me your new anwser.'''.format(chatbot_agent.query, anwser_1, anwser_2)
			chatbot_agent.result = chatbot_agent.chatbot_qa({"question": prompt_query, "chat_history": chatbot_agent.chat_history})

		chatbot_agent.count = chatbot_agent.count + 1
		chatbot_agent.chat_history = chatbot_agent.chat_history + [(chatbot_agent.query, chatbot_agent.result["answer"])]
		print("Chat Bot: {}\n".format(chatbot_agent.result["answer"]))
	return 0



if __name__ == "__main__":
	main()
