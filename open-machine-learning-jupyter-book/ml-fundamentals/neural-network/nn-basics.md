# Neural network basics

```{admonition} Tip
:class: tip
Tensorflow Playground: https://playground.tensorflow.org/
```

## Logistic Regression is ... an artificial neuron

### Recall logistic regression

```{figure} ../../../images/nn/artificial_neuron.png
---
name: 'artificial_neuron'
width: 90%
---
artificial neuron. [source](https://towardsdatascience.com/beginners-crash-course-to-deep-learning-and-cnns-a32f35234038)
```

### How the output varies with different weights

```{figure} ../../../images/nn/1_KNZZYteeBqkJViS1_LT1CQ.gif
---
name: '1_KNZZYteeBqkJViS1_LT1CQ'
width: 90%
---
how the output varies with input. [source](https://towardsai.net/p/machine-learning/introduction-to-neural-networks-and-their-key-elements-part-c-activation-functions-layers-ea8c915a9d9)
```

## Two neurons

```{figure} ../../../images/nn/1sdfasdfadffa.gif
---
name: '1sdfasdfadffa'
width: 90%
---
two artificial neurons. [source](https://towardsdatascience.com/beginners-crash-course-to-deep-learning-and-cnns-a32f35234038)
```

## Hidden layers


```{figure} ../../../images/nn/Feed-Forward-Neural-Network.gif
---
name: 'Feed-Forward-Neural-Network'
width: 90%
---
A feed forward neural network with one hidden layer [source](https://machinelearningknowledge.ai/animated-explanation-of-feed-forward-neural-network-architecture/)
```

## Predict & Forward propagation (ideal case)

```{figure} ../../../images/nn/predict.gif
---
name: 'predictnn'
width: 90%
---
predict. [source](https://www.youtube.com/watch?v=aircAruvnKk)
```

## Well, what we usually get ... is trash

```{figure} ../../../images/nn/trash.gif
---
name: 'trashnn'
width: 90%
---
trash. [source](https://www.youtube.com/watch?v=aircAruvnKk)
```

## So, how to have a better model?


### Overview of backpropagation

```{figure} ../../../images/nn/Backpropagation.gif
---
name: 'Backpropagation'
width: 90%
---
Backpropagation. [source](https://machinelearningknowledge.ai/animated-explanation-of-feed-forward-neural-network-architecture/)
```


### Train with sample dataset

```{figure} ../../../images/nn/train.gif
---
name: 'trainnn'
width: 90%
---
train. [source](https://www.youtube.com/watch?v=aircAruvnKk)
```


### Each training data has his/her own saying ...


```{figure} ../../../images/nn/bp.gif
---
name: 'bp'
width: 90%
---
Each training data has his/her own saying. [source](https://www.youtube.com/watch?v=aircAruvnKk)
```

### Let's summarize their opinions ... in a democratic way 

```{figure} ../../../images/nn/average.gif
---
name: 'average'
width: 90%
---
Average. [source](https://www.youtube.com/watch?v=aircAruvnKk)
```

### Let's propagate Forward and Backward ... with many epochs


```{figure} ../../../images/nn/epoch.gif
---
name: 'epochnn'
width: 90%
---
Epoch. [source](https://www.youtube.com/watch?v=aircAruvnKk)
```


## Finally, we have a working neural network model!

```{figure} ../../../images/nn/dog.gif
---
name: 'dog'
width: 90%
---
A neural network for dog/cat classification. [source](https://medium.com/the-21st-century/solution-to-failing-convolutional-neural-networks-ff8857b2eaf0)
```

## Activation Functions 

```{figure} ../../../images/nn/activation_functions.gif
---
name: 'activation_functions'
width: 90%
---
activation_functions. [source](https://theffork.com/activation-functions-in-neural-networks/)
```

### Why using activation function at all?
- To introduce **non-linarities**.
- Without them, our Neural Network would be a simple linear model!

## Output layer

- Regression tasks require linear activation functions
- Classification tasks requires softmax/sigmoid
- Softmax turns numbers into probabilities that sums to 1



## Neural Network vs Human brain

```{figure} ../../../images/nn/nn-872d.gif
---
name: 'nn-872d'
width: 90%
---
Human brian neurons. [source](https://www.kdnuggets.com/2019/10/introduction-artificial-neural-networks.html)
```


## Conclusion

### All in all, Deep Learning is nothing more than
- multiple linear regressions stacked together
- non-linear functions: the activation functions

### Mathematically speaking

Neural networks are universal approximations: with just one hidden layer, they can approximate any continuous function with arbitrary precision.

This does not guarantee that you can easily find these optimal parameters of your model!

It may require extremely large sample size or computing power.


### Tips
- First layer needs the size of your input
- Last layer's number of neurons equals the output dimension
- Last layer's activation is Linear (regression) or softmax/sigmoid (classification)
- Almost always start with the relu activation function - if it is not the last layer


