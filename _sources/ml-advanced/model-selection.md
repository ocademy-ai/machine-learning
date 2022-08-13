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


# Model selection



## Over-fitting


## Bias variance tradeoff

## Cross validation

## L1 Regularization
## L2 Regularization

## Early stopping


## Dropout

### Prediction after dropout

Reference:
https://datascience.stackexchange.com/questions/44293/how-does-dropout-work-during-testing-in-neural-network

![](../../images/model-selection/kUc8r.jpg)


During training, p neuron activations (usually, p=0.5, so 50%) are dropped. Doing this at the testing stage is not our goal (the goal is to achieve a better generalization). From the other hand, keeping all activations will lead to an input that is unexpected to the network, more precisely, too high (50% higher) input activations for the following layer.

Consider the neurons at the output layer. During training, each neuron usually get activations only from two neurons from the hidden layer (while being connected to four), due to dropout. Now, imagine we finished the training and remove dropout. Now activations of the output neurons will be computed based on four values from the hidden layer. This is likely to put the output neurons in unusual regime, so they will produce too large absolute values, being overexcited.

To avoid this, the trick is to multiply the input connections' weights of the last layer by 1-p (so, by 0.5). Alternatively, one can multiply the outputs of the hidden layer by 1-p, which is basically the same.

<div hidden>
https://github.com/bhattbhavesh91/dropout-walkthrough/

https://github.com/Coding-Lane/L2-Regularization


</div>















<div hidden>

Machine Learning Tutorial Python - 20: Bias vs Variance In Machine Learning:
https://www.youtube.com/watch?v=B01qMFMAgUQ

Bias-Variance Tradeoff, Model Flexibility, Overfitting:
https://www.youtube.com/watch?v=T9DEGThjDkI

Bias/Variance (C2W1L02):
https://www.youtube.com/watch?v=SjQyLhQIXSM

Machine Learning Tutorial Python - 17: L1 and L2 Regularization | Lasso, Ridge Regression :
https://www.youtube.com/watch?v=VqKq78PVO9g

Intuitive Explanation of Ridge / Lasso Regression:
https://www.youtube.com/watch?v=9LNpiiKCQUo

L1 and L2 Regularization CIS 522 - Deep Learning:
https://www.youtube.com/watch?v=OLl2nzOeQ68

Thierry Slides Week 6, Week 1

Ridge, Lasso, Cross validation

Early Stopping, Dropout,



</div>