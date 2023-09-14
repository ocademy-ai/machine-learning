# Stock Market Prediction Hands-On: Training a Linear Regression Model (1/6)

Can linear regression in machine learning predict the stock market? This real dataset includes stock market data from several major U.S. companies between 2005 and 2020, including daily opening and closing prices, highest and lowest prices, trading volume, turnover rate, and other information. Today, we are going to use it to practice and see if we will make a profit or incur losses.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work143.png" alt="1">

Let's begin by taking a look at Apple Inc., a company that has shown consistently robust performance over the years.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work176.png" alt="2">

Here, we have a total of 3,732 days' worth of stock market data, with each row containing 63 columns. There's one particular column that stands out, known as 'Close_forecast,' which represents the stock's closing price for the next day. It's important to note that this column doesn't exist in the original scraped data; it was added by Kaggle to make the dataset more suitable for machine learning exercises.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work293.png" alt="3">

We will select the 'Close_forecast' column as the target for our machine learning model, which serves as the label. The remaining 62 columns will be used as features. We will split the data, using 75% for training and 25% for testing.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work394.png" alt="4">

Finally, with just two simple lines of code, we will call the `LinearRegression.fit` method from sklearn to train our linear regression model.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work462.png" alt="5">

Now that we have our model, it's time to put it to the test on our testing dataset. We'll use the model to make predictions on the test set and evaluate its performance.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work505.png" alt="6">

At first glance, the results might seem a bit surprising, given the significant fluctuations in the predicted stock prices. However, I can offer some reassurance that our linear regression model is functioning correctly, and in fact, it performs quite well. You can confidently use the code provided above. As for the reason behind the seemingly chaotic predictions, we will delve into a more detailed analysis in the upcoming sections.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work629.png" alt="7">

Let's embark on this machine learning journey together, one day at a time.

You can find the Kaggle dataset at

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

The corresponding code is available at

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)

# Stock Market Prediction Hands-On: Model Performance Evaluation (2/6)

In the previous segment, we attempted stock price prediction using linear regression on a real stock market dataset. The results seemed chaotic, with significant fluctuations and sharp ups and downs in stock prices. Can linear regression truly predict stock prices? If the stock market behaves in this manner, I believe both you and me would share the sentiment: Run! The farther, the better!

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work1686.png" alt="8">

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work1688.png" alt="9">


Strange occurrences often have underlying reasons. Let's take a closer look at what y_test in the test set actually looks like. As it turns out, when y_test was created, the order was shuffled. In fact, there's a parameter in sklearn's train_test_split function called 'shuffle,' which is set to 'True' by default. This means that by default, the order is shuffled when splitting the training and test sets.

Shuffling the order itself isn't necessarily a problem, but in our daily lives, stock prices generally follow a relatively smooth curve over time. Therefore, the test results may initially appear odd because they don't align with common sense. If we set 'shuffle' to 'False,' we can avoid this situation. You might find it interesting to try this out for yourselves.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work1941.png" alt="9">

Here, we're taking the real y-label values from the training set and the predicted y-label values, placing them together, and then sorting them. By doing this, we can compare the two and observe that the differences between them are quite small on a daily basis.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work2002.png" alt="100">

Let's visualize the data using matplotlib to gain a clearer understanding. The results are highly promising, as the blue real values and the green predicted values almost perfectly overlap.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work2067.png" alt="11">

We calculate the R-squared, MAPE, and other evaluation metrics, and the results are excellent, consistent with the previous analysis. All of this indicates that linear regression performs well when applied to this real stock market dataset.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work2133.png" alt="12">

It's important to note that evaluation metrics are often calculated on the test dataset, but they can also be computed on both the training and test datasets for comparison. Why do I emphasize this? Because in the next segment, we'll delve into loss functions, and their computation is exclusively for the training dataset.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work2234.png" alt="13">


Let's embark on this machine learning journey together, one day at a time.

You can find the Kaggle dataset at

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

The corresponding code is available at

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)

# Stock Market Prediction Hands-On: Introduction to Loss Functions (3/6)

In past segments, we used linear regression to predict stock prices, tested it on the test set, and calculated evaluation metrics, with the model performing exceptionally well. Does it seem like making money in the stock market is a bit too easy? Well, you're absolutely right, it's just a dream.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work3268.png" alt="14">


