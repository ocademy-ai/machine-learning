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

# Pandas

pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.

## Introducing Pandas objects

We’ll start with a quick, non-comprehensive overview of the fundamental data structures in pandas to get you started. The fundamental behavior about data types, indexing, axis labeling, and alignment apply across all of the objects. To get started, import NumPy and load pandas into your namespace:

```{code-cell}
import numpy as np
import pandas as pd
```

### Series

`Series` is a one-dimensional labeled array capable of holding any data type (integers, strings, floating point numbers, Python objects, etc.). The axis labels are collectively referred to as the **index**. The basic method to create a `Series` is to call:

```py
s = pd.Series(data, index=index)
```

Here, `data` can be many different things:

- a Python dict
- an ndarray
- a scalar value (like 5)


The passed **index** is a list of axis labels. Thus, this separates into a few cases depending on what **data is**:

#### Create a Series

##### From ndarray

If `data` is an ndarray, **index** must be the same length as **data**. If no index is passed, one will be created having values `[0, ..., len(data) - 1]`.

```{code-cell}
s = pd.Series(np.random.randn(5), index=["a", "b", "c", "d", "e"])
```

```{code-cell}
s
```

```{code-cell}
s.index
```

```{code-cell}
pd.Series(np.random.randn(5))
```

```{note}
Pandas supports non-unique index values. If an operation that does not support duplicate index values is attempted, an exception will be raised at that time.
```

##### From dict
`Series` can be instantiated from dicts:

```{code-cell}
d = {"b": 1, "a": 0, "c": 2}
```

```{code-cell}
pd.Series(d)
```

If an index is passed, the values in data corresponding to the labels in the index will be pulled out.

```{code-cell}
d = {"a": 0.0, "b": 1.0, "c": 2.0}
```

```{code-cell}
pd.Series(d)
```

```{code-cell}
pd.Series(d, index=["b", "c", "d", "a"])
```

```{note}
NaN (not a number) is the standard missing data marker used in pandas.
```

##### From scalar value

If `data` is a scalar value, an index must be provided. The value will be repeated to match the length of **index**.

```{code-cell}
pd.Series(5.0, index=["a", "b", "c", "d", "e"])
```

#### Series is ndarray-like

`Series` acts very similarly to a `ndarray` and is a valid argument to most NumPy functions. However, operations such as slicing will also slice the index.

```{code-cell}
s[0]
```

```{code-cell}
s[:3]
```

```{code-cell}
s[s > s.median()]
```

```{code-cell}
s[[4, 3, 1]]
```

```{code-cell}
np.exp(s)
```

Like a NumPy array, a pandas Series has a single dtype.

```{code-cell}
s.dtype
```

If you need the actual array backing a `Series`, use `Series.array`.

```{code-cell}
s.array
```

While `Series` is ndarray-like, if you need an actual ndarray, then use `Series.to_numpy()`.

```{code-cell}
s.to_numpy()
```

Even if the `Series` is backed by a `ExtensionArray`, `Series.to_numpy()` will return a NumPy ndarray.

#### Series is dict-like

A `Series` is also like a fixed-size dict in that you can get and set values by index label:

```{code-cell}
s["a"]
```

```{code-cell}
s["e"] = 12.0
```

```{code-cell}
s
```

```{code-cell}
"e" in s
```

```{code-cell}
"f" in s
```

If a label is not contained in the index, an exception is raised:

```{code-cell}
:tags: ["raises-exception"]
s["f"]
```

Using the `Series.get()` method, a missing label will return None or specified default:

```{code-cell}
s.get("f")
```

```{code-cell}
s.get("f", np.nan)
```

These labels can also be accessed by `attribute`.

#### Vectorized operations and label alignment with Series

When working with raw NumPy arrays, looping through value-by-value is usually not necessary. The same is true when working with `Series` in pandas. `Series` can also be passed into most NumPy methods expecting an ndarray.

```{code-cell}
s + s
```

```{code-cell}
s * 2
```

```{code-cell}
np.exp(s)
```

A key difference between `Series` and ndarray is that operations between `Series` automatically align the data based on label. Thus, you can write computations without giving consideration to whether the `Series` involved have the same labels.

```{code-cell}
s[1:] + s[:-1]
```

The result of an operation between unaligned `Series` will have the **union** of the indexes involved. If a label is not found in one `Series` or the other, the result will be marked as missing `NaN`. Being able to write code without doing any explicit data alignment grants immense freedom and flexibility in interactive data analysis and research. The integrated data alignment features of the pandas data structures set pandas apart from the majority of related tools for working with labeled data.

```{note}
In general, we chose to make the default result of operations between differently indexed objects yield the **union** of the indexes in order to avoid loss of information. Having an index label, though the data is missing, is typically important information as part of a computation. You of course have the option of dropping labels with missing data via the **dropna** function.
```

#### Name attribute

`Series` also has a `name` attribute:

```{code-cell}
s = pd.Series(np.random.randn(5), name="something")
```

```{code-cell}
s
```

```{code-cell}
s.name
```

The `Series` `name` can be assigned automatically in many cases, in particular, when selecting a single column from a `DataFrame`, the `name` will be assigned the column label.

You can rename a `Series` with the `pandas.Series.rename()` method.

```{code-cell}
s2 = s.rename("different")
```

```{code-cell}
s2.name
```

Note that `s` and `s2` refer to different objects.

### DataFrame

`DataFrame` is a 2-dimensional labeled data structure with columns of potentially different types. You can think of it like a spreadsheet or SQL table, or a dict of `Series` objects. It is generally the most commonly used pandas object. Like `Series`, `DataFrame` accepts many different kinds of input:

- Dict of 1D ndarrays, lists, dicts, or `Series`
- 2-D numpy.ndarray
- Structured or record ndarray
- A `Series`
- Another `DataFrame`

Along with the data, you can optionally pass **index** (row labels) and **columns** (column labels) arguments. If you pass an index and / or columns, you are guaranteeing the index and / or columns of the resulting DataFrame. Thus, a dict of Series plus a specific index will discard all data not matching up to the passed index.

