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

# Clustering models for Machine Learning

Clustering is a machine learning task where it looks to find objects that resemble one another and group these into groups called clusters.  What differs clustering from other approaches in machine learning, is that things happen automatically, in fact, it's fair to say it's the opposite of supervised learning. 

Nigeria's diverse audience has diverse musical tastes, let's look at some music popular in Nigeria. This dataset includes data about various songs' 'danceability' score, 'acousticness', loudness, 'speechiness', popularity and energy. It will be interesting to discover patterns in this data!

```{figure} ../../../images/clustering/turntable.png
---
name: A turntable
---
A turntable
```
  
In this series of sections, you will discover new ways to analyze data using clustering techniques. Clustering is particularly useful when your dataset lacks labels. If it does have labels, then classification techniques such as those you learned in previous sections might be more useful. But in cases where you are looking to group unlabelled data, clustering is a great way to discover patterns.

---