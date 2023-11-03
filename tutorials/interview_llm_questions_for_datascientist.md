# LLM questions for Data Scientists

## Q1: How do generative language model work?
**Answer:**
The very basic idea is the following: they take n tokens as input, and produce one token as output.

A token is a chunk of text. In the context of OpenAI GPT models, common and short words typically correspond to a single token and long and less commonly used words are generally broken up into several tokens.

This basic idea is applied in an expanding-window pattern. You give it n tokens in, it produces one token out, then it incorporates that output token as part of the input of the next iteration, produces a new token out, and so on. This pattern keeps repeating until a stopping condition is reached, indicating that it finished generating all the text you need.

Now, behind the output is a probability distribution over all the possible tokens. What the model does is return a vector in which each entry expresses the probability of a particular token being chosen.


This probability distribution comes from the training phase. During training, the model is exposed to a lot of text, and its weights are tuned to predict good probability distributions, given a sequence of input tokens.

GPT generative models are trained with a large portion of the internet, so their predictions reflect a mix of the information they’ve seen.

## Q2: What is a token in the Large Language Models context?
**Answer:**
ChatGPT and other LLMs rely on input text being broken into pieces. Each piece is about a word-sized sequence of characters or smaller. We call those sub-word tokens. That process is called tokenization and is done using a tokenizer.

Tokens can be words or just chunks of characters. For example, the word “hamburger” gets broken up into the tokens “ham”, “bur” and “ger”, while a short and common word like “pear” is a single token. Many tokens start with whitespace, for example, “hello” and “ bye”.

The models understand the statistical relationships between these tokens and excel at producing the next token in a sequence of tokens.

The number of tokens processed in a given API request depends on the length of both your inputs and outputs. As a rough rule of thumb, the 1 token is approximately 4 characters or 0.75 words for English text.

## Q3: What is the advantage of transformer-based vs LSTM-based architectures?
**Answer:**
To create sequence-to-sequence models before the Transformer, we used the famous LSTM with its Encoder-Decoder architecture, where

The "Encoder" part that creates a vector representation of a sequence of words.
The "Decoder" returns a sequence of words from the vector representation.
The LSTM model takes into account the interdependence of words, so we need inputs of the previous state to make any operations on the current state. This model has a limitation: it is relatively slow to train and the input sequence can't be passed in parallel.

Now, the idea of the Transformer is to maintain the interdependence of the words in a sequence without using a recurrent network but only the attention mechanism that is at the center of its architecture. The attention measures how closely two elements of two sequences are related.

In transformer-based architectures, the attention mechanism is applied to a single sequence (also known as a self-attention layer). The self-attention layer determines the interdependence of different words in the same sequence, to associate a relevant representation with it. Take for example the sentence: "The dog didn't cross the street because it was too tired". It is obvious to a human being that "it" refers to the "dog" and not to the "street". The objective of the self-attention process will therefore be to detect the link between "dog" and "it". This feature makes transformers much faster to train compared to their predecessors, and they have been proven to be more robust against noisy and missing data.

As a plus, in contextual embeddings, transformers can draw information from the context to correct missing or noisy data and that is something that other neural networks couldn’t offer.

## Q4: What is Transfer Learning and what techniques can you use?
**Answer:**
Transfer learning is a technique in machine learning where a model trained on one task is used as the starting point for a model on a second task. This can be useful when the second task is similar to the first task, or when there is limited data available for the second task.

Some of the techniques that you can use for transfer learning are:

- Feature extraction: This technique involves using the features learned by a pre-trained model as input for a new model. For example, you can use the lower layers of a pre-trained convolutional neural network (CNN) to extract features from images, and then use those features to train a classifier for a different task
- Fine-tuning: This technique involves modifying and retraining the pre-trained model to adapt it to the new task. This technique involves taking a pre-trained model and training it on a new dataset. The weights of the pre-trained model are adjusted during training to better fit the new dataset
- Domain adaptation: This technique involves adapting a pre-trained model to a new domain. The pre-trained model is fine-tuned on a small amount of data from the new domain, which allows it to adapt to the new domain

## Q5: What are some potential risks of using LLMs such as GPT-4?
**Answer:**

There are several potential risks associated with the use of GPT-4, including :

Biases : GPT-4 may reflect the biases present in the data it is trained on. This could result in the model perpetuating and even amplifying biases related to gender, race, ethnicity, and other factors.

Misinformation : GPT-4's ability to generate highly coherent and natural-sounding text could be used to spread misinformation and propaganda, either intentionally or unintentionally.

Information Hazards: LLMs may reveal or infer sensitive or private information that should not be disclosed, such as personal details, health records, financial data, or trade secrets. This may result from the LLMs being trained on data that contains such information, or from the LLMs being able to generate or guess such information based on other inputs or contexts. For example, an LLM may leak the identity of a whistleblower, the password of a user, or the location of a military base.

Malicious use : GPT-4 could be used for malicious purposes, such as generating convincing phishing emails, impersonating individuals, or producing deepfakes.

Automation, Access, and Environmental Harms: LLMs may cause harm to the environment, the economy, or the society when they are deployed or used at scale, such as through automated content creation, translation, or summarization. This may result from the LLMs being resource-intensive, inefficient, or wasteful, or from the LLMs being able to displace, exclude, or exploit human workers or communities. For example, an LLM may consume a lot of energy, generate a lot of carbon emissions, or create a lot of digital waste, or reduce the demand, quality, or diversity of human-generated content.

## Q6: How can you avoid Hallucinations when developing an LLM?
**Answer:**
When developing an LLM, hallucinations can be avoided by using grounded generation. This technique involves augmenting the information available to the LLM with external sources, allowing the response to be based on the most up-to-date and relevant information. Another approach is to use context combined with embedded tags to successfully combat hallucinations within generative language models.


## Source
[scaler.com](https://www.scaler.com/topics/nlp/language-models-in-nlp/)
[towardsdatascience.com](https://towardsdatascience.com/how-gpt-models-work-b5f4517d5b5)
[medium.com](https://medium.com/@azoulaygabrielle/how-transformers-transformed-nlp-54fdb24a8468#)
[stackoverflow.com](https://stackoverflow.com/questions/75501276/openai-gpt-3-api-how-to-make-a-model-remember-past-conversations)
[arxiv.org](https://arxiv.org/abs/2112.04359)
[developer.ibm.com](https://developer.ibm.com/articles/transfer-learning-for-deep-learning/)

