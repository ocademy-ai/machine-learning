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

# More classifiers

In this section, you will use the dataset you saved from the last section full of balanced, clean data all about cuisines.

You will use this dataset with a variety of classifiers to _predict a given national cuisine based on a group of ingredients_. While doing so, you'll learn more about some of the ways that algorithms can be leveraged for classification tasks.

## Exercise - predict a national cuisine

1\. Working in this section's [build-classification-models](../../assignments/ml-fundamentals/build-classification-models.ipynb) file, import that file along with the Pandas library:

```{code-cell}
:tags: [output_scroll]

import pandas as pd
cuisines_df = pd.read_csv("../../assets/data/classification/cleaned_cuisines.csv")
cuisines_df.head()
```
  
2\. Now, import several more libraries:

```{code-cell}
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score,precision_score,confusion_matrix,classification_report, precision_recall_curve
from sklearn.svm import SVC
import numpy as np
```

3\. Divide the x and y coordinates into two dataframes for training. `cuisine` can be the labels dataframe:

```{code-cell}
cuisines_label_df = cuisines_df['cuisine']
cuisines_label_df.head()
```

4\. Drop that `Unnamed: 0` column and the `cuisine` column, calling `drop()`. Save the rest of the data as trainable features:

```{code-cell}
:tags: [output_scroll]

cuisines_feature_df = cuisines_df.drop(['Unnamed: 0', 'cuisine'], axis=1)
cuisines_feature_df.head()
```

Now you are ready to train your model!

## Choosing your classifier

Now that your data is clean and ready for training, you have to decide which algorithm to use for the job. 

