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

Moving Machine Learning models into production is as important as building them, sometimes even harder. Maintaining data quality and model accuracy over time are just a few of the challenges. To achieve end-to-end system productionization as a whole, the various components and designs need to be identified, from defining a problem to serving the model as a service.

This chapter combines the foundational concepts of Machine Learning with the functional expertise of modern software development and engineering to help you develop production-ready Machine Learning knowledge.

Productionization of a Machine Learning solution is not a one-time thing. It is always under improving one-time through the iterative process continuously.

```{epigraph}
Machine learning is a highly iterative process: you may try many dozens of ideas before finding one that you're satisfied with.

-- Andrew Ng
```

The Machine Learning lifecycle, also known as MLOps(Machine Learning Operations), could be mapped and fit into the traditional software development process. A better understanding of Machine Learning will help you as you think about how to incorporate machine learning, including models, into your software development processes.

A Machine Learning lifecycle consists of such major phases, including:

- problem framing,
- data engineering,
- model training & evaluation,
- deployment,
- maintenance.

```{drawio-figure} ../../drawio/machine-learning-lifecycle.drawio
---
name: Machine Learning Lifecycle
---
Machine Learning Lifecycle
```

In the below sections, we will walk through the Machine Learning lifecycle components with a real-world example.

## Problem framing

To bring a Machine Learning solution to production successfully, the first step is to define a valuable business objective and translate the objective into a Machine Learning solvable problem.

