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

# Data processing in Python

In this assignment, we will ask you to elaborate on the code we have started developing in these [challenges](../../data-science/working-with-data/numpy.md#your-turn-🚀). The assignment consists of two parts:

## COVID-19 spread modeling

- [ ] Plot $R_t$ graphs for 5-6 different countries on one plot for comparison, or using several plots side-by-side
- [ ] See how the number of deaths and recoveries correlate with a number of infected cases.
- [ ] Find out how long a typical disease lasts by visually correlating infection rate and death rate and looking for some anomalies. You may need to look at different countries to find that out.
- [ ] Calculate the fatality rate and how it changes over time. *You may want to take into account the length of the disease in days to shift one time series before doing calculations*

## COVID-19 papers analysis

- [ ] Build a co-occurrence matrix of different medications, and see which medications often occur together (i.e. mentioned in one abstract). You can modify the code for building a co-occurrence matrix for medications and diagnoses.
- [ ] Visualize this matrix using a heatmap.
- [ ] As a stretch goal, visualize the co-occurrence of medications using the [chord diagram](https://en.wikipedia.org/wiki/Chord_diagram). [This library](https://pypi.org/project/chord/) may help you draw a chord diagram.
- [ ] As another stretch goal, extract dosages of different medications (such as **400mg** in *taking 400mg of chloroquine daily*) using regular expressions and build dataframe that shows different dosages for different medications. **Note**: consider numeric values that are in close textual vicinity of the medicine name.

## Rubric

Exemplary | Adequate | Needs Improvement
--- | --- | -- |
All tasks are complete, graphically illustrated and explained, including at least one of two stretch goals | More than 5 tasks are complete, no stretch goals are attempted, or the results are not clear | Less than 5 (but more than 3) tasks are complete, visualizations do not help to demonstrate the point

## Acknowledgments

Thanks to Microsoft for creating the open-source course [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners). It inspires the majority of the content in this chapter.