If axis labels are not passed, they will be constructed from the input data based on common sense rules.

#### Create a dataframe

##### From dict of Series or dicts

The resulting **index** will be the **union** of the indexes of the various Series. If there are any nested dicts, these will first be converted to Series. If no columns are passed, the columns will be the ordered list of dict keys.

```{code-cell}
d = {
    "one": pd.Series([1.0, 2.0, 3.0], index=["a", "b", "c"]),
    "two": pd.Series([1.0, 2.0, 3.0, 4.0], index=["a", "b", "c", "d"]),
}
```

```{code-cell}
df = pd.DataFrame(d)
```

```{code-cell}
df
```

```{code-cell}
pd.DataFrame(d, index=["d", "b", "a"])
```

```{code-cell}
pd.DataFrame(d, index=["d", "b", "a"], columns=["two", "three"])
```

The row and column labels can be accessed respectively by accessing the **index** and **columns** attributes:

```{note}
When a particular set of columns is passed along with a dict of data, the passed columns override the keys in the dict.
```

```{code-cell}
df.index
```

```{code-cell}
df.columns
```

##### From dict of ndarrays / lists

The ndarrays must all be the same length. If an index is passed, it must also be the same length as the arrays. If no index is passed, the result will be `range(n)`, where `n` is the array length.

```{code-cell}
d = {"one": [1.0, 2.0, 3.0, 4.0], "two": [4.0, 3.0, 2.0, 1.0]}
```

```{code-cell}
pd.DataFrame(d)
```

```{code-cell}
pd.DataFrame(d, index=["a", "b", "c", "d"])
```

##### From structured or record array

This case is handled identically to a dict of arrays.

```{code-cell}
data = np.zeros((2,), dtype=[("A", "i4"), ("B", "f4"), ("C", "a10")])
```

```{code-cell}
data[:] = [(1, 2.0, "Hello"), (2, 3.0, "World")]
```

```{code-cell}
pd.DataFrame(data)
```

```{code-cell}
pd.DataFrame(data, index=["first", "second"])
```

```{code-cell}
pd.DataFrame(data, columns=["C", "A", "B"])
```

```{note}
DataFrame is not intended to work exactly like a 2-dimensional NumPy ndarray.
```


##### From a list of dicts

```{code-cell}
data2 = [{"a": 1, "b": 2}, {"a": 5, "b": 10, "c": 20}]
```

```{code-cell}
pd.DataFrame(data2)
```

```{code-cell}
pd.DataFrame(data2, index=["first", "second"])
```

```{code-cell}
pd.DataFrame(data2, columns=["a", "b"])
```

##### From a dict of tuples

You can automatically create a MultiIndexed frame by passing a tuples dictionary.

```{code-cell}
pd.DataFrame(
    {
        ("a", "b"): {("A", "B"): 1, ("A", "C"): 2},
        ("a", "a"): {("A", "C"): 3, ("A", "B"): 4},
        ("a", "c"): {("A", "B"): 5, ("A", "C"): 6},
        ("b", "a"): {("A", "C"): 7, ("A", "B"): 8},
        ("b", "b"): {("A", "D"): 9, ("A", "B"): 10},
    }
)
```

##### From a Series

The result will be a DataFrame with the same index as the input Series, and with one column whose name is the original name of the Series (only if no other column name provided).

```{code-cell}
ser = pd.Series(range(3), index=list("abc"), name="ser")
```

```{code-cell}
pd.DataFrame(ser)
```

##### From a list of namedtuples

The field names of the first `namedtuple` in the list determine the columns of the `DataFrame`. The remaining namedtuples (or tuples) are simply unpacked and their values are fed into the rows of the `DataFrame`. If any of those tuples is shorter than the first `namedtuple` then the later columns in the corresponding row are marked as missing values. If any are longer than the first `namedtuple` , a `ValueError` is raised.

```{code-cell}
from collections import namedtuple
```

```{code-cell}
Point = namedtuple("Point", "x y")
```

```{code-cell}
pd.DataFrame([Point(0, 0), Point(0, 3), (2, 3)])
```

```{code-cell}
Point3D = namedtuple("Point3D", "x y z")
```

```{code-cell}
pd.DataFrame([Point3D(0, 0, 0), Point3D(0, 3, 5), Point(2, 3)])
```

##### From a list of dataclasses

Data Classes as introduced in PEP557, can be passed into the DataFrame constructor. Passing a list of dataclasses is equivalent to passing a list of dictionaries.

Please be aware, that all values in the list should be dataclasses, mixing types in the list would result in a `TypeError`.

```{code-cell}
from dataclasses import make_dataclass
```

```{code-cell}
Point = make_dataclass("Point", [("x", int), ("y", int)])
```

```{code-cell}
pd.DataFrame([Point(0, 0), Point(0, 3), Point(2, 3)])
```

#### Column selection, addition, deletion

You can treat a `DataFrame` semantically like a dict of like-indexed `Series` objects. Getting, setting, and deleting columns works with the same syntax as the analogous dict operations:

```{code-cell}
df["one"]
```

```{code-cell}
df["three"] = df["one"] * df["two"]
```

```{code-cell}
df["flag"] = df["one"] > 2
```

```{code-cell}
df
```

Columns can be deleted or popped like with a dict:

```{code-cell}
del df["two"]
```

```{code-cell}
three = df.pop("three")
```

```{code-cell}
df
```

When inserting a scalar value, it will naturally be propagated to fill the column:

```{code-cell}
df["foo"] = "bar"
```

```{code-cell}
df
```

When inserting a `Series` that does not have the same index as the `DataFrame`, it will be conformed to the DataFrame’s index:

```{code-cell}
df["one_trunc"] = df["one"][:2]
```

```{code-cell}
df
```

You can insert raw ndarrays but their length must match the length of the DataFrame’s index.

By default, columns get inserted at the end. `DataFrame.insert()` inserts at a particular location in the columns:

```{code-cell}
df.insert(1, "bar", df["one"])
```

```{code-cell}
df
```

#### Assigning new columns in method chains

