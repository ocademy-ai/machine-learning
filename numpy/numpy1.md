
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