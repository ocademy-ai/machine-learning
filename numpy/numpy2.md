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