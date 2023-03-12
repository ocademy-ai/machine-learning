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

# NumPy

NumPy is the fundamental package for scientific computing in Python. It is a Python library that provides a multidimensional array object, various derived objects (such as masked arrays and matrices), and an assortment of routines for fast operations on arrays, including mathematical, logical, shape manipulation, sorting, selecting, I/O, discrete Fourier transforms, basic linear algebra, basic statistical operations, random simulation and much more.

## Basic introduction to array

NumPy’s main object is the homogeneous multidimensional array. It is a table of elements (usually numbers), all of the same type, indexed by a tuple of non-negative integers. In NumPy dimensions are called axes.

For example, the array for the coordinates of a point in 3D space, `[1, 2, 1]`, has one axis. That axis has 3 elements in it, so we say it has a length of 3. In the example pictured below, the array has 2 axes. The first axis has a length of 2, the second axis has a length of 3.

```{code-cell}
[[1., 0., 0.],
 [0., 1., 2.]]
 ```

### Create a basic array

To create a NumPy array, you can use the function `np.array()`.

All you need to do to create a simple array is pass a list to it. If you choose to, you can also specify the type of data in your list.

```{code-cell}
import numpy as np
a = np.array([1, 2, 3])
a
```

Besides creating an array from a sequence of elements, you can easily create an array filled with `0`’s:

```{code-cell}
np.zeros(2)
```

Or an array filled with 1’s:

```{code-cell}
np.ones(2)
```

Or even an empty array! The function `empty` creates an array whose initial content is random and depends on the state of the memory. The reason to use `empty` over `zeros` (or something similar) is speed - just make sure to fill every element afterwards!

```{code-cell}
np.empty(2) 
```

You can create an array with a range of elements:

```{code-cell}
np.arange(4)
```

And even an array that contains a range of evenly spaced intervals. To do this, you will specify the **first number**, **last number**, and the **step size**.

```{code-cell}
np.arange(2, 9, 2)
```

You can also use `np.linspace()` to create an array with values that are spaced linearly in a specified interval:

```{code-cell}
np.linspace(0, 10, num=5)
```

While the default data type is floating point (`np.float64`), you can explicitly specify which data type you want using the `dtype` keyword.

```{code-cell}
np.ones(2, dtype=np.int64)
```

### Adding, removing, and sorting elements

Sorting an element is simple with `np.sort()`. You can specify the axis, kind, and order when you call the function.

If you start with this array:

```{code-cell}
arr = np.array([2, 1, 5, 3, 7, 4, 6, 8])
```

You can quickly sort the numbers in ascending order with:

```{code-cell}
np.sort(arr)
```

In addition to sort, which returns a sorted copy of an array, you can use:

- `argsort`, which is an indirect sort along a specified axis,
- `lexsort`, which is an indirect stable sort on multiple keys,
- `searchsorted`, which will find elements in a sorted array,
- `partition`, which is a partial sort.

If you start with these arrays:

```{code-cell}
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])
```

You can concatenate them with `np.concatenate()`.

```{code-cell}
np.concatenate((a, b))
```

Or, if you start with these arrays:

```{code-cell}
x = np.array([[1, 2], [3, 4]])
y = np.array([[5, 6]])
```

You can concatenate them with:

```{code-cell}
np.concatenate((x, y), axis=0)
```

In order to remove elements from an array, it’s simple to use indexing to select the elements that you want to keep.

### NumPy array attributes

NumPy’s array class is called `ndarray`. It is also known by the alias `array`. Note that `numpy.array` is not the same as the Standard Python Library class `array.array`, which only handles one-dimensional arrays and offers less functionality. The more important attributes of an `ndarray` object are:

- ndarray.ndim
    The number of axes (dimensions) of the array.

```{code-cell}
import numpy as np
a = np.arange(15).reshape(3, 5)
a
```

```{code-cell}
a.ndim
```

- ndarray.shape
    The dimensions of the array. This is a tuple of integers indicating the size of the array in each dimension. For a matrix with *n* rows and *m* columns, `shape` will be `(n,m)`. The length of the `shape` tuple is therefore the number of axes, `ndim`.

```{code-cell}
a.shape
```

- ndarray.size
    The total number of elements of the array. This is equal to the product of the elements of `shape`.

```{code-cell}
a.size
```

- ndarray.dtype
    An object describing the type of the elements in the array. One can create or specify dtype’s using standard Python types. Additionally NumPy provides types of its own. numpy.int32, numpy.int16, and numpy.float64 are some examples.

```{code-cell}
a.dtype
```

```{code-cell}
a.dtype.name
```

- ndarray.itemsize
    The size in bytes of each element of the array. For example, an array of elements of type `float64` has `itemsize` 8 (=64/8), while one of type `complex32` has `itemsize` 4 (=32/8). It is equivalent to `ndarray.dtype.itemsize`.

```{code-cell}
a.itemsize
```

- ndarray.data
    The buffer containing the actual elements of the array. Normally, we won’t need to use this attribute because we will access the elements in an array using indexing facilities.

```{code-cell}
a.data
```

### Reshape an array

Using `arr.reshape()` will give a new shape to an array without changing the data. Just remember that when you use the reshape method, the array you want to produce needs to have the same number of elements as the original array. If you start with an array with 12 elements, you’ll need to make sure that your new array also has a total of 12 elements.

If you start with this array:

```{code-cell}
a = np.arange(6)
a
```

You can use `reshape()` to reshape your array. For example, you can reshape this array to an array with three rows and two columns:

```{code-cell}
b = a.reshape(3, 2)
b
```

With `np.reshape`, you can specify a few optional parameters:

```{code-cell}
np.reshape(a, newshape=(1, 6), order='C')
```

`a` is the array to be reshaped.

`newshape` is the new shape you want. You can specify an integer or a tuple of integers. If you specify an integer, the result will be an array of that length. The shape should be compatible with the original shape.

`order:` `C` means to read/write the elements using C-like index order, `F` means to read/write the elements using Fortran-like index order, `A` means to read/write the elements in Fortran-like index order if a is Fortran contiguous in memory, C-like order otherwise. (This is an optional parameter and doesn’t need to be specified.)

### Convert a 1D array into a 2D array(add a new axis to an array)

You can use `np.newaxis` and `np.expand_dims` to increase the dimensions of your existing array.

Using `np.newaxis` will increase the dimensions of your array by one dimension when used once. This means that a 1D array will become a 2D array, a 2D array will become a 3D array, and so on.

For example, if you start with this array:

```{code-cell}
a = np.array([1, 2, 3, 4, 5, 6])
a.shape
```

You can use `np.newaxis` to add a new axis:

```{code-cell}
a2 = a[np.newaxis, :]
a2.shape
```

You can explicitly convert a 1D array with either a row vector or a column vector using `np.newaxis`. For example, you can convert a 1D array to a row vector by inserting an axis along the first dimension:

```{code-cell}
row_vector = a[np.newaxis, :]
row_vector.shape
```

Or, for a column vector, you can insert an axis along the second dimension:

```{code-cell}
col_vector = a[:, np.newaxis]
col_vector.shape
```

You can also expand an array by inserting a new axis at a specified position with `np.expand_dims`.

For example, if you start with this array:

```{code-cell}
a = np.array([1, 2, 3, 4, 5, 6])
a.shape
```

You can use np.expand_dims to add an axis at index position 1 with:

```{code-cell}
b = np.expand_dims(a, axis=1)
b.shape
```

You can add an axis at index position 0 with:

```{code-cell}
c = np.expand_dims(a, axis=0)
c.shape
```

### Indexing and slicing

You can index and slice NumPy arrays in the same ways you can slice Python lists.

```{code-cell}
data = np.array([1, 2, 3])
```

```{code-cell}
data[1]
```

```{code-cell}
data[0:2]
```

```{code-cell}
data[1:]
```

```{code-cell}
data[-2:]
```

You may want to take a section of your array or specific array elements to use in further analysis or additional operations. To do that, you’ll need to subset, slice, and/or index your arrays.

If you want to select values from your array that fulfill certain conditions, it’s straightforward with NumPy.

For example, if you start with this array:

