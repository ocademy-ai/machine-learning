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

**NOTE:** Specifying your data type

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

### Computation on arrays: broadcasting

There are times when you might want to carry out an operation between an array and a single number (also called an operation between a vector and a scalar) or between arrays of two different sizes. For example, your array (we’ll call it “data”) might contain information about distance in miles but you want to convert the information to kilometers. You can perform this operation with:

```{code-cell}
data = np.array([1.0, 2.0])
data * 1.6
```

NumPy understands that the multiplication should happen with each cell. That concept is called broadcasting. Broadcasting is a mechanism that allows NumPy to perform operations on arrays of different shapes. The dimensions of your array must be compatible, for example, when the dimensions of both arrays are equal or when one of them is 1. If the dimensions are not compatible, you will get a ValueError.

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

**NOTE:** In Python, `x[(exp1, exp2, ..., expN)]` is equivalent to `x[exp1, exp2, ..., expN]`; the latter is just syntactic sugar for the former.

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

**NOTE:** If one indexes a multidimensional array with fewer indices than dimensions, one gets a subdimensional array. For example:

```{code-cell}
x[0]
```

That is, each index specified selects the array corresponding to the rest of the dimensions selected. In the above example, choosing 0 means that the remaining dimension of length 5 is being left unspecified, and that what is returned is an array of that dimensionality and size. It must be noted that the returned array is a view, i.e., it is not a copy of the original, but points to the same values in memory as does the original array. In this case, the 1-D array at the first position (0) is returned. So using a single index on the returned array, results in a single element being returned. That is:

```{code-cell}
x[0][2]
```

So note that `x[0, 2] == x[0][2]` though the second case is more inefficient as a new temporary array is created after the first index that is subsequently indexed by 2.

**NOTE:**  NumPy uses **C-order** indexing. That means that the last index usually represents the most rapidly changing memory location, unlike **Fortran** or **IDL**, where the first index represents the most rapidly changing location in memory. This difference represents a great potential for confusion.

#### Slicing and striding

Basic slicing extends Python’s basic concept of slicing to N dimensions. Basic slicing occurs when obj is a `slice` object (constructed by `start:stop:step` notation inside of brackets), an integer, or a tuple of slice objects and integers. `Ellipsis` and `newaxis` objects can be interspersed with these as well.

The simplest case of indexing with *N* integers returns an array scalar representing the corresponding item. As in Python, all indices are zero-based: for the i-th index , the valid range is $0 \leq n_i \leq d_i$  where $d_i$ is the *i*-th element of the shape of the array. Negative indices are interpreted as counting from the end of the array (i.e., if , it $n_i < 0$, it means $n_i + d_i$).

All arrays generated by basic slicing are always **views** of the original array.

**NOTE:** NumPy slicing creates a **view** instead of a **copy** as in the case of built-in Python sequences such as string, tuple and list. Care must be taken when extracting a small portion from a large array which becomes useless after the extraction, because the small portion extracted contains a reference to the large original array whose memory will not be released until all arrays derived from it are garbage-collected. In such cases an explicit `copy()` is recommended.

- The basic slice syntax is `i:j:k` where *i* is the starting index, *j* is the stopping index, and *k* is the step ($k /neq 0$). This selects the m elements (in the corresponding dimension) with index values *i*, *i + k*, *…*,* i + (m - 1) k* where $m = q + (r /neq 0)$ and *q* and *r* are the quotient and remainder obtained by dividing *j - i* by *k*: *j - i = q k + r*, so that *i + (m - 1) k < j*. For example:

```{code-cell}
x = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```{code-cell}
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
```

```{code-cell}
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
- The advanced indices are all next to each other. For example `x[..., arr1, arr2, :]` but not` x[arr1, :, 1]` since `1` is an advanced index in this regard.

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

`x.flat` returns an iterator that will iterate over the entire array (in C-contiguous style with the last index varying the fastest). This iterator object can also be indexed using basic slicing or advanced indexing as long as the selection object is not a tuple. This should be clear from the fact that` x.flat` is a 1-dimensional view. It can be used for integer indexing with 1-dimensional C-style-flat indices. The shape of any returned array is therefore the shape of the integer indexing object.

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

## Sorting arrays

