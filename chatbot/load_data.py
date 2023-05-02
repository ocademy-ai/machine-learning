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
		About advanced machine learning topics, the book delves into various methods and techniques that expand on traditional machine learning approaches. Advanced machine learning goes beyond the basics, employing more sophisticated techniques to improve model performance and better understand complex data. The book covers the following topics and applications:
		
		- Ensemble Learning: This chapter discusses ensemble methods that combine multiple weak learners to create a strong learner. It introduces bagging, boosting, and stacking techniques to improve model performance by reducing variance and increasing accuracy.
		- Generative Models: This chapter explores generative models, which learn the underlying data distribution and can generate new, realistic samples. It covers Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs) as popular examples of generative models.
		- Kernel Methods: This chapter focuses on kernel methods, which enable complex, nonlinear decision boundaries in a computationally efficient manner. It introduces the kernel trick and its application in Support Vector Machines (SVMs) for classification and regression tasks.
		- Model Selection: This chapter emphasizes the importance of model selection for identifying the best model that generalizes well to new data. It covers cross-validation, hyperparameter tuning, and model comparison techniques to optimize performance and select the most suitable model.
		- Unsupervised Learning: This chapter delves into unsupervised learning algorithms that can extract patterns and structures from data without labeled information. It discusses dimensionality reduction and clustering techniques for discovering underlying data structures and reducing feature space.
		- Clustering: This chapter discusses clustering techniques that can discover underlying structures in data and partition it into distinct groups. It covers popular clustering algorithms, such as K-Means, Hierarchical Clustering, and DBSCAN, which group similar data points based on distance or density metrics.
	'''
	conclusion_for_ml_fundamentals = '''
		The chapter covers essential machine learning concepts, techniques, and applications, providing a solid foundation for understanding the field. It introduces classification, regression, and neural networks, along with parameter optimization and fairness in machine learning.

		The chapter emphasizes the importance of understanding the problem and selecting appropriate models and techniques. It discusses linear and polynomial regression, logistic regression, and various classification algorithms, including decision trees, support vector machines, and ensemble methods.

		- Neural networks, including convolutional and recurrent neural networks, are covered in depth, providing hands-on examples and explanations of their inner workings.

		It also addresses parameter optimization techniques, including gradient descent and loss functions, to fine-tune models for better performance.

		Lastly, it highlights the importance of fairness and ethics in machine learning, encouraging practitioners to consider the impact of their models on society.

	'''
	chapter_introduction = {
		"[data science]": conclusion_for_data_science,
		"[deep learning]": conclusion_for_deep_learning,
		"[machine learning productionization]": conclusion_for_machine_learning_productionization,
		"[ml advanced]": conclusion_for_ml_advanced,
		"[ml fundamentals]": conclusion_for_ml_fundamentals,
	}

	for chap, intro in chapter_introduction.items():
		print("{}\n\n".format(intro))


	print("CHAPTERS:     ")
	for chap, intro in chapter_introduction.items():
		print("        {}  ".format(chap))
	chapter_selector = input("Could you please choose one chapter as the background for our conversation: ")
	while (chapter_selector not in chapter_introduction.keys()):
		chapter_selector = input("Could you please choose one chapter as the background for our conversation (input the right choice): ")
	return chapter_selector