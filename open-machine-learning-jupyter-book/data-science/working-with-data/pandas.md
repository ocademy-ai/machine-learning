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

#### From ndarray

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

**Note:** Pandas supports non-unique index values. If an operation that does not support duplicate index values is attempted, an exception will be raised at that time.

#### From dict
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

**Note:** NaN (not a number) is the standard missing data marker used in pandas.

#### From scalar value

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

```py
s["f"]
```

```py
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
File ~/work/pandas/pandas/pandas/core/indexes/base.py:3803, in Index.get_loc(self, key, method, tolerance)
   3802 try:
-> 3803     return self._engine.get_loc(casted_key)
   3804 except KeyError as err:

File ~/work/pandas/pandas/pandas/_libs/index.pyx:138, in pandas._libs.index.IndexEngine.get_loc()

File ~/work/pandas/pandas/pandas/_libs/index.pyx:165, in pandas._libs.index.IndexEngine.get_loc()

File ~/work/pandas/pandas/pandas/_libs/hashtable_class_helper.pxi:5745, in pandas._libs.hashtable.PyObjectHashTable.get_item()

File ~/work/pandas/pandas/pandas/_libs/hashtable_class_helper.pxi:5753, in pandas._libs.hashtable.PyObjectHashTable.get_item()

KeyError: 'f'

The above exception was the direct cause of the following exception:

KeyError                                  Traceback (most recent call last)
Cell In [26], line 1
----> 1 s["f"]

File ~/work/pandas/pandas/pandas/core/series.py:981, in Series.__getitem__(self, key)
    978     return self._values[key]
    980 elif key_is_scalar:
--> 981     return self._get_value(key)
    983 if is_hashable(key):
    984     # Otherwise index.get_value will raise InvalidIndexError
    985     try:
    986         # For labels that don't resolve as scalars like tuples and frozensets

File ~/work/pandas/pandas/pandas/core/series.py:1089, in Series._get_value(self, label, takeable)
   1086     return self._values[label]
   1088 # Similar to Index.get_value, but we do not fall back to positional
-> 1089 loc = self.index.get_loc(label)
   1090 return self.index._get_values_for_loc(self, loc, label)

File ~/work/pandas/pandas/pandas/core/indexes/base.py:3805, in Index.get_loc(self, key, method, tolerance)
   3803     return self._engine.get_loc(casted_key)
   3804 except KeyError as err:
-> 3805     raise KeyError(key) from err
   3806 except TypeError:
   3807     # If we have a listlike key, _check_indexing_error will raise
   3808     #  InvalidIndexError. Otherwise we fall through and re-raise
   3809     #  the TypeError.
   3810     self._check_indexing_error(key)

KeyError: 'f'
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

**NOTE:** In general, we chose to make the default result of operations between differently indexed objects yield the **union** of the indexes in order to avoid loss of information. Having an index label, though the data is missing, is typically important information as part of a computation. You of course have the option of dropping labels with missing data via the **dropna** function.

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

#### From dict of Series or dicts

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

**NOTE:** When a particular set of columns is passed along with a dict of data, the passed columns override the keys in the dict.

```{code-cell}
df.index
```

```{code-cell}
df.columns
```

#### From dict of ndarrays / lists

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

#### From structured or record array

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

**NOTE:** DataFrame is not intended to work exactly like a 2-dimensional NumPy ndarray.

#### From a list of dicts

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

#### From a dict of tuples

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

#### From a Series

The result will be a DataFrame with the same index as the input Series, and with one column whose name is the original name of the Series (only if no other column name provided).

```{code-cell}
ser = pd.Series(range(3), index=list("abc"), name="ser")
```

```{code-cell}
pd.DataFrame(ser)
```

#### From a list of namedtuples

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

#### From a list of dataclasses

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

##### Missing data

To construct a DataFrame with missing data, we use `np.nan` to represent missing values. Alternatively, you may pass a `numpy.MaskedArray` as the data argument to the DataFrame constructor, and its masked entries will be considered missing.

#### Alternate constructors

##### DataFrame.from_dict

`DataFrame.from_dict()` takes a dict of dicts or a dict of array-like sequences and returns a DataFrame. It operates like the `DataFrame` constructor except for the `orient` parameter which is `'columns'` by default, but which can be set to `'index'` in order to use the dict keys as row labels.

```{code-cell}
pd.DataFrame.from_dict(dict([("A", [1, 2, 3]), ("B", [4, 5, 6])]))
```

If you pass `orient='index'`, the keys will be the row labels. In this case, you can also pass the desired column names:

```{code-cell}
pd.DataFrame.from_dict(
    dict([("A", [1, 2, 3]), ("B", [4, 5, 6])]),
    orient="index",
    columns=["one", "two", "three"],
)
```

##### DataFrame.from_records

`DataFrame.from_records()` takes a list of tuples or an ndarray with structured dtype. It works analogously to the normal `DataFrame` constructor, except that the resulting DataFrame index may be a specific field of the structured dtype.

```{code-cell}
data
```

```{code-cell}
pd.DataFrame.from_records(data, index="C")
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