Up to this point we have been concerned mainly with tools to access and operate on array data with NumPy. This section covers algorithms related to sorting values in NumPy arrays. These algorithms are a favorite topic in introductory computer science courses: if you've ever taken one, you probably have had dreams (or, depending on your temperament, nightmares) about **insertion sorts**, **selection sorts**, **merge sorts**, **quick sorts**, **bubble sorts**, and many, many more. All are means of accomplishing a similar task: sorting the values in a list or array.

For example, a simple **selection sort** repeatedly finds the minimum value from a list, and makes swaps until the list is sorted. We can code this in just a few lines of Python:

```{code-cell}
import numpy as np

def selection_sort(x):
    for i in range(len(x)):
        swap = i + np.argmin(x[i:])
        (x[i], x[swap]) = (x[swap], x[i])
    return x
```

```{code-cell}
x = np.array([2, 1, 4, 3, 5])
selection_sort(x)
```

As any first-year computer science major will tell you, the selection sort is useful for its simplicity, but is much too slow to be useful for larger arrays.

For a list of ***N*** values, it requires ***N*** loops, each of which does on order ***~ N*** comparisons to find the swap value.

In terms of the "big-O" notation often used to characterize these algorithms (see Big-O Notation, selection sort averages ***$O(N^2)$***: if you double the number of items in the list, the execution time will go up by about a factor of four.

Even selection sort, though, is much better than my all-time favorite sorting algorithms, the **bogosort**:

```{code-cell}
def bogosort(x):
    while np.any(x[:-1] > x[1:]):
        np.random.shuffle(x)
    return x
```

```{code-cell}
x = np.array([2, 1, 4, 3, 5])
bogosort(x)
```

This silly sorting method relies on pure chance: it repeatedly applies a random shuffling of the array until the result happens to be sorted. With an average scaling of ***$O(N * N!)$***, (that is $N$ times $N$ factorial) this should–quite obviously–never be used for any real computation.

Fortunately, Python contains built-in sorting algorithms that are *much* more efficient than either of the simplistic algorithms just shown. We'll start by looking at the Python built-ins, and then take a look at the routines included in NumPy and optimized for NumPy arrays.

### Fast sorting in NumPy: `np.sort` and `np.argsort`

Although Python has built-in `sort` and `sorted` functions to work with lists, we won't discuss them here because NumPy's `np.sort` function turns out to be much more efficient and useful for our purposes. By default `np.sort` uses an ***$O(Nlog N)$***, *quicksort* algorithm, though *mergesort* and *heapsort* are also available. For most applications, the default quicksort is more than sufficient.

To return a sorted version of the array without modifying the input, you can use `np.sort`:

```{code-cell}
x = np.array([2, 1, 4, 3, 5])
np.sort(x)
```

If you prefer to sort the array in-place, you can instead use the `sort` method of arrays:

```{code-cell}
x.sort()
print(x)
```

A related function is `argsort`, which instead returns the **indices** of the sorted elements:

```{code-cell}
x = np.array([2, 1, 4, 3, 5])
i = np.argsort(x)
print(i)
```

The first element of this result gives the index of the smallest element, the second value gives the index of the second smallest, and so on.

These indices can then be used (via fancy indexing) to construct the sorted array if desired:

```{code-cell}
x[i]
```

#### Sorting along rows or columns

A useful feature of NumPy's sorting algorithms is the ability to sort along specific rows or columns of a multidimensional array using the `axis` argument. For example:

```{code-cell}
rand = np.random.RandomState(42)
X = rand.randint(0, 10, (4, 6))
print(X)
```

```{code-cell}
# sort each column of X
np.sort(X, axis=0)
```

```{code-cell}
# sort each row of X
np.sort(X, axis=1)
```

Keep in mind that this treats each row or column as an independent array, and any relationships between the row or column values will be lost!

### Partial sorts: partitioning

Sometimes we're not interested in sorting the entire array, but simply want to find the *k* smallest values in the array. NumPy provides this in the `np.partition` function. `np.partition` takes an array and a number *K*; the result is a new array with the smallest *K* values to the left of the partition, and the remaining values to the right, in arbitrary order:

```{code-cell}
x = np.array([7, 2, 3, 1, 6, 5, 4])
np.partition(x, 3)
```

Note that the first three values in the resulting array are the three smallest in the array, and the remaining array positions contain the remaining values.Within the two partitions, the elements have arbitrary order.

Similarly to sorting, we can partition along an arbitrary axis of a multidimensional array:

```{code-cell}
np.partition(X, 2, axis=1)
```

The result is an array where the first two slots in each row contain the smallest values from that row, with the remaining values filling the remaining slots.

Finally, just as there is a `np.argsort` that computes indices of the sort, there is a `np.argpartition` that computes indices of the partition.We'll see this in action in the following section.

### Example: k-nearest neighbors

Let's quickly see how we might use this `argsort` function along multiple axes to find the nearest neighbors of each point in a set. We'll start by creating a random set of 10 points on a two-dimensional plane.Using the standard convention, we'll arrange these in a $10×2$ array:

```{code-cell}
X = rand.rand(10, 2)
```

To get an idea of how these points look, let's quickly scatter plot them:

```{code-cell}
%matplotlib inline
import matplotlib.pyplot as plt
import seaborn; seaborn.set() # Plot styling
plt.scatter(X[:, 0], X[:, 1], s=100);
```

Now we'll compute the distance between each pair of points. Recall that the squared-distance between two points is the sum of the squared differences in each dimension; using the efficient broadcasting and aggregation routines provided by NumPy we can compute the matrix of square distances in a single line of code:

```{code-cell}
dist_sq = np.sum((X[:, np.newaxis, :] - X[np.newaxis, :, :]) ** 2, axis=-1)
```

This operation has a lot packed into it, and it might be a bit confusing if you're unfamiliar with NumPy's broadcasting rules. When you come across code like this, it can be useful to break it down into its component steps:

```{code-cell}
# for each pair of points, compute differences in their coordinates
differences = X[:, np.newaxis, :] - X[np.newaxis, :, :]
differences.shape
```

```{code-cell}
# square the coordinate differences
sq_differences = differences ** 2
sq_differences.shape
```

```{code-cell}
# sum the coordinate differences to get the squared distance
dist_sq = sq_differences.sum(-1)
dist_sq.shape
```

Just to double-check what we are doing, we should see that the diagonal of this matrix (i.e., the set of distances between each point and itself) is all zero:

```{code-cell}
dist_sq.diagonal()
```

It checks out! With the pairwise square-distances converted, we can now use `np.argsort` to sort along each row. The leftmost columns will then give the indices of the nearest neighbors:

```{code-cell}
nearest = np.argsort(dist_sq, axis=1)
print(nearest)
```

Notice that the first column gives the numbers 0 through 9 in order: this is due to the fact that each point's closest neighbor is itself, as we would expect.

By using a full sort here, we've actually done more work than we need to in this case. If we're simply interested in the nearest $k$ neighbors, all we need is to partition each row so that the smallest $k + 1$ squared distances come first, with larger distances filling the remaining positions of the array. We can do this with the `np.argpartition` function:

```{code-cell}
K = 2
nearest_partition = np.argpartition(dist_sq, K + 1, axis=1)
```

In order to visualize this network of neighbors, let's quickly plot the points along with lines representing the connections from each point to its two nearest neighbors:

```{code-cell}
plt.scatter(X[:, 0], X[:, 1], s=100)

# draw lines from each point to its two nearest neighbors
K = 2

for i in range(X.shape[0]):
    for j in nearest_partition[i, :K+1]:
        # plot a line from X[i] to X[j]
        # use some zip magic to make it happen:
        plt.plot(*zip(X[j], X[i]), color='black')
```

Each point in the plot has lines drawn to its two nearest neighbors. At first glance, it might seem strange that some of the points have more than two lines coming out of them: this is due to the fact that if point A is one of the two nearest neighbors of point B, this does not necessarily imply that point B is one of the two nearest neighbors of point A.

Although the broadcasting and row-wise sorting of this approach might seem less straightforward than writing a loop, it turns out to be a very efficient way of operating on this data in Python.

You might be tempted to do the same type of operation by manually looping through the data and sorting each set of neighbors individually, but this would almost certainly lead to a slower algorithm than the vectorized version we used. The beauty of this approach is that it's written in a way that's agnostic to the size of the input data: we could just as easily compute the neighbors among 100 or 1,000,000 points in any number of dimensions, and the code would look the same.

Finally, I'll note that when doing very large nearest neighbor searches, there are tree-based and/or approximate algorithms that can scale as ***$O(Nlog N)$*** or better rather than the ***$O(N^2)$*** of the brute-force algorithm. One example of this is the KD-Tree.

### Aside: big-O notation

Big-O notation is a means of describing how the number of operations required for an algorithm scales as the input grows in size. To use it correctly is to dive deeply into the realm of computer science theory, and to carefully distinguish it from the related small-o notation, big-***θ*** notation, big-***Ω*** notation, and probably many mutant hybrids thereof.

While these distinctions add precision to statements about algorithmic scaling, outside computer science theory exams and the remarks of pedantic blog commenters, you'll rarely see such distinctions made in practice. Far more common in the data science world is a less rigid use of big-O notation: as a general (if imprecise) description of the scaling of an algorithm. With apologies to theorists and pedants, this is the interpretation we'll use throughout this book.

Big-O notation, in this loose sense, tells you how much time your algorithm will take as you increase the amount of data. If you have an ***$O(N)$*** (read "order *N*") algorithm that takes 1 second to operate on a list of length *N*=1,000, then you should expect it to take roughly 5 seconds for a list of length *N*=5,000. If you have an ***$O(N^2)$*** (read "order *N* squared") algorithm that takes 1 second for *N*=1000, then you should expect it to take about 25 seconds for *N*=5000.

For our purposes, the *N* will usually indicate some aspect of the size of the dataset (the number of points, the number of dimensions, etc.). When trying to analyze billions or trillions of samples, the difference between ***$O(N)$*** and ***$O(N^2)$*** can be far from trivial!

Notice that the big-O notation by itself tells you nothing about the actual wall-clock time of a computation, but only about its scaling as you change *N*. Generally, for example, an ***$O(N)$*** algorithm is considered to have better scaling than an ***$O(N^2)$*** algorithm, and for good reason. But for small datasets in particular, the algorithm with better scaling might not be faster. For example, in a given problem an ***$O(N^2)$*** algorithm might take 0.01 seconds, while a "better" ***$O(N)$*** algorithm might take 1 second. Scale up *N* by a factor of 1,000, though, and the ***$O(N)$*** algorithm will win out.

Even this loose version of Big-O notation can be very useful when comparing the performance of algorithms, and we'll use this notation throughout the book when talking about how algorithms scale.

## Structured data: NumPy's structured arrays

While often our data can be well represented by a homogeneous array of values, sometimes this is not the case. This section demonstrates the use of NumPy's **structured arrays** and **record arrays**, which provide efficient storage for compound, heterogeneous data.  While the patterns shown here are useful for simple operations, scenarios like this often lend themselves to the use of Pandas `Dataframe`.

```{code-cell}
import numpy as np
```

Imagine that we have several categories of data on a number of people (say, name, age, and weight), and we'd like to store these values for use in a Python program. It would be possible to store these in three separate arrays:

```{code-cell}
name = ['Alice', 'Bob', 'Cathy', 'Doug']
age = [25, 45, 37, 19]
weight = [55.0, 85.5, 68.0, 61.5]
```

But this is a bit clumsy. There's nothing here that tells us that the three arrays are related; it would be more natural if we could use a single structure to store all of this data. NumPy can handle this through structured arrays, which are arrays with compound data types.

Recall that previously we created a simple array using an expression like this:

```{code-cell}
x = np.zeros(4, dtype=int)
```

We can similarly create a structured array using a compound data type specification:

```{code-cell}
# Use a compound data type for structured arrays
data = np.zeros(4, dtype={'names':('name', 'age', 'weight'),
                          'formats':('U10', 'i4', 'f8')})
print(data.dtype)
```

Here `'U10'` translates to "Unicode string of maximum length 10," `'i4'` translates to "4-byte (i.e., 32 bit) integer," and `'f8'` translates to "8-byte (i.e., 64 bit) float." We'll discuss other options for these type codes in the following section.

Now that we've created an empty container array, we can fill the array with our lists of values:

```{code-cell}
data['name'] = name
data['age'] = age
data['weight'] = weight
print(data)
```

As we had hoped, the data is now arranged together in one convenient block of memory.

The handy thing with structured arrays is that you can now refer to values either by index or by name:

```{code-cell}
# Get all names
data['name']
```

```{code-cell}
# Get first row of data
data[0]
```

```{code-cell}
# Get the name from the last row
data[-1]['name']
```

Using Boolean masking, this even allows you to do some more sophisticated operations such as filtering on age:

```{code-cell}
# Get names where age is under 30
data[data['age'] < 30]['name']
```

Note that if you'd like to do any operations that are any more complicated than these, you should probably consider the Pandas package, covered in the next chapter. As we'll see, Pandas provides a `Dataframe` object, which is a structure built on NumPy arrays that offers a variety of useful data manipulation functionality similar to what we've shown here, as well as much, much more.

### Creating structured arrays

Structured array data types can be specified in a number of ways.
Earlier, we saw the dictionary method:

```{code-cell}
np.dtype({'names':('name', 'age', 'weight'),
          'formats':('U10', 'i4', 'f8')})
```

For clarity, numerical types can be specified using Python types or NumPy `dtype`s instead:

```{code-cell}
np.dtype({'names':('name', 'age', 'weight'),
          'formats':((np.str_, 10), int, np.float32)})
```

A compound type can also be specified as a list of tuples:

```{code-cell}
np.dtype([('name', 'S10'), ('age', 'i4'), ('weight', 'f8')])
```

If the names of the types do not matter to you, you can specify the types alone in a comma-separated string:

```{code-cell}
np.dtype('S10,i4,f8')
```

The shortened string format codes may seem confusing, but they are built on simple principles.The first (optional) character is ``<`` or ``>``, which means "little endian" or "big endian," respectively, and specifies the ordering convention for significant bits.The next character specifies the type of data: characters, bytes, ints, floating points, and so on (see the table below).The last character or characters represents the size of the object in bytes.

| Character      | Description           | Example                           |
| ---------      | -----------           | -------                           |
| `'b'`          | Byte                  | `np.dtype('b')`                   |
| `'i'`          | Signed integer        | `np.dtype('i4') == np.int32`      |
| `'u'`          | Unsigned integer      | `np.dtype('u1') == np.uint8`      |
| `'f'`          | Floating point        | `np.dtype('f8') == np.int64`      |
| `'c'`          | Complex floating point| `np.dtype('c16') == np.complex128`|
| `'S'`, `'a'`   | String                | `np.dtype('S5')`                  |
| `'U'`          | Unicode string        | `np.dtype('U') == np.str_`        |
| `'V'`          | Raw data (void)       | `np.dtype('V') == np.void`        |

### More advanced compound types

It is possible to define even more advanced compound types.
For example, you can create a type where each element contains an array or matrix of values. Here, we'll create a data type with a `mat` component consisting of a $3×3$ floating-point matrix:

```{code-cell}
tp = np.dtype([('id', 'i8'), ('mat', 'f8', (3, 3))])
X = np.zeros(1, dtype=tp)
print(X[0])
print(X['mat'][0])
```

Now each element in the `X` array consists of an `id` and a $3×3$ matrix. Why would you use this rather than a simple multidimensional array, or perhaps a Python dictionary? The reason is that this NumPy `dtype` directly maps onto a C structure definition, so the buffer containing the array content can be accessed directly within an appropriately written C program. If you find yourself writing a Python interface to a legacy C or Fortran library that manipulates structured data, you'll probably find structured arrays quite useful!

### RecordArrays: structured arrays with a twist

NumPy also provides the `np.recarray` class, which is almost identical to the structured arrays just described, but with one additional feature: fields can be accessed as attributes rather than as dictionary keys.Recall that we previously accessed the ages by writing:

```{code-cell}
data['age']
```

If we view our data as a record array instead, we can access this with slightly fewer keystrokes:

```{code-cell}
data_rec = data.view(np.recarray)
data_rec.age
```

The downside is that for record arrays, there is some extra overhead involved in accessing the fields, even when using the same syntax. We can see this here:

```{code-cell}
%timeit data['age']
%timeit data_rec['age']
%timeit data_rec.age
```

Whether the more convenient notation is worth the additional overhead will depend on your own application.

### On to pandas

This section on structured and record arrays is purposely at the end of this chapter, because it leads so well into the next package we will cover: Pandas. Structured arrays like the ones discussed here are good to know about for certain situations, especially in case you're using NumPy arrays to map onto binary data formats in C, Fortran, or another language. For day-to-day use of structured data, the Pandas package is a much better choice, and we'll dive into a full discussion of it in the chapter that follows.

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

Thanks to Jake VanderPlas for creating the open source course [Python Data Science Handbook](https://github.com/jakevdp/PythonDataScienceHandbook). It contributes the majority of the content in this chapter.

Thanks for [NumPy user guide](https://numpy.org/doc/stable/user/index.html#user). It contributes the introduction to NumPy.

Thanks to Microsoft for creating the open source course [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners). It contributes assignment section in this chapter.