```{code-cell}
a = np.array([[1 , 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

You can easily print all of the values in the array that are less than 5.

```{code-cell}
a[a < 5]
```

You can also select, for example, numbers that are equal to or greater than 5, and use that condition to index an array.

```{code-cell}
five_up = (a >= 5)
a[five_up]
```

You can select elements that are divisible by 2:

```{code-cell}
divisible_by_2 = a[a%2==0]
divisible_by_2
```

Or you can select elements that satisfy two conditions using the `&` and `|` operators:

```{code-cell}
c = a[(a > 2) & (a < 11)]
c
```

You can also make use of the logical operators `&` and `|` in order to return boolean values that specify whether or not the values in an array fulfill a certain condition. This can be useful with arrays that contain names or other categorical values.

```{code-cell}
five_up = (a > 5) | (a == 5)
five_up
```

You can also use `np.nonzero()` to select elements or indices from an array.

Starting with this array:

```{code-cell}
a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

You can use `np.nonzero()` to print the indices of elements that are, for example, less than 5:

```{code-cell}
b = np.nonzero(a < 5)
b
```

In this example, a tuple of arrays was returned: one for each dimension. The first array represents the row indices where these values are found, and the second array represents the column indices where the values are found.

If you want to generate a list of coordinates where the elements exist, you can zip the arrays, iterate over the list of coordinates, and print them. For example:

```{code-cell}
list_of_coordinates= list(zip(b[0], b[1]))
for coord in list_of_coordinates:
    print(coord)
```

You can also use `np.nonzero()` to print the elements in an array that are less than 5 with:

```{code-cell}
a[b]
```

If the element you’re looking for doesn’t exist in the array, then the returned array of indices will be empty. For example:

```{code-cell}
not_there = np.nonzero(a == 42)
not_there
```

### Create an array from existing data

You can easily create a new array from a section of an existing array.

Let’s say you have this array:

```{code-cell}
a = np.array([1,  2,  3,  4,  5,  6,  7,  8,  9, 10])
```

You can create a new array from a section of your array any time by specifying where you want to slice your array.

```{code-cell}
arr1 = a[3:8]
arr1
```

Here, you grabbed a section of your array from index position 3 through index position 8.

You can also stack two existing arrays, both vertically and horizontally. Let’s say you have two arrays, `a1` and `a2`:

```{code-cell}
a1 = np.array([[1, 1],
               [2, 2]])
a2 = np.array([[3, 3],
               [4, 4]])
```

You can stack them vertically with `vstack`:

```{code-cell}
np.vstack((a1, a2))
```

Or stack them horizontally with hstack:

```{code-cell}
np.hstack((a1, a2))
```

You can split an array into several smaller arrays using `hsplit`. You can specify either the number of equally shaped arrays to return or the columns after which the division should occur.

Let’s say you have this array:

```{code-cell}
x = np.arange(1, 25).reshape(2, 12)
x
```

If you wanted to split this array into three equally shaped arrays, you would run:

```{code-cell}
np.hsplit(x, 3)
```

If you wanted to split your array after the third and fourth column, you’d run:

```{code-cell}
np.hsplit(x, (3, 4))
```

You can use the `view` method to create a new array object that looks at the same data as the original array (a shallow copy).

Views are an important NumPy concept! NumPy functions, as well as operations like indexing and slicing, will return views whenever possible. This saves memory and is faster (no copy of the data has to be made). However it’s important to be aware of this - modifying data in a view also modifies the original array!

Let’s say you create this array:

```{code-cell}
a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
```

Now we create an array `b1` by slicing `a` and modify the first element of `b1`. This will modify the corresponding element in `a` as well!

```{code-cell}
b1 = a[0, :]
b1
```

```{code-cell}
b1[0] = 99
b1
```

```{code-cell}
a
```

Using the `copy` method will make a complete copy of the array and its data (a deep copy). To use this on your array, you could run:

```{code-cell}
b2 = a.copy()
```

## Array operations

### Basic array operations

Once you’ve created your arrays, you can start to work with them. Let’s say, for example, that you’ve created two arrays, one called `data` and one called `ones`.

```{code-cell}
data = np.array([1, 2])
ones = np.ones(2, dtype=int)
```

You can add the arrays together with the plus sign.

```{code-cell}
data + ones
```

You can, of course, do more than just addition!

```{code-cell}
print(data - ones)
print(data * data)
print(data / data)
```

Basic operations are simple with NumPy. If you want to find the sum of the elements in an array, you’d use `sum()`. This works for 1D arrays, 2D arrays, and arrays in higher dimensions.

```{code-cell}
a = np.array([1, 2, 3, 4])
a.sum()
```

To add the rows or the columns in a 2D array, you would specify the axis.

If you start with this array:

```{code-cell}
b = np.array([[1, 1], [2, 2]])
```

You can sum over the axis of rows with:

```{code-cell}
b.sum(axis=0)
```

You can sum over the axis of columns with:

```{code-cell}
b.sum(axis=1)
```

### Universal functions(ufunc)

A universal function (or ufunc for short) is a function that operates on ndarrays in an element-by-element fashion, supporting array broadcasting, type casting, and several other standard features. That is, a ufunc is a “vectorized” wrapper for a function that takes a fixed number of specific inputs and produces a fixed number of specific outputs.

#### Available ufuncs

There are currently more than 60 universal functions defined in numpy on one or more types, covering a wide variety of operations. Some of these ufuncs are called automatically on arrays when the relevant infix notation is used (e.g., `add(a, b)` is called internally when `a + b` is written and a or b is an ndarray). Nevertheless, you may still want to use the ufunc call in order to use the optional output argument(s) to place the output(s) in an object (or objects) of your choice.

Recall that each ufunc operates element-by-element. Therefore, each scalar ufunc will be described as if acting on a set of scalar inputs to return a set of scalar outputs.

```{note}
The ufunc still returns its output(s) even if you use the optional output argument(s).
```

##### Math operations

|Syntax|Role|
|:-|:-|
|`add(x1, x2, /[, out, where, casting, order, ...])`|Add arguments element-wise.|
|`subtract(x1, x2, /[, out, where, casting, ...])`|Subtract arguments, element-wise.|
|`multiply(x1, x2, /[, out, where, casting, ...])`|Multiply arguments element-wise.|
|`matmul(x1, x2, /[, out, casting, order, ...])`|Matrix product of two arrays.|
|`divide(x1, x2, /[, out, where, casting, ...])`|Divide arguments element-wise.|
|`logaddexp(x1, x2, /[, out, where, casting, ...])`|Logarithm of the sum of exponentiations of the inputs.|
|`negative(x, /[, out, where, casting, order, ...])`|Numerical negative, element-wise.|
|`positive(x, /[, out, where, casting, order, ...])`|Numerical positive, element-wise.|
|`power(x1, x2, /[, out, where, casting, ...])`|First array elements raised to powers from second array, element-wise.|
|`absolute(x, /[, out, where, casting, order, ...])`|Calculate the absolute value element-wise.|
|`exp(x, /[, out, where, casting, order, ...])`|Calculate the exponential of all elements in the input array.|
|`log(x, /[, out, where, casting, order, ...])`|Natural logarithm, element-wise.|
|`log2(x, /[, out, where, casting, order, ...])`|Base-2 logarithm of x.|

##### Trigonometric functions

|Syntax|Role|
|:-|:-|
|`sin(x, /[, out, where, casting, order, ...])`|Trigonometric sine, element-wise.|
|`cos(x, /[, out, where, casting, order, ...])`|Cosine element-wise.|
|`tan(x, /[, out, where, casting, order, ...])`|Compute tangent element-wise.|
|`arcsin(x, /[, out, where, casting, order, ...])`|Inverse sine, element-wise.|
|`arccos(x, /[, out, where, casting, order, ...])`|Trigonometric inverse cosine, element-wise.|
|`arctan(x, /[, out, where, casting, order, ...])`|Trigonometric inverse tangent, element-wise.|

##### Bit-twiddling functions

