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

# Decision tree for regression

## Importing the libraries

```{code-cell}
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
```

## Importing the dataset


```{code-cell}
dataset = pd.read_csv('../../../data/Position_Salaries.csv')
X = dataset.iloc[:, 1:-1].values
y = dataset.iloc[:, -1].values
```

## Training the Decision Tree Regression model on the whole dataset

```{code-cell}
from sklearn.tree import DecisionTreeRegressor
regressor = DecisionTreeRegressor(random_state = 0)
regressor.fit(X, y)
```

## Predicting a new result

```{code-cell}
regressor.predict([[6.5]])
```

## Visualising the Decision Tree Regression results 

```{code-cell}
X_grid = np.arange(min(X), max(X), 0.01)
X_grid = X_grid.reshape((len(X_grid), 1))
plt.scatter(X, y, color = 'red')
plt.plot(X_grid, regressor.predict(X_grid), color = 'blue')
plt.title('Truth or Bluff (Decision Tree Regression)')
plt.xlabel('Position level')
plt.ylabel('Salary')
plt.show()
```

## Acknowledgements

Code is inspired by Machine Learning A-Z.
