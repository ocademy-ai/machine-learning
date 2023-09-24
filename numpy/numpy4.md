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