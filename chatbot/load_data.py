import os



def load_data():
	path = r'chatbot\vector-db-persist-directory\resources'
	sections_list = []
	for root, dirs, files in os.walk(path):
		for file in files:
			if file.endswith('.txt'):
				file_name_without_extension = os.path.splitext(file)[0]
				sections_list.append(file_name_without_extension)
	

	chapter_selector = select_chapter()
	chapter_selector = "ml-advanced"
	_resources_path = r'chatbot\vector-db-persist-directory\resources\{}.txt'.format(chapter_selector)
	with open(_resources_path, 'r') as f:
		lines = f.readlines()
	_sources_urls = []
	for line in lines:
		if line.startswith("'https://") and line.endswith("',\n"):
			path_temp = line.strip()[1:-2]
			_sources_urls.append(path_temp)
	print("Sources URLs:")
	print(_sources_urls)
	return _sources_urls


def select_chapter():
	# Add a function to select a chapter
	conclusion_for_data_science = '''
		
	'''
	conclusion_for_deep_learning = '''
		About deep learning, the books talks about different topics and applications of deep learning, which is a branch of machine learning that uses artificial neural networks to learn from data and perform tasks. Some of the topics and applications covered in the book are:

		- AutoEncoder: A type of neural network that learns to compress and reconstruct data, such as images or text, in an unsupervised manner. Autoencoders can be used for dimensionality reduction, denoising, anomaly detection, etc.
		- CNN: Convolutional Neural Network, a type of neural network that uses convolutional layers to extract features from images or other types of data. CNNs can be used for image classification, object detection, face recognition, etc.
		dl-overview: An overview of deep learning, its history, challenges, advantages, and disadvantages. It also introduces some basic concepts and terminology of deep learning, such as activation functions, loss functions, optimization algorithms, etc.
		dl-summary: A summary of deep learning, its applications, and its future prospects. It also provides some resources and references for further learning and exploration of deep learning.
		- DQN: Deep Q-Network, a type of reinforcement learning algorithm that uses a neural network to learn how to act in an environment based on rewards and penalties. DQN can be used for playing games, controlling robots, etc.
		- GAN: Generative Adversarial Network, a type of neural network that consists of two competing networks: a generator and a discriminator. The generator tries to create realistic data, such as images or text, while the discriminator tries to distinguish between real and fake data. GANs can be used for image synthesis, style transfer, text generation, etc.
		- Generative-adversarial-networks: A more detailed explanation of GANs, their architecture, training process, variants, and applications. It also provides some examples and code snippets of GANs in action.
		image-classification: A tutorial on how to use CNNs for image classification tasks, such as recognizing handwritten digits or flowers. It also explains how to use TensorFlow and Keras libraries to build and train CNN models in Python.
		image-segmentation: A tutorial on how to use CNNs for image segmentation tasks, such as separating foreground objects from background or identifying different parts of an image. It also explains how to use TensorFlow and Keras libraries to build and train CNN models in Python.
		- LSTM: Long Short-Term Memory, a type of recurrent neural network that can learn from sequential data, such as text or speech. LSTM can handle long-term dependencies and avoid vanishing or exploding gradients problems. LSTM can be used for natural language processing, speech recognition, text generation, etc.
		- NLP: Natural Language Processing, a field of computer science that deals with understanding and generating natural language using deep learning or other methods. NLP can be used for sentiment analysis, machine translation, question answering, etc.
		- RNN: Recurrent Neural Network, a type of neural network that can process sequential data by having loops or connections between its hidden units. RNN can learn from temporal patterns and context information. RNN can be used for natural language processing, speech recognition, time series analysis, etc.
		time-series: A tutorial on how to use RNNs for time series analysis tasks, such as forecasting or anomaly detection. It also explains how to use TensorFlow and Keras libraries to build and train RNN models in Python.
		'''
	conclusion_for_machine_learning_productionization = '''
		About machine learning productionization, the book talks about different topics and applications of machine learning, which is a branch of artificial intelligence that uses statistical techniques to give computers the ability to learn from data without being explicitly programmed. 
		Machine learning productionization is the process of developing and integrating machine learning models into a live setting where they generate value for the business, and then continuously improving them. 
		This chapter introduces the concept of machine learning productionization and its challenges. It also describes the machine learning productionization life cycle and some best practices for building production-ready machine learning systems.
		Some of the topics and applications covered in the book are:
		
		- Problem framing: This chapter explains how to define a machine learning problem and its business value. It also covers how to identify the stakeholders, data sources, metrics, and constraints for a machine learning project.
		- Data engineering: This chapter covers how to collect, store, process, and analyze data for machine learning. It also discusses how to handle data quality issues, data drift, and data privacy.
		- Model training and evaluation: This chapter covers how to train, evaluate, and debug machine learning models. It also discusses how to handle model complexity, overfitting, underfitting, and bias-variance trade-off.
		- Model deployment: This chapter covers how to deploy machine learning models to production environments. It also discusses how to choose the appropriate deployment pattern, infrastructure, and platform for different use cases. It also covers how to manage and deliver models using model registries and pipelines.
	'''
	conclusion_for_ml_advanced = '''
	'''
	conclusion_for_ml_fundamentals = '''
	'''
	chapter_introduction = {
		"conclusion_for_data_science": conclusion_for_data_science,
		"conclusion_for_deep_learning": conclusion_for_deep_learning,
		"conclusion_for_machine_learning_productionization": conclusion_for_machine_learning_productionization,
		"conclusion_for_ml_advanced": conclusion_for_ml_advanced,
		"conclusion_for_ml_fundamentals": conclusion_for_ml_fundamentals,
	}

	for chap, intro in chapter_introduction.items():
		print("{}\n\n".format(intro))


	print("CHAPTERS:     ")
	for chap, intro in chapter_introduction.items():
		print("        {}  ".format(chap))
	chapter_selector = input("Could you please choose one chapter as the background for our conversation: ")
	return chapter_selector