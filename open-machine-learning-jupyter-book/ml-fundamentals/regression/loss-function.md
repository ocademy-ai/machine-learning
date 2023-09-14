# 股市预测实操训练线性回归模型(1/6)

机器学习中的线性回归就能预测股市？这个真实数据集包含了2005-2020年间美国几个巨头公司的股市数据，包括每天的开盘价、收盘价、最高价、最低价、成交量、换手率等信息。今天我们就用它来练练手，看看我们会亏还是会赚。



<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work143.png" alt="1">



加载数据集，我们先来看一看这些年表现一直非常稳健的苹果公司。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work176.png" alt="2">


这里一共有3732天的股市数据，每一行数据有63列。这里有一列数据很特别，叫做Close_forecast,
它是股票的次日收盘价。在爬取的原始数据中这一列并不存在，是Kaggle
为了将其改为更适合机器学习练习数据集而加入的。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work293.png" alt="3">


我们选取Close_forecast这一列作为机器学习模型的预测目标
target、也就是标签
label，其余的62列作为特征feature。然后用75%的数据作为训练集，25%的数据作为测试集。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work394.png" alt="4">


最后调用 sklearn 的 LinearRegression.fit
方法，还是简单的两行代码，我们就把线性回归模型训练出来了。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work462.png" alt="5">


有了模型，就该我们的测试集上场了，我们将模型在测试集上进行预测做个测试来看一看。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work505.png" alt="6">


这结果乍一看可能会吓你一跳，预测出来的股价波动的也太厉害了。不过我可以先给大家吃一颗定心丸，我们的线性回归模型没有问题，而且事实上它的效果很好。上面的代码，大家只管放心去用。至于为什么会有这么杂乱变动的预测结果，我们将在下起内容中再详细分析。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work629.png" alt="7">


跟我一起，一天一点机器学习。

对应 kaggle数据集:

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

对应代码：

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)

# 股市预测实操模型性能评估(2/6)

在上期内容中我们在一个真实股市数据集上，用线性回归进行了股价预测，得到的结果看上去杂乱无章、大涨大跌。线性回归真的能预测股价吗？如果股市是这个样子，相信你和我的内心OS会是一样的：跑！跑的越远越好！


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work1686.png" alt="8">



<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work1688.png" alt="9">


事出反常必有妖，我们来仔细看看测试集里面的y_test 长什么样。原来，y_test
在创建的时候，顺序是打乱的。事实上，sklearn里面的train_test_split方面里面有个参数叫做shuffle，它默认是
True ，也就是在训练测试集分离时默认是顺序打乱的。

打乱顺序本身其实并没有什么问题，但在日常生活里股价是随着时间比较平滑变动的一条曲线，所以我们测试的结果乍看上去会很怪，因为它不符合常识。如果我们把shuffle设置为False就能避免这种情况，大家感兴趣可以自己动手试试。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work1941.png" alt="9">


我们这里把训练集中真实的 y标签值和预测出来的
y标签值放在一起，然后排序，将两者对比一下，能看到每天的差别都很小。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work2002.png" alt="100">


我们把上面的数据用 matplotlib
作图来看一下，更加一目了然，结果非常的好，蓝色的真实值和绿色的标签值几乎完全重合。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work2067.png" alt="11">


我们计算一下R平方、MAPE这些评估指标，结果也很好，和上面的分析一致。这都表明线性回归在这个真实的股市数据上用起来效果很好。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work2133.png" alt="12">


需要提醒大家注意，评估指标往往是在测试数据集上使用，但也可以同时在训练集和测试集上计算再进行对比评估。为什么跟大家强调这一点呢？因为在下一期的内容中我们会学习到损失函数，它的计算是只针对训练集的。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work2234.png" alt="13">


跟我一起，一天一点机器学习。

对应 kaggle数据集:

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

对应代码：

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)

# 股市预测实操引入损失函数(3/6)

在往期内容中我们使用线性回归对股价进行了预测，在测试集上测试，并计算评估指标，模型的效果非常的好。股市中赚钱是不是有点太容易了？没错，这完全是在做梦。

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work3268.png" alt="14">



我们把苹果公司2005年到2022年每天的收盘价作图来看，如果你在图中的第一天买入，一直持有到最后一天，大概会有几十倍的投资回报。但实际中想要做到这一点其实非常的难。

