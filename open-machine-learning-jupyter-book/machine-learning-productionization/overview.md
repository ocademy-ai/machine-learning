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

# Overview

Productionization of a Machine Learning solution is not a one time thing. It is always under improving  through the iterative process continuously.

```{epigraph}
Machine learning is a highly iterative process: you may try many dozens of ideas before finding one that you're satisfied with.

-- Andrew Ng
```

Machine Learning lifecycle, also known as MLOps(Machine Learning Operations), could be mapped and fit to traditional software development process. Better understanding of Machine Learning will help you as you think about how to incorporate machine learning, including models, into your software development processes.

A Machine Learning lifecycle consists of such major phases, including:

- Problem Framing,
- Data Engineering,
- Model Training & Evaluation,
- Deployment,
- Maintenance.

```{figure} ../../images/machine-learning-lifecycle.jpeg
---
name: Machine Learning Lifecycle
---
Machine Learning Lifecycle
```

In below sections, we will walk through the Machine Learning lifecycle components with a real world example.

## Problem Framing

To bring a Machine Learning solution to production successfully, the first step is to define a valuable business objective, and translate the objective to a Machine Learning solvable problem.

**[COVID-19](https://en.wikipedia.org/wiki/COVID-19) Projections{cite}`COVID_19_Projections`** is an artificial intelligence solution to accurately forecast infections, deaths, and recovery timelines of the COVID-19 / coronavirus pandemic in the US and globally. By the end of April 2020, it was cited by the Centers for Disease Control & Prevention (CDC) as one of the first models to “help inform public health decision making”.

```{epigraph}
I began estimating true infections in November 2020 because I couldn’t find any good models that were doing that in real time during a critical moment in the pandemic (though there were 30+ models for forecasting deaths)... My goal when I started covid19-projections.com was to create the most accurate COVID-19 model.

-- Youyang Gu, creator of covid19-projections.com
```

There have been three separate iterations of the covid19-projections.com model, which are Death Forecasts,
Infections Estimates and Vaccination Projections. We will use the [Death Forecasting model](https://covid19-projections.com/model-details/) as an example to explore how to frame a Machine Learning problem.

Let's start with answering some Problem Framing related basic questions:

1. What are the inputs?
   1. time series table of deaths data with geography and demography information. For example to United Status, each row of the data needs to have **number of deaths $x$ at date $y$ in region $z$**.
2. What are the outputs?
   1. **number of deaths $x'$ at a given future date $y'$ in region $z'$**.
3. What are the metrics to measure the success of the project? Such as,
   1. projection accuracy, precision, etc. - comparing with existing Machine Learning models and real world data,
   2. model inference speed - comparing with with existing Machine Learning models,
   3. etc.
4. What is the system architecture and required infrastructure?
   1. a data pipeline to refresh the input data regularly,
   2. a Machine Learning pipeline to regularly iterate the model by using the latest input data,
   3. an event schedule module to manage the system communication and collaboration,
   4. a website to show the projected results and accessible in real-time.
5. Any other questions? Such as,
   1. is the data generally available and easy to access,
   2. what are the existing solutions,
   3. etc.

## Data Engineering

### Data Ingestion

COVID-19 Projections Death Forecasting model uses the daily death total provided by [Johns Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series), which is considered by experts to be the “gold standard” reference data. It sometimes uses US testing data from the [COVID Tracking Project](https://covidtracking.com/) in our research and graphs. Below is a piece of sample data from CSSE.

```{code-cell}
:tags: [output_scroll]
import pandas as pd

df = pd.read_csv('../../data/sample_time_series_covid19_deaths_US.csv')
df.head()
```

The above data is public available, and able to be automatically and easily sourced by a web crawler. There are also other ingestion approaches, including synthetic data simulation and manual collecting.

### Data Processing

The typical data processing includes data cleaning, labeling, feature engineering and augmentation.

For example, because the CSSE raw data may be noisy, a smoothing algorithm is firstly run to smooth the data. For example, if a state reports 0 death on one day and 300 deaths the next day, the data is smoothed to show 150 deaths on each day. [Sigmoid Function](http://matlab.cheme.cmu.edu/2011/10/30/smooth-transitions-between-discontinuous-functions/#:~:text=Sigmoid%20functions,-A%20sigmoid%20function&text=There%20is%20no%20formal%20justification,or%20from%201%20to%20zero.) is used for this process as shown in below [code snippet](https://github.com/youyanggu/yyg-seir-simulator/blob/b511187a2d4273c92235fdb79017e7a6367e2f4c/region_model.py#L9).

```{code-cell}
def inv_sigmoid(shift=0, a=1, b=1, c=0):
    """Returns a inverse sigmoid function based on the parameters."""
    return lambda x: b * np.exp(-(a*(x-shift))) / (1 + np.exp(-(a*(x-shift)))) + c

def get_transition_sigmoid(inflection_idx, inflection_rate, low_value, high_value,
        check_values=True):
    """Returns a sigmoid function based on the specified parameters.
    A sigmoid helps smooth the transition between low_value and high_value,
        with the midpoint being inflection_idx.
    inflection_rate is typically a value between 0-1, with 1 being a very steep
        transition. We typically use 0.2-0.5 in our projections.
    """
    if check_values:
        assert 0 < inflection_rate <= 1, inflection_rate
        assert 0 < low_value <= 10, low_value
        assert 0 <= high_value <= 10, high_value
    shift = inflection_idx
    a = inflection_rate
    b = low_value - high_value
    c = high_value
    return utils.inv_sigmoid(shift, a, b, c)
```

## Model Training & Evaluation

### Model Algorithm

A [Grid Search](https://en.wikipedia.org/wiki/Hyperparameter_optimization#Grid_search) based approach is used as the model algorithm, which is similar to the traditional way of performing hyperparameter optimization. Grid Search builds a model on each parameter combination possible. It iterates through every different combination and stores a model for each of them.

The algorithm is built on top of a SEIR(susceptible-exposed-infectious-recovered) simulator. SEIR is a modified [SIR](https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology) epidemiology model which is applied to the mathematical modelling of infectious diseases.

```{figure} ../../images/SEIR.jpeg
---
name: SEIR Model
---
SEIR Model
```

The simulator generates infection and death data according to the pre-defined static parameters. By comparing the simulated data with real world data, it gets the simulator performance under a certain parameter setting.

```{figure} ../../images/death-forecasting-model-overview.png
---
name: Death Forecasting Model Overview
---
[Death Forecasting Model Overview](https://covid19-projections.com/model-details/)
```

The training of Death Forecasting model is basically a Grid Search process. It is found that the brute-force Grid Search method that iterates through the entire parameter space is the most effective in finding an optimal set of parameters. So if there are $10$ values for one parameter and $10$ values for another parameter. Then there are $100$ different parameter combinations for those two parameters. For parameters not able to be estimated as lacking of data, the values are considered all equally, resulting in a wider confidence interval. 

```{seealso}
[COVID-19 Death Forecasting - Model Details](https://covid19-projections.com/model-details/)
```

Based on such strategy, the Grid Search algorithm searches the optimized SEIR simulator parameters from thousands of different combinations. Then the simulator with the optimized parameters could be used to predict the future death data.

### Model Testing

To evaluate the result, the trained Death Forecasting model has been compared with existing Machine Learning approaches, such as the popular [model](https://covid19.healthdata.org/) developed by the [Institute for Health Metrics and Evaluation (IHME)](https://en.wikipedia.org/wiki/Institute_for_Health_Metrics_and_Evaluation). The latter is commonly referred to by the White House and media. The detailed result could be find from the [covid19-projections website](https://covid19-projections.com/about/#historical-performance).

```{figure} ../../images/covid19-model-performance-evaluation.png
---
name: Evaluation Between Different Machine Learning Model's COVID-19 Death Projections
---
Evaluation Between Different Machine Learning Model's COVID-19 Death Projections
```

The evaluation is more focused on the accuracy. There are other [Test-driven Machine Learning development](https://mlinproduction.com/testing-machine-learning-models-deployment-series-07/) methods, including unit testing, integration testing, etc.

```{figure} ../../images/test-pyramid.png
---
name: The Machine Learning Test Pyramid
---
The [Machine Learning Test Pyramid](https://martinfowler.com/articles/cd4ml.html) from Martin Fowler
```

## Deployment

The model training itself is handled manually. Every day, raw daily projections for all 50 US states and select international countries will be uploaded onto COVID-19 Projections [GitHub Pages](https://pages.github.com/). This will trigger the website building process, which is manged by Github Action and fully CI/CD.

```{figure} ../../images/covid19-projection-github-action.png
---
name: COVID-19 Projection Github Action
---
COVID-19 Projection Github Action
```

The Machine Learning model could be also deployed on a embedded device or as a service. You could refer to [AWS Greengrass](https://aws.amazon.com/greengrass/ml/) and [AWS SageMaker](https://aws.amazon.com/pm/sagemaker/) to learn more.

## Maintenance

[Model drift](https://www.forbes.com/sites/forbestechcouncil/2021/09/23/model-drift-in-data-analytics-what-is-it-so-what-now-what/?sh=54ce17194862) refers to the degradation of model performance due to changes in data and relationships between input and output variables. In order to deal with model drift, continuously model monitoring is the key.

The covid19-projection is a part-time project. During the author actively worked on it, the past performance is evaluated weekly. The [historical performance](https://covid19-projections.com/historical-performance/) along with other models are presented in the [COVID-19 Forecast Hub](https://github.com/reichlab/covid19-forecast-hub), which is a website maintains the authoritative, up-to-date record for forecasts of COVID-19 cases, deaths and hospitalizations in the US. The latest forecasts from these models were sent to the CDC weekly and presented on the CDC COVID-19 Forecasting page. Also, the evaluation results were used to guide the model iteration for better consistency and accuracy.

## Your turn! 🚀

It is time to start your own Machine Learning project!

In this session/assignment, you should come up with a Machine Learning Project idea. Everyone should, in the next session, present your idea with:

- either [a project plan following this template](../assignments/project-plan-template.ipynb),
- or, [a slide of around 10 pages, like this one](https://docs.google.com/presentation/d/1gTK27XUOC12X8PpggB8_NGxVOAPeYV3I5W6QTYIp49U/edit#slide=id.gcb9a0b074_1_0).

Your presentation should be limited to around 3 minutes. After the pitch, projects receiving the most votes would "survive". You will then form groups of 3-4 students, each group sharing one common project.

You will present your mid-batch work in this manner:

- [7. Deep fitting room - STAT 157, Spring 19 documentation](https://courses.d2l.ai/berkeley-stat-157/projects/7.html)
- [M/19 Parameterizable Single GAN Multi-Style - YouTube](https://www.youtube.com/watch?v=pmDEWyf648c)

And at the end of the batch (demo day), you will present your work in this manner:

- [UCLA Statistics 102B Final Project Presentation - YouTube](https://www.youtube.com/watch?v=olhyQojuL5M)
- [Unemployment Rate Forecasting using Machine Learning (Student Presentation, Group 3) - YouTube](https://www.youtube.com/watch?v=2F0GSnfKzY4)

```{seealso}
Those links are for you to get some inspirations for a Machine Learning Project:

- [Machine Learning Web App](https://www.bilibili.com/video/BV1244y1J7C7/)
- [TensorFlow.js | Machine Learning for JavaScript Developers](https://www.tensorflow.org/js)
- [Gallery • Streamlit](https://streamlit.io/gallery)
- [Tensorflow Playground](https://playground.tensorflow.org)
- [Digit Recognition WebApp](https://maneprajakta.github.io/Digit_Recognition_Web_App/)
```

## Self Study

- [Machine Learning Operations](https://ml-ops.org/)

---

```{bibliography}
:filter: docname in docnames
```
