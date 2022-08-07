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


# Hands on neural network

## Neural network with Tensorflow : Face recognition

```{code-cell}
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Load data
from sklearn.datasets import fetch_lfw_people
faces = fetch_lfw_people(min_faces_per_person=200, resize=0.25)

# 766 images of 31 * 23 pixel black & white
print(faces.images.shape)
```

```{code-cell}
# 2 different target classes
np.unique(faces.target)
```
Let's visualize some faces:


```{code-cell}
fig = plt.figure(figsize=(13,10))
for i in range(15):
    plt.subplot(5, 5, i + 1)
    plt.title(faces.target_names[faces.target[i]], size=12)
    plt.imshow(faces.images[i], cmap=plt.cm.gray)
    plt.xticks(()); plt.yticks(())
```

### Minimal preprocessing

```{code-cell}
# Flatten our 766 images
X = faces.images.reshape(766, 31*23)
X.shape
```



```{code-cell}
y = faces.target
y.shape
```




```{code-cell}
# Train test split
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=3)
```




```{code-cell}
# Standardize
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
```

### Simple model with 1 hidden layer

```{code-cell}
from tensorflow.keras.models import Sequential
from tensorflow.keras import layers

# Model definition
model = Sequential()
model.add(layers.Dense(20, activation='relu', input_dim=713))
model.add(layers.Dense(10, activation='relu'))
model.add(layers.Dense(1, activation='sigmoid'))
model.summary()
```



```{code-cell}
model.compile(
    optimizer='adam',
    loss='binary_crossentropy', 
    metrics = 'accuracy')

model.fit(X_train, y_train, batch_size=16, epochs=20)
```


### Evaluate performance

```{code-cell}
model.evaluate(scaler.transform(X_test), y_test)
# returns [loss, metrics]
```

Is it good? What's our baseline?




```{code-cell}
pd.Series(y).value_counts()

```




```{code-cell}
# Baseline score
530 / (530+236)
```



### Let's check our predictions!


```{code-cell}
# Predicted probabilities
model.predict(scaler.transform(X_test))
```




## Linear regression with Tensorflow

## Logistic regression with Tensorflow