DataFrame has an `assign()` method that allows you to easily create new columns that are potentially derived from existing columns.

```{code-cell}
iris = pd.read_csv("../../assets/data/iris.csv")
```

```{code-cell}
iris.head()
```

```{code-cell}
iris.assign(sepal_ratio=iris["SepalWidth"] / iris["SepalLength"]).head()
```

In the example above, we inserted a precomputed value. We can also pass in a function of one argument to be evaluated on the DataFrame being assigned to.

```{code-cell}
iris.assign(sepal_ratio=lambda x: (x["SepalWidth"] / x["SepalLength"])).head()
```

`assign()` **always** returns a copy of the data, leaving the original DataFrame untouched.

Passing a callable, as opposed to an actual value to be inserted, is useful when you don’t have a reference to the DataFrame at hand. This is common when using `assign()` in a chain of operations. For example, we can limit the DataFrame to just those observations with a Sepal Length greater than 5, calculate the ratio, and plot:

```{code-cell}
(
    iris.query("SepalLength > 5")
    .assign(
        SepalRatio=lambda x: x.SepalWidth / x.SepalLength,
        PetalRatio=lambda x: x.PetalWidth / x.PetalLength,
    )
    .plot(kind="scatter", x="SepalRatio", y="PetalRatio")
)
```

Since a function is passed in, the function is computed on the DataFrame being assigned to. Importantly, this is the DataFrame that’s been filtered to those rows with sepal length greater than 5. The filtering happens first, and then the ratio calculations. This is an example where we didn’t have a reference to the filtered DataFrame available.

The function signature for `assign()` is simply `**kwargs`. The keys are the column names for the new fields, and the values are either a value to be inserted (for example, a `Series` or NumPy array), or a function of one argument to be called on the `DataFrame`. A copy of the original `DataFrame` is returned, with the new values inserted.

The order of `**kwargs` is preserved. This allows for dependent assignment, where an expression later in `**kwargs` can refer to a column created earlier in the same `assign()`.

```{code-cell}
dfa = pd.DataFrame({"A": [1, 2, 3], "B": [4, 5, 6]})
```

```{code-cell}
dfa.assign(C=lambda x: x["A"] + x["B"], D=lambda x: x["A"] + x["C"])
```

In the second expression, `x['C']` will refer to the newly created column, that’s equal to `dfa['A'] + dfa['B']`.

#### Indexing / selection

The basics of indexing are as follows:

|Operation                     |Syntax         |Result   |
|:-------                      |:-----         |:-----   |
|Select column                 |`df[col]`      |Series   |
|Select row by label           |`df.loc[label]`|Series   |
|Select row by integer location|`df.iloc[loc]` |Series   |
|Slice rows                    |`df[5:10] `    |DataFrame|
|Select rows by boolean vector |`df[bool_vec]` |DataFrame|

Row selection, for example, returns a `Series` whose index is the columns of the `DataFrame`:

```{code-cell}
df.loc["b"]
```

```{code-cell}
df.iloc[2]
```

#### Data alignment and arithmetic

Data alignment between `DataFrame` objects automatically align on **both the columns and the index (row labels)**. Again, the resulting object will have the union of the column and row labels.

```{code-cell}
df = pd.DataFrame(np.random.randn(10, 4), columns=["A", "B", "C", "D"])
```

```{code-cell}
df2 = pd.DataFrame(np.random.randn(7, 3), columns=["A", "B", "C"])
```

```{code-cell}
df + df2
```

When doing an operation between `DataFrame` and `Series`, the default behavior is to align the `Series` **index** on the `DataFrame` **columns**, thus broadcasting row-wise. For example:

```{code-cell}
df - df.iloc[0]
```

Arithmetic operations with scalars operate element-wise:

```{code-cell}
df * 5 + 2
```

```{code-cell}
1 / df
```

```{code-cell}
df ** 4
```

Boolean operators operate element-wise as well:

```{code-cell}
df1 = pd.DataFrame({"a": [1, 0, 1], "b": [0, 1, 1]}, dtype=bool)
```

```{code-cell}
df2 = pd.DataFrame({"a": [0, 1, 1], "b": [1, 1, 0]}, dtype=bool)
```

```{code-cell}
df1 & df2
```

```{code-cell}
df1 | df2
```

```{code-cell}
df1 ^ df2
```

```{code-cell}
-df1
```


#### Transposing

To transpose, access the `T` attribute or `DataFrame.transpose()`, similar to an ndarray:

```{code-cell}
df[:5].T
```

## Data indexing and selection

The axis labeling information in pandas objects serves many purposes:

- Identifies data (i.e. provides metadata) using known indicators, important for analysis, visualization, and interactive console display.
- Enables automatic and explicit data alignment.
- Allows intuitive getting and setting of subsets of the data set.

In this section, we will focus on the final point: namely, how to slice, dice, and generally get and set subsets of pandas objects. The primary focus will be on Series and DataFrame as they have received more development attention in this area.

```{note}
The Python and NumPy indexing operators `[]` and attribute operator `.` provide quick and easy access to pandas data structures across a wide range of use cases. This makes interactive work intuitive, as there’s little new to learn if you already know how to deal with Python dictionaries and NumPy arrays. However, since the type of the data to be accessed isn’t known in advance, directly using standard operators has some optimization limits. For production code, we recommended that you take advantage of the optimized pandas data access methods exposed in this chapter.
```

```{warning}
Whether a copy or a reference is returned for a setting operation, may depend on the context. This is sometimes called `chained assignment` and should be avoided.
```

### Different choices for indexing

Object selection has had a number of user-requested additions in order to support more explicit location based indexing. pandas now supports three types of multi-axis indexing.

- `.loc` is primarily label based, but may also be used with a boolean array. `.loc` will raise `KeyError` when the items are not found. Allowed inputs are:

    - A single label, e.g. `5` or `'a'` (Note that `5` is interpreted as a label of the index. This use is not an integer position along the index.).

    - A list or array of labels `['a', 'b', 'c']`.

    - A slice object with labels `'a':'f'` (Note that contrary to usual Python slices, both the start and the stop are included, when present in the index!)

    - A boolean array (any `NA` values will be treated as `False`).

    - A `callable` function with one argument (the calling Series or DataFrame) and that returns valid output for indexing (one of the above).

