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

# Problem Framing

**[Problem Framing](https://developers.google.com/machine-learning/problem-framing/problem-framing)**, is the process of analyzing a problem to isolate the individual elements that need to be addressed to solve it. It helps you to determine the feasibility of your project, and clearly defines the project goals and success criteria. Under our context, problem framing is to dive deep business requirements to figure out a potential Machine Learning based technical solution.

```{epigraph}
Formal problem framing is the critical beginning for solving an ML problem, as it forces us to better understand both the problem and the data in order to design and build a bridge between them. 

-- TensorFlow engineer
```

At a high level, Machine Learning problem framing consists of two distinct steps:

- Determine if Machine Learning is the right approach to solve the problem.
- Frame the problem in Machine Learning terms through the whole development lifecycle.

Before rushing into the Machine Learning implementation, let's frame the problem by answering below questions first.

## Is Machine Learning the best choice?

Machine Learning is not universally applicable. Similar to any other technologies, it could only be used to solve certain problems.

**What are the existing solutions?** Machine Learning may be considered either when a problem is new, or existing non-Machine Learning solutions are not optimized. If it is the former, try solving the problem manually using a [heuristic](https://en.wikipedia.org/wiki/Heuristic) approach. Otherwise, the existing non-Machine Learning solution could be leveraged as a benchmark to help you make the decision.

**Is the error tolerable?** It is difficult to make the Machine Learning prediction 100% accurate. The small chance of false negative could be not acceptable sometimes. For example, Deep Learning have been shown to be successful in accelerating MRI reconstruction, over traditional methods. Despite a remarkable improvement in image quality of accelerated MRI, the false negative reconstruction phenomenon is still present and needs to be improved{cite}`cheng2020addressing`.

**Is concrete interpretability needed?** Machine learning does great job to improve products, processes and research. But computers usually do not explain their predictions. The [dark secret at the heart of AI](https://www.technologyreview.com/2017/04/11/5113/the-dark-secret-at-the-heart-of-ai/) could be a problem. Conversely, the better explanation could increase the trust in the decision to adopt Machine Learning. But this is still [challenging even to the supervised Machine Learning](https://christophm.github.io/interpretable-ml-book/), let alone Deep Learning{cite}`li2021interpretable`.

**Any risk to violate ethics or regulation?** AI presents three major areas of ethical concern for society: privacy and surveillance, bias and discrimination{cite}`pazzanese_2020`. For example to the bank, a highly regulated industry, algorithm-driven lending decisions may result in systematic disparate treatment of African Americans and other marginalized consumers.

**Any Machine Learning approaches available?** To create a TikTok alike short video platform, [Amazon Rekognition](https://aws.amazon.com/rekognition/content-moderation/) could help build the AI powered content moderation easily. And [Amazon Transcribe](https://aws.amazon.com/transcribe/) is something ready to use for generating transcript automatically for customers. To [reinvent the wheel](https://en.wikipedia.org/wiki/Reinventing_the_wheel) is resource wasting and should be avoided always.

**Is Machine Learning cost effective?** The cost of a Machine Learning solution may be across multiple aspects similar to traditional software development, such as cloud, data, device, human resource, maintenance, etc. Besides, if the team is new to Machine Learning, the additional training cost needs to be considered. If Machine Learning is one of the option, the [opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost) must be in the mind. More specifically, it is remarkably easy to incur massive ongoing maintenance costs at the system level when applying machine learning, include\ing boundary erosion, entanglement, hidden feedback loops, undeclared consumers, data dependencies, changes in the external world, and a variety of system-level anti-patterns{cite}`43146`.

## How easy to obtain the data?

It is no doubt that data is driving force of Machine Learning. Make sure you have the data required to train a model, before initiate the Machine Learning execution. Regardless the challenge to gather data from your own company or real customers, the options below could be helpful.

**[Synthetic data](https://en.wikipedia.org/wiki/Synthetic_data)**, which is any production data applicable to a given situation that are not obtained by direct measurement{cite}`lapedes1978mcgraw`. Typically, it is usually generated by a computer simulation. Today, synthetic data becomes more and more important in the entire AI landscape, and is even predicted to overshadow real data by 2030{cite}`gartner_inc`. [Generative Adversarial Networks](https://en.wikipedia.org/wiki/Generative_adversarial_network)(GANs) is one of the most popular frameworks to generate synthetic data. For example, [Ford has combined gaming engines and GANs to create synthetic data for AI training for self-driving](https://blogs.nvidia.com/blog/2020/04/23/ford-ai-data/). There are other approaches, including statistical distributions fitting, Rule-based procedural generation, benchmarks, simulations, and so on{cite}`anderson2021methods`.

```{figure} ../../images/gartner-chart.jpeg
---
name: Synthetic Data Will Completely Overshadow Real Data in AI Models
---
Synthetic Data Will Completely Overshadow Real Data in AI Models{cite}`gartner_inc`
```

```{seealso}
El Emam, Khaled, Lucy Mosquera, and Richard Hoptroff. [Practical synthetic data generation: balancing privacy and the broad availability of data](https://www.oreilly.com/library/view/practical-synthetic-data/9781492072737/). O'Reilly Media, 2020.

```

**Public data.** There are many public available Open Source or free to use datasets. They are on plenty of different topics, easy to access, and with good quality. [data.gov](https://data.gov/) is a great example for government entities. The White House under the Obama administration has been a leader in its approach to transparency and launched the website in 2009. To date, more than 300k datasets are available on the site.

```{seealso}
[Open Learning Resource - dataset](https://github.com/open-academy/open-learning-resources/blob/main/README.md#dataset) - a curated list of open source/public datasets.
```

**More data is better?** The answer is yes or no. No matter the Machine Learning performance increases monotonically{cite}`banko2001scaling` or logarithmically{cite}`8237359` based on volume of the training data size, more data is usually better. But this is not always the truth, because more data is not equal to better data once more noise introduced. Also, the appearance of large public datasets like [Imagenet](http://image-net.org/) and recent research advances makes data less of a competitive advantage.

```{seealso}
[In machine learning, is more data always better than better algorithms?](https://qr.ae/pv4GyP).
```

## What models to use?

This is one of the most widely discussed topic when people approach to a Machine Learning solution. There are three main categories of machine learning: supervised learning, unsupervised learning, and reinforcement learning. The cheat sheet from Microsoft could be a helpful quick reference.

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

**[Automated machine learning (AutoML)](https://en.wikipedia.org/wiki/Automated_machine_learning)** is the process and methods of automating the tasks of applying Machine Learning to real-world problems. It makes Machine Learning available to non-experts, such as a software engineer. There are many open source library could be leveraged for the AutoML, such as [AutoGluon](https://auto.gluon.ai/), [AutoKeras](https://github.com/keras-team/autokeras).

```{seealso}
- [automl.org - What is AutoML?](https://www.automl.org/)
- [What is automated ML? AutoML](https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml)
- [AutoML tools and solutions from AWS](https://aws.amazon.com/machine-learning/automl/)
```

## Any limitations or constraints?



## Your turn! 🚀

Apply the knowledge of this section to refine [your own Machine Learning project proposal](overview.html#your-turn).

## Self Study

- [Introduction to Machine Learning Problem Framing](https://developers.google.com/machine-learning/problem-framing)

---

```{bibliography}
:filter: docname in docnames
```
