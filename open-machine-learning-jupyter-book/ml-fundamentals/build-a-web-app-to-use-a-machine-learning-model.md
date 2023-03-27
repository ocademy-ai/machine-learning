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
  language: Python
  name: Python3
---

# Build a web app to use a Machine Learning model

In this section, you will train an ML model on a data set that's out of this world: _UFO sightings over the past century_, sourced from NUFORC's database.

You will learn:

- How to 'pickle' a trained model
- How to use that model in a Flask app

We will continue our use of notebooks to clean data and train our model, but you can take the process one step further by exploring using a model 'in the wild', so to speak: in a web app.

To do this, you need to build a web app using Flask.

## Building an app

There are several ways to build web apps to consume machine learning models. Your web architecture may influence the way your model is trained. Imagine that you are working in a business where the data science group has trained a model that they want you to use in an app.

### Considerations

There are many questions you need to ask:

- **Is it a web app or a mobile app?** If you are building a mobile app or need to use the model in an IoT context, you could use [TensorFlow Lite](https://www.tensorflow.org/lite/) and use the model in an Android or iOS app.
- **Where will the model reside?** In the cloud or locally?
- **Offline support.** Does the app have to work offline?
- **What technology was used to train the model?** The chosen technology may influence the tooling you need to use.
  - **Using TensorFlow.** If you are training a model using TensorFlow, for example, that ecosystem provides the ability to convert a TensorFlow model for use in a web app by using [TensorFlow.js](https://www.tensorflow.org/js/).
  - **Using PyTorch.** If you are building a model using a library such as [PyTorch](https://pytorch.org/), you have the option to export it in [ONNX](https://onnx.ai/) (Open Neural Network Exchange) format for use in JavaScript web apps that can use the [Onnx Runtime](https://www.onnxruntime.ai/). This option will be explored in a future section for a Scikit-learn-trained model.
  - **Using Lobe.ai or Azure Custom Vision.** If you are using an ML SaaS (Software as a Service) system such as [Lobe.ai](https://lobe.ai/) or [Azure Custom Vision](https://azure.microsoft.com/services/cognitive-services/custom-vision-service/?WT.mc_id=academic-77952-leestott) to train a model, this type of software provides ways to export the model for many platforms, including building a bespoke API to be queried in the cloud by your online application.

You also have the opportunity to build an entire Flask web app that would be able to train the model itself in a web browser. This can also be done using TensorFlow.js in a JavaScript context.

For our purposes, since we have been working with Python-based notebooks, let's explore the steps you need to take to export a trained model from such a notebook to a format readable by a Python-built web app.

## Tool

For this task, you need two tools: Flask and Pickle, both of which run on Python.

✅ What's [Flask](https://palletsprojects.com/p/flask/)? Defined as a 'micro-framework' by its creators, Flask provides the basic features of web frameworks using Python and a templating engine to build web pages. Take a look at [this Learn module](https://docs.microsoft.com/learn/modules/python-flask-build-ai-web-app?WT.mc_id=academic-77952-leestott) to practice building with Flask.

✅ What's [Pickle](https://docs.python.org/3/library/pickle.html)? Pickle 🥒 is a Python module that serializes and de-serializes a Python object structure. When you 'pickle' a model, you serialize or flatten its structure for use on the web. Be careful: pickle is not intrinsically secure, so be careful if prompted to 'un-pickle' a file. A pickled file has the suffix `.pkl`.

## Exercise - clean your data

In this section, you'll use data from 80,000 UFO sightings, gathered by [NUFORC](https://nuforc.org) (The National UFO Reporting Center). This data has some interesting descriptions of UFO sightings, for example:

- **Long example description.** "A man emerges from a beam of light that shines on a grassy field at night and he runs towards the Texas Instruments parking lot".
- **Short example description.** "the lights chased us".

The `ufos.csv` spreadsheet includes columns about the `city`, `state` and `country` where the sighting occurred, the object's `shape` and its `latitude` and `longitude`.

Create a blank `notebook` to continue the steps below:

Import `pandas`, `matplotlib`, and `numpy` as you did in the previous section and import the ufos spreadsheet. You can take a look at a sample data set:

```{code-cell}
:tags: ["output_scroll"]
import pandas as pd
import numpy as np
    
ufos = pd.read_csv('../assets/data/ufos.csv')
ufos.head()
```

Convert the ufos data to a small dataframe with fresh titles. Check the unique values in the `Country` field.

```{code-cell}
ufos = pd.DataFrame({
    'Seconds': ufos['duration (seconds)'], 
    'Country': ufos['country'],
    'Latitude': ufos['latitude'],
    'Longitude': ufos['longitude']
})

ufos.Country.unique()
```

Now, you can reduce the amount of data we need to deal with by dropping any null values and only importing sightings between 1-60 seconds:

```{code-cell}
ufos.dropna(inplace=True)

ufos = ufos[(ufos['Seconds'] >= 1) & (ufos['Seconds'] <= 60)]

ufos.info()
```

Import Scikit-learn's `LabelEncoder` library to convert the text values for countries to a number:

```{code-cell}
from sklearn.preprocessing import LabelEncoder

ufos['Country'] = LabelEncoder().fit_transform(ufos['Country'])

ufos.head()
```

```{note}
LabelEncoder encodes data alphabetically.
```

## Exercise - build your model

Now you can get ready to train a model by dividing the data into the training and testing group.

 Select the three features you want to train on as your X vector, and the y vector will be the `Country`. You want to be able to input `Seconds`, `Latitude` and `Longitude` and get a country id to return.

```{code-cell}
from sklearn.model_selection import train_test_split

Selected_features = ['Seconds', 'Latitude', 'Longitude']

X = ufos[Selected_features].values
y = ufos['Country'].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
```

Train your model using logistic regression:

```{code-cell}
from sklearn.metrics import accuracy_score, classification_report
from sklearn.linear_model import LogisticRegression

model = LogisticRegression(solver="sag",max_iter=10000)
model.fit(X_train, y_train)
predictions = model.predict(X_test)

print(classification_report(y_test, predictions))
print('Predicted labels: ', predictions)
print('Accuracy: ', accuracy_score(y_test, predictions))
```

The accuracy isn't bad **(around 95%)**, unsurprisingly, as `Country` and `Latitude/Longitude` correlate.

The model you created isn't very revolutionary as you should be able to infer a `Country` from its `Latitude` and `Longitude`, but it's a good exercise to try to train from raw data that you cleaned, exported, and then use this model in a web app.

## Exercise - 'pickle' your model

Now, it's time to _pickle_ your model! You can do that in a few lines of code. Once it's _pickled_, load your pickled model and test it against a sample data array containing values for seconds, latitude and longitude,

```{code-cell}
import pickle

model_filename = '../assets/pickle/ufo-model.pkl'
pickle.dump(model, open(model_filename, 'wb'))

model = pickle.load(open('../assets/pickle/ufo-model.pkl', 'rb'))
print(model.predict(pd.DataFrame([[50, 44, -12]])))
```

The model returns **'3'**, which is the country code for the UK. Wild! 👽

## Exercise - build a Flask app

Now you can build a Flask app to call your model and return similar results but in a more visually pleasing way.

Start by creating a folder called `/web-app` next to the `notebook.ipynb` file where your `ufo-model.pkl` file resides.

In that folder create three more folders: `/static`, with a folder `/css` inside it, and `/templates`. You should now have the following files and directories:

```output
web-app/
    static/
    css/
    templates/
notebook.ipynb
../
    assets/
        pickle/
            ufo-model.pkl
```

✅ Refer to the solution folder for a view of the finished app

The first file to create in `/web-app` folder is `requirements.txt` file. Like `package.json` in a JavaScript app, this file lists dependencies required by the app. In `requirements.txt` add the lines:

```text
scikit-learn
pandas
numpy
flask
```

Now, run this file by navigating to `/web-app`:

```bash
cd web-app
```

In your terminal type `pip install`, to install the libraries listed in `requirements.txt`:

```bash
pip install -r requirements.txt
```

Now, you're ready to create three more files to finish the app:

1. Create `app.py` in the root.
2. Create `index.html` in `/templates` directory.
3. Create `styles.css` in `/static/css` directory.

Build out the _styles.css_ file with a few styles:

```css
body {
    width: 100%;
    height: 100%;
    font-family: 'Helvetica';
    background: black;
    color: #fff;
    text-align: center;
    letter-spacing: 1.4px;
    font-size: 30px;
}

input {
    min-width: 150px;
}

.grid {
    width: 300px;
    border: 1px solid #2d2d2d;
    display: grid;
    justify-content: center;
    margin: 20px auto;
}

.box {
    color: #fff;
    background: #2d2d2d;
    padding: 12px;
    display: inline-block;
}
```

Next, build out the _index.html_ file:

```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <title>🛸 UFO Appearance Prediction! 👽</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
    </head>

    <body>
    <div class="grid">

        <div class="box">

        <p>According to the number of seconds, latitude and longitude, which country is likely to have reported seeing a UFO?</p>

        <form action="{{ url_for('predict')}}" method="post">
            <input type="number" name="seconds" placeholder="Seconds" required="required" min="0" max="60" />
            <input type="text" name="latitude" placeholder="Latitude" required="required" />
            <input type="text" name="longitude" placeholder="Longitude" required="required" />
            <button type="submit" class="btn">Predict country where the UFO is seen</button>
        </form>

        <p>{{ prediction_text }}</p>

        </div>

    </div>

    </body>
</html>
```

```{note}
Take a look at the templating in this file. Notice the 'mustache' syntax around variables that will be provided by the app, like the prediction text: `{{}}`. There's also a form that posts a prediction to the `/predict` route.

Finally, you're ready to build the python file that drives the consumption of the model and the display of predictions:
```

In `app.py` add:

```python
import numpy as np
from flask import Flask, request, render_template
import pickle

app = Flask(__name__)

model = pickle.load(open("../assets/pickle/ufo-model.pkl", "rb"))


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = prediction[0]

    countries = ["Australia", "Canada", "Germany", "UK", "US"]

    return render_template(
        "index.html", prediction_text="Likely country: {}".format(countries[output])
    )


if __name__ == "__main__":
    app.run(debug=True)
```

```{note}
when you add [`debug=True`](https://www.askpython.com/python-modules/flask/flask-debug-mode) while running the web app using Flask, any changes you make to your application will be reflected immediately without the need to restart the server. Beware! Don't enable this mode in a production app.
```

If you run `python app.py` or `python3 app.py` - your web server starts up, locally, and you can fill out a short form to get an answer to your burning question about where UFOs have been sighted!

Before doing that, take a look at the parts of `app.py`:

1. First, dependencies are loaded and the app starts.
2. Then, the model is imported.
3. Then, index.html is rendered on the home route.

On the `/predict` route, several things happen when the form is posted:

1. The form variables are gathered and converted to a NumPy array. They are then sent to the model and a prediction is returned.
2. The Countries that we want to be displayed are re-rendered as readable text from their predicted country code, and that value is sent back to index.html to be rendered in the template.

Using a model this way, with Flask and a pickled model, is relatively straightforward. The hardest thing is to understand what shape the data is that must be sent to the model to get a prediction. That all depends on how the model was trained. This one has three data points to be input in order to get a prediction.

## Your turn! 🚀

Instead of working in a notebook and importing the model to the Flask app, you could train the model right within the Flask app! Try converting your Python code in the notebook, perhaps after your data is cleaned, to train the model from within the app on a route called `/train`. What are the pros and cons of pursuing this method? Practice it by following this [assignment](../assignments/ml-fundamentals/try-a-different-model.md)

## Self study

There are many ways to build a web app to consume ML models. Make a list of the ways you could use JavaScript or Python to build a web app to leverage machine learning. Consider architecture: should the model stay in the app or live in the cloud? If the latter, how would you access it? Draw out an architectural model for an applied ML web solution.

## Acknowledgements

Thanks to Microsoft for creating the open-source course [ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners). It inspires the majority of the content in this chapter.