- `.iloc` is primarily integer position based (from `0` to `length-1` of the axis), but may also be used with a boolean array. `.iloc` will raise `IndexError` if a requested indexer is out-of-bounds, except slice indexers which allow out-of-bounds indexing. (this conforms with Python/NumPy slice semantics). Allowed inputs are:

    - An integer e.g. `5`.

    - A list or array of integers `[4, 3, 0]`.

    - A slice object with ints `1:7`.

    - A boolean array (any `NA` values will be treated as `False`).

    - A `callable` function with one argument (the calling Series or DataFrame) and that returns valid output for indexing (one of the above).

- `.loc`, `.iloc`, and also `[]` indexing can accept a `callable` as indexer.

Getting values from an object with multi-axes selection uses the following notation (using `.loc` as an example, but the following applies to `.iloc` as well). Any of the axes accessors may be the null slice `:`. Axes left out of the specification are assumed to be `:`, e.g. `p.loc['a']` is equivalent to `p.loc['a', :]`.

|**Object Type**|**Indexers**                        |
|:--            |:-                                  |
|Series         |`s.loc[indexer]`                    |
|DataFrame      |`df.loc[row_indexer,column_indexer]`|

### Basics

As mentioned when introducing the data structures in the last section, the primary function of indexing with `[]` (a.k.a.` __getitem__` for those familiar with implementing class behavior in Python) is selecting out lower-dimensional slices. The following table shows return type values when indexing pandas objects with `[]`:


|**Object Type**|**Selection**   |Return Value Type                |
|:-             |:-              |:-                               |
|Series         |`series[label]` |scalar value                     |
|DataFrame      |`frame[colname]`|`Series` corresponding to colname|

Here we construct a simple time series data set to use for illustrating the indexing functionality:

```{code-cell}
dates = pd.date_range('1/1/2000', periods=8)
df = pd.DataFrame(np.random.randn(8, 4),
                  index=dates, columns=['A', 'B', 'C', 'D'])
df
```

```{note}
None of the indexing functionality is time series specific unless specifically stated.
```

Thus, as per above, we have the most basic indexing using `[]`:

```{code-cell}
s = df['A']

s[dates[5]]
```

You can pass a list of columns to `[]` to select columns in that order. If a column is not contained in the DataFrame, an exception will be raised. Multiple columns can also be set in this manner:

```{code-cell}
df
```

```{code-cell}
df[['B', 'A']] = df[['A', 'B']]
df
```

You may find this useful for applying a transform (in-place) to a subset of the columns.

```{warning}
pandas aligns all AXES when setting `Series` and `DataFrame` from `.loc`, and `.iloc`.

This will not modify `df` because the column alignment is before value assignment.
```

```{code-cell}
df[['A', 'B']]
```

```{code-cell}
df.loc[:, ['B', 'A']] = df[['A', 'B']]
df[['A', 'B']]
```

```{warning}
The correct way to swap column values is by using raw values:
```

```{code-cell}
df.loc[:, ['B', 'A']] = df[['A', 'B']].to_numpy()
df[['A', 'B']]
```

### Attribute access

You may access an index on a `Series` or column on a `DataFrame` directly as an attribute:

```{code-cell}
sa = pd.Series([1, 2, 3], index=list('abc'))
dfa = df.copy()
```

```{code-cell}
sa.b
```

```{code-cell}
dfa.A
```

```{code-cell}
sa.a = 5
sa
```

```{code-cell}
dfa.A = list(range(len(dfa.index)))  # ok if A already exists
dfa
```

```{code-cell}
dfa['A'] = list(range(len(dfa.index)))  # use this form to create a new column
dfa
```

```{warning}
- You can use this access only if the index element is a valid Python identifier, e.g. s.1 is not allowed. See here for an explanation of valid identifiers.

- The attribute will not be available if it conflicts with an existing method name, e.g. s.min is not allowed, but s['min'] is possible.

- Similarly, the attribute will not be available if it conflicts with any of the following list: index, major_axis, minor_axis, items.

- In any of these cases, standard indexing will still work, e.g. s['1'], s['min'], and s['index'] will access the corresponding element or column.
```

If you are using the IPython environment, you may also use tab-completion to see these accessible attributes.

You can also assign a `dict` to a row of a `DataFrame`:

```{code-cell}
x = pd.DataFrame({'x': [1, 2, 3], 'y': [3, 4, 5]})
x.iloc[1] = {'x': 9, 'y': 99}
x
```

You can use attribute access to modify an existing element of a Series or column of a DataFrame, but be careful; if you try to use attribute access to create a new column, it creates a new attribute rather than a new column. In 0.21.0 and later, this will raise a `UserWarning`:

```{code-cell}
df = pd.DataFrame({'one': [1., 2., 3.]})
df.two = [4, 5, 6]
```

```{code-cell}
df
```

### Slicing ranges

For now, we explain the semantics of slicing using the [] operator.

With Series, the syntax works exactly as with an ndarray, returning a slice of the values and the corresponding labels:

```{code-cell}
s[:5]
```

```{code-cell}
s[::2]
```

```{code-cell}
s[::-1]
```

Note that setting works as well:

```{code-cell}
s2 = s.copy()
s2[:5] = 0
s2
```

With DataFrame, slicing inside of `[]` slices the rows. This is provided largely as a convenience since it is such a common operation.

```{code-cell}
df[:3]
```

```{code-cell}
df[::-1]
```

### Selection by label

```{warning}
Whether a copy or a reference is returned for a setting operation, may depend on the context. This is sometimes called `chained assignment` and should be avoided.
```

```{warning}
`.loc` is strict when you present slicers that are not compatible (or convertible) with the index type. For example using integers in a `DatetimeIndex`. These will raise a `TypeError`.
```

```{code-cell}
dfl = pd.DataFrame(np.random.randn(5, 4),
                   columns=list('ABCD'),
                   index=pd.date_range('20130101', periods=5))
dfl
```

