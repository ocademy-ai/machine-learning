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

# Visualizing proportions

In this section, you will use a different nature-focused dataset to visualize proportions, such as how many different types of fungi populate a given dataset about mushrooms. Let's explore these fascinating fungi using a dataset sourced from Audubon listing details about 23 species of gilled mushrooms in the Agaricus and Lepiota families. You will experiment with tasty visualizations such as:

- Pie charts 🥧
- Donut charts 🍩
- Waffle charts 🧇

```{seealso}
A very interesting project called [Charticulator](https://charticulator.com) by Microsoft Research offers a free drag and drop interface for data visualizations. In one of their tutorials they also use this mushroom dataset! So you can explore the data and learn the library at the same time: [Charticulator tutorial](https://charticulator.com/tutorials/tutorial4.html).
```

## Get to know your mushrooms 🍄

Mushrooms are very interesting. Let's import a dataset to study them:

```{code-cell}
:tags: [output_scroll]
import pandas as pd
import matplotlib.pyplot as plt
mushrooms = pd.read_csv('../../assets/data/mushrooms.csv')
mushrooms.head()
```

Right away, you notice that all the data is textual. You will have to convert this data to be able to use it in a chart. Most of the data, in fact, is represented as an object:

```{code-cell}
print(mushrooms.select_dtypes(["object"]).columns)
```

Take this data and convert the 'class' column to a category:

```{code-cell}
cols = mushrooms.select_dtypes(["object"]).columns
mushrooms[cols] = mushrooms[cols].astype('category')
```

```{code-cell}
:tags: [output_scroll]
edibleclass=mushrooms.groupby(['class']).count()
edibleclass
```

Now, you can see that it has been grouped into categories according to the poisonous/edible class

If you follow the order presented in this table to create your class category labels, you can build a pie chart:

## Pie!

```{code-cell}
labels=['Edible','Poisonous']
plt.pie(edibleclass['population'], labels=labels, autopct='%.1f %%')
plt.title('Edible?')
plt.show()
```

Voila, a pie chart showing the proportions of this data according to these two classes of mushrooms. It's quite important to get the order of the labels correct, especially here, so be sure to verify the order with which the label array is built!

## Donuts!

A somewhat more visually interesting pie chart is a donut chart, which is a pie chart with a hole in the middle. Let's look at our data using this method.

Take a look at the various habitats where mushrooms grow:

```{code-cell}
:tags: [output_scroll]
habitat=mushrooms.groupby(['habitat']).count()
habitat
```

Here, you are grouping your data by habitat. There are 7 listed, so use those as labels for your donut chart:

```{code-cell}
labels = ['Grasses', 'Leaves', 'Meadows', 'Paths', 'Urban', 'Waste', 'Wood']

plt.pie(habitat['class'], labels=labels,
        autopct='%1.1f%%', pctdistance=0.85)
  
center_circle = plt.Circle((0, 0), 0.40, fc='white')
fig = plt.gcf()

fig.gca().add_artist(center_circle)
  
plt.title('Mushroom Habitats')
  
plt.show()
```

This code draws a chart and a center circle, then adds that center circle in the chart. Edit the width of the center circle by changing `0.40` to another value.

Donut charts can be tweaked in several ways to change the labels. The labels in particular can be highlighted for readability. Learn more in the [docs](https://matplotlib.org/stable/gallery/pie_and_polar_charts/pie_and_donut_labels.html?highlight=donut).

Now that you know how to group your data and then display it as a pie or donut, you can explore other types of charts. Try a waffle chart, which is just a different way of exploring quantity.

## Waffles!

A 'waffle' type chart is a different way to visualize quantities as a 2D array of squares. Try visualizing the different quantities of mushroom cap colors in this dataset. To do this, you need to install a helper library called [PyWaffle](https://pypi.org/project/pywaffle/) and use Matplotlib.

Select a segment of your data to group together:

```{code-cell}
:tags: [output_scroll]
capcolor=mushrooms.groupby(['cap-color']).count()
capcolor
```

Create a waffle chart by creating labels and then grouping your data:

```{code-cell}
import pandas as pd
import matplotlib.pyplot as plt
from pywaffle import Waffle
  
data ={
    'color': ['brown', 'buff', 'cinnamon', 'green', 'pink', 'purple', 'red', 'white', 'yellow'],
    'amount': capcolor['class'],
}
  
df = pd.DataFrame(data)
  
fig = plt.figure(
    FigureClass = Waffle,
    rows = 100,
    values = df.amount,
    labels = list(df.color),
    figsize = (30,30),
    colors=["brown", "tan", "maroon", "green", "pink", "purple", "red", "whitesmoke", "yellow"],
)
```

Using a waffle chart, you can plainly see the proportions of cap colors of this mushrooms dataset. Interestingly, there are many green-capped mushrooms!

```{seealso}
Pywaffle supports icons within the charts that use any icon available in [Font Awesome](https://fontawesome.com/). Do some experiments to create an even more interesting waffle chart using icons instead of squares.
```

In this section, you learned three ways to visualize proportions. First, you need to group your data into categories and then decide which is the best way to display the data - pie, donut, or waffle. All are delicious and gratify the user with an instant snapshot of a dataset.

## Self study

Sometimes it's not obvious when to use a pie, donut, or waffle chart. Here are some articles to read on this topic:

* [Battle of the Charts: Pie Chart vs. Donut Chart| The Beautiful Blog](https://www.beautiful.ai/blog/battle-of-the-charts-pie-chart-vs-donut-chart)

* [Pie Chart vs. Donut Chart: Showdown in the Ring](https://medium.com/@hypsypops/pie-chart-vs-donut-chart-showdown-in-the-ring-5d24fd86a9ce)

* [About Doughnut Charts](https://www.mit.edu/~mbarker/formula1/f1help/11-ch-c6.htm)

* [Data Visualization Done the Right Way with Tableau- Waffle Chart](https://medium.datadriveninvestor.com/data-visualization-done-the-right-way-with-tableau-waffle-chart-fdf2a19be402)

Do some research to find more information on this sticky decision.

## Your turn! 🚀

Try recreating these tasty charts in [Charticulator](https://charticulator.com).

Assignment - [Try it in Excel](../../assignments/data-science/try-it-in-excel.md)

## Acknowledgments

Thanks to Microsoft for creating the open-source course [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners). It inspires the majority of the content in this chapter.
