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

# Bagging

In previous sections, we explored different classification algorithms as well as techniques that can be used to properly validate and evaluate the quality of your models.

Now, suppose that we have chosen the best possible model for a particular problem and are struggling to further improve its accuracy. In this case, we would need to apply some more advanced machine learning techniques that are collectively referred to as *ensembles*.

An *ensemble* is a set of elements that collectively contribute to a whole. A familiar example is a musical ensemble, which blends the sounds of several musical instruments to create harmony, or architectural ensembles, which are a set of buildings designed as a unit. In ensembles, the (whole) harmonious outcome is more important than the performance of any individual part.

## Ensembles

[Condorcet's jury theorem](https://en.wikipedia.org/wiki/Condorcet%27s_jury_theorem) (1784) is about an ensemble in some sense. It states that, if each member of the jury makes an independent judgment and the probability of the correct decision by each juror is more than 0.5, then the probability of the correct decision by the whole jury increases with the total number of jurors and tends to one. On the other hand, if the probability of being right is less than 0.5 for each juror, then the probability of the correct decision by the whole jury decreases with the number of jurors and tends to zero. 

Let's write an analytic expression for this theorem:

- $\large N$ is the total number of jurors;
- $\large m$ is a minimal number of jurors that would make a majority, that is $\large m = floor(N/2) + 1$;
- $\large {N \choose i}$ is the number of $\large i$-combinations from a set with $\large N$ elements.
- $\large p$ is the probability of the correct decision by a juror;
- $\large \mu$ is the probability of the correct decision by the whole jury.

Then:

$$ \large \mu = \sum_{i=m}^{N}{N\choose i}p^i(1-p)^{N-i} $$

It can be seen that if $\large p > 0.5$, then $\large \mu > p$. In addition, if $\large N \rightarrow \infty $, then $\large \mu \rightarrow 1$.

Let's look at another example of ensembles: an observation known as [Wisdom of the crowd](https://en.wikipedia.org/wiki/Wisdom_of_the_crowd). <img src="https://habrastorage.org/webt/zg/hw/b7/zghwb7oztkmv840odqkjpink1vw.png" align="right" width=15% height=15%> In 1906, [Francis Galton](https://en.wikipedia.org/wiki/Francis_Galton) visited a country fair in Plymouth where he saw a contest being held for farmers.   800 participants tried to estimate the weight of a slaughtered bull. The real weight of the bull was 1198 pounds. Although none of the farmers could guess the exact weight of the animal, the average of their predictions was 1197 pounds.


A similar idea for error reduction was adopted in the field of Machine Learning.

## Bootstrapping

*Bagging* (also known as [Bootstrap aggregation](https://en.wikipedia.org/wiki/Bootstrap_aggregating)) is one of the first and most basic ensemble techniques. It was proposed by [Leo Breiman](https://en.wikipedia.org/wiki/Leo_Breiman) in 1994. Bagging is based on the statistical method of [bootstrapping](https://en.wikipedia.org/wiki/Bootstrapping_%28statistics%29), which makes the evaluation of many statistics of complex models feasible.

The bootstrap method goes as follows. Let there be a sample $\large X$ of size $\large N$. We can make a new sample from the original sample by drawing $\large N$ elements from the latter randomly and uniformly, with replacement. In other words, we select a random element from the original sample of size $\large N$ and do this $\large N$ times. All elements are equally likely to be selected, thus each element is drawn with the equal probability $\large \frac{1}{N}$.

Let's say we are drawing balls from a bag one at a time. At each step, the selected ball is put back into the bag so that the next selection is made equiprobably i.e. from the same number of balls $\large N$. Note that, because we put the balls back, there may be duplicates in the new sample. Let's call this new sample $\large X_1$.

By repeating this procedure $\large M$ times, we create $\large M$ *bootstrap samples* $\large X_1, \dots, X_M$. In the end, we have a sufficient number of samples and can compute various statistics of the original distribution.

:::{figure-md}
<img src="https://habrastorage.org/webt/n0/dg/du/n0dgduav1ygc3iylumtwjcn15mu.png" width="90%" class="bg-white mb-1">

Process of bootstrap
:::

For our example, we'll use the familiar `telecom_churn` dataset. Previously, when we discussed feature importance, we saw that one of the most important features in this dataset is the number of calls to customer service. Let's visualize the data and look at the distribution of this feature.

```{code-cell}
import numpy as np
import pandas as pd
import seaborn as sns
from matplotlib import pyplot as plt


# Graphics in retina format are more sharp and legible
%config InlineBackend.figure_format = 'retina'
```

```{code-cell}
:tags: ["output_scroll"]
telecom_data = pd.read_csv("../../assets/data/telecom_churn.csv")

telecom_data.head()
```

```{code-cell}
telecom_data.loc[telecom_data["Churn"] == False, "Customer service calls"].hist(
    label="Loyal"
)
telecom_data.loc[telecom_data["Churn"] == True, "Customer service calls"].hist(
    label="Churn"
)
plt.xlabel("Number of calls")
plt.ylabel("Density")
plt.legend();
```

Looks like loyal customers make fewer calls to customer service than those who eventually leave. Now, it might be a good idea to estimate the average number of customer service calls in each group. Since our dataset is small, we would not get a good estimate by simply calculating the mean of the original sample. We will be better off applying the bootstrap method. Let's generate 1000 new bootstrap samples from our original population and produce an interval estimate of the mean.

```{code-cell}
def get_bootstrap_samples(data, n_samples):
    """Generate bootstrap samples using the bootstrap method."""
    indices = np.random.randint(0, len(data), (n_samples, len(data)))
    samples = data[indices]
    return samples


def stat_intervals(stat, alpha):
    """Produce an interval estimate."""
    boundaries = np.percentile(stat, [100 * alpha / 2.0, 100 * (1 - alpha / 2.0)])
    return boundaries


# Save the data about the loyal and former customers to split the dataset
loyal_calls = telecom_data.loc[
    telecom_data["Churn"] == False, "Customer service calls"
].values
churn_calls = telecom_data.loc[
    telecom_data["Churn"] == True, "Customer service calls"
].values

# Set the seed for reproducibility of the results
np.random.seed(0)

# Generate the samples using bootstrapping and calculate the mean for each of them
loyal_mean_scores = [
    np.mean(sample) for sample in get_bootstrap_samples(loyal_calls, 1000)
]
churn_mean_scores = [
    np.mean(sample) for sample in get_bootstrap_samples(churn_calls, 1000)
]

# Print the resulting interval estimates
print(
    "Service calls from loyal: mean interval", stat_intervals(loyal_mean_scores, 0.05)
)
print(
    "Service calls from churn: mean interval", stat_intervals(churn_mean_scores, 0.05)
)
```

For the interpretation of confidence intervals, you can address this [concise note](https://www.graphpad.com/guides/prism/7/statistics/stat_more_about_confidence_interval.htm?toc=0&printWindow) or any course on statistics. It's not correct to say that a confidence interval contains 95% of values. Note that the interval for the loyal customers is narrower, which is reasonable since they make fewer calls (0, 1 or 2) in comparison with the churned clients who call until they are fed up and decide to switch providers. 

## Bagging

Now that you've grasped the idea of bootstrapping, we can move on to *bagging*. 

Suppose that we have a training set $\large X$. Using bootstrapping, we generate samples $\large X_1, \dots, X_M$. Now, for each bootstrap sample, we train its own classifier $\large a_i(x)$. The final classifier will average the outputs from all these individual classifiers. In the case of classification, this technique corresponds to voting:
$$\large a(x) = \frac{1}{M}\sum_{i = 1}^M a_i(x).$$

The picture below illustrates this algorithm:

:::{figure-md}
<img src="https://habrastorage.org/webt/3t/ab/xy/3tabxy0j8tqqkctkc9f-89ep780.png" width="90%" class="bg-white mb-1">

Illustration of Bagging
:::

Let's consider a regression problem with base algorithms $\large b_1(x), \dots , b_n(x)$. Assume that there exists an ideal target function of true answers $\large y(x)$ defined for all inputs and that the distribution $\large p(x)$ is defined. We can then express the error for each regression function as follows:  

$$\large \varepsilon_i(x) = b_i(x) - y(x), \quad i = 1, \dots, n$$

And the expected value of the mean squared error:  

$$\large E_x\left[\left(b_i(x) - y(x)\right)^{2}\right] = E_x\left[\varepsilon_i^{2}(x)\right]$$

Then, the mean error over all regression functions will look as follows:

$$\large E_1 = \frac{1}{n} E_x\left[ \sum_i^n \varepsilon_i^{2}(x)\right]$$

We'll assume that the errors are unbiased and uncorrelated, that is: 

$$\large \begin{array}{rcl} E_x\left[\varepsilon_i(x)\right] &=& 0, \\
E_x\left[\varepsilon_i(x)\varepsilon_j(x)\right] &=& 0, \quad i \neq j. \end{array}$$

Now, let's construct a new regression function that will average the values from the individual functions: 

$$\large a(x) = \frac{1}{n}\sum_{i=1}^{n}b_i(x)$$

Let's find its mean squared error:

$$\large \begin{array}{rcl} E_n &=& E_x\left[\frac{1}{n}\sum_{i=1}^{n}b_i(x)-y(x)\right]^2 \\
&=&  E_x\left[\frac{1}{n}\sum_{i=1}^{n}\varepsilon_i\right]^2 \\
&=& \frac{1}{n^2} E_x\left[\sum_{i=1}^{n}\varepsilon_i^2(x) + \sum_{i \neq j}\varepsilon_i(x)\varepsilon_j(x)\right] \\
&=& \frac{1}{n} E_1\end{array}$$

Thus, by averaging the individual answers, we reduced the mean squared error by a factor of $\large n$.

From our previous section, let's recall the components that make up the total out-of-sample error:

$$\large \begin{array}{rcl} 
 Err\left(\vec{x}\right) &=&  E\left[\left(y - \hat{f}\left(\vec{x}\right)\right)^2\right] \\
&=& \sigma^2 + f^2 +  Var\left(\hat{f}\right) + E\left[\hat{f}\right]^2 - 2fE\left[\hat{f}\right] \\
&=& \left(f - E\left[\hat{f}\right]\right)^2 + Var\left(\hat{f}\right) + \sigma^2 \\
&=& Bias\left(\hat{f}\right)^2 + Var\left(\hat{f}\right) + \sigma^2
\end{array}$$

Bagging reduces the variance of a classifier by decreasing the difference in error when we train the model on different datasets. In other words, bagging prevents overfitting. The efficiency of bagging comes from the fact that the individual models are quite different due to the different training data and their errors cancel each other out during voting. Additionally, outliers are likely omitted in some of the training bootstrap samples.

The `scikit-learn` library supports bagging with meta-estimators `BaggingRegressor` and `BaggingClassifier`. You can use most of the algorithms as a base.

Let's examine how bagging works in practice and compare it with a decision tree. For this, we will use an example from [sklearn's documentation](http://scikit-learn.org/stable/auto_examples/ensemble/plot_bias_variance.html#sphx-glr-auto-examples-ensemble-plot-bias-variance-py).

:::{figure-md}
<img src="https://habrastorage.org/webt/9l/gv/_o/9lgv_outzpteptakegjbpyfp2ue.png" width="90%" class="bg-white mb-1">

Comparison of Bagging and Tree
:::

The error for the decision tree:

$$ \large 0.0255 \, (Err) = 0.0003 \, (Bias^2)  + 0.0152 \, (Var) + 0.0098 \, (\sigma^2) $$

The error when using bagging:

$$ \large 0.0196 \, (Err) = 0.0004 \, (Bias^2)  + 0.0092 \, (Var) + 0.0098 \, (\sigma^2) $$  

As you can see from the graph above, the variance in the error is much lower for bagging. Remember that we have already proved this theoretically.

Bagging is effective on small datasets. Dropping even a small part of training data leads to constructing substantially different base classifiers. If you have a large dataset, you would generate bootstrap samples of a much smaller size.

The example above is unlikely to be applicable to any real work. This is because we made a strong assumption that our individual errors are uncorrelated. More often than not, this is way too optimistic for real-world applications. When this assumption is false, the reduction in error will not be as significant. In the following sections, we will discuss some more sophisticated ensemble methods, which enable more accurate predictions in real-world problems.

## Out of bag error

In case of Random Forest, there is no need to use cross-validation or hold-out samples in order to get an unbiased error estimation. Why? Because, in ensemble techniques, the error estimation takes place internally.
 
Random trees are constructed using different bootstrap samples of the original dataset. Approximately 37% of inputs are left out of a particular bootstrap sample and are not used in the construction of the $\large k$-th tree.

This is easy to prove. Suppose there are $\large \ell$ examples in our dataset. At each step, each data point has equal probability of ending up in a bootstrap sample with replacement, probability $\large\frac{1}{\ell}.$ The probability that there is no such bootstrap sample that contains a particular dataset element (i.e. it has been omitted $\large \ell$ times) equals $\large (1 - \frac{1}{\ell})^\ell$. When $\large \ell \rightarrow +\infty$, it becomes equal to the [Second Remarkable Limit](https://en.wikipedia.org/wiki/List_of_limits) $\large \frac{1}{e}$. Then, the probability of selecting a specific example is $\large \approx  1 - \frac{1}{e} \approx 63\%$.

Let's visualize how **O**ut-**o**f-**B**ag **E**rror (or OOBE) estimation works:

:::{figure-md}
<img src="https://habrastorage.org/webt/mt/zr/ox/mtzroxoyxu0xcpmsbslgwbs1vs8.png" width="90%" class="bg-white mb-1">

Principle of OOBE
:::

The top part of the figure above represents our original dataset. We split it into the training (left) and test (right) sets. In the left image, we draw a grid that perfectly divides our dataset according to classes. Now, we use the same grid to estimate the share of the correct answers on our test set. We can see that our classifier gave incorrect answers in those 4 cases that have not been used during training (on the left). Hence, the accuracy of our classifier is $\large \frac{11}{15}*100\% = 73.33\%$.

To sum up, each base algorithm is trained on $\large \approx 63\%$ of the original examples. It can be validated on the remaining $\large \approx 37\%$. The Out-of-Bag estimate is nothing more than the mean estimate of the base algorithms on those $\large \approx 37\%$ of inputs that were left out of training. 

## Your turn! 🚀

TBD

## Acknowledgments

Thanks to [Yury Kashnitsky](https://www.kaggle.com/kashnitsky) for creating the open-source content [Ensembles and random forest](https://www.kaggle.com/code/kashnitsky/topic-5-ensembles-part-1-bagging/notebook). They inspire the majority of the content in this chapter.