```{code-cell}
:tags: ["raises-exception"]
dfl.loc[2:3]
```

```{warning}
String likes in slicing can be convertible to the type of the index and lead to natural slicing.
```

```{code-cell}
dfl.loc['20130102':'20130104']
```

```{warning}
pandas will raise a `KeyError` if indexing with a list with missing labels.
```

pandas provides a suite of methods in order to have **purely label based indexing**. This is a strict inclusion based protocol. Every label asked for must be in the index, or a `KeyError` will be raised. When slicing, both the start bound **AND** the stop bound are included, if present in the index. Integers are valid labels, but they refer to the label **and not the position**.

- The `.loc` attribute is the primary access method. The following are valid inputs:

- A single label, e.g. `5` or `'a'` (Note that `5` is interpreted as a label of the index. This use is not an integer position along the index.).

- A list or array of labels `['a', 'b', 'c']`.

- A slice object with labels `'a':'f'` (Note that contrary to usual Python slices, both the start and the stop are included, when present in the index!

- A boolean array.

- A `callable`.

```{code-cell}
s1 = pd.Series(np.random.randn(6), index=list('abcdef'))
s1
```

```{code-cell}
s1.loc['c':]
```

```{code-cell}
s1.loc['b']
```

Note that setting works as well:

```{code-cell}
s1.loc['c':] = 0
s1
```

With a DataFrame:

```{code-cell}
df1 = pd.DataFrame(np.random.randn(6, 4),
                   index=list('abcdef'),
                   columns=list('ABCD'))
df1
```

```{code-cell}
df1.loc[['a', 'b', 'd'], :]
```

Accessing via label slices:

```{code-cell}
df1.loc['d':, 'A':'C']
```

For getting a cross section using a label (equivalent to `df.xs('a')`):

```{code-cell}
df1.loc['a']
```

For getting values with a boolean array:

```{code-cell}
df1.loc['a'] > 0
```

```{code-cell}
df1.loc[:, df1.loc['a'] > 0]
```

NA values in a boolean array propagate as `False`:

```{code-cell}
mask = pd.array([True, False, True, False, pd.NA, False], dtype="boolean")
mask
```

```{code-cell}
df1[mask]
```

For getting a value explicitly:

```{code-cell}
df1.loc['a', 'A'] # this is also equivalent to ``df1.at['a','A']``
```

#### Slicing with labels

When using `.loc` with slices, if both the start and the stop labels are present in the index, then elements located between the two (including them) are returned:

```{code-cell}
s = pd.Series(list('abcde'), index=[0, 3, 2, 5, 4])
s.loc[3:5]
```

If at least one of the two is absent, but the index is sorted, and can be compared against start and stop labels, then slicing will still work as expected, by selecting labels which rank between the two:

```{code-cell}
s.sort_index()
```

```{code-cell}
s.sort_index().loc[1:6]
```

However, if at least one of the two is absent and the index is not sorted, an error will be raised (since doing otherwise would be computationally expensive, as well as potentially ambiguous for mixed type indexes). For instance, in the above example, `s.loc[1:6]` would raise `KeyError`.

```{code-cell}
s = pd.Series(list('abcdef'), index=[0, 3, 2, 5, 4, 2])
s.loc[3:5]
```

Also, if the index has duplicate labels and either the start or the stop label is duplicated, an error will be raised. For instance, in the above example, `s.loc[2:5]` would raise a `KeyError`.

### Selection by position

```{warning}
Whether a copy or a reference is returned for a setting operation, may depend on the context. This is sometimes called `chained assignment` and should be avoided.
```

pandas provides a suite of methods in order to get purely integer based indexing. The semantics follow closely Python and NumPy slicing. These are 0-based indexing. When slicing, the start bound is included, while the upper bound is excluded. Trying to use a non-integer, even a valid label will raise an `IndexError`.

The `.iloc` attribute is the primary access method. The following are valid inputs:

- An integer e.g. `5`.

- A list or array of integers `[4, 3, 0]`.

- A slice object with ints `1:7`.

- A boolean array.

- A `callable`.

```{code-cell}
s1 = pd.Series(np.random.randn(5), index=list(range(0, 10, 2)))
s1
```

```{code-cell}
s1.iloc[:3]
```

```{code-cell}
s1.iloc[3]
```

Note that setting works as well:

```{code-cell}
s1.iloc[:3] = 0
s1
```

With a DataFrame:

···{code-cell}
df1 = pd.DataFrame(np.random.randn(6, 4),
                   index=list(range(0, 12, 2)),
                   columns=list(range(0, 8, 2)))
df1
```

Select via integer slicing:

```{code-cell}
df1.iloc[:3]
```

```{code-cell}
df1.iloc[1:5, 2:4]
```

Select via integer list:

```{code-cell}
df1.iloc[[1, 3, 5], [1, 3]]
```

```{code-cell}
df1.iloc[1:3, :]
```

```{code-cell}
df1.iloc[:, 1:3]
```

```{code-cell}
df1.iloc[1, 1] # this is also equivalent to ``df1.iat[1,1]``
```

For getting a cross section using an integer position (equiv to `df.xs(1)`):

```{code-cell}
df1.iloc[1]
```

Out of range slice indexes are handled gracefully just as in Python/NumPy.

```{code-cell}
x = list('abcdef') # these are allowed in Python/NumPy.
x
```

```{code-cell}
x[4:10]
```

```{code-cell}
x[8:10]
```

```{code-cell}
s = pd.Series(x)
s
```

```{code-cell}
s.iloc[4:10]
```

```{code-cell}
s.iloc[8:10]
```

Note that using slices that go out of bounds can result in an empty axis (e.g. an empty DataFrame being returned).

```{code-cell}
dfl = pd.DataFrame(np.random.randn(5, 2), columns=list('AB'))
dfl
```

```{code-cell}
dfl.iloc[:, 2:3]
```

```{code-cell}
dfl.iloc[:, 1:3]
```

```{code-cell}
dfl.iloc[4:6]
```

A single indexer that is out of bounds will raise an `IndexError`. A list of indexers where any element is out of bounds will raise an `IndexError`.

```{code-cell}
:tags: ["raises-exception"]
dfl.iloc[[4, 5, 6]]
```

```{code-cell}
:tags: ["raises-exception"]
dfl.iloc[:, 4]
```

### Selection by callable

`.loc`, `.iloc`, and also `[]` indexing can accept a `callable` as indexer. The `callable` must be a function with one argument (the calling Series or DataFrame) that returns valid output for indexing.

```{code-cell}
df1 = pd.DataFrame(np.random.randn(6, 4),
                   index=list('abcdef'),
                   columns=list('ABCD'))
df1
```

```{code-cell}
df1.loc[lambda df: df['A'] > 0, :]
```

```{code-cell}
df1.loc[:, lambda df: ['A', 'B']]
```

```{code-cell}
df1.iloc[:, lambda df: [0, 1]]
```

```{code-cell}
df1[lambda df: df.columns[0]]
```

You can use callable indexing in `Series`.

```{code-cell}
df1['A'].loc[lambda s: s > 0]
```

### Combining positional and label-based indexing

If you wish to get the 0th and the 2nd elements from the index in the `'A'` column, you can do:

```{code-cell}
dfd = pd.DataFrame({'A': [1, 2, 3],
                    'B': [4, 5, 6]},
                   index=list('abc'))
dfd
```

```{code-cell}
dfd.loc[dfd.index[[0, 2]], 'A']
```

This can also be expressed using `.iloc`, by explicitly getting locations on the indexers, and using positional indexing to select things.

```{code-cell}
dfd.iloc[[0, 2], dfd.columns.get_loc('A')]
```

For getting multiple indexers, using `.get_indexer`:

```{code-cell}
dfd.iloc[[0, 2], dfd.columns.get_indexer(['A', 'B'])]
```

## Combining datasets: concat, merge and join

### concat

- Concatenate pandas objects along a particular axis.

- Allows optional set logic along the other axes.

- Can also add a layer of hierarchical indexing on the concatenation axis, which may be useful if the labels are the same (or overlapping) on the passed axis number.

For example:

Combine two `Series`.

```{code-cell}
s1 = pd.Series(['a', 'b'])
s2 = pd.Series(['c', 'd'])
pd.concat([s1, s2])
```

Clear the existing index and reset it in the result by setting the `ignore_index` option to `True`.

```{code-cell}
pd.concat([s1, s2], ignore_index=True)
```

Add a hierarchical index at the outermost level of the data with the `keys` option.

```{code-cell}
pd.concat([s1, s2], keys=['s1', 's2'])
```

Label the index keys you create with the `names` option.

```{code-cell}
pd.concat([s1, s2], keys=['s1', 's2'],
          names=['Series name', 'Row ID'])
```

Combine two `DataFrame` objects with identical columns.

```{code-cell}
df1 = pd.DataFrame([['a', 1], ['b', 2]],
                   columns=['letter', 'number'])
df1
```

```{code-cell}
df2 = pd.DataFrame([['c', 3], ['d', 4]],
                   columns=['letter', 'number'])
df2
```

```{code-cell}
pd.concat([df1, df2])
```

Combine `DataFrame` objects with overlapping columns and return everything. Columns outside the intersection will be filled with `NaN` values.

```{code-cell}
df3 = pd.DataFrame([['c', 3, 'cat'], ['d', 4, 'dog']],
                   columns=['letter', 'number', 'animal'])
df3
```

```{code-cell}
pd.concat([df1, df3], sort=False)
```

Combine DataFrame objects with overlapping columns and return only those that are shared by passing inner to the join keyword argument.

```{code-cell}
pd.concat([df1, df3], join="inner")
```

Combine `DataFrame` objects horizontally along the x axis by passing in `axis=1`.

```{code-cell}
df4 = pd.DataFrame([['bird', 'polly'], ['monkey', 'george']],
                   columns=['animal', 'name'])
pd.concat([df1, df4], axis=1)
```

Prevent the result from including duplicate index values with the `verify_integrity` option.

```{code-cell}
df5 = pd.DataFrame([1], index=['a'])
df5
```

```{code-cell}
df6 = pd.DataFrame([2], index=['a'])
df6
```

```{code-cell}
:tags: ["raises-exception"]
pd.concat([df5, df6], verify_integrity=True)
```
    
Append a single row to the end of a `DataFrame` object.

```{code-cell}
df7 = pd.DataFrame({'a': 1, 'b': 2}, index=[0])
df7
```

```{code-cell}
new_row = pd.Series({'a': 3, 'b': 4})
new_row
```

```{code-cell}
pd.concat([df7, new_row.to_frame().T], ignore_index=True)
```

```{note}
`append()` has been deprecated since version 1.4.0: Use `concat()` instead. 
```

### merge

- Merge DataFrame or named Series objects with a database-style join.

- A named Series object is treated as a DataFrame with a single named column.

- The join is done on columns or indexes. If joining columns on columns, the DataFrame indexes will be ignored. Otherwise if joining indexes on indexes or indexes on a column or columns, the index will be passed on. When performing a cross merge, no column specifications to merge on are allowed.

```{warning}
If both key columns contain rows where the key is a null value, those rows will be matched against each other. This is different from usual SQL join behaviour and can lead to unexpected results.
```

For example:

```{code-cell}
df1 = pd.DataFrame({'lkey': ['foo', 'bar', 'baz', 'foo'],
                    'value': [1, 2, 3, 5]})
df2 = pd.DataFrame({'rkey': ['foo', 'bar', 'baz', 'foo'],
                    'value': [5, 6, 7, 8]})
```

```{code-cell}
df1
```

```{code-cell}
df2
```

Merge `df1` and `df2` on the `lkey` and `rkey` columns. The value columns have the default suffixes, `_x` and `_y`, appended.

```{code-cell}
df1.merge(df2, left_on='lkey', right_on='rkey')
```

Merge DataFrames `df1` and `df2` with specified left and right suffixes appended to any overlapping columns.

```{code-cell}
df1.merge(df2, left_on='lkey', right_on='rkey',
          suffixes=('_left', '_right'))
```

Merge DataFrames `df1` and `df2`, but raise an exception if the DataFrames have any overlapping columns.

```{code-cell}
:tags: ["raises-exception"]
df1.merge(df2, left_on='lkey', right_on='rkey', suffixes=(False, False))
```

Using `how` parameter decide the type of merge to be performed.

```{code-cell}
df1 = pd.DataFrame({'a': ['foo', 'bar'], 'b': [1, 2]})
df2 = pd.DataFrame({'a': ['foo', 'baz'], 'c': [3, 4]})
df1
```

```{code-cell}
df2
```

```{code-cell}
df1.merge(df2, how='inner', on='a')
```

```{code-cell}
df1.merge(df2, how='left', on='a')
```

```{code-cell}
df1 = pd.DataFrame({'left': ['foo', 'bar']})
df2 = pd.DataFrame({'right': [7, 8]})
df1
```

```{code-cell}
df2
```

```{code-cell}
df1.merge(df2, how='cross')
```

### join

- Join columns of another DataFrame.

- Join columns with other DataFrame either on index or on a key column. Efficiently join multiple DataFrame objects by index at once by passing a list.

For example:

```{code-cell}
df = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3', 'K4', 'K5'],
                   'A': ['A0', 'A1', 'A2', 'A3', 'A4', 'A5']})
