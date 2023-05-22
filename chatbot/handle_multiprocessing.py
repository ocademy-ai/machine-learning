# Define the process_request function.
def process_request(params):
	chatbot_agent, context, chat_history, summaries, query, link = params
	chatbot_agent.prompt_chatbot()
	chain = chatbot_agent.prompt_chatbot()
	answer = chain.predict(
		context=context,
		chat_history=chat_history,
		summaries=summaries,
		qury=query,
	)
	return answer, link