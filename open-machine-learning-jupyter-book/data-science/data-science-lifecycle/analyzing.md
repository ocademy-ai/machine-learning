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

# Analyzing

Analyzing the data lifecycle confirms that the data can answer the questions that are proposed or solve a particular problem. This step can also focus on confirming a model is correctly addressing these questions and problems. This section is focused on Exploratory Data Analysis or EDA, which are techniques for defining features and relationships within the data and can be used to prepare the data for modeling.

We'll be using an example dataset from [Kaggle](https://www.kaggle.com/balaka18/email-spam-classification-dataset-csv/version/1) to show how this can be applied with Python and the Pandas library. This dataset contains a count of some common words found in emails, the sources of these emails are anonymous. Use the [notebook](../../assignments/data-science/nyc-taxi-data-in-winter-and-summer.ipynb) in this directory to follow along.

## Exploratory data analysis

The capture phase of the lifecycle is where the data is acquired as well as the problems and questions at hand, but how do we know the data can help support the end result?
Recall that a data scientist may ask the following questions when they acquire the data:

- Do I have enough data to solve this problem?
- Is the data of acceptable quality for this problem?
- If I discover additional information through this data, should we consider changing or redefining the goals?

Exploratory Data Analysis is the process of getting to know that data can be used to answer these questions, as well as identify the challenges of working with the dataset. Let’s focus on some of the techniques used to achieve this.

## Data profiling, descriptive statistics, and Pandas

How do we evaluate if we have enough data to solve this problem? Data profiling can summarize and gather some general overall information about our dataset through techniques of descriptive statistics. Data profiling helps us understand what is available to us, and descriptive statistics help us understand how many things are available to us.

In a few of the previous sections, we used Pandas to provide some descriptive statistics with the [`describe()` function]( https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.describe.html). It provides the count, max & min values, mean, standard deviation, and quantiles on the numerical data. Using descriptive statistics like the `describe()` function can help you assess how much you have and if you need more.

## Sampling and querying

Exploring everything in a large dataset can be very time consuming and a task that’s usually left up to a computer to do. However, sampling is a helpful tool in the understanding of the data and allows us to have a better understanding of what’s in the dataset and what it represents. With a sample, you can apply probability and statistics to come to some general conclusions about your data. While there’s no defined rule on how much data you should sample it’s important to note that the more data you sample, the more precise of a generalization you can make about data.

Pandas has the [`sample()` function in its library](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.sample.html) where you can pass an argument of how many random samples you’d like to receive and use.

General querying of the data can help you answer some general questions and theories you may have. In contrast to sampling, queries allow you to have control and focus on specific parts of the data you have questions about.

The [`query()` function](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.query.html) in the Pandas library allows you to select columns and receive simple answers about the data through the rows retrieved.

## Exploring with visualizations

You don’t have to wait until the data is thoroughly cleaned and analyzed to start creating visualizations. In fact, having a visual representation while exploring can help identify patterns, relationships, and problems in the data. Furthermore, visualizations provide a means of communication with those who are not involved with managing the data and can be an opportunity to share and clarify additional questions that were not addressed in the capture stage. Refer to the section on [Visualizations](../data-visualization/data-visualization.md) to learn more about some popular ways to explore visually.

## Exploring to identify inconsistencies

All the topics in this section can help identify missing or inconsistent values, but Pandas provides functions to check for some of these. [`isna()` or `isnull()`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.isna.html) can check for missing values. One important piece of exploring these values within your data is to explore why they ended up that way in the first place. This can help you decide on what [actions to take to resolve them](../../assignments/data-science/data-preparation.ipynb).

## Your turn! 🚀

[Exploring for answers](../../assignments/data-science/exploring-for-anwser.ipynb)

## Acknowledgments

Thanks to Microsoft for creating the open-source course [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners). It inspires the majority of the content in this chapter.

---

```{bibliography}
:filter: docname in docnames
```