#### DataFrame interoperability with NumPy functions

Most NumPy functions can be called directly on `Series` and `DataFrame`.

```{code-cell}
np.exp(df)
```

```{code-cell}
np.asarray(df)
```

`DataFrame` is not intended to be a drop-in replacement for ndarray as its indexing semantics and data model are quite different in places from an n-dimensional array.

`Series` implements `__array_ufunc__`, which allows it to work with NumPy’s **universal functions**.

The ufunc is applied to the underlying array in a `Series`.

```{code-cell}
ser = pd.Series([1, 2, 3, 4])
```

```{code-cell}
np.exp(ser)
```

Like other parts of the library, pandas will automatically align labeled inputs as part of a ufunc with multiple inputs. For example, using `numpy.remainder()` on two `Series` with differently ordered labels will align before the operation.

```{code-cell}
ser1 = pd.Series([1, 2, 3], index=["a", "b", "c"])
```

```{code-cell}
ser2 = pd.Series([1, 3, 5], index=["b", "a", "c"])
```

```{code-cell}
ser1
```

```{code-cell}
ser2
```

```{code-cell}
np.remainder(ser1, ser2)
```

As usual, the union of the two indices is taken, and non-overlapping values are filled with missing values.

```{code-cell}
ser3 = pd.Series([2, 4, 6], index=["b", "c", "d"])
```

```{code-cell}
ser3
```

```{code-cell}
np.remainder(ser1, ser3)
```

When a binary ufunc is applied to a `Series` and `Index`, the `Series` implementation takes precedence and a `Series` is returned.

```{code-cell}
ser = pd.Series([1, 2, 3])
```

```{code-cell}
idx = pd.Index([4, 5, 6])
```

```{code-cell}
np.maximum(ser, idx)
```

#### Console display

A very large `DataFrame` will be truncated to display them in the console. You can also get a summary using `info()`.

```{code-cell}
baseball = pd.read_csv("../../assets/data/baseball.csv")
```

```{code-cell}
print(baseball)
```

```{code-cell}
baseball.info()
```

However, using `DataFrame.to_string()` will return a string representation of the `DataFrame` in tabular form, though it won’t always fit the console width:

```{code-cell}
print(baseball.iloc[-20:, :12].to_string())
```

Wide DataFrames will be printed across multiple rows by default:

```{code-cell}
pd.DataFrame(np.random.randn(3, 12))
```

You can change how much to print on a single row by setting the `display.width` option:

```{code-cell}
pd.set_option("display.width", 40)  # default is 80
```

```{code-cell}
pd.DataFrame(np.random.randn(3, 12))
```

You can adjust the max width of the individual columns by setting `display.max_colwidth`:

```{code-cell}
datafile = {
    "filename": ["filename_01", "filename_02"],
    "path": [
        "media/user_name/storage/folder_01/filename_01",
        "media/user_name/storage/folder_02/filename_02",
    ],
}
```

```{code-cell}
pd.set_option("display.max_colwidth", 30)
```

```{code-cell}
pd.DataFrame(datafile)
```

```{code-cell}
pd.set_option("display.max_colwidth", 100)
```

```{code-cell}
pd.DataFrame(datafile)
```

You can also disable this feature via the `expand_frame_repr` option. This will print the table in one block.

## Further resources

In this chapter, we've covered many of the basics of using Pandas effectively for data analysis. Still, much has been omitted from our discussion. To learn more about Pandas, we recommend the following resources:

- [Pandas online documentation](http://pandas.pydata.org/): This is the go-to source for complete documentation of the package. While the examples in the documentation tend to be small generated datasets, the description of the options is complete and generally very useful for understanding the use of various functions.

- [*Python for Data Analysis*](http://shop.oreilly.com/product/0636920023784.do) Written by Wes McKinney (the original creator of Pandas), this book contains much more detail on the Pandas package than we had room for in this chapter. In particular, he takes a deep dive into tools for time series, which were his bread and butter as a financial consultant. The book also has many entertaining examples of applying Pandas to gain insight from real-world datasets. Keep in mind, though, that the book is now several years old, and the Pandas package has quite a few new features that this book does not cover (but be on the lookout for a new edition in 2017).

- [Stack Overflow](http://stackoverflow.com/questions/tagged/pandas): Pandas has so many users that any question you have has likely been asked and answered on Stack Overflow. Using Pandas is a case where some Google-Fu is your best friend. Simply go to your favorite search engine and type in the question, problem, or error you're coming across–more than likely you'll find your answer on a Stack Overflow page.

- [Pandas on PyVideo](http://pyvideo.org/search?q=pandas): From PyCon to SciPy to PyData, many conferences have featured tutorials from Pandas developers and power users. The PyCon tutorials in particular tend to be given by very well-vetted presenters.

Using these resources, combined with the walk-through given in this chapter, my hope is that you'll be poised to use Pandas to tackle any data analysis problem you come across!

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

## Acknowledgments

Thanks for [pandas user guide](https://pandas.pydata.org/docs/user_guide/index.html). It contributes the majority of the content in this chapter.