df
```

```{code-cell}
other = pd.DataFrame({'key': ['K0', 'K1', 'K2'],
                      'B': ['B0', 'B1', 'B2']})
other                      
```

Join DataFrames using their indexes.

```{code-cell}
df.join(other, lsuffix='_caller', rsuffix='_other')
```

If we want to join using the `key` columns, we need to set `key` to be the index in both `df` and `other`. The joined DataFrame will have `key` as its index.

```{code-cell}
df.set_index('key').join(other.set_index('key'))
```

Another option to join using the key columns is to use the `on` parameter. `DataFrame.join` always uses `other`’s index but we can use any column in `df`. This method preserves the original DataFrame’s index in the result.

```{code-cell}
df.join(other.set_index('key'), on='key')
```

Using non-unique key values shows how they are matched.

```{code-cell}
df = pd.DataFrame({'key': ['K0', 'K1', 'K1', 'K3', 'K0', 'K1'],
                   'A': ['A0', 'A1', 'A2', 'A3', 'A4', 'A5']})
df                   
```

```{code-cell}
df.join(other.set_index('key'), on='key', validate='m:1')
```

## Aggregation and grouping

Group DataFrame using a mapper or by a Series of columns.

A groupby operation involves some combination of splitting the object, applying a function, and combining the results. This can be used to group large amounts of data and compute operations on these groups.

For example:

```{code-cell}
df = pd.DataFrame({'Animal': ['Falcon', 'Falcon',
                              'Parrot', 'Parrot'],
                   'Max Speed': [380., 370., 24., 26.]})