|Syntax|Role|
|:-|:-|
|`bitwise_and(x1, x2, /[, out, where, ...])`|Compute the bit-wise AND of two arrays element-wise.|
|`bitwise_or(x1, x2, /[, out, where, casting, ...])`|Compute the bit-wise OR of two arrays element-wise.
|`bitwise_xor(x1, x2, /[, out, where, ...])`|Compute the bit-wise XOR of two arrays element-wise.|
|`invert(x, /[, out, where, casting, order, ...])`|Compute bit-wise inversion, or bit-wise NOT, element-wise.|

##### Comparison functions

|Syntax|Role|
|:-|:-|
|`greater(x1, x2, /[, out, where, casting, ...])`|Return the truth value of (x1 > x2) element-wise.|
|`greater_equal(x1, x2, /[, out, where, ...])`|Return the truth value of (x1 >= x2) element-wise.|
|`less(x1, x2, /[, out, where, casting, ...])`|Return the truth value of (x1 < x2) element-wise.|
|`less_equal(x1, x2, /[, out, where, casting, ...])`|Return the truth value of (x1 <= x2) element-wise.|
|`not_equal(x1, x2, /[, out, where, casting, ...])`|Return (x1 != x2) element-wise.|
|`equal(x1, x2, /[, out, where, casting, ...])`|Return (x1 == x2) element-wise.|

```{warning}
Do not use the Python keywords `and` and `or` to combine logical array expressions. These keywords will test the truth value of the entire array (not element-by-element as you might expect). Use the bitwise operators `&` and `|` instead.
```

|Syntax|Role|
|:-|:-|
|`logical_and(x1, x2, /[, out, where, ...])`|Compute the truth value of x1 AND x2 element-wise.|
|`logical_or(x1, x2, /[, out, where, casting, ...])`|Compute the truth value of x1 OR x2 element-wise.|
|`logical_xor(x1, x2, /[, out, where, ...])`|Compute the truth value of x1 XOR x2, element-wise.|
|`logical_not(x, /[, out, where, casting, ...])`|Compute the truth value of NOT x element-wise.|

```{warning}
The bit-wise operators & and | are the proper way to perform element-by-element array comparisons. Be sure you understand the operator precedence: (a > 2) & (a < 5) is the proper syntax because a > 2 & a < 5 will result in an error due to the fact that 2 & a is evaluated first.
```

### Computation on arrays: broadcasting

The term broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations. Subject to certain constraints, the smaller array is “broadcast” across the larger array so that they have compatible shapes. Broadcasting provides a means of vectorizing array operations so that looping occurs in C instead of Python. It does this without making needless copies of data and usually leads to efficient algorithm implementations. There are, however, cases where broadcasting is a bad idea because it leads to inefficient use of memory that slows computation.

NumPy operations are usually done on pairs of arrays on an element-by-element basis. In the simplest case, the two arrays must have exactly the same shape, as in the following example:

```{code-cell}
a = np.array([1.0, 2.0, 3.0])
b = np.array([2.0, 2.0, 2.0])
a * b
```

NumPy’s broadcasting rule relaxes this constraint when the arrays’ shapes meet certain constraints. The simplest broadcasting example occurs when an array and a scalar value are combined in an operation:

```{code-cell}
a = np.array([1.0, 2.0, 3.0])
b = 2.0
a * b
```

The result is equivalent to the previous example where `b` was an array.  NumPy is smart enough to use the original scalar value without actually making copies so that broadcasting operations are as memory and computationally efficient as possible.

#### General Broadcasting Rules

When operating on two arrays, NumPy compares their shapes element-wise. It starts with the trailing (i.e. rightmost) dimension and works its way left. Two dimensions are compatible when

- they are equal, or
- one of them is 1.

If these conditions are not met, a `ValueError: operands could not be broadcast together` exception is thrown, indicating that the arrays have incompatible shapes.

Input arrays do not need to have *the same number* of dimensions. The resulting array will have the same number of dimensions as the input array with the greatest number of dimensions, where the *size* of each dimension is the largest size of the corresponding dimension among the input arrays. Note that missing dimensions are assumed to have size one.

For example, if you have a `256x256x3` array of RGB values, and you want to scale each color in the image by a different value, you can multiply the image by a one-dimensional array with 3 values. Lining up the sizes of the trailing axes of these arrays according to the broadcast rules, shows that they are compatible:

```py
Image  (3d array): 256 x 256 x 3
Scale  (1d array):             3
Result (3d array): 256 x 256 x 3
```

When either of the dimensions compared is one, the other is used. In other words, dimensions with size 1 are stretched or “copied” to match the other.

In the following example, both the `A` and `B` arrays have axes with length one that are expanded to a larger size during the broadcast operation:

```py
A      (4d array):  8 x 1 x 6 x 1
B      (3d array):      7 x 1 x 5
Result (4d array):  8 x 7 x 6 x 5
```

### Aggregations: min, max and everything in between

NumPy also performs aggregation functions. In addition to `min`, `max`, and `sum`, you can easily run `mean` to get the average, `prod` to get the result of multiplying the elements together, `std` to get the standard deviation, and more.

```{code-cell}
data.max()
```

```{code-cell}
data.min()
```

```{code-cell}
data.sum()
```

Let’s start with this array, called “a”.

```{code-cell}
a = np.array([[0.45053314, 0.17296777, 0.34376245, 0.5510652],
              [0.54627315, 0.05093587, 0.40067661, 0.55645993],
              [0.12697628, 0.82485143, 0.26590556, 0.56917101]])
```

It’s very common to want to aggregate along a row or column. By default, every NumPy aggregation function will return the aggregate of the entire array. To find the sum or the minimum of the elements in your array, run:

```{code-cell}
a.sum()
```

Or:

```{code-cell}
a.min()
```

You can specify on which axis you want the aggregation function to be computed. For example, you can find the minimum value within each column by specifying `axis=0`.

```{code-cell}
a.min(axis=0)
```

The four values listed above correspond to the number of columns in your array. With a four-column array, you will get four values as your result.

## Indexing on ndarrays

ndarrays can be indexed using the standard Python `x[obj]` syntax, where `x` is the array and `obj` the selection. There are different kinds of indexing available depending on `obj`: basic indexing, advanced indexing and field access.

```{note}
In Python, `x[(exp1, exp2, ..., expN)]` is equivalent to `x[exp1, exp2, ..., expN]`; the latter is just syntactic sugar for the former.
```

### Basic indexing

#### Single element indexing

Single element indexing works exactly like that for other standard Python sequences. It is 0-based, and accepts negative indices for indexing from the end of the array.

```{code-cell}
x = np.arange(10)
```

```{code-cell}
x[2]
```

```{code-cell}
x[-2]
```

It is not necessary to separate each dimension’s index into its own set of square brackets.

```{code-cell}
x.shape = (2, 5)  # now x is 2-dimensional
```

```{code-cell}
x[1, 3]
```

```{code-cell}
x[1, -1]
```

Note that If one indexes a multidimensional array with fewer indices than dimensions, one gets a subdimensional array. For example:

```{code-cell}
x[0]
```

That is, each index specified selects the array corresponding to the rest of the dimensions selected. In the above example, choosing 0 means that the remaining dimension of length 5 is being left unspecified, and that what is returned is an array of that dimensionality and size. It must be noted that the returned array is a view, i.e., it is not a copy of the original, but points to the same values in memory as does the original array. In this case, the 1-D array at the first position (0) is returned. So using a single index on the returned array, results in a single element being returned. That is:

```{code-cell}
x[0][2]
```

So note that `x[0, 2] == x[0][2]` though the second case is more inefficient as a new temporary array is created after the first index that is subsequently indexed by 2.

```{note}
NumPy uses *C-order* indexing. That means that the last index usually represents the most rapidly changing memory location, unlike *Fortran* or *IDL*, where the first index represents the most rapidly changing location in memory. This difference represents a great potential for confusion.
```

#### Slicing and striding

Basic slicing extends Python’s basic concept of slicing to N dimensions. Basic slicing occurs when obj is a `slice` object (constructed by `start:stop:step` notation inside of brackets), an integer, or a tuple of slice objects and integers. `Ellipsis` and `newaxis` objects can be interspersed with these as well.

