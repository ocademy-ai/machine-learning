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


# Summary of Machine Learning Fundamentals


## Landscape

Most of supervised machine learning can be looked at using the following framework: 
You have a set of training points $(x_i, y_i)$, and you want to find a function f that "fits the data well", 
that is, $yi \approx f(x_i)$ for most $i$.

You will start by doing the following:

- Define the form of $f$. For instance, we can define $f = wx + b$, for some constants $w$ and $b$. 
Note that this is a set of functions — for different values of $w$ and $b$, 
you will get different functions $f$, and you want to find an $f$
from this set that does the “best”.
- As you might have noticed, we have been talking about this notion of “best”, 
which is ill-defined up to this point. So, we need to make this more concrete. 
The goal here, as stated above, is to have $y_i \approx f(x_i)$
for most $i$.

The above two steps essentially define the **function class** and the **loss function** respectively.

Depending on how you choose your function class and the loss function, 
you get different supervised learning models or even unsupervised learning models:

- Linear function class with squared-error loss function — Linear regression
- Linear function class with logistic loss function — Logistic regression
- Linear function class with hinge loss — SVM
- Function class containing a network of neurons with cross-entropy loss — Neural networks

and so on.

## How to conceive a "new" Machine Learning algorithm 


[How about perpendicular distance instead of vertical distance for Linear Regression?]https://math.stackexchange.com/questions/1530298/variant-of-linear-regression-using-perpendicular-distance-instead-of-vertical