df
df.groupby(['Animal']).mean()
```

### Hierarchical Indexes

We can groupby different levels of a hierarchical index using the `level` parameter:

```{code-cell}
arrays = [['Falcon', 'Falcon', 'Parrot', 'Parrot'],
          ['Captive', 'Wild', 'Captive', 'Wild']]
index = pd.MultiIndex.from_arrays(arrays, names=('Animal', 'Type'))
df = pd.DataFrame({'Max Speed': [390., 350., 30., 20.]},
                  index=index)
df
```

```{code-cell}
df.groupby(level=0).mean()
```

```{code-cell}
df.groupby(level="Type").mean()
```

We can also choose to include NA in group keys or not by setting `dropna` parameter, the default setting is `True`.

```{code-cell}
l = [[1, 2, 3], [1, None, 4], [2, 1, 3], [1, 2, 2]]
df = pd.DataFrame(l, columns=["a", "b", "c"])
```

```{code-cell}
df.groupby(by=["b"]).sum()
```

```{code-cell}
df.groupby(by=["b"], dropna=False).sum()
```

```{code-cell}
l = [["a", 12, 12], [None, 12.3, 33.], ["b", 12.3, 123], ["a", 1, 1]]
df = pd.DataFrame(l, columns=["a", "b", "c"])
```

```{code-cell}
df.groupby(by="a").sum()
```

```{code-cell}
df.groupby(by="a", dropna=False).sum()
```

When using `.apply()`, use `group_keys` to include or exclude the group keys. The `group_keys` argument defaults to `True` (include).

```{code-cell}
df = pd.DataFrame({'Animal': ['Falcon', 'Falcon',
                              'Parrot', 'Parrot'],
                   'Max Speed': [380., 370., 24., 26.]})
df.groupby("Animal", group_keys=True).apply(lambda x: x)
```

```{code-cell}
df.groupby("Animal", group_keys=False).apply(lambda x: x)
```

## Pivot table

Create a spreadsheet-style pivot table as a DataFrame.

The levels in the pivot table will be stored in MultiIndex objects (hierarchical indexes) on the index and columns of the result DataFrame.

```{code-cell}
df = pd.DataFrame({"A": ["foo", "foo", "foo", "foo", "foo",
                         "bar", "bar", "bar", "bar"],
                   "B": ["one", "one", "one", "two", "two",
                         "one", "one", "two", "two"],
                   "C": ["small", "large", "large", "small",
                         "small", "large", "small", "small",
                         "large"],
                   "D": [1, 2, 2, 3, 3, 4, 5, 6, 7],
                   "E": [2, 4, 5, 5, 6, 6, 8, 9, 9]})
df
```

This first example aggregates values by taking the sum.

```{code-cell}
table = pd.pivot_table(df, values='D', index=['A', 'B'],
                    columns=['C'], aggfunc=np.sum)
table
```

We can also fill missing values using the `fill_value` parameter.

```{code-cell}
table = pd.pivot_table(df, values='D', index=['A', 'B'],
                    columns=['C'], aggfunc=np.sum, fill_value=0)