The simplest case of indexing with *N* integers returns an array scalar representing the corresponding item. As in Python, all indices are zero-based: for the i-th index , the valid range is $0 \leq n_i \leq d_i$  where $d_i$ is the *i*-th element of the shape of the array. Negative indices are interpreted as counting from the end of the array (i.e., if , it $n_i < 0$, it means $n_i + d_i$).

All arrays generated by basic slicing are always **views** of the original array.

```{note}
NumPy slicing creates a **view** instead of a **copy** as in the case of built-in Python sequences such as string, tuple and list. Care must be taken when extracting a small portion from a large array which becomes useless after the extraction, because the small portion extracted contains a reference to the large original array whose memory will not be released until all arrays derived from it are garbage-collected. In such cases an explicit `copy()` is recommended.
```

- The basic slice syntax is `i:j:k` where *i* is the starting index, *j* is the stopping index, and *k* is the step ($k /neq 0$). This selects the m elements (in the corresponding dimension) with index values *i*, *i + k*, *…*,*i + (m - 1) k* where $m = q + (r /neq 0)$ and *q* and *r* are the quotient and remainder obtained by dividing *j - i* by *k*: *j - i = q k + r*, so that *i + (m - 1) k < j*. For example:

```{code-cell}
x = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
x[1:7:2]
```

- Negative *i* and *j* are interpreted as *n + i* and *n + j* where *n* is the number of elements in the corresponding dimension. Negative *k* makes stepping go towards smaller indices. From the above example:

```{code-cell}
x[-2:10]
```

```{code-cell}
x[-3:3:-1]
```

- Assume *n* is the number of elements in the dimension being sliced. Then, if *i* is not given it defaults to 0 for *k > 0* and *n - 1* for *k < 0*. If *j* is not given it defaults to *n* for *k > 0* and *-n-1* for *k < 0*. If *k* is not given it defaults to 1. Note that `::` is the same as : and means select all indices along this axis. From the above example:

```{code-cell}
x[5:]
```

- If the number of objects in the selection tuple is less than N, then `:` is assumed for any subsequent dimensions. For example:

```{code-cell}
x = np.array([[[1],[2],[3]], [[4],[5],[6]]])
x.shape
```

```{code-cell}
x[1:2]
```

- An integer, *i*, returns the same values as `i:i+1` **except** the dimensionality of the returned object is reduced by 1. In particular, a selection tuple with the *p*-th element an integer (and all other entries *:*) returns the corresponding sub-array with dimension *N - 1*. If *N = 1* then the returned object is an array scalar.

- If the selection tuple has all entries : except the p-th entry which is a slice object `i:j:k`, then the returned array has dimension *N* formed by concatenating the sub-arrays returned by integer indexing of elements *i*, *i+k*, *…*, *i + (m - 1) k < j*,

- Basic slicing with more than one non-`:` entry in the slicing tuple, acts like repeated application of slicing using a single non-`:` entry, where the non-`:` entries are successively taken (with all other non-`:` entries replaced by `:`). Thus, `x[ind1, ..., ind2,:]` acts like `x[ind1][..., ind2, :]` under basic slicing.

**WARNING:** The The above is **not** true for advanced indexing.

- You may use slicing to set values in the array, but (unlike lists) you can never grow the array. The size of the value to be set in `x[obj] = value` must be (broadcastable) to the same shape as `x[obj]`.

- A slicing tuple can always be constructed as obj and used in the `x[obj]` notation. Slice objects can be used in the construction in place of the `[start:stop:step]` notation. For example, `x[1:10:5, ::-1]` can also be implemented as `obj = (slice(1, 10, 5), slice(None, None, -1))`; `x[obj]` . This can be useful for constructing generic code that works on arrays of arbitrary dimensions.

#### Dimensional indexing tools

There are some tools to facilitate the easy matching of array shapes with expressions and in assignments.

Ellipsis expands to the number of `:` objects needed for the selection tuple to index all dimensions. In most cases, this means that the length of the expanded selection tuple is `x.ndim`. There may only be a single ellipsis present. From the above example:

```{code-cell}
x[..., 0]
```

This is equivalent to:

```{code-cell}
x[:, :, 0]
```

Each `newaxis` object in the selection tuple serves to expand the dimensions of the resulting selection by one unit-length dimension. The added dimension is the position of the `newaxis` object in the selection tuple. `newaxis` is an alias for `None`, and `None` can be used in place of this with the same result. From the above example:

```{code-cell}
x[:, np.newaxis, :, :].shape
```

```{code-cell}
x[:, None, :, :].shape
```

This can be handy to combine two arrays in a way that otherwise would require explicit reshaping operations. For example:

```{code-cell}
x = np.arange(5)
x[:, np.newaxis] + x[np.newaxis, :]
```

### Advanced indexing

Advanced indexing is triggered when the selection object, obj, is a non-tuple sequence object, an `ndarray` (of data type integer or bool), or a tuple with at least one sequence object or ndarray (of data type integer or bool). There are two types of advanced indexing: integer and Boolean.

Advanced indexing always returns a copy of the data (contrast with basic slicing that returns a `view`).

**WARNING:** The definition of advanced indexing means that `x[(1, 2, 3),]` is fundamentally different than `x[(1, 2, 3)]`. The latter is equivalent to `x[1, 2, 3]` which will trigger basic selection while the former will trigger advanced indexing. Be sure to understand why this occurs.

Also recognize that `x[[1, 2, 3]]` will trigger advanced indexing, whereas due to the deprecated Numeric compatibility mentioned above, `x[[1, 2, slice(None)]]` will trigger basic slicing.

#### Integer array indexing

Integer array indexing allows selection of arbitrary items in the array based on their *N*-dimensional index. Each integer array represents a number of indices into that dimension.

Negative values are permitted in the index arrays and work as they do with single indices or slices:

```{code-cell}
x = np.arange(10, 1, -1)
```

```{code-cell}
x
```

```{code-cell}
x[np.array([3, 3, 1, 8])]
```

```{code-cell}
x[np.array([3, 3, -3, 8])]
```

If the index values are out of bounds then an `IndexError` is thrown:

```{code-cell}
x = np.array([[1, 2], [3, 4], [5, 6]])
```

```{code-cell}
x[np.array([1, -1])]
```

```py
x[np.array([3, 4])]
```

```py
Traceback (most recent call last):
  ...
IndexError: index 3 is out of bounds for axis 0 with size 3
```

When the index consists of as many integer arrays as dimensions of the array being indexed, the indexing is straightforward, but different from slicing.

Advanced indices always are broadcast and iterated as *one*:

```py
result[i_1, ..., i_M] == x[ind_1[i_1, ..., i_M], ind_2[i_1, ..., i_M],
                           ..., ind_N[i_1, ..., i_M]]
```

Note that the resulting shape is identical to the (broadcast) indexing array shapes `ind_1, ..., ind_N`. If the indices cannot be broadcast to the same shape, an exception `IndexError: shape mismatch: indexing arrays could not be broadcast together with shapes...` is raised.

Indexing with multidimensional index arrays tend to be more unusual uses, but they are permitted, and they are useful for some problems. We’ll start with the simplest multidimensional case:

```{code-cell}
y = np.arange(35).reshape(5, 7)
```

```{code-cell}
y
```

```{code-cell}
y[np.array([0, 2, 4]), np.array([0, 1, 2])]
```

In this case, if the index arrays have a matching shape, and there is an index array for each dimension of the array being indexed, the resultant array has the same shape as the index arrays, and the values correspond to the index set for each position in the index arrays. In this example, the first index value is 0 for both index arrays, and thus the first value of the resultant array is `y[0, 0]`. The next value is `y[2, 1]`, and the last is `y[4, 2]`.

If the index arrays do not have the same shape, there is an attempt to broadcast them to the same shape. If they cannot be broadcast to the same shape, an exception is raised:

```py
y[np.array([0, 2, 4]), np.array([0, 1])]
```

```py
Traceback (most recent call last):
  ...
IndexError: shape mismatch: indexing arrays could not be broadcast together with shapes (3,) (2,)
```