作为普通投资者，我们没有时间机器，即使我们非常看好苹果公司的股票，也无法预测出15年后的事情。所以一般来说我们也不会特别长期的持有股票，往往是进行短期或者中期的投资。如果股价在一定时间内有较好的增长，我们会在某个时间点卖出，选择见好就收；或者，股价持续低迷，我们也会在某个时间点选择卖出，及时止损。

<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work3354.png" alt="15">



<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work3506.png" alt="16">


当然，我们在这里没法教给大家股票投资的策略，但如果机器学习能够比较好的预测股价，那么对于我们制定投资策略则会有很大的帮助。通过模型预测我们知道，苹果的股票在15年中持续上涨，那么我们在2005年买入，在2020年卖出，是一定可以盈利的。

而如果上面得到的模型在更细的粒度上也足够准确，那么我们甚至可以在这15年中多次交易，每逢股价要降时就在局部高点抛出手里的全部股票，而每逢股价要升时就在局部低点将资金全部买入股票，这样的收益肯定要比简单的长期持有要更加的优化。当然这里的前提是我们的预测结果要与真实情况完全吻合，事实上它是不可能的。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work3777.png" alt="17">


虽然评估指标显示我们模型的性能是不错的，但它是否好到能够支撑前面提到的第二种投资策略呢？或者说，是否可以对它进一步优化，让我们就能够从第二种投资策略中赚到更多的钱呢？

答案是肯定的，而且这里我们就需要引出一个新的概念了，它就是损失函数Loss
Function，也叫作代价函数cost
function，用来在训练集上度量模型预测与真实值之间的差异或错误程度。那么下节内容，我们就来看一看如何计算损失函数。

跟我一起，一天一点机器学习。

对应 kaggle数据集:

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

对应代码：

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)

# 股市预测实操计算损失函数(4/6)

往期内容我们使用线性回归成功进行了股市的预测，在它的指导下我们高买低卖，赚的盆满钵满。但我们还不满足，因为模型的预测和真实情况还是会出现偏差，导致我们有几次买在了高点而卖在了低点。本着钱多了不烫手的原则，我们希望通过损失函数来对模型进一步优化，今天就先来看一看如何计算损失函数。

针对回归任务，常见的损失函数有三种。第一种， 均方误差（Mean Squared
Error，MSE），用来衡量**训练集上**预测值与真实值之间的**平方差**的平均值；第二种，
均绝对误差（Mean Absolute
Error，MAE），用来衡量**训练集上**预测值与真实值之间的**绝对差**的平均值。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5223.png" alt="18">


那么我们就来计算一下训练集上每个数据点的平方误差和绝对误差，代码非常的简单，取出训练集的标签与预测结果两列，借助NumPy进行一些简单的数学运算即可。得到的结果我们将它们命名为AE与SE两列，就是图中紫色线框中的数据。大家能看到它的取值不论大小总不为0，也就是说我们的预测值与实际值总是多多少少存在一些差异。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5380.png" alt="19">


更进一步，我们可以作图看看AE和SE的结果随时间变化的情况。能够发现，随着时间的推移它们的结果呈现出不断变大的趋势，这也就是说，在训练集上测试出的结果越靠近2005年越准确。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5470.png" alt="20">


最后，我们在AE和SE这两列数据上取均值，就可以得到损失函数的结果MAE和MSE了。到这里，我们就计算出了线性回归的两种最常见的损失函数的值。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5544.png" alt="21">


用心的同学可能已经发现了，这两个损失函数跟之前学过的评估指标中的MAE和MSE好像很相似啊。没错，损失函数和评估指标这两个概念确实有很多重叠之处，但也有关键区别。下期内容我们来一起好好分析一下。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5644.png" alt="22">


跟我一起，一天一点机器学习。

# 股市预测实操理解损失函数(5/6)

损失函数，评估指标，傻傻分不清楚，首先我们来看看它们两者之间的相同之处。损失函数和评估指标都是用来衡量模型预测能力的。其实我们说的
MAE或MSE
本身只是一些统计学概念，它们可以被用作评估指标、也可以被用作损失函数，两者的数学计算完全一样。

这里上方的代码块计算的是MAE和MSE两个损失函数，下方的代码块计算的是MAE和MSE两个评估指标，如果输入数据一样，得到的结果也会完全一样。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work5874.png" alt="23">


