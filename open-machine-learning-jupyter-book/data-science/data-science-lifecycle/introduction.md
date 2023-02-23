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

# Introduction to the Data Science lifecycle

At this point, you've probably come to the realization that Data Science is a process. This process can be broken down into 5 stages:

- Capturing
- Processing
- Analysis
- Communication
- Maintenance

This section focuses on 3 parts of the life cycle: capturing, processing and maintenance.

```{figure} ../../../images/data-science-lifecycle.jpeg
---
name: 'Diagram of the Data Science lifecycle'
---
Diagram of the Data Science lifecycle{cite}`ucb_umt_what_is_data_science`
```

## Capturing

The first stage of the lifecycle is very important as the next stages are dependent on it. It’s practically two stages combined into one: acquiring the data and defining the purpose and problems that need to be addressed. Defining the goals of the project will require deeper context into the problem or question. First, we need to identify and acquire those who need their problem solved. These may be stakeholders in a business or sponsors of the project, who can help identify who or what will benefit from this project as well as what, and why they need it. A well-defined goal should be measurable and quantifiable to define an acceptable result.

Questions a data scientist may ask:

- Has this problem been approached before? What was discovered?
- Are the purpose and goal understood by all involved?
- Is there ambiguity and how to reduce it?
- What are the constraints?
- What will the end result potentially look like?
- How many resources (time, people, computational) are available?

Next is identifying, collecting, then finally exploring the data needed to achieve these defined goals. At this step of acquisition, data scientists must also evaluate the quantity and quality of the data. This requires some data exploration to confirm what has been acquired will support reaching the desired result.  

Questions a data scientist may ask about the data:

- What data is already available to me?
- Who owns this data?
- What are the privacy concerns?
- Do I have enough to solve this problem?
- Is the data of acceptable quality for this problem?
- If I discover additional information through this data, should we consider changing or redefining the goals?

## Processing

The processing stage of the lifecycle focuses on discovering patterns in the data as well as modeling. Some techniques used in the processing stage require statistical methods to uncover the patterns. Typically, this would be a tedious task for a human to do with a large data set and will rely on computers to do the heavy lifting to speed up the process. This stage is also where Data Science and machine learning will intersect. As you learned in the first section, machine learning is the process of building models to understand the data. Models are a representation of the relationship between variables in the data that help predict outcomes.

Common techniques used in this stage are covered in the Machine Learning sections.  Follow the links to learn more about them:

- [Classification](../../ml-fundamentals/classification/introduction-to-classification.md): organizing data into categories for more efficient use.
- [Clustering](../../ml-advanced/clustering/introduction-to-clustering.md): grouping data into similar groups.
- [Regression](../../ml-fundamentals/regression/logistic-regression.md): determining the relationships between variables to predict or forecast values.

## Maintaining

In the diagram of the lifecycle, you may have noticed that maintenance sits between capturing and processing. Maintenance is an ongoing process of managing, storing, and securing the data throughout the process of a project and should be taken into consideration throughout the entirety of the project.

### Storing data

Considerations of how and where the data is stored can influence the cost of its storage as well as the performance of how fast the data can be accessed. Decisions like these are not likely to be made by a data scientist alone but they may find themselves making choices on how to work with the data based on how it’s stored.

Here are some aspects of modern data storage systems that can affect these choices:

**On premise vs off premise vs public or private cloud**

On-premise refers to hosting and managing the data on your own equipment, like owning a server with hard drives that store the data, while off-premise relies on equipment that you don’t own, such as a data center. The public cloud is a popular choice for storing data that requires no knowledge of how or where exactly the data is stored, where the public refers to a unified underlying infrastructure that is shared by all who use the cloud. Some organizations have strict security policies that require that they have complete access to the equipment where the data is hosted and will rely on a private cloud that provides its own cloud services. You’ll learn more about data in the cloud in [the later section](../data-science-in-the-cloud/introduction.md).

**Cold vs hot data**

When training your models, you may require more training data. If you’re content with your model, more data will arrive for a model to serve its purpose. In any case, the cost of storing and accessing data will increase as you accumulate more of it. Separating rarely used data, known as cold data from frequently accessed hot data can be a cheaper data storage option through hardware or software services. If cold data needs to be accessed, it may take a little longer to retrieve in comparison to hot data.

### Managing data

As you work with data you may discover that some of the data needs to be cleaned using some of the techniques covered in the section focused on [data preparation](../working-with-data/data-preparation.md) to build accurate models. When new data arrives, it will need some of the same applications to maintain consistency in quality. Some projects will involve the use of an automated tool for cleansing, aggregation, and compression before the data is moved to its final location. Azure Data Factory is an example of one of these tools.

### Securing the data

One of the main goals of securing data is ensuring that those working on it are in control of what is collected and in what context it is being used. Keeping data secure involves limiting access to only those who need it, adhering to local laws and regulations, as well as maintaining ethical standards, as covered in the [ethics section](../introduction/data-science-ethics.md).

Here are some things that a team may do with security in mind:

- Confirm that all data is encrypted.
Provide customers with information on how their data is used.
- Remove data access from those who have left the project.
- Let only certain project members alter the data.

## Your turn! 🚀

There are many versions of the Data Science Lifecycle, where each step may have different names and numbers of stages but will contain the same processes mentioned within this section.

Explore the [Team Data Science Process lifecycle](https://docs.microsoft.com/en-us/azure/architecture/data-science-process/lifecycle) and the [Cross-industry standard process for data mining](https://www.datascience-pm.com/crisp-dm-2/). Name 3 similarities and differences between the two.

|Team Data Science Process (TDSP)|Cross-industry standard process for data mining (CRISP-DM)|
|--|--|
|![Team Data Science Lifecycle](../../../images/tdsp-lifecycle2.png) | ![Data Science Process Alliance Image](../../../images/CRISP-DM.png) |
| Team Data Science Lifecycle{cite}`marktab_what_nodate` | Data Science Process Alliance{cite}`hotz_what_2018` |

Assignment - [NYC taxi data in winter and summer](../../assignments/data-science/nyc-taxi-data-in-winter-and-summer.ipynb)

## Self study

Applying the Data Science Lifecycle involves multiple roles and tasks, where some may focus on particular parts of each stage. The Team Data Science Process provides a few resources that explain the types of roles and tasks that someone may have in a project.

- [Team Data Science Process roles and tasks](https://docs.microsoft.com/en-us/azure/architecture/data-science-process/roles-tasks)
- [Execute data science tasks: exploration, modeling, and deployment](https://docs.microsoft.com/en-us/azure/architecture/data-science-process/execute-data-science-tasks)

## Acknowledgments

Thanks to Microsoft for creating the open-source course [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners). It inspires the majority of the content in this chapter.

---

```{bibliography}
:filter: docname in docnames
```