**[COVID-19](https://en.wikipedia.org/wiki/COVID-19) Projections{cite}`COVID_19_Projections`** is an artificial intelligence solution to accurately forecast infections, deaths, and recovery timelines of the COVID-19/coronavirus pandemic in the US and globally. By the end of April 2020, it was cited by the Centers for Disease Control & Prevention (CDC) as one of the first models to âhelp inform public health decision makingâ.

```{epigraph}
I began estimating true infections in November 2020 because I couldnât find any good models that were doing that in real-time during a critical moment in the pandemic (though there were 30+ models for forecasting deaths)... My goal when I started covid19-projections.com was to create the most accurate COVID-19 model.

-- Youyang Gu, creator of covid19-projections.com
```

There have been three separate iterations of the covid19-projections.com model, which are Death Forecasts,
Infections Estimates, and Vaccination Projections. We will use the [Death Forecasting model](https://covid19-projections.com/model-details/) as an example to explore how to frame a Machine Learning problem.

Let's start with answering some Problem Framing related basic questions:

1. What are the inputs?
   1. time-series table of death data with geography and demography information. For example to United Status, each row of the data needs to have **a number of deaths $x$ at date $y$ in the region $z$**.
2. What are the outputs?
   1. **a number of deaths $x'$ at a given future date $y'$ in region $z'$**.
3. What are the metrics to measure the success of the project? Such as,
   1. projection accuracy, precision, etc. - comparing with existing Machine Learning models and real-world data,
   2. model inference speed - comparing with existing Machine Learning models,
   3. etc.
4. What are the system architecture and required infrastructure?
   1. a data pipeline to refresh the input data regularly,
   2. a Machine Learning pipeline to regularly iterate the model by using the latest input data,
   3. an event schedule module to manage the system communication and collaboration,
   4. and a website to show the projected results and be accessible in real-time.
5. Any other questions? Such as,
   1. is the data generally available and easy to access,
   2. what are the existing solutions,
   3. etc.

## Data engineering

### Data ingestion

COVID-19 Projections Death Forecasting model uses the daily death total provided by [Johns Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series), which is considered by experts to be the âgold standardâ reference data. It sometimes uses US testing data from the [COVID Tracking Project](https://covidtracking.com/) in our research and graphs. Below is a piece of sample data from CSSE.

```{code-cell}
:tags: [output_scroll]
import pandas as pd

df = pd.read_csv('../assets/data/sample_time_series_covid19_deaths_US.csv')
df.head()
```

The above data is publicly available, and able to be automatically and easily sourced by a web crawler. There are also other ingestion approaches, including synthetic data simulation and manual collecting.

### Data processing

Typical data processing includes data cleaning, labeling, feature engineering, and augmentation.

For example, because the CSSE raw data may be noisy, a smoothing algorithm is first to smooth the data. For example, if a state reports 0 death on one day and 300 deaths the next day, the data is smoothed to show 150 deaths on each day. [Sigmoid Function](http://matlab.cheme.cmu.edu/2011/10/30/smooth-transitions-between-discontinuous-functions/#:~:text=Sigmoid%20functions,-A%20sigmoid%20function&text=There%20is%20no%20formal%20justification,or%20from%201%20to%20zero.) is used for this process as shown in below [code snippet](https://github.com/youyanggu/yyg-seir-simulator/blob/b511187a2d4273c92235fdb79017e7a6367e2f4c/region_model.py#L9).

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

## Model training & evaluation

### Model algorithm

A [Grid Search](https://en.wikipedia.org/wiki/Hyperparameter_optimization#Grid_search) based approach is used as the model algorithm, which is similar to the traditional way of performing hyperparameter optimization. Grid Search builds a model on each parameter combination possible. It iterates through every different combination and stores a model for each of them.

The algorithm is built on top of an SEIR(susceptible-exposed-infectious-recovered) simulator. SEIR is a modified [SIR](https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology) epidemiology model which is applied to the mathematical modeling of infectious diseases.

```{figure} ../../images/SEIR.jpeg
---
name: SEIR Model
---
SEIR Model
```

The simulator generates infection and death data according to the pre-defined static parameters. By comparing the simulated data with real-world data, it gets the simulator performance under a certain parameter setting.

```{figure} ../../images/death-forecasting-model-overview.png
---
name: Death Forecasting Model Overview
---
[Death Forecasting Model Overview](https://covid19-projections.com/model-details/)
```

The training of the Death Forecasting model is basically a Grid Search process. It is found that the brute-force Grid Search method that iterates through the entire parameter space is the most effective in finding an optimal set of parameters. So if there are $10$ values for one parameter and $10$ values for another parameter. Then there are $100$ different parameter combinations for those two parameters. For parameters not able to be estimated as lacking data, the values are considered all equally, resulting in a wider confidence interval.

```{seealso}
[COVID-19 Death Forecasting - Model Details](https://covid19-projections.com/model-details/)
```

Based on such a strategy, the Grid Search algorithm searches the optimized SEIR simulator parameters from thousands of different combinations. Then the simulator with the optimized parameters could be used to predict the future death data.

### Model testing

To evaluate the result, the trained Death Forecasting model has been compared with existing Machine Learning approaches, such as the popular [model](https://covid19.healthdata.org/) developed by the [Institute for Health Metrics and Evaluation (IHME)](https://en.wikipedia.org/wiki/Institute_for_Health_Metrics_and_Evaluation). The latter is commonly referred to by the White House and the media. The detailed result could be found on the [covid19-projections website](https://covid19-projections.com/about/#historical-performance).

```{figure} ../../images/covid19-model-performance-evaluation.png
---
name: Evaluation Between Different Machine Learning Model's COVID-19 Death Projections
---
Evaluation Between Different Machine Learning Model's COVID-19 Death Projections
```

The evaluation is more focused on accuracy. There are other [Test-driven Machine Learning development](https://mlinproduction.com/testing-machine-learning-models-deployment-series-07/) methods, including unit testing, integration testing, etc.

```{figure} ../../images/test-pyramid.png
---
name: The Machine Learning Test Pyramid
---
The [Machine Learning Test Pyramid](https://martinfowler.com/articles/cd4ml.html) from Martin Fowler
```

## Deployment

The model training itself is handled manually. Every day, raw daily projections for all 50 US states and select international countries will be uploaded onto the COVID-19 Projections [GitHub Pages](https://pages.github.com/). This will trigger the website building process, which is managed by Github Action and fully CI/CD.

```{figure} ../../images/covid19-projection-github-action.png
---
name: COVID-19 Projection Github Action
---
COVID-19 Projection Github Action
```

The Machine Learning model could be also deployed on an embedded device or as a service. You could refer to [AWS Greengrass](https://aws.amazon.com/greengrass/ml/) and [AWS SageMaker](https://aws.amazon.com/pm/sagemaker/) to learn more.

## Maintenance

[Model drift](https://www.forbes.com/sites/forbestechcouncil/2021/09/23/model-drift-in-data-analytics-what-is-it-so-what-now-what/?sh=54ce17194862) refers to the degradation of model performance due to changes in data and relationships between input and output variables. In order to deal with model drift, continuous model monitoring is the key.

The covid19-projection is a part-time project. During the author actively worked on it, the past performance is evaluated weekly. The [historical performance](https://covid19-projections.com/historical-performance/) along with other models are presented in the [COVID-19 Forecast Hub](https://github.com/reichlab/covid19-forecast-hub), which is a website that maintains the authoritative, up-to-date record for forecasts of COVID-19 cases, deaths, and hospitalizations in the US. The latest forecasts from these models were sent to the CDC weekly and presented on the CDC COVID-19 Forecasting page. Also, the evaluation results were used to guide the model iteration for better consistency and accuracy.

## Your turn! ð

It is time to start your own Machine Learning project!

In this session/assignment, you should come up with a Machine Learning Project idea. Everyone should, in the next session, present their idea with:

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
Those links are for you to get some inspirations for a conceiving Machine Learning Project:

- [Machine Learning Web App](https://www.bilibili.com/video/BV1244y1J7C7/)
- [TensorFlow.js | Machine Learning for JavaScript Developers](https://www.tensorflow.org/js)
- [Gallery â¢ Streamlit](https://streamlit.io/gallery)
- [Tensorflow Playground](https://playground.tensorflow.org)
- [Digit Recognition WebApp](https://maneprajakta.github.io/Digit_Recognition_Web_App/)
- [Google AI Experiments](https://experiments.withgoogle.com/collection/ai)
```

## Self study

- [Machine Learning Operations](https://ml-ops.org/)
- [MLOps: Model management, deployment, lineage, and monitoring with Azure Machine Learning](https://docs.microsoft.com/en-us/azure/machine-learning/concept-model-management-and-deployment)

---

```{bibliography}
:filter: docname in docnames
```

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

# Problem framing

**[Problem framing](https://developers.google.com/machine-learning/problem-framing/problem-framing)** is the process of analyzing a problem to isolate the individual elements that need to be addressed to solve it. It helps you to determine the feasibility of your project, and clearly defines the project goals and success criteria. Under our context, problem framing is to dive deep into the business requirements to figure out a potential Machine Learning based technical solution.

```{epigraph}
Formal problem framing is the critical beginning for solving an ML problem, as it forces us to better understand both the problem and the data in order to design and build a bridge between them. 

-- TensorFlow engineer
```

At a high level, Machine Learning problem framing consists of two distinct steps:

- Determine if Machine Learning is the right approach to solve the problem.
- Frame the problem in Machine Learning terms through the whole development lifecycle.

Before rushing into the Machine Learning implementation, let's frame the problem by answering the below questions first.

## Is Machine Learning the best choice?

Machine Learning is not universally applicable. Similar to any other technology, it could only be used to solve certain problems.

**What are the existing solutions?** Machine Learning may be considered either when a problem is new, or existing non-Machine Learning solutions are not optimized. If it is the former, try solving the problem manually using a [heuristic](https://en.wikipedia.org/wiki/Heuristic) approach. Otherwise, the existing non-Machine Learning solution could be leveraged as a benchmark to help you make the decision.

**Is the error tolerable?** It is difficult to make the Machine Learning prediction 100% accurate. The small chance of false-negative could be not acceptable sometimes. For example, Deep Learning has been shown to be successful in accelerating MRI reconstruction, over traditional methods. Despite a remarkable improvement in image quality of accelerated MRI, the false-negative reconstruction phenomenon is still present and needs to be improved{cite}`cheng2020addressing`.

**Is concrete interpretability needed?** Machine learning does a great job to improve products, processes, and research. But computers usually do not explain their predictions. The [dark secret at the heart of AI](https://www.technologyreview.com/2017/04/11/5113/the-dark-secret-at-the-heart-of-ai/) could be a problem. Conversely, a better explanation could increase the trust in the decision to adopt Machine Learning. But this is still [challenging even to the supervised Machine Learning](https://christophm.github.io/interpretable-ml-book/), let alone Deep Learning{cite}`li2021interpretable`.

**Any risk to violate ethics or regulation?** AI presents three major areas of ethical concern for society: privacy and surveillance, bias, and discrimination{cite}`pazzanese_2020`. For example, the bank, a highly regulated industry, algorithm-driven lending decisions may result in the systematic disparate treatment of African Americans and other marginalized consumers.

**Are any Machine Learning approaches available?** To create a TikTok alike short video platform, [Amazon Rekognition](https://aws.amazon.com/rekognition/content-moderation/) could help build AI-powered content moderation easily. And [Amazon Transcribe](https://aws.amazon.com/transcribe/) is something ready to use for generating transcripts automatically for customers. To [reinvent the wheel](https://en.wikipedia.org/wiki/Reinventing_the_wheel) is resource-wasting and should be avoided always.

**Is Machine Learning cost-effective?** The cost of a Machine Learning solution may be across multiple aspects similar to traditional software development, such as cloud, data, device, human resource, maintenance, etc. Besides, if the team is new to Machine Learning, the additional training cost needs to be considered. If Machine Learning is one of the options, the [opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost) must be in the mind. More specifically, it is remarkably easy to incur massive ongoing maintenance costs at the system level when applying machine learning, including boundary erosion, entanglement, hidden feedback loops, undeclared consumers, data dependencies, changes in the external world, and a variety of system-level anti-patterns{cite}`43146`.

```{seealso}
Sculley, David, et al. "[Hidden technical debt in machine learning systems.](https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html)" Advances in neural information processing systems 28 (2015).
```

## How easy to obtain the data?

It is no doubt that data is the driving force of Machine Learning. Make sure you have the data required to train a model, before initiating the Machine Learning execution. Regardless of the challenge to gather data from your own company or real customers, the options below could be helpful.

**[Synthetic data](https://en.wikipedia.org/wiki/Synthetic_data)**, which is any production data applicable to a given situation that is not obtained by direct measurement{cite}`lapedes1978mcgraw`. Typically, it is usually generated by a computer simulation. Today, synthetic data becomes more and more important in the entire AI landscape and is even predicted to overshadow real data by 2030{cite}`gartner_inc`. [Generative Adversarial Networks](https://en.wikipedia.org/wiki/Generative_adversarial_network)(GANs) are one of the most popular frameworks to generate synthetic data. For example, [Ford has combined gaming engines and GANs to create synthetic data for AI training for self-driving](https://blogs.nvidia.com/blog/2020/04/23/ford-ai-data/). There are other approaches, including statistical distribution fitting, Rule-based procedural generation, benchmarks, simulations, and so on{cite}`anderson2021methods`.

```{figure} ../../images/gartner-chart.jpeg
---
name: Synthetic Data Will Completely Overshadow Real Data in AI Models
---
Synthetic Data Will Completely Overshadow Real Data in AI Models{cite}`gartner_inc`
```

```{seealso}
El Emam, Khaled, Lucy Mosquera, and Richard Hoptroff. [Practical synthetic data generation: balancing privacy and the broad availability of data](https://www.oreilly.com/library/view/practical-synthetic-data/9781492072737/). O'Reilly Media, 2020.
```

**Public data.** There are many public available Open Source or free-to-use datasets. They are on plenty of different topics, easy to access, and of good quality. [data.gov](https://data.gov/) is a great example of the government entity. The White House under the Obama administration has been a leader in its approach to transparency and launched the website in 2009. To date, more than 300k datasets are available on the site.

```{seealso}
[Open Learning Resource - dataset](https://github.com/open-academy/open-learning-resources/blob/main/README.md#dataset) - a curated list of open-source/public datasets.
```

**More data is better?** The answer is yes or no. No matter whether the Machine Learning performance increases monotonically{cite}`banko2001scaling` or logarithmically{cite}`8237359` based on the volume of the training data size, more data is usually better. But this is not always the truth, because more data is not equal to better data if more noise is introduced. Also, the appearance of large public datasets like [Imagenet](http://image-net.org/) and recent research advances makes data less of a competitive advantage.

```{seealso}
[In machine learning, is more data always better than better algorithms? | Quora](https://qr.ae/pv4GyP)
```

(what-models-to-use)=
## What models to use?

This is one of the most widely discussed topics when people approach a Machine Learning solution. There are three main categories of machine learning: supervised learning, unsupervised learning, and reinforcement learning. The cheat sheet from Microsoft could be a helpful quick reference.

```{figure} ../../images/machine-learning-algorithm-cheat-sheet.png
---
name: Machine Learning Algorithm Cheat Sheet
---
[Machine Learning Algorithm Cheat Sheet](https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-cheat-sheet)
```

```{seealso}
- [How to select algorithms for Azure Machine Learning](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-select-algorithms)
- [Choosing the right estimator | scikit-learn](https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html)
```

**[Automated Machine Learning (AutoML)](https://en.wikipedia.org/wiki/Automated_machine_learning)** is the process and method of automating the tasks of applying Machine Learning to real-world problems, which is another option to help select the algorithm. It makes Machine Learning available to non-experts, such as software engineers. Many open-source libraries could be leveraged for AutoML, such as [AutoGluon](https://auto.gluon.ai/), [AutoKeras](https://github.com/keras-team/autokeras).

```{seealso}
- [The Past, Present, and Future of Automated Machine Learning](https://odsc.medium.com/the-past-present-and-future-of-automated-machine-learning-5e081ca4b71a)
- [automl.org - What is AutoML?](https://www.automl.org/)
- [What is automated ML? AutoML | Microsoft Azure](https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml)
- [AutoML tools and solutions from AWS](https://aws.amazon.com/machine-learning/automl/)
```

## How to put a model into production?

Machine Learning inference is the process of inputting data into a model to calculate an output, which is also referred to as âputting a Machine Learning model into productionâ. There are two major types of inferences that may impact the feasibility of productionize the trained model.

**Batch inference** means that multiple predictions are requested periodically. The [COVID-19 Projections](https://covid19-projections.com/) project is typically a batch inference example, which is mentioned in the previous section. Another good example is Facebook News feed generation, which is a complex and time-consuming artificial intelligent process. The News feeds are pre-generated regularly and stored in the cache. Then the web application could request and present the cached feeds in runtime.

**Online inference**, on the contrary, is the process to handle the prediction in real-time, synchronized, or from continuous data streaming. The online inference is suitable for more latency-sensitive user scenarios such as search engines and autonomous driving. And it requires speeding up both the inferring and input data sampling. It should be noted that the inference is usually just part of the end-to-end workflow of serving a request from the client side. It will be more challenging if the reference is on the critical path.

## Your turn! ð

Apply the knowledge of this section to refine [your own Machine Learning project proposal](overview.html#your-turn).

## Self study

- [Introduction to Machine Learning Problem Framing](https://developers.google.com/machine-learning/problem-framing)

---

```{bibliography}
:filter: docname in docnames
```

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
substitutions:
  bigDataPipelinesOnAWSAzureGCP: |
    ```{figure} ../../images/big-data-pipelines-on-aws-azure-gcp.png
    ---
    name: Big Data Pipeline on AWS, Microsoft Azure, and Google Cloud
    ---
    [Big Data Pipeline on AWS, Microsoft Azure, and Google Cloud](https://www.reddit.com/r/bigdata/comments/mkfsfi/big_data_pipeline_on_aws_microsoft_azure_and/)
    ```
  howToBuildAScalableDataAnalyticsPipeline: |
    ```{figure} ../../images/how-to-build-a-scalable-data-analytics-pipeline.png
    ---
    name: How to build a Data Analytics Pipeline on Google Cloud?
    ---
    [How to build a Data Analytics Pipeline on Google Cloud?](https://www.freecodecamp.org/news/scalable-data-analytics-pipeline/)
    ```
  awsServerlessDataAnalyticsPipeline: |
    ```{figure} ../../images/aws-serverless-data-analytics-pipeline.jpeg
    ---
    name: AWS serverless data analytics pipeline
    ---
    [AWS serverless data analytics pipeline](https://aws.amazon.com/blogs/big-data/aws-serverless-data-analytics-pipeline-reference-architecture/)
    ```
---

# Data engineering

**[Data engineering](https://en.wikipedia.org/wiki/Information_engineering)**, also known as **Information engineering**, is a software engineering approach to designing and developing information systems. A data engineer is someone who creates big data ETL pipelines and makes it possible to take huge amounts of data and translate it into insights.

```{epigraph}
Data is food for AI.

-- Andrew Ng
```

Data engineering is critical where data is concerned, no matter whether it is for Machine Learning or not. Over the last decade, more and more companies have completed or are in progress with a digital transformation. This results in not only more data, but also the blooming of data-driven initiatives.

Even so, only [13%](https://venturebeat.com/2019/07/19/why-do-87-of-data-science-projects-never-make-it-into-production/) of data science projects actually were made into production, which is mentioned by IBM CTO Deborah Leff. Similarly, Gartner reiterated its prediction in 2019 that only [20%](https://blogs.gartner.com/andrew_white/2019/01/03/our-top-data-and-analytics-predicts-for-2019/) of analytic insights will deliver business outcomes through 2022. This is because the data is in unimaginable volumes, significantly complicated, and produced at a very high frequency. Therefore, data engineering becomes more and more important to play the role of organizing and ensuring the dataâs quality, security, and availability for businesses.

[Data Pipeline](https://dataengineering.wiki/Concepts/Data+Pipeline) is usually the term used to describe a data engineering workflow consisting of one or more tasks that ingest, move, and transform raw data from one or more sources to a destination. But there is no golden standard to architect the process. For example, below are three different expressions of data pipeline structure in multiple layers.

| Architecture | Diagram |
| --------- | -------- |
| Ingestion, data Lake, preparation & computing, data warehouse, presentation | {{bigDataPipelinesOnAWSAzureGCP}} |
| Capture, process, store, analyze, use | {{howToBuildAScalableDataAnalyticsPipeline}} |
| Ingestion, storage, cataloging & search, processing, consumption, security & governance | {{awsServerlessDataAnalyticsPipeline}} |

In this section, the **AWS serverless data analytics pipeline** architecture above is used as a reference to breaking down the data pipeline into 6 layers. Before moving into each of them, we will first have a glance at the concept of data quality. And at the last, we will go through an AWS cloud-based data pipeline architecture showcase.

## Data quality

[Data quality](https://en.wikipedia.org/wiki/Data_quality) refers to the state of qualitative or quantitative pieces of information. Generally speaking, high-quality data could "fit for [its] intended uses in operations, decision making and planning"{cite}`redman2008data`{cite}`fadahunsi2019protocol`{cite}`fadahunsi2021information`. Data quality is a widely used concept and is split into multiple dimensions traditionally. This section will discuss the most common ones to Machine Learning data engineering, including completeness, duplicates, outlier, and consistency.

```{seealso}
- The ***Overview and importance of data quality for machine learning tasks***{cite}`jain2020overview` lecture recording at KDD 2020, [Part 1](https://www.youtube.com/watch?v=30uRhUZ78gQ), [Part 2](https://www.youtube.com/watch?v=5uAwssnBnGE), [Part 3](https://www.youtube.com/watch?v=IDwQsYKBQqs). 
- [Data Science for Beginners - Introduction to Data Ethics
](https://microsoft.github.io/Data-Science-For-Beginners/#/1-Introduction/02-ethics/README)
```

**Data completeness**. Most of the real-world datasets contain missing values, i.e.,

- a product may not have an expiration date if it is from a category like cloth,
- a survey may not contain data for some of the optional fields.

Missing a large portion of the datasets can break the Machine Learning model training and result in misleading inferences. As many Machine Learning algorithms do not have good support for missing values, it is important to detect the missing values and properly handle them.

**Data duplicates** can be in various formats, such as multiple entries of the same data, or repeated values of the identification variable. It not only wastes memory and computing resources but may also lead to data imbalance. Sometimes, duplicate data might be valid in a dataset, but it eventually still arises because of errors during data extraction and integration. Hence, it is important to identify if the duplicate values are intended or invalid values existing in the dataset.

**Outlier** is an observation that deviates so much from other observations as to arouse suspicion that it was generated by a different mechanism{cite}`hawkins1980identification`. It could be either the reflection of the dataset diversity itself or caused by errors and mistakes. Machine Learning algorithms are usually sensitive to the range and distribution of attribute values. Outliers may degrade the model performance by increasing the possibility to misclassify.

**Data consistency**. A dataset could be constructed from different data sources. For example, a retailer usually doesn't have a centralized way to manage its supply chain. Instead, it achieves this by combining different ERP systems across demand, supply, shipment, inventory, and so on. Those ERP systems are vend from different software companies which have their solutions to structure and organize the data, e.g. to present timestamp as Unix epoch vs. the ISO format. Consistency data is necessary to build Machine Learning models. It is also important to help data scientists and business owners to have meaningful business analytics.

## Ingestion layer

Data ingestion is used to load data records from one or more sources, e.g. IoT devices, data lakes, databases, SaaS applications, etc., into a target data warehouse. It is the layer between the data source and data processing. Once ingested, the data becomes available in the data pipeline. There are three major ways to ingest data.

- **Batch ingestion**, where the ingestion layer collects data from sources incrementally and sends it to the data storage in batch. Data can be grouped based on a schedule or certain rules. This approach is generally used for use cases that don't require real-time data. And it is typically cost-effective and less expensive.
- **Stream ingestion** is also known as real-time processing. Data are not grouped in any way and are directly sent to the data storage in real time once recognized. Applications that consume real-time data should use this way.
- **Micro batching ingestion** is the approach used by streaming systems, such as Apache Spark Streaming. It divides data into small groups and ingests them incrementally as a stream. This makes the data more suitable for applications that have real-time data consumption requirements.

## Storage layer

The storage layer is responsible to provide durability, scalability, security, and cost-effectivity for big data storage. It supports storing both unstructured data and structured datasets in different formats. The data is usually loaded as-is without any processing to conform to a target format so that the ingestion layer could quickly land the source data into the storage. During processing, the data will be transformed from the original format to the one defined by the catalog layer, which is ready to be consumed downstream. To achieve the above, the storage layer could be organized into 3 different zones.

- **Raw data zone**, which works as a transient area to store the ingested data from sources as-is.
- **Cleaned data zone**, where data is only validated and cleaned, but still stored as original data format. This zone is necessary to support recovery, redo or rollback in case of the data processing is exceptionally exited or partially failed.
- **Processed data zone**, where the ready-to-use data is stored in consumption-oriented format. Data here is fully processed by processing technologies, including cleaning, normalizing, standardizing, enriching, and so on. And typically the data in this zone is optimized to support cost-effective access, such as partitioned and cataloged.

## Cataloging and search layer

Once collected into the storage layer, the data needs to be cataloged and accessible to be actually usable in the remaining workflow, especially if the data volume is big. The cataloging and search layer is responsible to store metadata about datasets hosted in the storage layer, which is applied to business in the consumption layer and technical in the processing layer. It provides the ability to manage schema and makes datasets discoverable by providing search capabilities.

## Processing layer

The processing layer is responsible for transforming data to be consumable across the data storage zones, which includes multiple technologies such as data validation, cleanup, normalization, transformation, and enrichment. The processing layer needs to handle large data volumes with diverse data formats. The processing layer also provides the ability to build the processing workflow across the data storage zones, so that more complex processing logic could be better handled. Therefore, the processing layer could be composed of three types of components:

- **initializing component**, which is used to create a multi-step data processing workflow on schedule or in response to event triggers,
- **orchestrating component**, which manages the data processing workflow,
- **computing component**, where the exact data processing programs are executed.

## Consumption layer

The consumption layer is responsible to provide scalable and performant tools to gain insights from the vast amount of data in the data storage. To achieve the best flexibility, this layer needs to support different types of data structures and formats, and use data partitioning to optimize cost and performance. The consumption layer is composed using analytics services, tools, and methods that enable:

- **interactive SQL** to allow sending a SQL query to search and getting documents streamed back in response,
- **batch analytics** to handle analytic workloads on big data datasets at the varying interval,
- **business intelligence** to easily create and publish visualized dashboards for business insight analysis,
- **Machine Learning** to support software applications to become more accurate at predicting outcomes by leveraging the data.

## Security and governance layer

The security and governance layer is responsible for protecting the data, identities, and processing resources across all other layers. It provides capabilities to manage the below aspects, including but not limited to below:

- **authentication and authorization** to configure fine-grained access control for resources in all layers of the architecture,
- **encryption** to create and manage symmetric and asymmetric customer-managed encryption keys,
- **network protection** to choose the address range, create subnets, and configure route tables and network gateways,
- **monitoring and logging** to analyze logs, visualize monitored metrics, define monitoring thresholds, and send alerts when thresholds.

## Showcase

Today, most of the main cloud providers offer their own serverless data pipeline solutions. They all target to enable agile and self-service data onboarding and analytics for the whole dataset, although are built on top of different cloud service stacks. By leveraging the data pipeline, engineers and scientists could focus more time on rapidly building data and analytics pipelines to drive insights for the business.

```{figure} ../../images/aws-serverless-data-lake-centric-analytics-architecture.jpeg
---
name: aws-serverless-data-analytics-pipeline-reference-architecture
---
[Serverless data lake centric analytics architecture](https://aws.amazon.com/blogs/big-data/aws-serverless-data-analytics-pipeline-reference-architecture/)
```

This diagram describes a reference architecture that uses AWS-managed services which compose the 6 layers mentioned in the above logical architecture. More specifically to this showcase:

- AWS Data Migration Service and AWS Lake Formation are usually the options for database ingestion, while Amazon Kinesis Data Firehose is used for streaming data sources.
- S3 is the foundation for the storage layer, and it provides more cost-effective colder-tier storage through Amazon S3 Glacier.
- AWS Lake Formation is also the central place to store and manage metadata as the catalog for all datasets in the data lake.
- AWS Glue and AWS Step Functions are serverless workflow services to build, orchestrate, and run pipelines.
- To consume the processed data, plenty of products are available, such as Redshift, QuickSight, SageMaker, etc.
- IAM, KMS, and CloudWatch are the most commonly used AWS services to provide governance capabilities globally.

If the pipeline is built on other cloud computing platforms, equivalent services could be easily found across all the layers. The architecture could also be simplified or customized according to the business needs.

## Your turn! ð

Data cleaning is a key part of data engineering to improve the [data quality](#data-quality), but it can be deeply frustrating as the situation could be highly varied in different datasets. Sometimes you will see the text fields garbled. Sometimes your dates are formatted incorrectly. In this [assignment](../assignments/machine-learning-productionization/data-engineering), youâll work through three hands-on exercises to deal with messy data.

## Self study

- [A Chat with Andrew on MLOps: From Model-centric to Data-centric AI - YouTube](https://www.youtube.com/watch?v=06-AZXmwHjo)

---

```{bibliography}
:filter: docname in docnames
```

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

# Model training & evaluation

Machine Learning modeling, including model selection, training, evaluation and debugging, is very important, but only a small component of the entire Machine Learning pipeline. Some might even argue that it's the easiest component. Details of specific algorithms won't be discussed in this section. Instead, we will focus on giving an overview picture of how to choose the right model for the problem.

## Model selection

Once problems are framed as one of the common Machine Learning tasks, the typical approaches to solve them can usually be located correspondingly. You should first figure out the category of the problem. Is it supervised or unsupervised? Or regression vs. classification? Does it require generation or only prediction? If it is the former, the models will have to be much harder to learn the latent space of the data. As a quick reference, such a [cheat sheet](what-models-to-use) could be helpful.

Note that the model selection also highly depends on how the business problem is defined. For the same problem area, such as a house price prediction task, different targets may result in choosing different Machine Learning models. It can be regression if the required output is raw numbers. But if the goal is to quantize the income into different brackets and predict the bracket, it becomes a classification problem. Similarly, unsupervised learning could be used to learn labels for the data, which could be then used for supervised learning.

Keep in mind that there could be many ways to frame a problem, and the better one could only be known after the chosen models are trained and evaluated. Even though there are hundreds of ways to select and train a Machine Learning model, it is always a good practice to start with simple data, simple feature engineering, and simple model. Besides, transfer learning could be leveraged to reduce the training time in the context of the neural network. Furthermore,Â AutoMLÂ helps to further save time spent from feature engineering to HPO tuning. We will discuss these three useful tricks for selecting models in detail.

### Start simple

When searching for a solution, the first goal is to find an effective simple approach for the task. This serves three major purposes.

- Focus on resolving the confidence about if the model could solve the problem, as additional complexity and potential bugs are avoided.
- Speed up the project iteration, and more complex components could be gradually added and verified step by step.
- At last, it is important to leverage the simplest solution to build up a reasonable baseline for further comparison with the comprehensive model.

```{epigraph}
If you think that machine learning will give you a 100% boost, then a heuristic will get you 50% of the way there.

-- Martin Zinkevich, research scientist at Google
```

```{seealso}
Martin, Z. (n.d.). [Rules of machine learning: Best practices for ml engineering](https://martin.zinkevich.org/rules_of_ml/rules_of_ml.pdf).
```

Start simple is about the architecture overall, which does a decent job on the problem. One or more aspects from below could be considered.

1. Simple data â start with the partial dataset if necessary, and easy-to-understand features which are easy to be captured by the model.
2. Simple processing - start with no regularization, normalization or other data processing as they may introduce bugs.
3. Simple model â start with a less complex model with sensible defaults, prove the feasibility, get a baseline, iterate and improve it gradually.
4. Simple problem - simplify the problem itself if possible, or achieve it in multiple steps or through several sub-problems.

For example, to simply start a house pricing prediction problem, firstly you could consider the most relevant features or a small portion of the data to build a simple linear regression model to get a baseline. Then you could add more features or data to extend the model to a nonlinear model. Or you could try other regressors such as decision trees, ensembles, shallow to deeper neural networks, etc, depending on the type and volume of data.

Overall, there is no need to pursue the state-of-the-art approach or the most optimized performance at the very beginning. But it is necessary to keep the eyes on the trap of increasingly complex heuristics.

### Transfer learning

[Transfer learning](https://en.wikipedia.org/wiki/Transfer_learning) is a research problem in Machine Learning that focuses on storing knowledge gained while solving one problem and applying it to a different but related problem.

Using a large amount of data and tackling a completely new Machine Learning problem can be very challenging sometimes. Transfer learning could be the starting point if the simplified solution does not work or perform well. It allows utilizing knowledge(model) acquired (trained) for one task to solve other similar tasks.

What's more, transfer learning is very commonly adopted in hot areas such as computer vision and natural language processing. It usually gives significantly better performance than training a simple model. And it is even a rare case to train a model from scratch in such areas. Instead, researchers and data scientists prefer starting from a pre-trained model that already learned general features and how to classify objects.

:::{figure-md} transfer-learning
<img src="../../images/transfer-learning.jpeg"  class="bg-primary mb-1">

Transfer learning{cite}`introduction_to_transfer_learning_2019`
:::

Traditionally, there are three major categories of transfer learning strategies and techniques based on the characteristics of the problem and the data. **Inductive transfer learning** is used if the domains are the same between the source and target, but the exact tasks are not. If the problems' domains are even different, **transductive transfer learning** could be the choice. **Unsupervised transfer learning** is similar to inductive transfer learning, but for unsupervised tasks with unlabeled datasets both in the source and target.

:::{figure-md} transfer-learning-strategies
<img src="../../images/transfer-learning-strategies.png"  class="bg-primary mb-1">

Transfer learning strategies{cite}`what_is_transfer_learning`
:::

Under the deep learning context, there are multiple levels of complexity in using a pre-trained model. The most straightforward way is to use the pre-trained model directly, but may not be applicable mostly. An idea here is to leverage the pre-trained model's weighted layers to extract features while retraining the last layer. One step further, a more engaging technique is to fine-tune and train all layers after starting with only the feature layers. If it still does not work, fully training all the layers will be the fallback.

```{seealso}
[What is transfer learning? [Examples & newbie-friendly guide]](https://www.v7labs.com/blog/transfer-learning-guide). (n.d.). Retrieved 27 July 2022.
```

### AutoML

[Automated Machine Learning(AutoML)](automl) provides methods and processes to make Machine Learning available for non-Machine Learning experts, to improve the efficiency of Machine Learning and accelerate research on Machine Learning. Designing and tuning Machine Learning systems is a labor and time-intensive task, and also requires extensive expertise. AutoML is focused on automating the model selection and training process.

As it is named, AutoML helps automate many aspects of Machine Learning model developments and training. It consists of a broader group of methodologies listed here:

- Automated Data Clean (Auto Clean)
- Automated Feature Engineering (Auto FE)
- Hyperparameter Optimization (HPO)
- Meta-Learning
- Neural Architecture Search (NAS)

Today, there are plenty of AutoML tools existing. It is important to understand the strengths and weaknesses of each other before going deep with any of them. [AMLB](https://openml.github.io/automlbenchmark/index.html) provides an open and extensible benchmark to help compare and choose the right AutoML frameworks.

```{seealso}
Hutter, Frank, Lars Kotthoff, and Joaquin Vanschoren. [Automated machine learning: methods, systems, challenges](https://www.automl.org/book/)). Springer Nature, 2019.
```

## Model evaluation

In practice, it is challenging to detect if the model is properly learning without underfitting or overfitting. Ideally, before moving to production, it is always necessary to evaluate the trained model to make sure that everything is working properly. A common approach is to divide the dataset into three parts - training set, validation set and test set.

The model is trained by using only the train set, and the validation set is used to track the progress and conclude to optimize the model. Then the test set is used to evaluate the performance of the model. Using completely new data allows us to get an unbiased opinion on how well the algorithm works.

:::{figure-md} recommended-method-of-deviding-the-dataset
<img src="../../images/recommended-method-of-deviding-the-dataset.png"  class="bg-primary mb-1">

Recommended method of dividing the data set{cite}`skalski_preventing_2020`
:::

There is no strict heuristic about how to split the dataset, especially when working with big data. The split ratios depend greatly on the specific problem and data volume. Generally speaking, the train vs. validation vs. test split should allow for:

- large enough validation set to compare the difference between models,
- large enough test set to be representative of overall performance.

However, while evaluating a Machine Learning model can seem daunting, model metrics show where to start. The following sections discuss how to evaluate performance using metrics.

### Evaluate quality using model metrics

To evaluate your modelâs quality, commonly-used metrics are:

- [loss](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss)
- [accuracy](https://developers.google.com/machine-learning/crash-course/classification/accuracy)
- [precision & recall](https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall)
- [area under the ROC curve (AUC)](https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc)

For guidance on interpreting these metrics, read the linked content from Machine Learning Crash Content. For additional guidance on specific problems, see the following table.

Problem | Evaluating Quality
---------|----------
 Regression | Besides reducing the absoluteÂ [Mean Square Error](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss)Â (MSE), reduce the MSE relative to the label values. For example, assume to predict prices of two items that have mean prices of 5 and 100. In both cases, assume the MSE is 5. In the first case, the MSE is 100% of your mean price, which is clearly a large error. In the second case, the MSE is 5% of the mean price, which is a reasonable error.
 Multiclass classification  | To predict a small number of classes, look at per-class metrics individually. When predicting on many classes, the per-class metrics can be leveraged to track overall classification metrics. Alternatively, specific quality goals can be prioritized depending on the needs. For example, if to classify objects in images, then the classification quality may be prioritized for people over other objects.
 Ranking metrics | MRR, MAR, ordered logit
 Computer vision | IoU, Pixel Accuracy
 NLP | Perplexity, BLEU, ROUGE

Ideally, choose one single metric to optimize at once; if the requirement is toÂ include multiple metrics, then consider a unified metric.

However, since the real world does not always go as what is imagined, it may be the case to try many metrics before finding one that could be satisfied with, and the metrics may change alongside the development, or even after getting the model into production.

### Check metrics for important data slices

After having a high-quality model, the model might still perform poorly on subsets of the data. For example, the unicorn predictor must predict well both in the Sahara desert and in New York City, and at all times of the day. However, there is less training data for the Sahara desert. Therefore, it is necessary to track model quality specifically for the Sahara desert. Such subsets of data, like the subset corresponding to the Sahara desert, are calledÂ **data slices**. Data slices should be separately monitored where performance is especially important or where the model might perform poorly.

Use the understanding of the data to identify data slices of interest. Then compare model metrics for data slices against the metrics for the entire data set. Checking that the model performs across all data slices helps remove bias. For more, seeÂ [Fairness: Evaluating for Bias](https://developers.google.com/machine-learning/crash-course/fairness/evaluating-for-bias).

### Use real-world metrics

Model metrics do not necessarily measure the real-world impact of the model. For example, the AUC could be increased by changing a hyperparameter, but how did the change affect the user experience? To measure real-world impact, separate metrics need to be defined. Measuring real-world impact helps compare the quality of different iterations of the model.

### Optimizing and satisficing metrics

As models are getting bigger and more resource-intensive, how to scale the mode training becomes more and more important. Thinking beyond the above model metrics, the model utilitarian performance should also be considered. It includes the training speed, inference speed, model size, model stability, etc.

To the given example{cite}`ng2017mlyearning` below, both model accuracy and running time are important to decide which is the best classifier. It may not be natural to derive a single metric from them. Instead, a more real-world thinking-based strategy could be applied. The running time is important, but mostly it could be acceptable once under a certain value, such as 100ms. Whenever this condition is satisfied and the running time is good enough for production, then accuracy needs to be optimized with the best effort. Here, the running time is the satisficing metric and the accuracy is the optimizing metric.

```{figure} ../../images/optimizing-and-satisficing-metrics.png
```

Optimizing and satisficing metrics could also be applied to evaluate the model among different model metrics. As a final example, to build a natural language processing powered smart speakers device like Alexa, the wake word detection module is the key to support using a microphone to listen for the user saying a particular âwake-word" to wake up the system, such as the "Alexa" for Amazon Echo.

The false positive rate is one of the key metrics, which is about the frequency of the system waking up even when no one says the wake-word. While the false negative rate describes how often it fails to wake up when someone says theÂ wake-word. It is difficult to optimize both of them at the same time. Instead, one reasonable way is to have the false negative rate as the optimizingÂ metric which needs to be minimized. And the false positive could be treated as the satisficingÂ metric, which should happen no more than once every 24 hours of operation.

## Model debugging & improvement

Once the model is working, the next step is to optimize the model's quality for production readiness. Both debugging and optimizing are critical in the Machine Learning pipeline.

**How is Machine Learning debugging different?** Before diving into any particular Machine Learning debugging method, it is important to understand what differentiates debugging Machine Learning models from traditional software programs. Unlike the latter, an Machine Learning model with poor quality usually does not imply the presence of a bug. Instead, There could be many reasons to cause a model not to perform well. So that to debug poor performance in a model, a broader range of potential causes need to be investigated compared to traditional programming.

For example, here are a few causes for poor model performance:

- Theoretical constraints, such as wrong assumptions, unsuccessful problem framing, and poor model/data fit.
- Data contains errors and anomalies or is over-preprocessed.
- Features lack predictive power.
- Poor feature engineering code contains bugs.
- Poor model implementation.
- Hyperparameters are set to nonoptimal values.

Debugging Machine Learning models is complicated by the time it takes to run your experiments. Given the longer iteration cycles, and the larger error space, debugging Machine Learning models is uniquely challenging.

### Data and feature debugging

Low-quality data will significantly affect your model's performance. It's much easier to detect low-quality data at input instead of guessing at its existence after the model predicts badly. Monitor the data by following the advice in this section.

**Validate input data using rules.**

To monitor the data, one approach is to write rules that the data must satisfy, and continuously check the data against the expected [data quality](#data-quality). This collection of rules is defined by following these steps:

1. For the feature data, understand the range and distribution. For categorical features, understand the set of possible values.
2. Encode the understanding into rules. Examples of rules are:
   1. Ensure that user-submitted ratings are always between 1 and 5.
   2. Check that âtheâ occurs most frequently (for an English text feature).
   3. Check that categorical features have values from a fixed set.
3. Test the data against the rules which should catch data errors such as:
   1. anomalies.
   2. unexpected values of categorical variables.
   3. unexpected data distributions.

**Ensure splits are good quality.**

The test and training splits must be equally representative of the input data. If the test and training splits are statistically different, then training data will not help predict the test data. It's often a struggle to gather enough data for a machine learning project. Sometimes, however, there is too much data, and a subset of examples must be selected for training.

Monitor the statistical properties of the splits. If the properties diverge, raise a flag. Further, test that the ratio of examples in each split stays constant. For example, if the data is split 80:20, that ratio should not change.

**Test processed data.**

While the raw data might be valid, the model only sees processed feature data. Because processed data looks very different from raw input data, it is necessary to check processed data separately. Based on the understanding of the processed data, write unit tests to verify if the data quality assurance is successfully applied through the data engineering process. For example, unit tests could check the following conditions:

1. All numeric features are scaled, for example, between 0 and 1.
2. One-hot encoded vectors only contain a single 1 and N-1 zeroes.
3. Missing data is replaced by mean or default values.
4. Data distributions after transformation conform to expectations. For example, if the data is normalized by using z-scores, the mean of the z-scores is 0.
5. Outliers are handled, such as by scaling or clipping.

### Model debugging

After debugging the data, follow these steps to continue debugging the model.

**Check that the model can predict labels.**

Before debugging the model, try to determine whether the features encode predictive signals. Linear correlations could be found between individual features and labels by using correlation matrices.

However, correlation matrices will not detect nonlinear correlations between features and labels. Instead, choose 10 examples from the dataset that the model can easily learn from. Alternatively, use synthetic data that is easily learnable. For instance, a classifier can easily learn linearly-separable examples while a regressor can easily learn labels that correlate highly with a [feature cross](https://developers.google.com/machine-learning/glossary/#feature_cross). Then, ensure the model can achieve a very small loss on these 10 easily-learnable examples.

Then using a few examples that are easily learnable simplifies debugging by reducing the opportunities for bugs. If it does not work well, consider to further simplifying the model by switching to the simpler gradient descent algorithm instead of a more advanced optimization algorithm.

**Establish a baseline.**

Comparing the model against a baseline is a quick test of the model's quality. When developing a new model, define a baseline by using [a simple heuristic](#start-simple) to predict the label. If the trained model performs worse than its baseline, it needs to be improved.

Examples of baselines are:

- Using a linear model trained solely on the most predictive feature.
- In classification, always predict the most common label.
- In regression, always predicting the mean value.

Once a version of the model is validated in production, it could be used as a baseline for newer model versions. Therefore, there could be multiple baselines of different complexities. Testing against baselines helps justify adding complexity to the model. A more complex model should always perform better than a less complex model or baseline.

**Implement tests for Machine Learning code.**

The testing process to catch bugs in Machine Learning code is similar to the testing process in traditional debugging. Unit tests could be added to detect bugs. Examples of code bugs in Machine Learning are:

- Hidden layers that are configured incorrectly.
- Data normalization code that returns NaNs.

A sanity check for the presence of code bugs is to include the label in the features and train the model. If the model does not work, then it has a bug.

**Adjust hyperparameter values.**

The table below explains how to adjust values for the hyperparameters.

Hyperparameter | Description
---------|----------
Learning Rate | Typically, ML libraries will automatically set the learning rate. For example, in TensorFlow, most TF Estimators use theÂ [AdagradOptimizer](https://www.tensorflow.org/api_docs/python/tf/train/AdagradOptimizer), which sets the learning rate at 0.05 and then adaptively modifies the learning rate during training. The other popular optimizer,Â [AdamOptimizer](https://www.tensorflow.org/api_docs/python/tf/train/AdamOptimizer), uses an initial learning rate of 0.001. However, if your model does not converge with the default values, then manually choose a value between 0.0001 and 1.0, and increase or decrease the value on a logarithmic scale until your model converges. Remember that the more difficult your problem, the more epochs your model must train for before loss starts to decrease.
| Regularization | First, ensure your model can predict without regularization on the training data. Then add regularization only if your model is overfitting on training data. Regularization methods differ for linear and nonlinear models.<br><br>For linear models, choose L1 regularization if you need to reduce your model's size. Choose L2 regularization if you prefer increased model stability. Increasing your model's stability makes your model training more reproducible. Find the correct value of the regularization rate, , by starting at 1e-5 and tuning that value through trial and error.<br><br>To regularize a deep neural network model, use [Dropout regularization](https://developers.google.com/machine-learning/glossary/#dropout_regularization). Dropout removes a random selection of a fixed percentage of the neurons in a network layer for a single gradient step. Typically, dropout will improve generalization at a dropout rate of between 10% and 50% of neurons. |
Training epochs | You should train for at least one epoch, and continue to train so long as you are not overfitting.
Batch size | Typically, the batch size of aÂ [mini-batch](https://developers.google.com/machine-learning/glossary/#mini-batch)Â is between 10 and 1000. ForÂ [SGD](https://developers.google.com/machine-learning/glossary/#SGD), the batch size is 1. The upper bound on your batch size is limited by the amount of data that can fit in your machine's memory. The lower bound on batch size depends on your data and algorithm. However, using a smaller batch size lets your gradient update more often per epoch, which can result in a larger decrease in loss per epoch. Furthermore, models trained using smaller batches generalize better. For details, seeÂ [On large-batch training for deep learning: Generalization gap and sharp minima](https://arxiv.org/pdf/1609.04836.pdf)Â N. S. Keskar, D. Mudigere, J. Nocedal, M. Smelyanskiy, and P. T. P. Tang. ICLR, 2017. Prefer using the smallest batch sizes that result in stable training.
| Depth and width of layers | In a neural network, depth refers to the number of layers, and width refers to the number of neurons per layer. Increase depth and width as the complexity of the corresponding problem increases. Adjust your depth and width by following these steps:<br><br>1. Start with 1 fully-connected hidden layer with the same width as your input layer.<br>2. For regression, set the output layer's width to 1. For classification, set the output layer's width to the number of classes.<br>3. If your model does not work, and you think your model needs to be deeper to learn your problem, then increase depth linearly by adding a fully-connected hidden layer at a time. The hidden layer's width depends on your problem. A commonly-used approach is to use the same width as the previous hidden layer, and then discover the appropriate width through trial-and-error.<br><br>The change in width of successive layers also depends on your problem. A practice drawn from common observation is to set a layer's width equal to or less than the width of the previous layer. Remember, the depth and width don't have to be exactly right. You'll tune their values later when you optimize your model. |

### Interpreting loss curves

Machine learning would be a breeze if all ourÂ [loss curves](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss)Â looked like this the first time we trained our model:

```{figure} ../../images/metric-curve-ideal.svg
```

But in reality, loss curves can be quite challenging to interpret. Use your understanding of loss curves to answer the following questions.

**1. My model won't train!**

Your friend Mel and you continue working on a unicorn appearance predictor. Here's your first loss curve.

```{figure} ../../images/metric-curve-ex03.svg
```

Your model is not converging. Try these debugging steps:

- Check if your features can predict the labels by following the steps in [Model debugging](#model-debugging).
- Check your data against a rules to detect bad examples.
- If training looks unstable, as in this plot, then reduce your learning rate to prevent the model from bouncing around in parameter space.
- Simplify your dataset to 10 examples that you know your model can predict. Obtain a very low loss on the reduced dataset. Then continue debugging your model on the full dataset.
- Simplify your model and ensure the model outperforms your baseline. Then incrementally add complexity to the model.

**2. My loss exploded!**

Mel shows you another curve. Whatâs going wrong here and how can she fix it? Write your answer below.

```{figure} ../../images/metric-curve-ex02.svg
```

A large increase in loss is typically caused by anomalous values in input data. Possible causes are:

- NaNs in input data.
- Exploding gradient due to anomalous data.
- Division by zero.
- Logarithm of zero or negative numbers.

To fix an exploding loss, check for anomalous data in your batches, and in your engineered data. If the anomaly appears problematic, then investigate the cause. Otherwise, if the anomaly looks like outlying data, then ensure the outliers are evenly distributed between batches by shuffling your data.

**3. My metrics are contradictory!**

Mel wants your take on another curve. Whatâs going wrong and how can she fix it? Write your answer below.

```{figure} ../../images/metric-curve-ex04.svg
```

The recall is stuck at 0 because your examples' classification probability is never higher than theÂ [threshold](https://developers.google.com/machine-learning/glossary#classification_threshold)Â for positive classification. This situation often occurs in problems with a largeÂ [class imbalance](https://developers.google.com/machine-learning/glossary#class_imbalanced_data_set). Remember that ML libraries, such as TF Keras, typically use a default threshold of 0.5 to calculate classification metrics.

Try these steps:

- Lower your classification threshold.
- Check threshold-invariant metrics, such as AUC.

**4. Testing loss is too damn high!**

Mel shows you the loss curves for training and testing datasets and asks "What's wrong?â Write your answer below.

```{figure} ../../images/metric-curve-ex01.svg
```

Your model is overfitting to the training data. Try these steps:

- Reduce model capacity.
- Add regularization.
- Check that the training and test splits are statistically equivalent.

**5. My model gets stuck.**

You're patient when Mel returns a few days later with yet another curve. What's going wrong here and how can Mel fix it?

```{figure} ../../images/metric-curve-ex05.svg
```

Your loss is showing repetitive, step-like behavior. The input data seen by your model probably is itself exhibiting repetitive behavior. Ensure that shuffling is removing repetitive behavior from input data.

**It's working!**

"It's working perfectly now!" Mel exclaims. She leans back into her chair triumphantly and heaves a big sigh. The curve looks great and you beam with accomplishment. Mel and you take a moment to discuss the following additional checks for validating your model.

- real-world metrics
- baselines
- absolute loss for regression problems
- other metrics for classification problems

```{figure} ../../images/metric-curve-ex06.svg
```

## Model optimization

Once the model is working, it's time to optimize the model's quality. Follow the steps below.

### Add useful features

The model performance could be improved by adding features that encode information not yet encoded by the existing features. Correlation matrices could be used to find linear correlations between individual features and labels. To detect nonlinear correlations between features and labels, the model must be trained with and without the feature, or combination of features, and check for an increase in model quality. The feature's inclusion must be justified by an increase in model quality.

### Tune hyperparameters

Values of hyperparameters make your model work. However, these hyperparameter values can still be tuned. The values could be tuned manually by trial and error, but manual tuning is time-consuming. Instead, consider using an [AutoML](#automl) hyperparameter tuning service, such asÂ [Google Cloud Machine Learning hyperparameter tuning](https://cloud.google.com/ml-engine/docs/tensorflow/hyperparameter-tuning-overview), [Auto Gluon](https://github.com/awslabs/autogluon), etc. With different sets of hyperparameters, the same model may perform drastically differently on the same dataset. Keep in mind that not all hyperparameters are created equal. A model could be more sensitive to one hyperparameter.

### Tune model depth and width

While debugging the model, its depth and width are increased to improve the model performance In contrast, during model optimization, the mode depth and width could be either increased or decreased depending on the goals. If the model quality is adequate, then try reducing overfitting and training time by decreasing depth and width. Specifically, try halving the width at each successive layer. Since the model quality will also decrease, it is always a tradeoff to balance quality with overfitting and training time.

Conversely, if the goal is to have higher model quality, then try increasing depth and width. Remember that increases in depth and width are practically limited by accompanying increases in training time and overfitting. To understand overfitting.

Since depth and width are hyperparameters, hyperparameter tuning could be used to optimize depth and width.

## Your turn! ð

Understanding the challenges in Machine Learning debugging by completing the [Counterintuitive Challenges in ML Debugging](../assignments/machine-learning-productionization/counterintuitive-challenges-in-ml-debugging.ipynb).

Apply the debugging concepts learned by completing the following:

- [Case Study: Debugging in Regression](../assignments/machine-learning-productionization/debugging-in-regression.ipynb)
- [Case Study: Debugging in Classification](../assignments/machine-learning-productionization/debugging-in-classification.ipynb)

## Self study

- [Machine Learning Algorithms: Which One to Choose for Your Problem](https://blog.statsbot.co/machine-learning-algorithms-183cc73197c) by Daniil Korbut, Stats and Bots, 2017.

## Acknowledgments

Thanks to Google for creating the open-source course [Testing and Debugging in Machine Learning](https://developers.google.com/machine-learning/testing-debugging) which is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). It contributes to the majority of [Model evaluation](#model-evaluation), [Model debugging & improvement](#model-deugging-improvement), [Model optimization](#model-optimization), and assignments.

Thanks to [@chiphuyen](https://github.com/chiphuyen) for creating the [Machine Learning Systems Design](https://huyenchip.com/machine-learning-systems-design/toc.html) which inspires some of the contents in this section.

---

```{bibliography}
:filter: docname in docnames
```

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

# Model deployment

"[Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery) is the ability to get changes of all types â including new features, configuration changes, bug fixes, and experiments â into production, or into the hands of users, safely and quickly in a sustainable way"{cite}`humble_continuous_2010`, stated by Jez Humble and David Farley. Continuous delivery is the key to automatically producing high-quality software through the development pipeline.

Once the Machine Learning model is trained, it needs to be deployed as part of a business application such as a mobile or desktop application. The Machine Learning model requires various data points to produce predictions. The final stage of the Machine Learning workflow is the delivery of the previously engineered Machine Learning model into existing software.

The model deployment is a very challenging stage, as it needs to handle both traditional software challenges as well as Machine Learning specific challenges.

To the traditional software challenges, reliability is necessary to guarantee that the system could continue to workÂ correctly performing inference at the desired level of performance. This is required even when the system facesÂ hardware or software faults, and even human error. Maintainability is the key to allowing the system to be iterated productively over time in the collaborative work environment. With the team growing, flexibility and scalability become more and more important to deal with increased data volume, traffic volume, and complexity. Besides, the whole process must be under version control, through automated CI/CD pipelines and reusable in each development cycle.

Additionally, there are specific challenges for Machine Learning model deployment. The traditional continuous delivery must be extended to incorporate the Machine Learning based system. Besides the code, the model and the data could also be changed and delivered through the continuous process. So that updating Machine Learning models requires more thorough and thoughtful version control and more advancedÂ CI/CD pipelines. For example, when a new version of the model is developed, the corresponding changes may need to be made not only to the model itself but also to the feature store or the data processing.

:::{figure-md} ml-axis-of-change
<img src="../../images/ml-axis-of-change.png"  class="bg-primary mb-1">

The 3 axis of change in a Machine Learning application â data, model, and code â and a few reasons for them to change{cite}`cd4ml`
:::

At last, Machine Learning development needs the coordination of scientists, software engineers, data engineers, and business professionals. This introduces extra challenges to ensure the model works reliably and delivers the desired result.

In this section, we will describe the important technical components for implementing Machine Learning model deployment, explain the concepts and demonstrate how different patterns can be used to implement the full end-to-end process.

## Deployment strategies

Deployment strategies are practices used to change or upgrade a running instance of an application.

**Basic deployment** implies that all nodes within a target environment (v1.0) are updated with a new version (v2.0) at the same time. This is the simplest but riskiest strategy because all the nodes will go down if the deployed artifacts are broken. This strategy also results in slow deployment rollback.

:::{figure-md} basic-deployment-strategy
<img src="../../images/basic-deployment-strategy.png"  class="bg-primary mb-1">

Basic deployment strategy{cite}`harness_intro_2022`
:::

In practice, the real-world system is usually composed of many inter-depended modules or services. In this case, the **multi-service deployment** could be considered an option. To this strategy, all nodes within a target environment are updated with multiple new services simultaneously. This reduces the risk of system level failure but introduces the difficulty of managing the service dependencies in both deployment and rollback.

:::{figure-md} multi-service-deployment-strategy
<img src="../../images/multi-service-deployment-strategy.png"  class="bg-primary mb-1">

Multi-service deployment strategy{cite}`harness_intro_2022`
:::

There are several options to help avoid the above issues. **Rolling deployment** incrementally updates all nodes in a target environment with the service or artifact version in batches. **Canary development** is similar but targets to roll out the new version to a certain subset of users instead of services. Both strategies could reduce the risk of failure by introducing finer granularity control to the deployment process. But they require services to support both new and old versions of an artifact, which make it more complex to manage the rollout and rollback.

:::{figure-md} rolling-deployment-strategy
<img src="../../images/rolling-deployment-strategy.jpg"  class="bg-primary mb-1">

Rolling deployment strategy{cite}`harness_intro_2022`
:::

:::{figure-md} canary-deployment-strategy
<img src="../../images/canary-deployment-strategy.jpg"  class="bg-primary mb-1">

Canary deployment strategy{cite}`harness_intro_2022`
:::

```{seealso}
[When to use canary vs. Blue/green vs. Rolling deployment.](https://www.techtarget.com/searchitoperations/answer/When-to-use-canary-vs-blue-green-vs-rolling-deployment) (n.d.). SearchITOperations. Retrieved 11 August 2022
```

To further improve the deployment, **Blue/Green strategy** is the approach that utilizes two identical environments, a âblueâ (aka staging) and a âgreenâ (aka production) environment with different versions of an application or service. Testing is typically done within the blue environment that hosts new versions or changes. Once the new changes are approved, traffic could be shifted from the green environment to the blue one. After the deployment is finished, the blue environment then turns into the staging environment for the next round of deployment.

:::{figure-md} blue-green-deployment-strategy
<img src="../../images/blue-green-deployment-strategy.png"  class="bg-primary mb-1">

Blue/Green deployment strategy{cite}`harness_intro_2022`
:::

## Deployment evolution

When computers were extremely large, expensive, and bulky, the software was often bundled together with the hardware by manufacturers. In the 1980s, new forms of software distribution, such as floppy disks and optical media, came together with the popularity of microcomputers, which meant the software deployment must be faster and more user-friendly. And since the internet age, agile software development has become possible. The advent of cloud computing and software as a service make software able to be deployed to a large number of customers in minutes over the internet.

As software development evolved, the determining factors of software deployment are changing as well. This requires the art-of-the-state deployment strategies and modes to provide better flexibility for modern computer applications.

**Deployment 1.0**

So-called deployment 1.0 is about deploying resources on-premises, which is an organizationâs internal system along with the hardware and other infrastructure or also known as the private cloud. With the on-premises method, the deployment is under more control but takes more time to set up with more cost, although the [CI/CD](https://en.wikipedia.org/wiki/CI/CD) toolchain could help.

Deployment 1.0 usually has Machine Learning models built together with applications to simplify the infrastructure. But web server and the model inference code may be implemented in different programming languages, require different hardware resources, or be executed under different runtime environments. All of these may cause issues to the model deployment, and brings up the next level of deployment.

**Deployment 2.0**

Deployment 2.0 is the method to deploy software through containers. A [container](https://www.docker.com/resources/what-container/) is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another{cite}`what_is_a_container_2021`. It was introduced by Google in 2006, and Docker, launched in 2013, is one of the most famous container services.

Containers provide a lightweight mechanism for isolating an application's environment. But containers, even the machine running containers could be down still. If the service is consist of multiple containers, the network failure could break the collaboration among them as well. As the system scales up, more sophisticated deployment strategies are needed to manage the load balance and rolling out and back.

**Deployment 3.0**

To address the concerns above, the container orchestration-based deployment is introduced to upgrade the deployment to 3.0. Container orchestration is to manage multiple containers and automates container lifecycle in large, dynamic environments. It allows taking advantage of the same environments for scaling quickly and easily. [Kubernetes](https://kubernetes.io/)(K8s) is the most popular open-source orchestration system for automating the deployment, scaling, and management of containerized applications.

Kubernetes automates the deployment, scaling, and operations of application containers across clusters of hosts. It supports a broad range of container tools/infrastructures and works well with Docker. Kubernetes is inclusive to cloud providers like Cloud Native Computing Foundation(CNCF) and becomes the industry standard. The most popular IaaS providers also provide their container registries, which is especially useful for projects heavily invested in platforms like AWS, Azure, or Google Cloud.

**Deployment 4.0**

Machine Learning as a service (MLaaS)Â is an umbrella definition of various cloud-based platforms that cover most infrastructure issues such as data pre-processing, model training, and model evaluation, with further prediction. Prediction results can be bridged with your internal IT infrastructure through REST APIs{cite}`comparing_machine_learning_as_a_service`. Deployment 4.0 is to deploy with Machine Learning as a service. It should be considered first for assembling a homegrown Machine Learning solution.

Over the past years, several open-source frameworks have been developed for deploying Machine Learning services, such as [Apache Airflow](https://airflow.apache.org/), [KubeFLow](https://www.kubeflow.org/), [MLFlow](https://github.com/mlflow/mlflow), [MetaFlow](https://github.com/Netflix/metaflow), etc. For example, KubeflowÂ is an open-sourceÂ Machine Learning platform designed to orchestrate complicated Machine Learning workflows running onÂ Kubernetes. It is the cloud-native platform providing both UI and SDK for Machine Learning operations including pipelines, training and deployment.

Besides, major public cloud players, such as Amazon, Azure, Google, and IBM, are all leading cloud MLaaS services that allow for fast model training and deployment. These open source toolkits are created and integrated closer with their original Machine Learning frameworks. Instead, the fully cloud-managed solutions are more neutral platforms that support more diverse Machine Learning environments and packages.

```{seealso}
[The hitchhikerâs guide to the cloud (Aws vs gcp vs azure) and their ai/ml apiâs capabilities](https://speaking.brunoamaro.com/1B7BtS/slides). (n.d.). Retrieved 13 August 2022.
```

## Serving

Before serving the trained models to users, it is important to make clear what is the desired experiments to run to make sure the models meet all the constraints outlined in the problem setup{cite}`machine_learning_system_design`. What feedbacks to get from the users? Is it required to refresh the model online with each new data point? How to personalize the model for each user? How frequent should the Machine Learning algorithm be updated? Is it possible the model has potential biases and misuses?

Regardless of which serving pattern to use, there is always an implicit contract between the model and users. The model will usually expect input data in a certain shape, and the changed model will require the contract to be updated for new input or add new features, which may cause integration issues and break the applications using it. Which leads the necessarity of continuously monitoring and testing he model. However, to serve and use the model in production, there are a few patterns to achieve.

**Model as module**

This is the simpler approach, where the model works as a dependency that is built and packaged as a module together with the application itself. From this point forward, the application artifact and version could be treated as a combination of the application code and the Machine Learning model.

A simple way to serve the Machine Learning model embedded is to export it as a serialized [pickle](https://docs.python.org/3/library/pickle.html) object. When building the application, we embed the model file inside the same Docker container and then get it versioned and deployed to production. There are other options to implement the this pattern. [MLeap](https://github.com/combust/mleap) provides a common serialization format for exporting and importing models built by Spark, scikit-learn, and Tensorflow. There are also language-agnostic exchange formats to share models, such as [PMML](http://dmg.org/pmml/v4-3/GeneralStructure.html), [PFA](http://dmg.org/pfa/index.html), and [ONNX](https://onnx.ai/). Frameworks like H2O could support to export the Python or R implemented model as a compiled executable in another language, such a POJO in Java JAR.

**Model as service**

This is about to have the Machine Learning model to be wrapped in a service that can be deployed independently of the applications. This allows to update the model or the application independently. But it can also introduce more latency at inference time, as the model and the application are communicated with each other through remote invocation or service call for each prediction.

To implement the "model as service" pattern, most of the cloud providers have tools and SDKs to wrap the Machine Learning model for deployment into their MLaaS platforms, such as Azure Machine Learning, AWS Sagemaker, or Google AI Platform. Open-source solutions, such as Kubeflow for Machine Learning workflows on Kubernetes, could be used too, although they solve more than just the model serving.

**Model as data** 

This is another approach to have the Machine Learning model treated and published independently, but the application will ingest it as data at runtime instead. This is more commonly used in streaming or real-time scenarios where the application can subscribe to events that are published whenever a new model version is released. The model data will be ingested into memory for predicting, which avoid introducin the extra latency. Deployment strategies such as Blue/Green deployment or Canary deployment can be applied in this scenario. Some of above serialization options are also applicable for implementing the "model as data" pattern.

## Infrastructure as code

[Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) (IaC) is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. The IT infrastructure managed by this process comprises both physical equipment, such as bare-metal servers, as well as virtual machines, and associated configuration resources.

[GitHub Actions](https://docs.github.com/en/actions) is one of the most well-known IaC implementations, although people may not treat it as IoC. Github Actions makes it easy to automate all the Github software workflows with CI/CD support. By leveraging Github Actions, the developer could manage any infrastructure tasks, including build, test, deploy as well as code reviews, branch management, and issue triaging. Below is some sample infrastructure code from [Github Actions quickstart](https://ghdocs-prod.azurewebsites.net/en/actions/quickstart).

```yaml
name: GitHub Actions Demo
on: [push]
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "ð The job was automatically triggered by a ${{ github.event_name }} event."
      - run: echo "ð§ This job is now running on a ${{ runner.os }} server hosted by GitHub!"
      - run: echo "ð The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v3
      - run: echo "ð¡ The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "ð¥ï¸ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      - run: echo "ð This job's status is ${{ job.status }}."
```

This sceipt will be triggered by a git code `push`, and runs on a `ubuntu-latest` instance. It first checks out the code repository by using action `actions/checkout@v3`, then lists all the files of the repository by running `ls ${{ github.workspace }}`.

:::{figure-md} actions-quickstart-logs
<img src="../../images/actions-quickstart-logs.png"  class="bg-primary mb-1">

Github Actions Quickstart Logs{cite}`quickstart_for_github_actions`
:::

The log shows how each of the steps is processed. And, here is the list of files in the repository.

:::{figure-md} actions-quickstart-log-detail
<img src="../../images/actions-quickstart-log-detail.png"  class="bg-primary mb-1">

Github Actions Quickstart Log Detail{cite}`quickstart_for_github_actions`
:::

The RedHat-sponsored [Ansible](https://github.com/ansible/ansible) is an open-source IaC framework handling configuration management, application deployment, cloud provisioning, ad-hoc task execution, network automation, and multi-node orchestration. As a public cloud hosted solution, [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html) is an IoC service that helps the development teams model and set up AWS resources so that they can spend less time managing those resources and more time focusing on the applications that run in AWS. Both the open-source and hosted frameworks altogeher provide the flexibility for development teams to choose the right solution to adopt based on their requirements.

## Your turn! ð

Practice the model serving by following this [turorial](https://madewithml.com/courses/mlops/api/).

---

```{bibliography}
:filter: docname in docnames
```

