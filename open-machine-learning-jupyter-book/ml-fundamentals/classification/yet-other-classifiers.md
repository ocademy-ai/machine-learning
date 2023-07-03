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

# Yet other classifiers

In this second classification section, you will explore more ways to classify numeric data. You will also learn about the ramifications for choosing one classifier over the other.

## Preparation

We have loaded your [build-classification-model.ipynb](../../assignments/ml-fundamentals/build-classification-model.ipynb) file with the cleaned dataset and have divided it into x and y dataframes, ready for the model building process.

## A classification map

Previously, you learned about the various options you have when classifying data using Microsoft's cheat sheet. Scikit-learn offers a similar, but more granular cheat sheet that can further help narrow down your estimators (another term for classifiers):

```{figure} ../../../images/ml-fundamentals/ml-classification/map.png
---
name: 'ML Map from Scikit-learn'
width: 90%
---
ML Map from Scikit-learn. [Ref](https://scikit-learn.org/stable/tutorial/machine_learning_map/)
```

### The plan

This map is very helpful once you have a clear grasp of your data, as you can 'walk' along its paths to a decision:

- We have >50 samples
- We want to predict a category
- We have labeled data
- We have fewer than 100K samples
- ✨ We can choose a Linear SVC
- If that doesn't work, since we have numeric data
    - We can try a ✨ KNeighbors Classifier 
      - If that doesn't work, try ✨ SVC and ✨ Ensemble Classifiers

This is a very helpful trail to follow.

## Exercise - split the data

Following this path, we should start by importing some libraries to use.

1\. Import the needed libraries:

```{code-cell}
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score,precision_score,confusion_matrix,classification_report, precision_recall_curve
import numpy as np
import pandas as pd

cuisines_df = pd.read_csv("../../assets/data/classification/cleaned_cuisines.csv")
cuisines_feature_df = cuisines_df.drop(['Unnamed: 0', 'cuisine'], axis=1)
cuisines_label_df = cuisines_df['cuisine']
```

2\. Split your training and test data:

```{code-cell}
X_train, X_test, y_train, y_test = train_test_split(cuisines_feature_df, cuisines_label_df, test_size=0.3)
```

## Linear SVC classifier

Support-Vector clustering (SVC) is a child of the Support-Vector machines family of ML techniques (learn more about these below). In this method, you can choose a 'kernel' to decide how to cluster the labels. The 'C' parameter refers to 'regularization' which regulates the influence of parameters. The kernel can be one of [several](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html#sklearn.svm.SVC); here we set it to 'linear' to ensure that we leverage linear SVC. Probability defaults to 'false'; here we set it to 'true' to gather probability estimates. We set the random state to '0' to shuffle the data to get probabilities.

### Exercise - apply a linear SVC

Start by creating an array of classifiers. You will add progressively to this array as we test. 

1\. Start with a Linear SVC:

```{code-cell}
C = 10
# Create different classifiers.
classifiers = {
    'Linear SVC': SVC(kernel='linear', C=C, probability=True,random_state=0)
}
```

2\. Train your model using the Linear SVC and print out a report:

```{code-cell}
n_classifiers = len(classifiers)

def classify():
  for index, (name, classifier) in enumerate(classifiers.items()):
      classifier.fit(X_train, np.ravel(y_train))

      y_pred = classifier.predict(X_test)
      accuracy = accuracy_score(y_test, y_pred)
      print("Accuracy (train) for %s: %0.1f%% " % (name, accuracy * 100))
      print(classification_report(y_test,y_pred))

classify()
```

The result is pretty good.

## K-Neighbors classifier

K-Neighbors is part of the "neighbors" family of ML methods, which can be used for both supervised and unsupervised learning. In this method, a predefined number of points is created and data are gathered around these points such that generalized labels can be predicted for the data.

### Exercise - apply the K-Neighbors classifier

The previous classifier was good, and worked well with the data, but maybe we can get better accuracy. Try a K-Neighbors classifier.

1\. Add a line to your classifier array (add a comma after the Linear SVC item):

```{code-cell}
classifiers['KNN classifier'] = KNeighborsClassifier(C)

classify()
```

The result is a little worse.

```{seealso}
Learn about [K-Neighbors](https://scikit-learn.org/stable/modules/neighbors.html#neighbors)
```

## Support Vector Classifier

Support-Vector classifiers are part of the [Support-Vector Machine](https://wikipedia.org/wiki/Support-vector_machine) family of ML methods that are used for classification and regression tasks. SVMs "map training examples to points in space" to maximize the distance between two categories. Subsequent data is mapped into this space so their category can be predicted.

### Exercise - apply a Support Vector Classifier

Let's try for a little better accuracy with a Support Vector Classifier.

1\. Add a comma after the K-Neighbors item, and then add this line:

```{code-cell}
classifiers['SVC'] = SVC()

classify()
```

The result is quite good!

```{seealso}
Learn about [Support-Vectors](https://scikit-learn.org/stable/modules/svm.html#svm)
```

## Ensemble Classifiers

Let's follow the path to the very end, even though the previous test was quite good. Let's try some 'Ensemble Classifiers, specifically Random Forest and AdaBoost:

```{code-cell}
classifiers['RFST'] = RandomForestClassifier(n_estimators=100)
classifiers['ADA'] = AdaBoostClassifier(n_estimators=100)

classify()
```

The result is very good, especially for Random Forest.

```{seealso}
Learn about [Ensemble Classifiers](https://scikit-learn.org/stable/modules/ensemble.html)
```

This method of Machine Learning "combines the predictions of several base estimators" to improve the model's quality. In our example, we used Random Trees and AdaBoost.

- [Random Forest](https://scikit-learn.org/stable/modules/ensemble.html#forest), an averaging method, builds a 'forest' of 'decision trees' infused with randomness to avoid overfitting. The n_estimators parameter is set to the number of trees.

- [AdaBoost](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostClassifier.html) fits a classifier to a dataset and then fits copies of that classifier to the same dataset. It focuses on the weights of incorrectly classified items and adjusts the fit for the next classifier to correct.

---

## Self Study

There's a lot of jargon in these sections, so take a minute to review [this list](https://docs.microsoft.com/dotnet/machine-learning/resources/glossary?WT.mc_id=academic-77952-leestott) of useful terminology!

## Your turn! 🚀

Each of these techniques has a large number of parameters that you can tweak. Research each one's default parameters and think about what tweaking these parameters would mean for the model's quality.

Assignment - [Parameter play](../../assignments/ml-fundamentals/parameter-play.md)

## Acknowledgments

Thanks to Microsoft for creating the open-source course [ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners). It inspires the majority of the content in this chapter.
