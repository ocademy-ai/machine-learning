# Machine learning overview


```{epigraph}
Machine intelligence is the last invention that humanity will ever need to make.

-- Nick Bostrom
```


We are living in the age of the intelligent machines. In the last decade, machine learning powered systems went from beating the world-class chess players to now influencing most of our daily decisions like what we watch on streaming services like Netflix and YouTube. What is machine learning? And why is it important to be studying it now?

We hear that machine learning is transforming many industries, but what exactly can we use it for? And what are the set of problems that this technology is or not suited for? 

This introduction will give you the basics of machine learning or these things that you will always need to know. More concretely, it will cover the high level foundational knowledge such as:

- What is machine learning?
- The difference between artificial intelligence, data science, machine learning and deep learning
- The difference between machine learning and ordinary programming
- Applications of machine learning
- When to use and when not to use machine learning
- Types of machine learning
- A typical machine learning project workflow


## What is Machine Learning? 

Machine learning is a new programming paradigm in which instead of explicitly programming computers to perform some tasks, we let them learn from data in order to find the underlying patterns in the data. In few words, machine learning is the science of giving the machine the ability to reason about the data. 

The term [machine learning](https://en.wikipedia.org/wiki/Machine_learning) was coined by Arthur Samuel in 1959. At that time, Arthur defined machine learning as a:

> *Field of study that gives computers the ability to learn without being explicitly programmed.*

A more technical definition of machine learning was provided by Tom M. Mitchell in 1997. Here is how Tom defined machine learning: 

> *A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E.*

Wikipedia provides a much clearer definition of machine learning: 

> *Machine learning (ML) is the study of computer algorithms that improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence. Machine learning algorithms build a model based on sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to do so. - Wikipedia.*

What does that mean?

In simple words, machine learning algorithms are trained on data rather than being programmed explicitly. 

## Artificial Intelligence, Data Science, Machine Learning, and Deep Learning 

AI or Artificial intelligence, data science, machine learning, and deep learning are used interchangeably, but they are quite different.

AI is a branch of computer science concerned with building intelligent machines capable of performing tasks at the level of human. AI seeks to mimic human. AI is an interdisciplinary field that involves machine learning, programming, robotics, data science, etc...

Machine learning on the other hand is the branch of AI and as we saw, it is concerned with giving the machine the ability to learn from data. Machine learning algorithms consists of shallow or classical algorithms such as decision trees and deep learning algorithms such as convolutional neural networks. We will learn more about these algorithms in the next parts. 

Deep learning is a branch of machine learning that deals with the study of artificial neural networks and it was inspired by the human brain. Classical machine learning algorithms needs a lot of feature engineering, but deep learning algorithms can extract features in huge amount of data such as images themselves.  


```{figure} ../../images/ml-fundamentals/ml-overview/ai-ml-dl.png
---
name: 'ai-ml-dl'
width: 90%
---
The difference between AI, machine learning and deep learning
```

## Ordinary Programming vs Machine Learning

In ordinary programming, the job of the programmer is to clearly write every single rule that makes up the task he/she is trying to accomplish. In order to get the results, she/he must write all rules that acts up on the data. 

Machine learning flips that. Instead of having to write the rules that makes up a particular application, we can feed data and results(or labels) to the machine learning model, and its job can be to determine the set of rules that map the data and labels. 

Let's take a real world example. If you wanted to build an application that given a picture of person can determine if he/she is wearing or not wearing a facemask, you can just feed a bunch of images of people with and without facemasks to the machine learning model, and the model can learn the rules or patterns that map the images to whether they have a facemask or not. 

You can even extend that further and use those learned rules to recognize facemasks in the images that were never seen by the that model. 


```{figure} ../../images/ml-fundamentals/ml-overview/traditional-ml.png
---
name: 'traditional-ml.png'
width: 90%
---
Traditional Programming vs Deep Learning
```


Approaching a facemask recognition problem with rule based programming would really be a hard problem. You would have to write lots of code that would later turn out to not work typically because your program will be tested on different kinds of facemasks and people in various scenarios and it's almost impossible to express that in rules. Whereas with machine learning, all you need is a bunch of images of people with and without facemasks, and there you are few steps away from getting an effective facemask recognizer.


## Applications of Machine Learning

Before we step into further machine learning foundations, let's look at some of its most exciting applications. 

Machine learning has transformed many industries, from banking, manufacturing, streaming, autonomous vehicles, agriculture, etc...In fact, most of the tech products and services we use daily possess some sorts of machine learning algorithms running in their backgrounds.  

Here are the most commonly machine learning use cases:

* **Fraud detection**: Banks and other financial organizations can use machine learning to detect frauds in real time. 

* **Loan repayment prediction**: Banks can also use the historical data of their clients to predict if they will be able to repay back the loans before granting it to them. 

* **diagnosing diseases and predicting the survival rate**: Machine learning is increasingly finding its value in medicine. It can assist medical professionals in diagnosing diseases in handful of minutes. Medical professionals can also use machine learning to predict the likelihood or a course of disease or survival rate(prognosis).

* **Detecting defects in industry**: Some manufacturing companies use machine vision to inspect defects in the products which ultimately result in speeding up the production process, automating the inspection task, reducing the cost and human workload. You can learn more about visual inspection in [2020 State of AI-Based Machine Vision by Landing AI](https://landing.ai/wp-content/uploads/2020/11/MachineVisionSurvey.pdf). 

* **Churn prediction**:  Organizations that provides some kinds of services can use machine learning to predict if a given customer is likely to opt out from the service or cancel subscription. This can help the organization to improve the customer experiences in order to retain the customers. 

* **Spam detection**: Almost all email providers such as Gmail or Outlook possess the ability to detect spams from all incoming emails to protect the users from fake promotions and scams. 

* **Autonomous vehicles**: Today's autonomous vehicles such as self-driving cars use machine learning and deep learning systems to navigate in the roads. Using computer vision, they can be able to detect the pedestrian and traffic lights and signs and other surrounding objects. 

There are many more applications of machine learning and the list could go on. For example, a given ads agency can use machine learning to learn the kinds of things that their visitors are interested in and they can use the results to place the relevant ads on the website. Same for streaming services like YouTube and Netflix. These services uses machine learning to suggest the best media to their clients based on their interests. 

## Key terminology
What is machine learning? Concisely put, it is the following:

- ML systems learn how to combine input to produce useful predictions on never-before-seen data.

Let's explore fundamental machine learning terminology.

### Labels

A `label` is the thing we're predicting—the `y` variable in simple linear regression. The label could be the future price of wheat, the kind of animal shown in a picture, the meaning of an audio clip, or just about anything.

### Features

A `feature` is an input variable—the `x` variable in simple linear regression. A simple machine learning project might use a single feature, while a more sophisticated machine learning project could use millions of features, specified as:

$$x_1, x_2, ..., x_N$$

In the spam detector example, the features could include the following:
- words in the email text
- sender's address
- time of day the email was sent
- email contains the phrase "one weird trick."


### Examples
An `example` is a particular instance of data, **`x`**. (We put **`x`** in boldface to indicate that it is a vector.) We break examples into two categories:

- labeled examples
- unlabeled examples

A **`labeled example`** includes both feature(s) and the label. That is:

```text
labeled examples: {features, label}: (x, y)
```

Use labeled examples to **train** the model. In our spam detector example, the labeled examples would be individual emails that users have explicitly marked as "spam" or "not spam."


An **`unlabeled example`** contains features but not the label. That is:
```text
unlabeled examples: {features, ?}: (x, ?)
```

Once we've trained our model with labeled examples, we use that model to predict the label on unlabeled examples. In the spam detector, unlabeled examples are new emails that humans haven't yet labeled.

### Models
A model defines the relationship between features and label. For example, a spam detection model might associate certain features strongly with "spam". Let's highlight two phases of a model's life:

- **Training** means creating or **learning** the model. That is, you show the model labeled examples and enable the model to gradually learn the relationships between features and label.
- **Inference** means applying the trained model to unlabeled examples. That is, you use the trained model to make useful predictions (`y'`). For example, during inference, you can predict if an email is a spam or not for new unlabeled examples.

###  Regression vs classification

A **regression** model predicts continuous values. For example, regression models make predictions that answer questions like the following:
- What is the value of a house in California?
- What is the probability that a user will click on this ad?


A **classification** model predicts discrete values. For example, classification models make predictions that answer questions like the following:
- Is a given email message spam or not spam?
- Is this an image of a dog, a cat, or a hamster?


## When And When Not to Use Machine Learning

Machine learning is an incredible technology and it has shown a lot of successes in solving various real world problems. However, like any other technology, machine learning is not suitable for solving all kinds of problems. It is thus equally important to know when and when not to use machine learning.

When to use machine learning? Machine learning is preferred when approaching:

* Problems that are too complex to be solved by ordinary programming. For these kinds of problems, it's probably safe to try machine learning. There is no way one can write all rules that can be used for recognizing facemasks or detect spam emails accurately for example.

* Problems that involve visual reasoning and language understanding such as image recognition, speech recognition, machine translation, etc...As we will see later, large scale perception or visual and language problems are typically handled by deep learning systems. 

* Fast changing problems where the characteristics of the problems changes with time, and there is a need to keep the system functioning well. Machine learning is suitable for these sorts of problems because machine learning algorithms can be retrained on new data. 

* Problems that are clear and have simple goals such as yes/no question or predicting a single continuous number such as the quantity of product likely to be consumed in a given time.  Andrew Ng., Founder of DeepLearning.AI and Adjunct Stanford Professor likes to say that machine learning (employed for automation purpose) is likely to succeed when solving a problem that takes a human a second or less to accomplish such as detecting defects in a product. Recognizing if there is a defect in a product is very simple yes/no question and take a second or less to complete. 

With that said, you may not use machine learning when:

* You want the predictions made by your model to be fully explainable. This is because most machine learning models are considered to be `blackbox`. 
* You do not have a reliable data for the problem you're trying to solve. A simple example here is trying to use machine learning for predicting stocks. Stock market data is unreliable and can change in a matter of seconds without any logical reasons, and so, it's pretty hard to for a model to learn some useful patterns from such unreliability. 
* You can solve your problem with ordinary programming or a simple heuristic methods. 
* You want a solution that will never need to be updated. The predictions made by machine learning models decay overtime, so if you are not ready to update data and retrain models frequently, you may have to consider non machine learning techniques. 

Machine learning keeps transforming things that people never thought and with its vibrant online community, we will keep to be surprised but in the meantime, it's a safe belt to use it in problems in which the solution can be in your favor because machine learning systems are hard to maintain. 

We talked about when you should use machine learning and when you should not, but also, there are other areas where machine learning is being heavily used but with extra care and human in the loop. Example of such critical areas include medicine, self driving cars, etc...In some of those areas like self-driving cars(or driver assistants), machine learning is surely a big factor but also because the cost of error made by the model can be very high, human assistance becomes important.

## Types of Machine Learning Systems

In broad, there are 3 main types of machine learning systems that are:

* Supervised learning
* Unsupervised learning
* Reinforcement learning

Let's review all of these types to get a high level understanding of what's they really mean. 

### Supervised Learning

Most machine learning tasks fall into supervised learning type. As the name implies, a supervised learning model is trained with input data along with some form of guidance that we can call labels. In other words, a supervised learning model maps the input data (or X in many textbooks) to output labels (y). Labels are also known as targets and they act as a description of the input data. 

The example of facemask recognition that we used in above sections is a good example of supervised learning. In broad, there are 2 main kinds of supervised learning problems that are:

* **Classification problems** where the task is to identify a given category from numerous categories or simply make choice between a number of categories. Another example of classification task is to identify if the incoming email is either spam or not based on the email contents.

* **Regression problems** where the goal is to predict a continuous value of something. A classical example for this category is to predict the price of the used car given its features such as brand, age, number of doors, number of sits, safety level, maintenance cost, etc...

```{figure} ../../images/ml-fundamentals/ml-overview/class-reg.png
---
name: 'class-reg.png'
width: 90%
---
Graphical representation of classification and regression problems
```

Supervised learning algorithms includes shallow algorithms such as linear and logistic regression, decision trees, random forests, K-Nearest Neighbors (KNN), and support vector machines (SVM). Neural networks can be both supervised(like using them for image classification) and unsupervised. 

With that said, there are other advanced tasks that falls into supervised learning type such as:

* Image captioning where the goal is to predict the caption of a given image. 
* Object detection where the goal is to recognize the object in image and draw the bounding box around it. 
* Image segmentation where the goal is to group the pixels that make up particular objects in the image. 


```{figure} ../../images/ml-fundamentals/ml-overview/vision.png
---
name: 'vision.png'
width: 90%
---
Advanced Tasks: Object detection, image segmentation, image captioning. You can test these advanced algorithms on your images using [vision-explorer](https://vision-explorer.allenai.org)
```

Some of those tasks can involve both classification and regression. Take an example for object detection, a task of recognizing and localizing an object in an image: it involves classification (recognizing the object among many other objects) and regression (predicting the coordinates of the objects in an image to make a bounding box).

If any of the things we are talking about sounds unfamiliar, do not worry. There is no way to explain all things at once, but as we progress, things will get clear. 

### Unsupervised Learning

Supervised learning algorithms are trained with data and labels. Conversely, unsupervised learning algorithms are trained on unlabelled data. 

Unsupervised learning algorithms are primarily used for:

* Clustering: K-Means
* Dimension reduction and data visualization: Principal Component Analysis(PCA), t-Distributed Stochastic Neighbor Embedding(t-SNE). 

There are many more algorithms that could also be used for those 2 tasks, but, we will cover K-Means, PCA, and t-SNE because they are commonly used. 

### Reinforcement Learning

Reinforcement learning is a special type of machine learning that is most applicable in robotics and games. 

In reinforcement learning, a learning system called *an agent* can perceives the environment, performs some actions, and gets *rewarded* or *penalized* depending on how it is performing. The main goal of the agent is to accumulate as much as rewards as possible.

The *agent* learns the best strategy(*policy*) necessary for getting the most reward itself. 


Reinforcement learning holds some of the most historical AI moments. In 2016, DeepMind AlphaGo, a reinforcement learning system won Lee Sedol in [Google DeepMind Challenge Match](https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol). Go is a complex board game that requires intuition, creative and strategic thinking. And Lee was one of the world-class Go players. You can watch the movie of the game between AlphaGo and Lee [here](https://www.youtube.com/watch?v=WXuK6gekU1Y&list=PLqYmG7hTraZBy7J_4ynYPc0Ml1RUGcLmD&index=2&t=147s).

For many of us, we may not get the most of reinforcement learning, typically because of limited resources and applicability, but is it a powerful thing for those who can afford it most notably employing it in robotics and games.

Let's summarize the types of machine learning systems. By far, supervised and unsupervised learning are the two commonly used types of machine learning. Semi-supervised and self-supervised learning are also getting attractions in deep learning community, but they are still in research. We will focus more those two practical types: supervised and unsupervised.

## Typical Machine Learning Workflow

Although every machine learning problem is unique, they all follow a similar workflow. In this section, we will learn how to approach machine learning problems systematically.

Overall, a typical machine learning project workflow consists of: 
* Defining and formulating a problem
* Collecting data
* Establishing a baseline
* Exploratory data analysis(EDA)
* Preparing data
* Selecting and training a model
* Performing error analysis and improving a model
* Deploying a model

Let's talk about each step in brief. 

### Defining a Problem

Everything starts here. Problem definition is the important and the initial step in any machine learning project. This is where you make sure you understand the problem really well. Understanding the problem will give you proper intuitions about the next steps to follow such as right learning algorithms, etc. But wait, what does it mean to understand the problem?

Understanding the problem is all about diving deep into the details of the problem at hand and asking the right questions. First, it's important to narrow down the problem until you can have a simple and a well-defined goal. Here are examples of simple goals: To *classify* products into different categories, to *predict* the price of a used car given its features (such as brand, age, etc...), to *recognize* if a person is wearing a facemask, to *divide* customers into different groups that share similar behaviors, etc...As you can see, the goal can tell whether the problem is classification, regression, or clustering...

At this stage, avoid vague words. The simpler you can formulate the problem, the better things will be down the hall. It's also worth questioning if the project should be pursued. Most problems do not require machine learning. 

Problem definition also goes beyond determining the goal and objective of the project to thinking about the data that will be needed. Machine learning models relies on the data, and the better models comes from better data. Do you have data that contains the things you want to predict? Models are not magical things, they are mathematical functions that takes data along with labels, and determine the patterns that can be used to make predictions on unseen data. If the data does not contain meaningful information relevant to what you want to predict, you will get poor predictions. 

After you understand the problem and  have an idea of the data you want, the next step is to collect it. 

### Collecting Data

This is usually the next stage after formulating a problem. Before we talk about collecting data, let's even understand the meaning of data. According to [wikipedia](https://en.wikipedia.org/wiki/Data), "data are a set of values of qualitative or quantitative variables about one or more persons or objects."

There are 2 main types of data that are: 
* Structured data that are organized in tabular or spreadsheet format. Example of tabular data includes customer records, car sales, etc...

* Unstructure data such as images, texts, sounds, and videos. Unstructured data are not organized as the former. 

Nowdays, there are lots of open-source datasets on platforms like Kaggle, Google datasets, UCL, and government websites. So, if you are solving a problem that someone solved before, it's very likely that you will find it somewhere in those platforms, or other public sources like this [repository](https://github.com/awesomedata/awesome-public-datasets). Your job as machine learning engineer is to find the relevant data that you can use to solve the presented problem.

That said, there are times that you will have to collect your own data, especially if you are solving a problem that no one solved before. In this case, consider the time that you will have to spend collecting data and the cost. You also do not need to wait until you have your desired data points before you can start. Embrace ML development early on so that you can learn if you (really) need more data. This idea is inspired by Andrew Ng.

Also, when collecting the data, quality is better than quantity. There are times when small data but good data can outwork big poor data. The amount of data you need is going to depend on the problem you're solving and its scope, but whatever the problem is, aiming to collect good data is the way to go.

### Establishing a Baseline

Without a benchmark, you won't know how to evaluate your results properly. A baseline is the simplest model that can solve your problem with minimal requirements. It does not have to be a model. It can be an existing open source application, a statistical analysis or intuitions you get from data at a quick glance.

The single most purpose of a baseline is to act as a reference point when comparing the actual model with the baseline. The ultimate goal is to beat a baseline, and sometime, if you can't beat it, it might mean the project is not worth pursuing, or the baseline can be all you need.

### Exploratory data analysis(EDA)

Before manipulating the data, it is quite important to learn about the dataset. This can be overlooked, but doing it well will help you know the effective strategies to be applied while cleaning the data.

Go through some values, plot some features, and try to understand the correlation between them. If the work is vision-related, visualize some images, spot what’s missing in the images. Are they diverse enough? What types of image scenarios can you add? Or what are images that can mislead the model?

Here are other things that you would want to inspect in the data:

* Duplicate values and samples
* Corrupted or data with unsupported formats (ex: having an image of .txt and with 0 Kilobytes)
* Class imbalances
* Biases
  
Before performing EDA, split the data into the training set, validation and test sets to avoid data leakage. The training set is used for training the model, validation set is used for evaluating the model performance during training to suggest improvements, and test set is for evaluating the final and best model performance. Validation and test set should have the same statistical distribution. 

Also, to avoid data leakage, do not touch the test set in EDA or anywhere before the model training.

### Data Preprocessing 

Data processing is perhaps the biggest part of any machine learning project. There is a notion that Data Scientists and Machine Learning Engineers spend more than 80% of their time preparing the data and this makes sense because the real world data are messy.

In this step, it is where you convert the raw data to go in a format that can be accepted by the machine learning algorithms.

Data preprocessing is hard because there are different types of data and the way you process one is different to the other. For example, in structured data, the way you process numerical features is going to be different to categorical features. Also in unstructured data, the way you manipulate images is going to be different to how you manipulate texts or sounds.

As the next parts will cover the practical implementations of typical data preprocessing steps, let's be general about things you're likely going to deal with while manipulating the features:

* **Imputing missing values:** Missing values can either be filled, removed or left as they are. There are various strategies for missing values such as mean, median, frequent imputations, backward and forward fill, and iterative imputations. The right imputation technique depends on the problem and the dataset. With exception to tree based models, most machine learning models do not accept missing values. 

* **Encoding categorical features:** Categorical features are all types of features that have categorical values. For example, A gender feature having the values male and female is a categorical feature. You will want to encode such types of features. The techniques for encoding them are label encoding where you can assign 0 to Male and 0 to Female, or one hot encoding where you can get the binary representations (0s and 1s) in one hot matrix. You will see this later in practice.

* **Scaling the numeric features:** Most ML models work well when the input values are scaled to small values because they can train and converge faster than they would otherwise. There are two main scaling techniques that are normalization and standardization. Normalization rescales the feautures to the values between 0 and 1 whereas standardization rescales the features to have mean of 0 and a unit standard deviation. If you are aware that your data has normal or gausian distribution, normalization can be a good choice. Otherwise, standardization will work well in many cases. 

In many textbooks and courses, data preprocessing is also referred to data cleaning or data preparation. Feature engineering is also a part of data preprocessing. Feature engineering is a creative task and requires some extra knowledge about the data and the problem as it involves creating new features from existing features.

### Selecting and Training a Model

Selecting, creating, and training a machine learning model is the tiniest part in any typical machine learning workflow. There are different types of models but in broad, most of them falls into these categories: linear models such as linear and logistic regression, tree-based models such as decision trees, ensemble models such as random forests, and finally neural networks. 

Depending on your problem, you can choose any relevant model from these categories or tries many of them. But, it is worth mentioning that getting a model that can ultimately solve a given problem is no *free lunch scenario*. You have to experiment with different models to get one that works for your problem and dataset.

To reduce your modelling curve, here are a few things that you can consider while choosing a machine learning model:

* **The scope of the problem:** The scope or type of your problem can give a strong signal on what learning algorithm to use.  Take an example: If you are going to build an image classifier, neural networks (Convolutional Neural Networks specifically) might be your go-to algorithm. 

* **The size of the dataset:** Linear models tend to work well in small data problems, whereas ensemble models and neural network can work well when given huge amount of data.
* **The level of interpretability:** If you want the predictions of your model to be explainable, neural networks may not help. Tree based models such as decision trees can be explainable compared to other models.
* **Training time:** Complex models (neural networks and ensemble models) will take too long to train and thus draining the computation resources. On the other hand, linear models can train faster.

As you can see, there is a trade-off during model selection. You want explainability, choose models that can provide that for you, most models don't. You have a small dataset or you care about the training time, same thing, a right model for you.

### Performing Error Analysis

Performing error analysis will guide you throughout the process of improving the results of the model. The improvement can either be from the data or the model.

One of the best ways to do error analysis is to plot the learning curve and to try noticing where the model is failing and what might be the reason, and the right actions that you can take to reduce the errors.

To improve the model part, you can try different model configuration values or hyperparameters. You can also try different models to see one that works well. But also, good model comes from good data, so it's important to spend time examining the results of the model with respect to the input data.

Here are questions that you can yourself iteratively in the process error analysis:

* Is the model doing poorly on all classes or is it one specific class?
* Is it because there are not enough data points for that particular class compared to other classes?
* There are trade-offs and limits on how much you can do to reduce the errors. Is there a room for improvement?

Often, the improvements will not come from tuning the model, but spending time to increase the number of training samples and data quality.

When improving the data, you can create artificial data (a.k.a data augmentation). This will work well most of the time. The whole error analysis is an iterative process, keep doing it and always aim to improve the data than the model. 

### Deploying a Model

Model deployment is the last part in this workflow. When all the previous steps has gone right, and you are happy about the results of the model on the test set, the next step will be to deploy the model so that the users can start to make requests and get predictions or enhanced services.

---

## Your turn! 🚀

TBD.

## Acknowledgments

Thanks to [Nyandwi](https://github.com/Nyandwi) for creating the open-source course [Complete Machine Learning Package](https://github.com/Nyandwi/machine_learning_complete). It inspires the majority of the content in this chapter. Some contents come from [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course/framing/ml-terminology).
