# Model selection



## Over-fitting and under-fitting

### Overview

:::{figure-md} Over-fitting-regression
<img src="../../images/model-selection/under_over_justalright.png" width="90%" class="bg-primary mb-1">

Over-fitting and under-fitting in regression {cite}`overview_rggegularization`
:::


:::{figure-md} Over-fitting-classification
<img src="../../images/model-selection/classification.png" width="90%" class="bg-primary mb-1">

Over-fitting and under-fitting in classification {cite}`AndreasMaier`
:::

### A simple example of linear regression 

:::{figure-md} transfer-learning
<img src="../../images/model-selection/bias-and-variance-gif-thumbnail.gif" width="90%" class="bg-primary mb-1">

Transfer learning {cite}`DavidPraise`
:::


:::{figure-md} transfer-learning
<img src="../../images/model-selection/bias-variance-datapoints.jpg" width="90%" class="bg-primary mb-1">

 {cite}`DavidPraise`
:::

:::{figure-md} transfer-learning
<img src="../../images/model-selection/bias-variance-overfitting.jpg" width="90%" class="bg-primary mb-1">

 {cite}`DavidPraise`
:::


:::{figure-md} transfer-learning
<img src="../../images/model-selection/bias-variance-overfitting-testdata.jpg" width="90%" class="bg-primary mb-1">

 {cite}`DavidPraise`
:::


:::{figure-md} transfer-learning
<img src="../../images/model-selection/bias-variance-perfect-fit.jpg" width="90%" class="bg-primary mb-1">

 {cite}`DavidPraise`
:::

:::{figure-md} transfer-learning
<img src="../../images/model-selection/bias-variance-perfect-fit-test-data.jpg" width="90%" class="bg-primary mb-1">

 {cite}`DavidPraise`
:::

:::{figure-md} transfer-learning
<img src="../../images/model-selection/bias-variance-underfitting.jpg" width="90%" class="bg-primary mb-1">

 {cite}`DavidPraise`
:::

:::{figure-md} transfer-learning
<img src="../../images/model-selection/bias-variance-underfitting-test-data.jpg" width="90%" class="bg-primary mb-1">

 {cite}`DavidPraise`
:::




## Bias variance tradeoff

:::{figure-md} transfer-learning
<img src="../../images/model-selection/graphicalillustration.png" width="90%" class="bg-primary mb-1">

Graphical illustration of variance and bias {cite}`ScottFortmannRoe`
:::



:::{figure-md} Model-complexity
<img src="../../images/model-selection/total_error.png" width="90%" class="bg-primary mb-1">

Model complexity v.s. error {cite}`ScottFortmannRoe`
:::


## L1 and L2 Regularization

$$L2 Loss = Loss + \lambda\sum_{i} w_i^2$$

$$L1 Loss = Loss + \lambda\sum_{i} \lvert w \rvert$$




:::{figure-md} Model-complexity
<img src="../../images/model-selection/circlesquare.png" width="90%" class="bg-primary mb-1">

Model complexity v.s. error {cite}`ScottFortmannRoe`
:::


:::{figure-md} transfer-learning
<img src="../../images/model-selection/L1L2contour.png" width="90%" class="bg-primary mb-1">

{cite}`explainedairegularization`
:::




:::{figure-md} transfer-learning
<img src="../../images/model-selection/ridgelassoItayEvron.gif" width="90%" class="bg-primary mb-1">

 {cite}`berkeley189s21`
:::


:::{figure-md} transfer-learning
<img src="../../images/model-selection/elastic_net_balls.webp" width="90%" class="bg-primary mb-1">

 {cite}`Alexej`
:::

:::{figure-md} transfer-learning
<img src="../../images/model-selection/p-norm_balls.webp" width="90%" class="bg-primary mb-1">

 {cite}`Alexej`
:::



:::{figure-md} transfer-learning
<img src="../../images/model-selection/lagrange-animation.gif" width="90%" class="bg-primary mb-1">

The impact of the value of $\lambda$ {cite}`explainedairegularization`
:::

## Early stopping

:::{figure-md} transfer-learning
<img src="../../images/model-selection/learningcurve.png" width="90%" class="bg-primary mb-1">

 {cite}`Rhnyewale`
:::

:::{figure-md} transfer-learning
<img src="../../images/model-selection/traintestoverfitting.png" width="90%" class="bg-primary mb-1">

Early stopping {cite}`ArdenDertat`
:::


## Dropout


:::{figure-md} transfer-learning
<img src="../../images/model-selection/dropoutgif.gif" width="90%" class="bg-primary mb-1">

 {cite}`kaggle_get_started`
:::



### Prediction after dropout

:::{figure-md} transfer-learning
<img src="../../images/model-selection/kUc8r.jpg" width="90%" class="bg-primary mb-1">

 {cite}`DmytroPrylipko`
:::



During training, p neuron activations (usually, p=0.5, so 50%) are dropped. Doing this at the testing stage is not our goal (the goal is to achieve a better generalization). From the other hand, keeping all activations will lead to an input that is unexpected to the network, more precisely, too high (50% higher) input activations for the following layer {cite}`DmytroPrylipko`. 

Consider the neurons at the output layer. During training, each neuron usually get activations only from two neurons from the hidden layer (while being connected to four), due to dropout. Now, imagine we finished the training and remove dropout. Now activations of the output neurons will be computed based on four values from the hidden layer. This is likely to put the output neurons in unusual regime, so they will produce too large absolute values, being overexcited {cite}`DmytroPrylipko`.

To avoid this, the trick is to multiply the input connections' weights of the last layer by 1-p (so, by 0.5). Alternatively, one can multiply the outputs of the hidden layer by 1-p, which is basically the same {cite}`DmytroPrylipko`.


## Conclusions


:::{figure-md} transfer-learning
<img src="../../images/model-selection/ZahidHasan.png" width="90%" class="bg-primary mb-1">

 {cite}`ZahidHasan`
:::


:::{figure-md} transfer-learning
<img src="../../images/model-selection/steps.png" width="90%" class="bg-primary mb-1">

 {cite}`ZahidHasan`
:::



:::{figure-md} transfer-learning
<img src="../../images/model-selection/Bias-vs.webp" width="90%" class="bg-primary mb-1">

 {cite}`elitedatascience`
:::




<div hidden>
https://github.com/bhattbhavesh91/dropout-walkthrough/

https://github.com/Coding-Lane/L2-Regularization


</div>


<div hidden>
TODO:

Cross validation

Data Size Matters


</div>



<div hidden>

Machine Learning Tutorial Python - 20: Bias vs Variance In Machine Learning:
https://www.youtube.com/watch?v=B01qMFMAgUQ

Bias-Variance Tradeoff, Model Flexibility, Overfitting:
https://www.youtube.com/watch?v=T9DEGThjDkI

Bias/Variance (C2W1L02):
https://www.youtube.com/watch?v=SjQyLhQIXSM

Machine Learning Tutorial Python - 17: L1 and L2 Regularization | Lasso, Ridge Regression :
https://www.youtube.com/watch?v=VqKq78PVO9g

Intuitive Explanation of Ridge / Lasso Regression:
https://www.youtube.com/watch?v=9LNpiiKCQUo

L1 and L2 Regularization CIS 522 - Deep Learning:
https://www.youtube.com/watch?v=OLl2nzOeQ68

Thierry Slides Week 6, Week 1

Ridge, Lasso, Cross validation

Early Stopping, Dropout,



</div>

---

```{bibliography}
:filter: docname in docnames
```