We plot the daily closing prices of Apple Inc. from 2005 to 2022. If you bought Apple stock on the first day shown in the graph and held it until the last day, you would have roughly multiplied your investment many times over. However, achieving this in reality is exceedingly challenging.

As ordinary investors, we don't possess a time machine, and even if we have a strong belief in Apple's stock, we cannot predict what will happen 15 years into the future. Typically, we do not hold stocks for extended periods. Instead, we engage in short-term or medium-term investments. If the stock price shows substantial growth within a certain timeframe, we may choose to sell at a certain point, seizing the opportunity. Conversely, if the stock price remains stagnant or declines, we may also decide to sell at a specific point, implementing a timely stop-loss strategy.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work3354.png" alt="15">

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work3506.png" alt="16">


Of course, we can't provide stock investment strategies here, but if machine learning can effectively predict stock prices, it can certainly assist in shaping our investment strategies. With model predictions, we can observe that Apple's stock steadily increased over 15 years, indicating that buying in 2005 and selling in 2020 would have been profitable.

Furthermore, if the model we've developed provides accurate predictions at finer granularities, we could potentially engage in multiple trades within those 15 years. Selling all stocks at local highs whenever the price is about to drop and buying in at local lows when the price is about to rise can optimize returns even further. However, this scenario assumes that our predictions align perfectly with reality, which, in practice, is unlikely to be the case.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work3777.png" alt="17">


While the evaluation metrics indicate that our model's performance is good, is it good enough to support the second investment strategy mentioned earlier? Or can it be further optimized to help us earn more from that strategy?

The answer is affirmative, and here we introduce a new concept: the Loss Function, also known as the Cost Function. It is used to measure the difference or error between model predictions and real values on the training dataset. In the next segment, we will delve into how to calculate the loss function.


Let's embark on this machine learning journey together, one day at a time.

You can find the Kaggle dataset at

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

The corresponding code is available at

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)

# Stock Market Prediction Hands-On: Calculating Loss Functions (4/6)


In previous segments, we successfully used linear regression for stock market prediction, guiding us to buy low and sell high, resulting in substantial profits. However, we are not content because there are still deviations between the model's predictions and the actual situation. This has caused us to buy at high points and sell at low points on several occasions. Following the principle that there's no harm in having more money, we aim to further optimize the model using a loss function. Today, let's first learn how to calculate the loss function.

For regression tasks, there are three common types of loss functions. The first one is the Mean Squared Error (MSE), which measures the average of the squared differences between **predicted values** and **actual values** on the  **training dataset** . The second one is the Mean Absolute Error (MAE), which measures the average of the absolute differences between **predicted values** and **actual values** on the  **training dataset** .

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5223.png" alt="18">

So, let's go ahead and calculate the squared error and absolute error for each data point in the training set. The code is quite simple: we extract the labels and predicted results columns from the training set and use NumPy for some basic mathematical operations. The results are labeled as 'AE' and 'SE,' as shown in the purple-bordered section of the graph. As you can see, regardless of their magnitude, their values are never zero, meaning that there is always some difference between our predicted values and the actual values.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5380.png" alt="19">

Furthermore, we can visualize how AE and SE change over time. It's evident that as time progresses, their values tend to increase, indicating that the results tested on the training set become more accurate as they approach 2005.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5470.png" alt="20">

Finally, by taking the mean of the AE and SE columns, we obtain the results for the loss functions, MAE and MSE. With this, we have computed the values of the two most common loss functions for linear regression.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5544.png" alt="21">

Attentive students might have already noticed that these two loss functions seem quite similar to the MAE and MSE metrics we learned earlier. You're absolutely right, there is indeed significant overlap between the concepts of loss functions and evaluation metrics, but there are also key differences. In the next segment, we will thoroughly analyze these distinctions.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5644.png" alt="22">


Let's embark on this machine learning journey together, one day at a time.

You can find the Kaggle dataset at

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

The corresponding code is available at

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)

# Stock Market Prediction Hands-On: Understanding Loss Functions (5/6)


Loss functions and evaluation metrics share common ground in that they are both used to assess a model's predictive capabilities. In fact, terms like MAE or MSE are statistical concepts that can serve both as evaluation metrics and as loss functions, with identical mathematical calculations.