table
```

The next example aggregates by taking the mean across multiple columns.

```{code-cell}
table = pd.pivot_table(df, values=['D', 'E'], index=['A', 'C'],
                    aggfunc={'D': np.mean,
                             'E': np.mean})
table
```

We can also calculate multiple types of aggregations for any given value column.

```{code-cell}
table = pd.pivot_table(df, values=['D', 'E'], index=['A', 'C'],
                    aggfunc={'D': np.mean,
                             'E': [min, max, np.mean]})
table
```

## High-performance Pandas: eval() and query()

### eval()

Evaluate a string describing operations on DataFrame columns.

Operates on columns only, not specific rows or elements. This allows `eval` to run arbitrary code, which can make you vulnerable to code injection if you pass user input to this function.

For example:

```{code-cell}
df = pd.DataFrame({'A': range(1, 6), 'B': range(10, 0, -2)})
df
```

```{code-cell}
df.eval('A + B')
```

Assignment is allowed though by default the original DataFrame is not modified.

```{code-cell}
df.eval('C = A + B')
```

```{code-cell}
df
```

Use `inplace=True` to modify the original DataFrame.

```{code-cell}
df.eval('C = A + B', inplace=True)
df
```

Multiple columns can be assigned to using multi-line expressions:

```{code-cell}
df.eval(
    '''
    C = A + B
    D = A - B
    '''
)
```

### query()

Query the columns of a DataFrame with a boolean expression.

For example:

```{code-cell}
df = pd.DataFrame({
    'A': range(1, 6),
    'B': range(10, 0, -2),
    'C C': range(10, 5, -1)
})
df
```

```{code-cell}
df.query('A > B')
```

The previous expression is equivalent to

```{code-cell}
df[df.A > df.B]
```

For columns with spaces in their name, you can use backtick quoting.

```{code-cell}
df.query('B == `C C`')
```

The previous expression is equivalent to

```{code-cell}
df[df.B == df['C C']]
```

## Your turn! 🚀

### Processing image data

Recently, very powerful AI models have been developed that allow us to understand images. There are many tasks that can be solved using pre-trained neural networks, or cloud services. Some examples include:

- **Image Classification**, which can help you categorize the image into one of the pre-defined classes. You can easily train your own image classifiers using services such as [Custom Vision](https://azure.microsoft.com/services/cognitive-services/custom-vision-service/?WT.mc_id=academic-77958-bethanycheum)
- **Object Detection** to detect different objects in the image. Services such as [computer vision](https://azure.microsoft.com/services/cognitive-services/computer-vision/?WT.mc_id=academic-77958-bethanycheum) can detect a number of common objects, and you can train [Custom Vision](https://azure.microsoft.com/services/cognitive-services/custom-vision-service/?WT.mc_id=academic-77958-bethanycheum) model to detect some specific objects of interest.
- **Face Detection**, including Age, Gender and Emotion detection. This can be done via [Face API](https://azure.microsoft.com/services/cognitive-services/face/?WT.mc_id=academic-77958-bethanycheum).

All those cloud services can be called using [Python SDKs](https://docs.microsoft.com/samples/azure-samples/cognitive-services-python-sdk-samples/cognitive-services-python-sdk-samples/?WT.mc_id=academic-77958-bethanycheum), and thus can be easily incorporated into your data exploration workflow.

Here are some examples of exploring data from Image data sources:

- In the blog post [How to Learn Data Science without Coding](https://soshnikov.com/azure/how-to-learn-data-science-without-coding/) we explore Instagram photos, trying to understand what makes people give more likes to a photo. We first extract as much information from pictures as possible using [computer vision](https://azure.microsoft.com/services/cognitive-services/computer-vision/?WT.mc_id=academic-77958-bethanycheum), and then use [Azure Machine Learning AutoML](https://docs.microsoft.com/azure/machine-learning/concept-automated-ml/?WT.mc_id=academic-77958-bethanycheum) to build interpretable model.
- In [Facial Studies Workshop](https://github.com/CloudAdvocacy/FaceStudies) we use [Face API](https://azure.microsoft.com/services/cognitive-services/face/?WT.mc_id=academic-77958-bethanycheum) to extract emotions on people on photographs from events, in order to try to understand what makes people happy.

### Assignment

[Perform more detailed data study for the challenges above](../../assignments/data-science/data-processing-in-python.md)

## Self study

In this chapter, we've covered many of the basics of using Pandas effectively for data analysis. Still, much has been omitted from our discussion. To learn more about Pandas, we recommend the following resources:

- [Pandas online documentation](http://pandas.pydata.org/): This is the go-to source for complete documentation of the package. While the examples in the documentation tend to be small generated datasets, the description of the options is complete and generally very useful for understanding the use of various functions.

- [*Python for Data Analysis*](http://shop.oreilly.com/product/0636920023784.do) Written by Wes McKinney (the original creator of Pandas), this book contains much more detail on the Pandas package than we had room for in this chapter. In particular, he takes a deep dive into tools for time series, which were his bread and butter as a financial consultant. The book also has many entertaining examples of applying Pandas to gain insight from real-world datasets. Keep in mind, though, that the book is now several years old, and the Pandas package has quite a few new features that this book does not cover (but be on the lookout for a new edition in 2017).

- [Stack Overflow](http://stackoverflow.com/questions/tagged/pandas): Pandas has so many users that any question you have has likely been asked and answered on Stack Overflow. Using Pandas is a case where some Google-Fu is your best friend. Simply go to your favorite search engine and type in the question, problem, or error you're coming across–more than likely you'll find your answer on a Stack Overflow page.

- [Pandas on PyVideo](http://pyvideo.org/search?q=pandas): From PyCon to SciPy to PyData, many conferences have featured tutorials from Pandas developers and power users. The PyCon tutorials in particular tend to be given by very well-vetted presenters.

Using these resources, combined with the walk-through given in this chapter, my hope is that you'll be poised to use Pandas to tackle any data analysis problem you come across!

## Acknowledgments

Thanks for [pandas user guide](https://pandas.pydata.org/docs/user_guide/index.html). It contributes the majority of the content in this chapter.