那么损失函数和评估指标又有哪些关键不同呢？第一，评估指标除了 MAE、MSE
等外，还有 R squared、explained
variance等，这些是损失函数里没有的概念。第二，两者的目的不同，损失函数主要用于模型训练，帮助模型逐步调整参数以减小预测误差；而评估指标用于对训练好的模型的性能进行总结和比较，以了解模型的整体效果，或者比较不同模型之间的性能差异，指导模型选择。第三，两者的优化方向不同，对于损失函数，我们往往追求最小化它的结果，因为更小的损失值意味着预测值与真实值更为接近；而在评估指标中，我们往往追求最大化其值，比如
R
squared，因为更大的评估指标值意味着模型性能更好。这个差异反映了损失函数和评估指标在机器学习任务中的不同角色。第四，在上期的内容中我强调过损失函数往往是在训练集上计算，在测试集上计算的情况很少；相反，评估指标往往是在测试集上计算，在训练集上计算的情况少一些。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6281.png" alt="24">



<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6284.png" alt="25">



<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6286.png" alt="26">



<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6288.png" alt="27">


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work6290.png" alt="28">


这四点差异是不是有些太多了，一时难以消化吸收？没有关系，在回归任务中这两者的区别没有在分类任务中明显。这里只是打一个伏笔，在分类任务中，我们会再次学习评估指标和损失函数的概念。在对机器学习的全貌有了更多的了解之后，这些知识就会逐渐融会贯通，变得简单起来。

大家循序渐进，跟我一起，一天一点机器学习。

对应 kaggle数据集:

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

对应代码：

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)

# 股市预测实操梯度下降优化模型(6/6)

往期内容我们使用sklearn的LinearRegression，在真实的美国股市数据集上训练，用线性回归模型进行了股价的预测，并且计算了模型的损失函数。我们还可以使用SGDRegressor进行线性回归模型的求解。这里的
SGD 是随机梯度下降Stochastic Gradient
Descent的缩写，大家暂时不用管它的细节，我们很快将学习到。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7563.png" alt="29">


SGDRegressor的训练过程是迭代式的，我们可以记录下训练过程中损失函数的变化，这样就可以利用损失函数对模型进行优化。

我们从模型的初始状态开始，训练100个Epoch，也就是100个轮次，并且把每轮训练后的损失函数记录在一个数组里面。大家再次注意，我们的损失函数是在训练数据集上计算的。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7714.png" alt="30">


我们把前30个损失函数的结果用Matplotlib作图，可以看出随着轮次的增加，损失函数逐渐下降，而且前期下降较快、后期下降较慢。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7782.png" alt="31">


进一步，我们把100个训练轮次的损失函数结果都作图展示，可以看出，它的值在前期一直下降，直到大概60个轮次后才趋于稳定。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7845.png" alt="32">


你肯定会好奇，SDGRegressor模型的损失函数在训练的过程中逐渐变小，这背后究竟发生了什么？我们打印一下模型的
coef_属性来看看，它也就是线性模型的各项系数。首先从1个训练轮次得到的模型开始，我们得到了这样的结果。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7960.png" alt="33">


然后是10个训练轮次时的模型参数，我们得到了这样的结果。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work7991.png" alt="34">


最后再看100个训练轮次时的模型参数，可以发现，随着训练轮次的增加，线性模型的参数也一直在变动。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work8042.png" alt="35">


其实大家可以这么理解，在SDGRegressor模型的训练过程中，算法在一直尝试降低损失函数，换句话说这就是模型优化的方向。SDGRegressor的每一轮训练都会得到一个模型，这个模型在训练集上就可以得到一个新的损失函数值。如果算法每一次都能寻找到一个比上一次更小的损失函数结果，那么模型也就会比上一个轮次更优化一些。这样，随着训练轮次的增加，损失函数会越变越小直至趋于稳定，而模型的参数也与其共同变化，最终达到最优结果。


<img src="https://static-1300131294.cos.ap-shanghai.myqcloud.com/images/One%20Day%20One%20Machine%20Learning/work.files/work8257.png" alt="36">


当然这里的表述有一些不严谨的地方，我们将在接下来的梯度下降系列内容中为大家带来更加细致的解答。跟我一起，一天一点机器学习。

对应 kaggle数据集:

[https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features](https://www.kaggle.com/datasets/nikhilkohli/us-stock-market-data-60-extracted-features)

对应代码：

[https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb](https://github.com/ocademy-ai/python-code-for-videos/blob/main/linear-regression-loss-function.ipynb)
