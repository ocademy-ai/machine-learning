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

# Introduction to Gradient Boosting

Gradient Boosting is a popular machine learning algorithm that is used for both regression and classification tasks. It is a type of ensemble method that combines multiple weak learners into a single strong learner by sequentially fitting new models to the errors made by previous models.

The idea behind gradient boosting is to use a loss function to measure the difference between the predicted and actual values, and then fit a new model to the residual errors. In each iteration, the model is trained on the errors made by the previous models, and the final prediction is obtained by summing the predictions of all models.

The main advantage of gradient boosting is that it can handle complex data patterns and can achieve high accuracy on a wide range of tasks. However, it is computationally expensive and can be sensitive to overfitting if not properly tuned.

In this section we will further explore gradient boosting.

```{figure} ../../../images/ml-advanced/introduction-to-gradient-boosting/gradient-boosting-process.png
---
name: gradient boosting
---
Gradient Boosting Process Diagram
```

```{tableofcontents}

```