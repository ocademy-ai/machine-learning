---
jupytext:
  cell_metadata_filter: -all
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---


# Loss Function


```{epigraph}
The function we want to minimize or maximize is called the objective function or criterion. When we are minimizing it, we may also call it the cost function, loss function, or error function.


— Page 82, Deep Learning [Book], Ian Goodfellow, Yoshua Bengio, Aaron Courville, 2016.
```

## Objective of this session

We have already learned the math and code for "Gradient Descent", as well
as other optimization techniques.

In this session, we will learn more about loss functions 
for Linear Regression and Logistic Regression.



## What’s the Difference between a Loss Function and a Cost Function?

A loss function is for a single training example. 
It is also sometimes called an error function.
A cost function, on the other hand, 
is the average loss over the entire training dataset. 
The optimization strategies aim at minimizing the cost function.

## Regression Loss Functions

### Squared Error Loss
Squared Error loss for each training example, 
also known as **L2 Loss**, is the square of the 
difference between the actual and the predicted values:

$$L = (y - f(x))^2$$

The corresponding cost function is the 
Mean of these Squared Errors (MSE).


### Absolute Error Loss

Absolute Error for each training example 
is the distance between the predicted and the actual values, 
irrespective of the sign. Absolute Error is also 
known as the **L1 loss**:

$$L = \lvert y - f(x) \rvert$$


The corresponding cost function is the 
Mean of these Absolute Errors (MAE).


## Classification Loss Functions

### Binary Cross Entropy Loss
Cross-entropy is the default loss function to use 
for binary classification problems.

It is intended for use with binary classification 
where the target values are in the set {0, 1}.

Mathematically, it is the preferred loss function 
under the inference framework of maximum likelihood. 
It is the loss function to be evaluated first and only 
changed if you have a good reason.

Cross-entropy will calculate a score that summarizes 
the average difference between the actual and predicted 
probability distributions for predicting class 1. 
The score is minimized and a perfect cross-entropy value is 0.

This YouTube video by Andrew Ng explains very well Binary Cross Entropy Loss (make sure 
that you have access to YouTube for this web page to render correctly):

<iframe width="100%" height="500"
src="https://www.youtube.com/embed/SHEPb1JHw5o" 
frameborder="0" 
allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>


### Multi-Class Cross-Entropy Loss

Cross-entropy is the default loss function to 
use for multi-class classification problems.

In this case, it is intended for use with 
multi-class classification where the target values 
are in the set {0, 1, 3, …, n}, where each class is 
assigned a unique integer value.

Mathematically, it is the preferred loss 
function under the inference framework of 
maximum likelihood. It is the loss function 
to be evaluated first and only changed if you have a good reason.

Cross-entropy will calculate a score that 
summarizes the average difference between 
the actual and predicted probability distributions 
for all classes in the problem. The score is minimized 
and a perfect cross-entropy value is 0.


## At the frontier of Machine Learning Research [optional]

- YouTube Video: [Loss Functions - EXPLAINED!](https://www.youtube.com/watch?v=QBbC3Cjsnjg)

- Corresponding paper: [A General and Adaptive Robust Loss Function](https://arxiv.org/abs/1701.03077)


## Bibliography
- [ML cheat sheet for loss functions](https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html)
- [A Short Introduction to Entropy, Cross-Entropy and KL-Divergence](https://www.youtube.com/watch?v=ErfnhcEV1O8)