The broadcasting mechanism permits index arrays to be combined with scalars for other indices. The effect is that the scalar value is used for all the corresponding values of the index arrays:

```{code-cell}
y[np.array([0, 2, 4]), 1]
```

Jumping to the next level of complexity, it is possible to only partially index an array with index arrays. It takes a bit of thought to understand what happens in such cases. For example if we just use one index array with y:

```{code-cell}
y[np.array([0, 2, 4])]
```

It results in the construction of a new array where each value of the index array selects one row from the array being indexed and the resultant array has the resulting shape (number of index elements, size of row).

In general, the shape of the resultant array will be the concatenation of the shape of the index array (or the shape that all the index arrays were broadcast to) with the shape of any unused dimensions (those not indexed) in the array being indexed.

##### Example 1

From each row, a specific element should be selected. The row index is just `[0, 1, 2]` and the column index specifies the element to choose for the corresponding row, here `[0, 1, 0]`. Using both together the task can be solved using advanced indexing:

```{code-cell}
x = np.array([[1, 2], [3, 4], [5, 6]])
x[[0, 1, 2], [0, 1, 0]]
```

To achieve a behaviour similar to the basic slicing above, broadcasting can be used. The function `ix_` can help with this broadcasting. This is best understood with an example.

##### Example 2

From a $4x3$ array the corner elements should be selected using advanced indexing. Thus all elements for which the column is one of `[0, 2]` and the row is one of `[0, 3]` need to be selected. To use advanced indexing one needs to select all elements explicitly. Using the method explained previously one could write:

```{code-cell}
x = np.array([[ 0,  1,  2],
              [ 3,  4,  5],
              [ 6,  7,  8],
              [ 9, 10, 11]])
rows = np.array([[0, 0],
                 [3, 3]], dtype=np.intp)
columns = np.array([[0, 2],
                    [0, 2]], dtype=np.intp)
x[rows, columns]
```

However, since the indexing arrays above just repeat themselves, broadcasting can be used (compare operations such as `rows[:, np.newaxis] + columns`) to simplify this:

```{code-cell}
rows = np.array([0, 3], dtype=np.intp)
columns = np.array([0, 2], dtype=np.intp)
```

```{code-cell}
rows[:, np.newaxis]
```

```{code-cell}
x[rows[:, np.newaxis], columns]
```

This broadcasting can also be achieved using the function `ix_`:

```{code-cell}
x[np.ix_(rows, columns)]
```

Note that without the `np.ix_` call, only the diagonal elements would be selected:

```{code-cell}
x[rows, columns]
```

This difference is the most important thing to remember about indexing with multiple advanced indices.

##### Example 3

A real-life example of where advanced indexing may be useful is for a color lookup table where we want to map the values of an image into RGB triples for display. The lookup table could have a shape (nlookup, 3). Indexing such an array with an image with shape (ny, nx) with dtype=np.uint8 (or any integer type so long as values are with the bounds of the lookup table) will result in an array of shape (ny, nx, 3) where a triple of RGB values is associated with each pixel location.

#### Boolean array indexing

This advanced indexing occurs when obj is an array object of Boolean type, such as may be returned from comparison operators. A single boolean index array is practically identical to `x[obj.nonzero()]` where, as described above, `obj.nonzero()` returns a tuple (of length `obj.ndim`) of integer index arrays showing the `True` elements of obj. However, it is faster when `obj.shape == x.shape`.

If `obj.ndim == x.ndim`, `x[obj]` returns a 1-dimensional array filled with the elements of x corresponding to the `True` values of obj. The search order will be **row-major**, C-style. If obj has `True` values at entries that are outside of the bounds of x, then an index error will be raised. If obj is smaller than x it is identical to filling it with `False`.

A common use case for this is filtering for desired element values. For example, one may wish to select all entries from an array which are not `NaN`:

```{code-cell}
x = np.array([[1., 2.], [np.nan, 3.], [np.nan, np.nan]])
x[~np.isnan(x)]
```

Or wish to add a constant to all negative elements:

```{code-cell}
x = np.array([1., -1., -2., 3])
x[x < 0] += 20
x
```

In general if an index includes a Boolean array, the result will be identical to inserting `obj.nonzero()` into the same position and using the integer array indexing mechanism described above. `x[ind_1, boolean_array, ind_2]` is equivalent to `x[(ind_1,) + boolean_array.nonzero() + (ind_2,)]`.

If there is only one Boolean array and no integer indexing array present, this is straightforward. Care must only be taken to make sure that the boolean index has exactly as many dimensions as it is supposed to work with.

In general, when the boolean array has fewer dimensions than the array being indexed, this is equivalent to `x[b, ...]`, which means x is indexed by b followed by as many : as are needed to fill out the rank of x. Thus the shape of the result is one dimension containing the number of True elements of the boolean array, followed by the remaining dimensions of the array being indexed:

```{code-cell}
x = np.arange(35).reshape(5, 7)
b = x > 20
```

```{code-cell}
b[:, 5]
```

```{code-cell}
x[b[:, 5]]
```

Here the 4th and 5th rows are selected from the indexed array and combined to make a 2-D array.

##### Example 1

From an array, select all rows which sum up to less or equal two:

```{code-cell}
x = np.array([[0, 1], [1, 1], [2, 2]])
rowsum = x.sum(-1)
x[rowsum <= 2, :]
```

Combining multiple Boolean indexing arrays or a Boolean with an integer indexing array can best be understood with the `obj.nonzero()` analogy. The function `ix_` also supports boolean arrays and will work without any surprises.

##### Example 2

Use boolean indexing to select all rows adding up to an even number. At the same time columns 0 and 2 should be selected with an advanced integer index. Using the `ix_` function this can be done with:

```{code-cell}
x = np.array([[ 0,  1,  2],
              [ 3,  4,  5],
              [ 6,  7,  8],
              [ 9, 10, 11]])
rows = (x.sum(-1) % 2) == 0
```

```{code-cell}
rows
```

```{code-cell}
columns = [0, 2]
```

```{code-cell}
x[np.ix_(rows, columns)]
```

Without the n`p.ix_` call, only the diagonal elements would be selected.

Or without `np.ix_` (compare the integer array examples):

```{code-cell}
rows = rows.nonzero()[0]
x[rows[:, np.newaxis], columns]
```

##### Example 3

Use a 2-D boolean array of shape (2, 3) with four True elements to select rows from a 3-D array of shape (2, 3, 5) results in a 2-D result of shape (4, 5):

```{code-cell}
x = np.arange(30).reshape(2, 3, 5)
x
```

```{code-cell}
b = np.array([[True, True, False], [False, True, True]])
x[b]
```

#### Combining advanced and basic indexing

When there is at least one slice (`:`), ellipsis (`...`) or `newaxis` in the index (or the array has more dimensions than there are advanced indices), then the behaviour can be more complicated. It is like concatenating the indexing result for each advanced index element.

In the simplest case, there is only a single advanced index combined with a slice. For example:

```{code-cell}
y = np.arange(35).reshape(5,7)
y[np.array([0, 2, 4]), 1:3]
```

In effect, the slice and index array operation are independent. The slice operation extracts columns with index 1 and 2, (i.e. the 2nd and 3rd columns), followed by the index array operation which extracts rows with index 0, 2 and 4 (i.e the first, third and fifth rows). This is equivalent to:

```{code-cell}
y[:, 1:3][np.array([0, 2, 4]), :]
```

A single advanced index can, for example, replace a slice and the result array will be the same. However, it is a copy and may have a different memory layout. A slice is preferable when it is possible. For example:

```{code-cell}
x = np.array([[ 0,  1,  2],
              [ 3,  4,  5],
              [ 6,  7,  8],
              [ 9, 10, 11]])
```

```{code-cell}
x[1:2, 1:3]
```

```{code-cell}
x[1:2, [1, 2]]
```

The easiest way to understand a combination of multiple advanced indices may be to think in terms of the resulting shape. There are two parts to the indexing operation, the subspace defined by the basic indexing (excluding integers) and the subspace from the advanced indexing part. Two cases of index combination need to be distinguished:

