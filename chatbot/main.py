import os
from dotenv import load_dotenv
from multiprocessing import Pool
from handle_multiprocessing import process_request
from chatbot_agent import ChatbotAgent



def main():
	# Initialize the ChatbotAgent.
	load_dotenv()
	global chatbot_agent
	chatbot_agent = ChatbotAgent(openai_api_key=os.getenv('OPENAI_API_KEY'))

	# Start the conversation.
	print("\n\n****Chatbot Agent Initialized****")
	while chatbot_agent.count <= 20:
		print("[{}]".format(chatbot_agent.count))
		query = input("Query   : ")
		answer_list = []
		link_list = []
		# query it using content vector.
		query_results = chatbot_agent.search_context_qdrant(chatbot_agent.convert_chat_history_to_string()+"\nuser: "+query, 'Articles', top_k=4)
		requests = [(chatbot_agent, article.payload["content"], chatbot_agent.convert_chat_history_to_string(), "", query, article.payload["link"]) for article in query_results]
	
		# Use a Pool to manage the processes.
		with Pool(len(query_results)) as p:
			results = p.map(process_request, requests)

		# results is a list of tuples of the form (answer, link)
		answer_list, link_list = zip(*results)

		#for i, article in enumerate(query_results):
		#	print(f'{i + 1}. {article.payload["title"]} (Score: {round(article.score, 3)}), link: {article.payload["link"]}')
		#	chain = chatbot_agent.prompt_chatbot()
		#	answer = chain.predict(
		#		context=article.payload["content"],
		#		chat_history=chatbot_agent.convert_chat_history_to_string(), 
		#		summaries="",
		#		qury=query,
		#	)
		#	answer_list.append(answer)
		#	link_list.append(article.payload["link"])

		combine_answer = chatbot_agent.prompt_combine_chain(query=query, answer_list=answer_list, link_list=link_list)
		print(f'Query : {query}\n')
		print(f'Answer: {combine_answer}\n')
		chatbot_agent.update_chat_history(query, combine_answer)



if __name__ == "__main__":
	main()