Scikit-learn groups classification under Supervised Learning, and in that category you will find many ways to classify. [The variety](https://scikit-learn.org/stable/supervised_learning.html) is quite bewildering at first sight. The following methods all include classification techniques:

- Linear Models
- Support Vector Machines
- Stochastic Gradient Descent
- Nearest Neighbors
- Gaussian Processes
- Decision Trees
- Ensemble methods (voting Classifier)
- Multiclass and multioutput algorithms (multiclass and multilabel classification, multiclass-multioutput classification)

```{seealso}
You can also use [neural networks to classify data](https://scikit-learn.org/stable/modules/neural_networks_supervised.html#classification), but that is outside the scope of this section.
```

### What classifier to go with?

So, which classifier should you choose? Often, running through several and looking for a good result is a way to test. Scikit-learn offers a [side-by-side comparison](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html) on a created dataset, comparing KNeighbors, SVC two ways, GaussianProcessClassifier, DecisionTreeClassifier, RandomForestClassifier, MLPClassifier, AdaBoostClassifier, GaussianNB and QuadraticDiscrinationAnalysis, showing the results visualized:

```{figure} ../../../images/ml-fundamentals/ml-classification/comparison.png
---
name: 'comparison of classifiers'
width: 90%
---
Comparison of classifiers [&#x1F517;source](https://github.com/microsoft/ML-For-Beginners/blob/main/4-Classification/2-Classifiers-1/images/comparison.png)
```

```{seealso}
Plots generated on Scikit-learn's documentation.

AutoML solves this problem neatly by running these comparisons in the cloud, allowing you to choose the best algorithm for your data. Try it [here](https://docs.microsoft.com/learn/modules/automate-model-selection-with-azure-automl/?WT.mc_id=academic-77952-leestott).
```

### A better approach

A better way than wildly guessing, however, is to follow the ideas on this downloadable [ML Cheat sheet](https://docs.microsoft.com/azure/machine-learning/algorithm-cheat-sheet?WT.mc_id=academic-77952-leestott). Here, we discover that, for our multiclass problem, we have some choices:

```{figure} ../../../images/ml-fundamentals/ml-classification/cheatsheet.png
---
name: 'cheatsheet for multiclass problems'
width: 90%
---
Cheatsheet for multiclass problems [&#x1F517;source](https://github.com/microsoft/ML-For-Beginners/blob/main/4-Classification/2-Classifiers-1/images/cheatsheet.png)
```

```{note}
A section of Microsoft's Algorithm Cheat Sheet, detailing multiclass classification options.
```

```{seealso}
Download this cheat sheet, print it out, and hang it on your wall!
```

### Reasoning

Let's see if we can reason our way through different approaches given the constraints we have:

- **Neural networks are too heavy**. Given our clean, but minimal dataset, and the fact that we are running training locally via notebooks, neural networks are too heavyweight for this task.
- **No two-class classifier**. We do not use a two-class classifier, so that rules out one-vs-all. 
- **Decision tree or logistic regression could work**. A decision tree might work, or logistic regression for multiclass data. 
- **Multiclass Boosted Decision Trees solve a different problem**. The multiclass boosted decision tree is most suitable for nonparametric tasks, e.g. tasks designed to build rankings, so it is not useful for us.

### Using Scikit-learn 

We will be using Scikit-learn to analyze our data. However, there are many ways to use logistic regression in Scikit-learn. Take a look at the [parameters to pass](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html?highlight=logistic%20regressio#sklearn.linear_model.LogisticRegression).  

Essentially there are two important parameters - `multi_class` and `solver` - that we need to specify, when we ask Scikit-learn to perform a logistic regression. The `multi_class` value applies a certain behavior. The value of the solver is what algorithm to use. Not all solvers can be paired with all `multi_class` values.

According to the docs, in the multiclass case, the training algorithm:

- **Uses the one-vs-rest (OvR) scheme**, if the `multi_class` option is set to `ovr`.
- **Uses the cross-entropy loss**, if the `multi_class` option is set to `multinomial`. (Currently the `multinomial` option is supported only by the ‘lbfgs’, ‘sag’, ‘saga’ and ‘newton-cg’ solvers.)

```{seealso}
The 'scheme' here can either be 'ovr' (one-vs-rest) or 'multinomial'. Since logistic regression is really designed to support binary classification, these schemes allow it to better handle multiclass classification tasks. [&#x1F517;source](https://machinelearningmastery.com/one-vs-rest-and-one-vs-one-for-multi-class-classification/)

The 'solver' is defined as "the algorithm to use in the optimization problem". [source](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html?highlight=logistic%20regressio#sklearn.linear_model.LogisticRegression).
```

Scikit-learn offers this table to explain how solvers handle different challenges presented by different kinds of data structures:

```{figure} ../../../images/ml-fundamentals/ml-classification/solvers.png
---
name: 'solvers'
width: 90%
---
Solvers [&#x1F517;source](https://github.com/microsoft/ML-For-Beginners/blob/main/4-Classification/2-Classifiers-1/images/solvers.png)
```

## Exercise - split the data

We can focus on logistic regression for our first training trial since you recently learned about the latter in a previous section.
Split your data into training and testing groups by calling `train_test_split()`:

```{code-cell}
X_train, X_test, y_train, y_test = train_test_split(cuisines_feature_df, cuisines_label_df, test_size=0.3)
```

## Exercise - apply logistic regression

Since you are using the multiclass case, you need to choose what _scheme_ to use and what _solver_ to set. Use LogisticRegression with a multiclass setting and the **liblinear** solver to train.

1\. Create a logistic regression with multi_class set to `ovr` and the solver set to `liblinear`:

```{code-cell}
lr = LogisticRegression(multi_class='ovr',solver='liblinear')
model = lr.fit(X_train, np.ravel(y_train))

accuracy = model.score(X_test, y_test)
print ("Accuracy is {}".format(accuracy))
```

```{seealso}
Try a different solver like `lbfgs`, which is often set as default.
```

```{note}
Use Pandas [`ravel`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.Series.ravel.html) function to flatten your data when needed.
```

The accuracy is good at over **80%**!

2\. You can see this model in action by testing one row of data (#50):

```{code-cell}
print(f'ingredients: {X_test.iloc[50][X_test.iloc[50]!=0].keys()}')
print(f'cuisine: {y_test.iloc[50]}')
```

```{seealso}
Try a different row number and check the results.
```

3\. Digging deeper, you can check for the accuracy of this prediction:

```{code-cell}
test= X_test.iloc[50].values.reshape(-1, 1).T
proba = model.predict_proba(test)
classes = model.classes_
resultdf = pd.DataFrame(data=proba, columns=classes)

topPrediction = resultdf.T.sort_values(by=[0], ascending = [False])
topPrediction.head()
```

```{seealso}
Can you explain why the model is pretty sure this is an Indian cuisine?
```

4\. Get more detail by printing a classification report, as you did in the regression sections:

```{code-cell}
y_pred = model.predict(X_test)
print(classification_report(y_test,y_pred))
```

## Self Study

Dig a little more into the math behind logistic regression in [this section](https://people.eecs.berkeley.edu/~russell/classes/cs194/f11/lectures/CS194%20Fall%202011%20Lecture%2006.pdf).

## Your turn! 🚀

In this section, you used your cleaned data to build a machine learning model that can predict a national cuisine based on a series of ingredients. Take some time to read through the many options Scikit-learn provides to classify data. Dig deeper into the concept of 'solver' to understand what goes on behind the scenes.

Assignment - [Study the solvers](../../assignments/ml-fundamentals/study-the-solvers.md).

## Acknowledgments

Thanks to Microsoft for creating the open-source course [ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners). It inspires the majority of the content in this chapter.