- The advanced indices are separated by a slice, `Ellipsis` or `newaxis`. For example `x[arr1, :, arr2]`.
- The advanced indices are all next to each other. For example `x[..., arr1, arr2, :]` but not`x[arr1, :, 1]` since `1` is an advanced index in this regard.

In the first case, the dimensions resulting from the advanced indexing operation come first in the result array, and the subspace dimensions after that. In the second case, the dimensions from the advanced indexing operations are inserted into the result array at the same spot as they were in the initial array (the latter logic is what makes simple advanced indexing behave just like slicing).

##### Example 1

Suppose `x.shape` is (10, 20, 30) and `ind` is a (2, 3, 4)-shaped indexing intp array, then `result = x[..., ind, :]` has shape (10, 2, 3, 4, 30) because the (20,)-shaped subspace has been replaced with a (2, 3, 4)-shaped broadcasted indexing subspace. If we let i, j, k loop over the (2, 3, 4)-shaped subspace then `result[..., i, j, k, :] = x[..., ind[i, j, k], :]`. This example produces the same result as `x.take(ind, axis=-2)`.

##### Example 2

Let `x.shape` be (10, 20, 30, 40, 50) and suppose `ind_1` and `ind_2` can be broadcast to the shape (2, 3, 4). Then `x[:, ind_1, ind_2]` has shape (10, 2, 3, 4, 40, 50) because the (20, 30)-shaped subspace from X has been replaced with the (2, 3, 4) subspace from the indices. However, `x[:, ind_1, :, ind_2]` has shape (2, 3, 4, 10, 30, 50) because there is no unambiguous place to drop in the indexing subspace, thus it is tacked-on to the beginning. It is always possible to use `.transpose()` to move the subspace anywhere desired. Note that this example cannot be replicated using `take`.

##### Example 3

Slicing can be combined with broadcasted boolean indices:

```{code-cell}
x = np.arange(35).reshape(5, 7)
b = x > 20
```

```{code-cell}
b
```

```{code-cell}
x[b[:, 5], 1:3]
```

### Field access

If the `ndarray` object is a structured array the fields of the array can be accessed by indexing the array with strings, dictionary-like.

Indexing `x['field-name']` returns a new `view` to the array, which is of the same shape as x (except when the field is a sub-array) but of data type `x.dtype['field-name']` and contains only the part of the data in the specified field. Also, record array scalars can be “indexed” this way.

Indexing into a structured array can also be done with a list of field names, e.g. `x[['field-name1', 'field-name2']]`. As of NumPy 1.16, this returns a view containing only those fields. In older versions of NumPy, it returned a copy. See the user guide section on `Structured arrays` for more information on multifield indexing.

If the accessed field is a sub-array, the dimensions of the sub-array are appended to the shape of the result. For example:

```{code-cell}
x = np.zeros((2, 2), dtype=[('a', np.int32), ('b', np.float64, (3, 3))])
```

```{code-cell}
x['a'].shape
```

```{code-cell}
x['a'].dtype
```

```{code-cell}
x['b'].shape
```

```{code-cell}
x['b'].dtype
```

### Flat Iterator indexing

`x.flat` returns an iterator that will iterate over the entire array (in C-contiguous style with the last index varying the fastest). This iterator object can also be indexed using basic slicing or advanced indexing as long as the selection object is not a tuple. This should be clear from the fact that`x.flat` is a 1-dimensional view. It can be used for integer indexing with 1-dimensional C-style-flat indices. The shape of any returned array is therefore the shape of the integer indexing object.

### Assigning values to indexed arrays

As mentioned, one can select a subset of an array to assign to using a single index, slices, and index and mask arrays. The value being assigned to the indexed array must be shape consistent (the same shape or broadcastable to the shape the index produces). For example, it is permitted to assign a constant to a slice:

```{code-cell}
x = np.arange(10)
x[2:7] = 1
```

Or an array of the right size:

```{code-cell}
x[2:7] = np.arange(5)
```

Note that assignments may result in changes if assigning higher types to lower types (like floats to ints) or even exceptions (assigning complex to floats or ints):

```{code-cell}
x[1] = 1.2
x[1]
```

```py
x[1] = 1.2j
```

```py
Traceback (most recent call last):
  ...
TypeError: can't convert complex to int
```

Unlike some of the references (such as array and mask indices) assignments are always made to the original data in the array (indeed, nothing else would make sense!). Note though, that some actions may not work as one may naively expect. This particular example is often surprising to people:

```{code-cell}
x = np.arange(0, 50, 10)
x
```

```{code-cell}
x[np.array([1, 1, 3, 1])] += 1
x
```

Where people expect that the 1st location will be incremented by 3. In fact, it will only be incremented by 1. The reason is that a new array is extracted from the original (as a temporary) containing the values at 1, 1, 3, 1, then the value 1 is added to the temporary, and then the temporary is assigned back to the original array. Thus the value of the array at `x[1] + 1` is assigned to `x[1]` three times, rather than being incremented 3 times.

### Dealing with variable numbers of indices within programs

The indexing syntax is very powerful but limiting when dealing with a variable number of indices. For example, if you want to write a function that can handle arguments with various numbers of dimensions without having to write special case code for each number of possible dimensions, how can that be done? If one supplies to the index a tuple, the tuple will be interpreted as a list of indices. For example:

```{code-cell}
z = np.arange(81).reshape(3, 3, 3, 3)
indices = (1, 1, 1, 1)
z[indices]
```

So one can use code to construct tuples of any number of indices and then use these within an index.

Slices can be specified within programs by using the slice() function in Python. For example:

```{code-cell}
indices = (1, 1, 1, slice(0, 2))  # same as [1, 1, 1, 0:2]
z[indices]
```

Likewise, ellipsis can be specified by code by using the Ellipsis object:

```{code-cell}
indices = (1, Ellipsis, 1)  # same as [1, ..., 1]
z[indices]
```

For this reason, it is possible to use the output from the `np.nonzero()` function directly as an index since it always returns a tuple of index arrays.

Because of the special treatment of tuples, they are not automatically converted to an array as a list would be. As an example:

```{code-cell}
z[[1, 1, 1, 1]]  # produces a large array
```

```{code-cell}
z[(1, 1, 1, 1)]  # returns a single value
```

## Structured arrays

### Introduction

Structured arrays are ndarrays whose datatype is a composition of simpler datatypes organized as a sequence of named `fields`. For example,

```{code-cell}
x = np.array([('Rex', 9, 81.0), ('Fido', 3, 27.0)],
             dtype=[('name', 'U10'), ('age', 'i4'), ('weight', 'f4')])
x
```

Here `x` is a one-dimensional array of length two whose datatype is a structure with three fields: 1. A string of length 10 or less named `'name'`, 2. a 32-bit integer named `'age'`, and 3. a 32-bit float named `'weight'`.

If you index `x` at position 1 you get a structure:

```{code-cell}
x[1]
```

You can access and modify individual fields of a structured array by indexing with the field name:

```{code-cell}
x['age']
```

```{code-cell}
x['age']
```

```{code-cell}
x
```

Structured datatypes are designed to be able to mimic 'structs' in the C language, and share a similar memory layout. They are meant for interfacing with C code and for low-level manipulation of structured buffers, for example for interpreting binary blobs. For these purposes they support specialized features such as subarrays, nested datatypes, and unions, and allow control over the memory layout of the structure.

Users looking to manipulate tabular data, such as stored in csv files, may find other pydata projects more suitable, such as xarray, pandas, or DataArray. These provide a high-level interface for tabular data analysis and are better optimized for that use. For instance, the C-struct-like memory layout of structured arrays in numpy can lead to poor cache behavior in comparison.

### Structured datatypes

A structured datatype can be thought of as a sequence of bytes of a certain length (the structure’s `itemsize`) which is interpreted as a collection of fields. Each field has a name, a datatype, and a byte offset within the structure. The datatype of a field may be any numpy datatype including other structured datatypes, and it may also be a *subarray data type* which behaves like an ndarray of a specified shape. The offsets of the fields are arbitrary, and fields may even overlap. These offsets are usually determined automatically by numpy, but can also be specified.

#### Structured datatype creation