The code blocks above compute MAE and MSE as loss functions, while the code blocks below calculate MAE and MSE as evaluation metrics. If the input data is the same, the results will be entirely identical.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5874.png" alt="23">

So, what are the key differences between loss functions and evaluation metrics? 

Firstly, evaluation metrics include concepts like R-squared and explained variance, which are not present in loss functions. 

Secondly, their purposes differ; loss functions are primarily used during model training to help the model gradually adjust its parameters to minimize prediction errors. In contrast, evaluation metrics are used to summarize and compare the performance of a trained model, to understand the overall effectiveness of the model, or to compare the performance differences between different models, guiding model selection.

Thirdly, their optimization directions are different. With loss functions, the goal is typically to minimize them because smaller loss values imply that the predicted values are closer to the actual values. In contrast, for evaluation metrics, the goal is often to maximize their values; for example, in the case of R-squared, higher values indicate better model performance. This difference reflects the distinct roles of loss functions and evaluation metrics in machine learning tasks. 

Finally, as mentioned in the previous segment, loss functions are often calculated on the training set, while evaluation metrics are typically computed on the test set, with fewer instances of calculating them on the training set.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6281.png" alt="24">

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6284.png" alt="25">

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6286.png" alt="26">

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6288.png" alt="27">

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6290.png" alt="28">


You're absolutely right, these differences might seem a bit overwhelming at first, but don't worry! In regression tasks, the distinctions between loss functions and evaluation metrics might not be as pronounced as in classification tasks. This was just a setup to introduce the concepts of evaluation metrics and loss functions.

In classification tasks, we'll revisit the concepts of evaluation metrics and loss functions, and their differences will become clearer. As you gain a more comprehensive understanding of machine learning, these pieces of knowledge will gradually come together and become more straightforward.


Let's embark on this machine learning journey together, one day at a time.

You can find the Kaggle dataset at

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

The corresponding code is available at

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)

# Stock Market Prediction Hands-On: Optimizing Models with Gradient Descent (6/6)

In previous segments, we used sklearn's LinearRegression to train on real U.S. stock market data, employed a linear regression model for stock price prediction, and calculated the model's loss functions. Another option for solving linear regression models is to use SGDRegressor. Here, SGD stands for Stochastic Gradient Descent, and you don't need to worry about its details for now; we'll be learning about it soon.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7563.png" alt="29">


The training process of SGDRegressor is iterative, and we can keep track of the changes in the loss function during training. This allows us to utilize the loss function to optimize the model.

We start from the model's initial state and train for 100 epochs, which means 100 rounds of training, recording the loss function after each round in an array. Please note that our loss function is calculated on the training dataset.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7714.png" alt="30">

We use Matplotlib to plot the results of the first 30 loss functions. As we can see, with an increase in epochs, the loss function gradually decreases. Moreover, the early epochs show a relatively rapid decline, while the later epochs exhibit a slower decrease.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7782.png" alt="31">

Furthermore, we plot the results of the loss function for all 100 training epochs. It's evident that the loss value keeps decreasing in the early epochs and only starts stabilizing after around 60 epochs.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7845.png" alt="32">

You might be curious about what's happening behind the scenes when the loss function of the SGDRegressor model decreases during training. Let's print the model's `coef_` attribute, which represents the coefficients of the linear model. Starting with the model obtained after one training epoch, we get the following results.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7960.png" alt="33">

Next, here are the model parameters after 10 training epochs, and we obtain the following results.

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7991.png" alt="34">

Finally, when we examine the model parameters after 100 training epochs, we observe that the linear model's parameters continue to change with an increase in training epochs.

![35](https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work8042.png)

In essence, you can think of it this way: during the training process of the SGDRegressor model, the algorithm is continually trying to reduce the loss function. In other words, this is the direction of model optimization. Each training round of SGDRegressor results in a new model, which can yield a new loss function value on the training dataset. If the algorithm consistently finds a smaller loss function value in each iteration compared to the previous one, the model becomes incrementally more optimized with each round. Consequently, as the number of training epochs increases, the loss function tends to decrease until it stabilizes, and the model's parameters change along with it, ultimately achieving the optimal result.

![36](https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work8257.png)

Of course, the explanation here might be a bit simplified, and we will provide more detailed answers in the upcoming gradient descent series. 


Let's embark on this machine learning journey together, one day at a time.

You can find the Kaggle dataset at

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

The corresponding code is available at

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)