Structured datatypes may be created using the function `numpy.dtype`. There are 4 alternative forms of specification which vary in flexibility and conciseness. In summary they are:

- A list of tuples, one tuple per field

Each tuple has the form `(fieldname, datatype, shape)` where shape is optional. `fieldname` is a string (or tuple if titles are used, see Field Titles below), `datatype` may be any object convertible to a datatype, and `shape` is a tuple of integers specifying subarray shape.

```{code-cell}
np.dtype([('x', 'f4'), ('y', np.float32), ('z', 'f4', (2, 2))])
```

If `fieldname` is the empty string `''`, the field will be given a default name of the form `f#`, where `#` is the integer index of the field, counting from 0 from the left:

```{code-cell}
np.dtype([('x', 'f4'), ('', 'i4'), ('z', 'i8')])
```

The byte offsets of the fields within the structure and the total structure itemsize are determined automatically.

- A string of comma-separated dtype specifications

In this shorthand notation any of the *string dtype specifications* may be used in a string and separated by commas. The itemsize and byte offsets of the fields are determined automatically, and the field names are given the default names `f0`, `f1`, etc.

```{code-cell}
np.dtype('i8, f4, S3')
```

```{code-cell}
np.dtype('3int8, float32, (2, 3)float64')
```

- A dictionary of field parameter arrays

This is the most flexible form of specification since it allows control over the byte-offsets of the fields and the itemsize of the structure.

The dictionary has two required keys, '`names`' and '`formats`', and four optional keys, `'offsets'`, `'itemsize'`, `'aligned'` and '`titles`'. The values for '`names`' and '`formats`' should respectively be a list of field names and a list of dtype specifications, of the same length. The optional `'offsets'` value should be a list of integer byte-offsets, one for each field within the structure. If `'offsets'` is not given the offsets are determined automatically. The optional `'itemsize'` value should be an integer describing the total size in bytes of the dtype, which must be large enough to contain all the fields.

```{code-cell}
np.dtype({'names': ['col1', 'col2'], 'formats': ['i4', 'f4']})
```

```{code-cell}
np.dtype({'names': ['col1', 'col2'],
    'formats': ['i4', 'f4'],
    'offsets': [0, 4],
    'itemsize': 12})
```

Offsets may be chosen such that the fields overlap, though this will mean that assigning to one field may clobber any overlapping field’s data. As an exception, fields of `numpy.object_` type cannot overlap with other fields, because of the risk of clobbering the internal object pointer and then dereferencing it.

The optional `'aligned'` value can be set to `True` to make the automatic offset computation use aligned offsets, as if the '`align`' keyword argument of `numpy.dtype` had been set to `True`.

- A dictionary of field names

The keys of the dictionary are the field names and the values are tuples specifying type and offset:

```{code-cell}
np.dtype({'col1': ('i1', 0), 'col2': ('f4', 1)})
```

#### Manipulating and Displaying Structured Datatypes

The list of field names of a structured datatype can be found in the `names` attribute of the dtype object:

```{code-cell}
d = np.dtype([('x', 'i8'), ('y', 'f4')])
d.names
```

The field names may be modified by assigning to the `names` attribute using a sequence of strings of the same length.

The dtype object also has a dictionary-like attribute, `fields`, whose keys are the field names (and Field Titles, see below) and whose values are tuples containing the dtype and byte offset of each field.

```{code-cell}
d.fields
```

Both the `names` and `fields` attributes will equal `None` for unstructured arrays. The recommended way to test if a dtype is structured is with `if dt.names is not None` rather than `if dt.names`, to account for dtypes with 0 fields.

The string representation of a structured datatype is shown in the ''list of tuples'' form if possible, otherwise numpy falls back to using the more general dictionary form.

#### Field Titles

In addition to field names, fields may also have an associated title, an alternate name, which is sometimes used as an additional description or alias for the field. The title may be used to index an array, just like a field name.

To add titles when using the list-of-tuples form of dtype specification, the field name may be specified as a tuple of two strings instead of a single string, which will be the field’s title and field name respectively. For example:

```{code-cell}
np.dtype([(('my title', 'name'), 'f4')])
```

When using the first form of dictionary-based specification, the titles may be supplied as an extra `'titles'` key as described above. When using the second (discouraged) dictionary-based specification, the title can be supplied by providing a 3-element tuple `(datatype, offset, title)` instead of the usual 2-element tuple:

```{code-cell}
np.dtype({'name': ('i4', 0, 'my title')})
```

The `dtype.fields` dictionary will contain titles as keys, if any titles are used. This means effectively that a field with a title will be represented twice in the fields dictionary. The tuple values for these fields will also have a third element, the field title. Because of this, and because the `names` attribute preserves the field order while the `fields` attribute may not, it is recommended to iterate through the fields of a dtype using the `names` attribute of the dtype, which will not list titles, as in:

```{code-cell}
for name in d.names:
    print(d.fields[name][:2])
```

### Indexing and Assignment to Structured arrays

#### Assigning data to a Structured Array

There are a number of ways to assign values to a structured array: Using python tuples, using scalar values, or using other structured arrays.

##### Assignment from Python Native Types (Tuples)

The simplest way to assign values to a structured array is using python tuples. Each assigned value should be a tuple of length equal to the number of fields in the array, and not a list or array as these will trigger numpy’s broadcasting rules. The tuple’s elements are assigned to the successive fields of the array, from left to right:

```{code-cell}
x = np.array([(1, 2, 3), (4, 5, 6)], dtype='i8, f4, f8')
x[1] = (7, 8, 9)
x
```

##### Assignment from Scalars

A scalar assigned to a structured element will be assigned to all fields. This happens when a scalar is assigned to a structured array, or when an unstructured array is assigned to a structured array:

```{code-cell}
x = np.zeros(2, dtype='i8, f4, ?, S1')
```

```{code-cell}
x[:] = 3
x
```

```{code-cell}
x[:] = np.arange(2)
x
```

Structured arrays can also be assigned to unstructured arrays, but only if the structured datatype has just a single field:

```{code-cell}
twofield = np.zeros(2, dtype=[('A', 'i4'), ('B', 'i4')])
onefield = np.zeros(2, dtype=[('A', 'i4')])
```

```{code-cell}
nostruct = np.zeros(2, dtype='i4')
```

```py
nostruct[:] = twofield
```

```py
Traceback (most recent call last):
...
TypeError: Cannot cast array data from dtype([('A', '<i4'), ('B', '<i4')]) to dtype('int32') according to the rule 'unsafe'
```

##### Assignment from other Structured Arrays

Assignment between two structured arrays occurs as if the source elements had been converted to tuples and then assigned to the destination elements. That is, the first field of the source array is assigned to the first field of the destination array, and the second field likewise, and so on, regardless of field names. Structured arrays with a different number of fields cannot be assigned to each other. Bytes of the destination structure which are not included in any of the fields are unaffected.

```{code-cell}
a = np.zeros(3, dtype=[('a', 'i8'), ('b', 'f4'), ('c', 'S3')])
b = np.ones(3, dtype=[('x', 'f4'), ('y', 'S3'), ('z', 'O')])
```

```{code-cell}
b[:] = a
b
```

##### Assignment involving subarrays

When assigning to fields which are subarrays, the assigned value will first be broadcast to the shape of the subarray.

#### Indexing Structured Arrays

##### Accessing Individual Fields

Individual fields of a structured array may be accessed and modified by indexing the array with the field name.

```{code-cell}
x = np.array([(1, 2), (3, 4)], dtype=[('foo', 'i8'), ('bar', 'f4')])
x['foo']
```

```{code-cell}
x['foo'] = 10
x
```

The resulting array is a view into the original array. It shares the same memory locations and writing to the view will modify the original array.

```{code-cell}
y = x['bar']
y[:] = 11
x
```

This view has the same dtype and itemsize as the indexed field, so it is typically a non-structured array, except in the case of nested structures.

```{code-cell}
y.dtype, y.shape, y.strides
```

If the accessed field is a subarray, the dimensions of the subarray are appended to the shape of the result:

```{code-cell}
x = np.zeros((2, 2), dtype=[('a', np.int32), ('b', np.float64, (3, 3))])
```

```{code-cell}
x['a'].shape
```

```{code-cell}
x['b'].shape
```

##### Accessing multiple fields

One can index and assign to a structured array with a multi-field index, where the index is a list of field names.

The result of indexing with a multi-field index is a view into the original array, as follows:

```{code-cell}
a = np.zeros(3, dtype=[('a', 'i4'), ('b', 'i4'), ('c', 'f4')])
a[['a', 'c']]
```

Assignment to the view modifies the original array. The view’s fields will be in the order they were indexed. Note that unlike for single-field indexing, the dtype of the view has the same itemsize as the original array, and has fields at the same offsets as in the original array, and unindexed fields are merely missing.

Assignment to an array with a multi-field index modifies the original array:

```{code-cell}
a[['a', 'c']] = (2, 3)
a
```

This obeys the structured array assignment rules described above. For example, this means that one can swap the values of two fields using appropriate multi-field indexes:

```{code-cell}
a[['a', 'c']] = a[['c', 'a']]
```

##### Indexing with an integer to get a structured scalar

Indexing a single element of a structured array (with an integer index) returns a structured scalar:

```{code-cell}
x = np.array([(1, 2., 3.)], dtype='i, f, f')
scalar = x[0]
scalar
```

```{code-cell}
type(scalar)
```

Unlike other numpy scalars, structured scalars are mutable and act like views into the original array, such that modifying the scalar will modify the original array. Structured scalars also support access and assignment by field name:

```{code-cell}
x = np.array([(1, 2), (3, 4)], dtype=[('foo', 'i8'), ('bar', 'f4')])
s = x[0]
s['bar'] = 100
x
```

Similarly to tuples, structured scalars can also be indexed with an integer:

```{code-cell}
scalar = np.array([(1, 2., 3.)], dtype='i, f, f')[0]
scalar[0]
```

```{code-cell}
scalar[1] = 4
```

Thus, tuples might be thought of as the native Python equivalent to numpy’s structured types, much like native python integers are the equivalent to numpy’s integer types. Structured scalars may be converted to a tuple by calling `numpy.ndarray.item`:

```{code-cell}
scalar.item(), type(scalar.item())
```

#### Viewing structured arrays containing objects

In order to prevent clobbering object pointers in fields of `object` type, numpy currently does not allow views of structured arrays containing objects.

#### Structure Comparison and Promotion

If the dtypes of two void structured arrays are equal, testing the equality of the arrays will result in a boolean array with the dimensions of the original arrays, with elements set to `True` where all fields of the corresponding structures are equal:

```{code-cell}
a = np.array([(1, 1), (2, 2)], dtype=[('a', 'i4'), ('b', 'i4')])
b = np.array([(1, 1), (2, 3)], dtype=[('a', 'i4'), ('b', 'i4')])
a == b
```

NumPy will promote individual field datatypes to perform the comparison. So the following is also valid (note the `'f4'` dtype for the `'a'` field):

```{code-cell}
b = np.array([(1.0, 1), (2.5, 2)], dtype=[("a", "f4"), ("b", "i4")])
a == b
```

To compare two structured arrays, it must be possible to promote them to a common dtype as returned by `numpy.result_type` and `np.promote_types`. This enforces that the number of fields, the field names, and the field titles must match precisely. When promotion is not possible, for example due to mismatching field names, NumPy will raise an error. Promotion between two structured dtypes results in a canonical dtype that ensures native byte-order for all fields:

```{code-cell}
np.result_type(np.dtype("i,>i"))
```

```{code-cell}
np.result_type(np.dtype("i,>i"), np.dtype("i,i"))
```

The resulting dtype from promotion is also guaranteed to be packed, meaning that all fields are ordered contiguously and any unnecessary padding is removed:

```{code-cell}
dt = np.dtype("i1,V3,i4,V1")[["f0", "f2"]]
dt
```

```{code-cell}
np.result_type(dt)
```

Note that the result prints without `offsets` or `itemsize` indicating no additional padding. If a structured dtype is created with `align=True` ensuring that `dtype.isalignedstruct` is true, this property is preserved:

```{code-cell}
dt = np.dtype("i1,V3,i4,V1", align=True)[["f0", "f2"]]
dt
```

```{code-cell}
np.result_type(dt)
```

```{code-cell}
np.result_type(dt).isalignedstruct
```

When promoting multiple dtypes, the result is aligned if any of the inputs is:

```{code-cell}
np.result_type(np.dtype("i,i"), np.dtype("i,i", align=True))
```

The `<` and `>` operators always return `False` when comparing void structured arrays, and arithmetic and bitwise operations are not supported.

## Your turn! 🚀

### 🚀 Challenge 1: analyzing COVID spread

First problem we will focus on is modelling of epidemic spread of COVID-19. In order to do that, we will use the data on the number of infected individuals in different countries, provided by the [Center for Systems Science and Engineering](https://systems.jhu.edu/) (CSSE) at [Johns Hopkins University](https://jhu.edu/). Dataset is available in [this GitHub Repository](https://github.com/CSSEGISandData/COVID-19).

Since we want to demonstrate how to deal with data, we invite you to open [Estimation of COVID-19 pandemic](../../assignments/data-science/estimation-of-COVID-19-pandemic.ipynb) and read it from top to bottom. You can also execute cells, and do some challenges that we have left for you at the end.

![COVID Spread](../../../images/covidspread.png)

### Working with unstructured Data

While data very often comes in tabular form, in some cases we need to deal with less structured data, for example, text or images. In this case, to apply data processing techniques we have seen above, we need to somehow **extract** structured data. Here are a few examples:

- Extracting keywords from text, and seeing how often those keywords appear
- Using neural networks to extract information about objects on the picture
- Getting information on emotions of people on video camera feed

### 🚀 Challenge 2: analyzing COVID papers

In this challenge, we will continue with the topic of COVID pandemic, and focus on processing scientific papers on the subject. There is [CORD-19 Dataset](https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge) with more than 7000 (at the time of writing) papers on COVID, available with metadata and abstracts (and for about half of them there is also full text provided).

A full example of analyzing this dataset using [Text Analytics for Health](https://docs.microsoft.com/azure/cognitive-services/text-analytics/how-tos/text-analytics-for-health/?WT.mc_id=academic-77958-bethanycheum) cognitive service is described [in this blog post](https://soshnikov.com/science/analyzing-medical-papers-with-azure-and-text-analytics-for-health/). We will discuss simplified version of this analysis.

```{note}
We do not provide a copy of the dataset as part of this repository. You may first need to download the [`metadata.csv`](https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge?select=metadata.csv) file from [this dataset on Kaggle](https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge). Registration with Kaggle may be required. You may also download the dataset without registration [from here](https://ai2-semanticscholar-cord-19.s3-us-west-2.amazonaws.com/historical_releases.html), but it will include all full texts in addition to metadata file.
```

Open [Analyzing COVID-19 papers](../../assignments/data-science/analyzing-COVID-19-papers.ipynb) and read it from top to bottom. You can also execute cells, and do some challenges that we have left for you at the end.

![Covid Medical Treatment](../../../images/covidtreat.png)

## Self study

**Books**

- [Wes McKinney. Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython](https://www.amazon.com/gp/product/1491957662)

**Online resources**

- Official [10 minutes to Pandas](https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html) tutorial
- [Documentation on Pandas Visualization](https://pandas.pydata.org/pandas-docs/stable/user_guide/visualization.html)

**Learning Python**

- [Learn Python in a Fun Way with Turtle Graphics and Fractals](https://github.com/shwars/pycourse)
- [Take your First Steps with Python](https://docs.microsoft.com/learn/paths/python-first-steps/?WT.mc_id=academic-77958-bethanycheum) Learning Path on [Microsoft Learn](http://learn.microsoft.com/?WT.mc_id=academic-77958-bethanycheum)

## Acknowledgments

Thanks for [NumPy user guide](https://numpy.org/doc/stable/user/index.html#user). It contributes the introduction to NumPy.

Thanks to Microsoft for creating the open source course [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners). It contributes assignment section in this chapter.
