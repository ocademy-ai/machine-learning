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

# Working with data

## Relational data vs. NoSQL data

### Relational data

#### Single table

A relational database has at its core tables. Just as with the spreadsheet, a table is a collection of columns and rows. The row contains the data or information we wish to work with, such as the name of a city or the amount of rainfall. The columns describe the data they store.

Let's begin our exploration by starting a table to store information about cities. We might start with their name and country. You could store this in a table as follows:

|City|	Country|
|:-|:-|
|Tokyo	|Japan|
|Atlanta|	United States|
|Auckland|	New Zealand|

Notice the column names of `city`, `country` describe the data being stored, and each row has information about one city.

#### The shortcomings of a single table approach

Chances are, the table above seems relatively familiar to you. Let's start to add some additional data to our burgeoning database - annual rainfall (in millimeters). We'll focus on the years 2018, 2019 and 2020. If we were to add it for Tokyo, it might look something like this:

|City|Countr|	Year|	Amount|
|:-|:-|:-|:-|
|Tokyo	|Japan	|2020	|1690|
|Tokyo	|Japan	|2019	|1874|
|Tokyo	|Japan	|2018	|1445|

What do you notice about our table? You might notice we're duplicating the name and country of the city over and over. That could take up quite a bit of storage, and is largely unnecessary to have multiple copies of. After all, Tokyo has just the one name we're interested in.

OK, let's try something else. Let's add new columns for each year:

|City|	Country|	2018|	2019|	2020|
|:-|:-|:-|:-|:-|
|Tokyo	|Japan|	1445|	1874|	1690|
|Atlanta|	United States|	1779|	1111	|1683|
|Auckland|	New Zealand|	1386|	942|	1176|

While this avoids the row duplication, it adds a couple of other challenges. We would need to modify the structure of our table each time there's a new year. Additionally, as our data grows having our years as columns will make it trickier to retrieve and calculate values.

This is why we need multiple tables and relationships. By breaking apart our data we can avoid duplication and have more flexibility in how we work with our data.

#### The concepts of relationships

Let's return to our data and determine how we want to split things up. We know we want to store the name and country for our cities, so this will probably work best in one table.

|City|	Country|
|:-|:-|
|Tokyo|	Japan|
|Atlanta|	United States|
|Auckland|	New Zealand|

But before we create the next table, we need to figure out how to reference each city. We need some form of an identifier, ID or (in technical database terms) a primary key. A primary key is a value used to identify one specific row in a table. While this could be based on a value itself (we could use the name of the city, for example), it should almost always be a number or other identifier. We don't want the id to ever change as it would break the relationship. You will find in most cases the primary key or id will be an auto-generated number.

> ✅ Primary key is frequently abbreviated as PK.

 ***cities***

|city_id|	City|	Country|
|:-|:-|:-|
|1|	Tokyo|	Japan|
|2|	Atlanta|	United States|
|3|	Auckland|	New Zealand|

> ✅ You will notice we use the terms "id" and "primary key" interchangeably during this lesson. The concepts here apply to DataFrames, which you will explore later. DataFrames don't use the terminology of "primary key", however you will notice they behave much in the same way.

With our cities table created, let's store the rainfall. Rather than duplicating the full information about the city, we can use the id. We should also ensure the newly created table has an id column as well, as all tables should have an id or primary key.

 ***rainfall***

|rainfall_id|	city_id|	Year|	Amount|
|:-|:-|:-|:-|
|1|	1|	2018|	1445|
|2|	1|	2019|	1874|
|3|	1|	2020|	1690|
|4|	2|	2018|	1779|
|5|	2|	2019|	1111|
|6|	2|	2020|	1683|
|7|	3|	2018|	1386|
|8|	3|	2019|	942|
|9|	3|	2020|	1176|

Notice the **city_id** column inside the newly created **rainfall** table. This column contains values which reference the IDs in the cities table. In technical relational data terms, this is called a **foreign key**; it's a primary key from another table. You can just think of it as a reference or a pointer. **city_id** 1 references Tokyo.

> ✅ Foreign key is frequently abbreviated as FK.

#### Retrieving the data

With our data separated into two tables, you may be wondering how we retrieve it. If we are using a relational database such as MySQL, SQL Server or Oracle, we can use a language called Structured Query Language or SQL. SQL (sometimes pronounced sequel) is a standard language used to retrieve and modify data in a relational database.

To retrieve data you use the command . At its core, you **select** the columns you want to see **from** the table they're contained in. If you wanted to display just the names of the cities, you could use the following:`SELECT`

```sql
SELECT city
FROM cities;

-- Output:
-- Tokyo
-- Atlanta
-- Auckland
```

`SELECT` is where you list the columns, and is where you list the tables`FROM`.

> ✅ SQL syntax is case-insensitive, meaning and mean the same thing. However, depending on the type of database you are using the columns and tables might be case sensitive. As a result, it's a best practice to always treat everything in programming like it's case sensitive. When writing SQL queries common convention is to put the keywords in all upper-case letters `select``SELECT`.

The query above will display all cities. Let's imagine we only wanted to display cities in New Zealand. We need some form of a filter. The SQL keyword for this is , or "where something is true" `WHERE`.

```sql
SELECT city
FROM cities
WHERE country = 'New Zealand';

-- Output:
-- Auckland
```

#### Joining data

Until now we've retrieved data from a single table. Now we want to bring the data together from both cities and **rainfall**. This is done by joining them together. You will effectively create a seam between the two tables, and match up the values from a column from each table.

In our example, we will match the **city_id** column in **rainfall** with the **city_id** column in **cities**. This will match the rainfall value with its respective city. The type of join we will perform is what's called an inner join, meaning if any rows don't match with anything from the other table they won't be displayed. In our case every city has rainfall, so everything will be displayed.

Let's retrieve the rainfall for 2019 for all our cities.

We're going to do this in steps. The first step is to join the data together by indicating the columns for the seam - **city_id** as highlighted before.

```sql
SELECT cities.city
    rainfall.amount
FROM cities
    INNER JOIN rainfall ON cities.city_id = rainfall.city_id
```

We have highlighted the two columns we want, and the fact we want to join the tables together by the **city_id**. Now we can add the statement to filter out only year 2019 `WHERE`.

```sql
SELECT cities.city
    rainfall.amount
FROM cities
    INNER JOIN rainfall ON cities.city_id = rainfall.city_id
WHERE rainfall.year = 2019

-- Output

-- city     | amount
-- -------- | ------
-- Tokyo    | 1874
-- Atlanta  | 1111
-- Auckland |  942
```

#### Summary

Relational databases are centered around dividing information between multiple tables which is then brought back together for display and analysis. This provides a high degree of flexibility to perform calculations and otherwise manipulate data. You have seen the core concepts of a relational database, and how to perform a join between two tables.

### NoSQL

#### Difinition and range

NoSQL is an umbrella term for the different ways to store non-relational data and can be interpreted as "non-SQL", "non-relational" or "not only SQL". These type of database systems can be categorized into 4 types.

##### Key-value

![kv-db](https://github.com/microsoft/Data-Science-For-Beginners/blob/main/2-Working-With-Data/06-non-relational/images/kv-db.png?raw=true)

> Source from [Michał Białecki Blog](https://www.michalbialecki.com/2018/03/18/azure-cosmos-db-key-value-database-cloud/).

[Key-value](https://learn.microsoft.com/en-us/azure/architecture/data-guide/big-data/non-relational-data#keyvalue-data-stores) databases pair unique keys, which are a unique identifier associated with a value. These pairs are stored using a [hash table](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/) with an appropriate hashing function.

##### Graph

![graph-db](https://github.com/microsoft/Data-Science-For-Beginners/blob/main/2-Working-With-Data/06-non-relational/images/graph-db.png)

> Source from [Microsoft](https://learn.microsoft.com/en-us/azure/cosmos-db/graph/graph-introduction#graph-database-by-example).

[Graph](https://docs.microsoft.com/en-us/azure/architecture/data-guide/big-data/non-relational-data#graph-data-stores) databases describe relationships in data and are represented as a collection of nodes and edges. A node represents an entity, something that exists in the real world such as a student or bank statement. Edges represent the relationship between two entities Each node and edge have properties that provides additional information about each node and edges.

##### Columnar

![columnar-db](https://github.com/microsoft/Data-Science-For-Beginners/blob/main/2-Working-With-Data/06-non-relational/images/columnar-db.png)

> Source from [Microsoft](https://docs.microsoft.com/en-us/azure/cosmos-db/graph/graph-introduction#graph-database-by-example)

[Columnar](https://docs.microsoft.com/en-us/azure/architecture/data-guide/big-data/non-relational-data#columnar-data-stores) data stores organizes data into columns and rows like a relational data structure but each column is divided into groups called a column family, where all the data under one column is related and can be retrieved and changed in one unit.

##### Document data stores with the Azure Cosmos DB

[Document](https://docs.microsoft.com/en-us/azure/architecture/data-guide/big-data/non-relational-data#document-data-stores) data stores build on the concept of a key-value data store and is made up of a series of fields and objects. This section will explore document databases with the Cosmos DB emulator.

A Cosmos DB database fits the definition of "Not Only SQL", where Cosmos DB's document database relies on SQL to query the data. The previous lesson on SQL covers the basics of the language, and we'll be able to apply some of the same queries to a document database here. We'll be using the Cosmos DB Emulator, which allows us to create and explore a document database locally on a computer. Read more about the Emulator [here](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21).

A document is a collection of fields and object values, where the fields describe what the object value represents. Below is an example of a document.

```
{
    "firstname": "Eva",
    "age": 44,
    "id": "8c74a315-aebf-4a16-bb38-2430a9896ce5",
    "_rid": "bHwDAPQz8s0BAAAAAAAAAA==",
    "_self": "dbs/bHwDAA==/colls/bHwDAPQz8s0=/docs/bHwDAPQz8s0BAAAAAAAAAA==/",
    "_etag": "\"00000000-0000-0000-9f95-010a691e01d7\"",
    "_attachments": "attachments/",
    "_ts": 1630544034
}
```

The fields of interest in this document are: `firstname`, `id`, and `age`. The rest of the fields with the underscores were generated by Cosmos DB.

#### Exploring data with the cosmos DB Emulator

You can download and install the emulator [for Windows here](https://aka.ms/cosmosdb-emulator). Refer to this [documentation](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21#run-on-linux-macos) for options on how to run the Emulator for macOS and Linux.

The Emulator launches a browser window, where the Explorer view allows you to explore documents.

![cosmosdb-emulator-explore](https://github.com/microsoft/Data-Science-For-Beginners/blob/main/2-Working-With-Data/06-non-relational/images/cosmosdb-emulator-explorer.png)

If you're following along, click on "Start with Sample" to generate a sample database called SampleDB. If you expand Sample DB by clicking on the arrow you'll find a container called `Persons`, a container holds a collection of items, which are the documents within the container. You can explore the four individual documents under `Items`.

![cosmosdb-emulator-persons](https://github.com/microsoft/Data-Science-For-Beginners/raw/main/2-Working-With-Data/06-non-relational/images/cosmosdb-emulator-persons.png)

#### Querying Document Data with the Cosmos DB Emulator

We can also query the sample data by clicking on the new SQL Query button (second button from the left).

`SELECT * FROM c` returns all the documents in the container. Let's add a where clause and find everyone younger than 40.

`SELECT * FROM c where c.age < 40`

![cosmosdb-emulator-persons-query](https://github.com/microsoft/Data-Science-For-Beginners/raw/main/2-Working-With-Data/06-non-relational/images/cosmosdb-emulator-persons-query.png)

The query returns two documents, notice the age value for each document is less than 40.

#### JSON and documents

If you're familiar with JavaScript Object Notation (JSON) you'll notice that documents look similar to JSON. There is a `PersonsData.json` file in this directory with more data that you may upload to the Persons container in the Emulator via the `Upload Item` button.

In most instances, APIs that return JSON data can be directly transferred and stored in document databases. Below is another document, it represents tweets from the Microsoft Twitter account that was retrieved using the Twitter API, then inserted into Cosmos DB.

```
{
    "created_at": "2021-08-31T19:03:01.000Z",
    "id": "1432780985872142341",
    "text": "Blank slate. Like this tweet if you’ve ever painted in Microsoft Paint before. https://t.co/cFeEs8eOPK",
    "_rid": "dhAmAIUsA4oHAAAAAAAAAA==",
    "_self": "dbs/dhAmAA==/colls/dhAmAIUsA4o=/docs/dhAmAIUsA4oHAAAAAAAAAA==/",
    "_etag": "\"00000000-0000-0000-9f84-a0958ad901d7\"",
    "_attachments": "attachments/",
    "_ts": 1630537000
```

The fields of interest in this document are: `created_at`, `id`, and `text`.

## NumPy

### The basics of numpy arrays

Data manipulation in Python is nearly synonymous with NumPy array manipulation: even newer tools like **Pandas** are built around the NumPy array. This section will present several examples of using NumPy array manipulation to access data and subarrays, and to split, reshape, and join the arrays. While the types of operations shown here may seem a bit dry and pedantic, they comprise the building blocks of many other examples used throughout the book. Get to know them well!

We'll cover a few categories of basic array manipulations here:

- Attributes of arrays: Determining the size, shape, memory consumption, and data types of arrays.
- Indexing of arrays: Getting and setting the value of individual array elements.
- Slicing of arrays: Getting and setting smaller subarrays within a larger array.
- Reshaping of arrays: Changing the shape of a given array
Joining and splitting of arrays: Combining multiple arrays into one, and splitting one array into many.

#### NumPy array attributes

First let's discuss some useful array attributes. We'll start by defining three random arrays, a one-dimensional, two-dimensional, and three-dimensional array. We'll use NumPy's random number generator, which we will seed with a set value in order to ensure that the same random arrays are generated each time this code is run:

```{code-cell}
import numpy as np
np.random.seed(0)  # seed for reproducibility

x1 = np.random.randint(10, size=6)  # One-dimensional array
x2 = np.random.randint(10, size=(3, 4))  # Two-dimensional array
x3 = np.random.randint(10, size=(3, 4, 5))  # Three-dimensional array
```

Each array has attributes `ndim` (the number of dimensions), `shape` (the size of each dimension), and size (the total size of the array):

```{code-cell}
print("x3 ndim: ", x3.ndim)
print("x3 shape:", x3.shape)
print("x3 size: ", x3.size)
```

Another useful attribute is the dtype, the data type of the array

```{code-cell}
print("dtype:", x3.dtype)
```

Other attributes include itemsize, which lists the size (in bytes) of each array element, and `nbytes`, which lists the total size (in bytes) of the array:

```{code-cell}
print("itemsize:", x3.itemsize, "bytes")
print("nbytes:", x3.nbytes, "bytes")
```

In general, we expect that `nbytes` is equal to `itemsize` times `size`.

### Computation on numpy arrays: universal functions

Up until now, we have been discussing some of the basic nuts and bolts of NumPy; in the next few sections, we will dive into the reasons that NumPy is so important in the Python data science world. Namely, it provides an easy and flexible interface to optimized computation with arrays of data.

Computation on NumPy arrays can be very fast, or it can be very slow. The key to making it fast is to use vectorized operations, generally implemented through NumPy's universal functions (ufuncs). This section motivates the need for NumPy's ufuncs, which can be used to make repeated calculations on array elements much more efficient. It then introduces many of the most common and useful arithmetic ufuncs available in the NumPy package.

#### The wlowness of loops

```{code-cell}
import numpy as np
np.random.seed(0)

def compute_reciprocals(values):
    output = np.empty(len(values))
    for i in range(len(values)):
        output[i] = 1.0 / values[i]
    return output
        
values = np.random.randint(1, 10, size=5)
compute_reciprocals(values)
```

This implementation probably feels fairly natural to someone from, say, a C or Java background. But if we measure the execution time of this code for a large input, we see that this operation is very slow, perhaps surprisingly so! We'll benchmark this with IPython's `%timeit` magic:

```{code-cell}
big_array = np.random.randint(1, 100, size=1000000)
%timeit compute_reciprocals(big_array)
```

It takes several seconds to compute these million operations and to store the result! When even cell phones have processing speeds measured in Giga-FLOPS (i.e., billions of numerical operations per second), this seems almost absurdly slow. It turns out that the bottleneck here is not the operations themselves, but the type-checking and function dispatches that CPython must do at each cycle of the loop. Each time the reciprocal is computed, Python first examines the object's type and does a dynamic lookup of the correct function to use for that type. If we were working in compiled code instead, this type specification would be known before the code executes and the result could be computed much more efficiently.

#### Introducing ufuncs

For many types of operations, NumPy provides a convenient interface into just this kind of statically typed, compiled routine. This is known as a vectorized operation. This can be accomplished by simply performing an operation on the array, which will then be applied to each element. This vectorized approach is designed to push the loop into the compiled layer that underlies NumPy, leading to much faster execution.

Compare the results of the following two:

```{code-cell}
print(compute_reciprocals(values))
print(1.0 / values)
```

Looking at the execution time for our big array, we see that it completes orders of magnitude faster than the Python loop:

```{code-cell}
%timeit (1.0 / big_array)
```

Vectorized operations in NumPy are implemented via ufuncs, whose main purpose is to quickly execute repeated operations on values in NumPy arrays. Ufuncs are extremely flexible – before we saw an operation between a scalar and an array, but we can also operate between two arrays:

```{code-cell}
np.arange(5) / np.arange(1, 6)
```

And ufunc operations are not limited to one-dimensional arrays–they can also act on multi-dimensional arrays as well:

```{code-cell}
x = np.arange(9).reshape((3, 3))
2 ** x
```

Computations using vectorization through ufuncs are nearly always more efficient than their counterpart implemented using Python loops, especially as the arrays grow in size. Any time you see such a loop in a Python script, you should consider whether it can be replaced with a vectorized expression.

#### Exploring numPy's ufuncs

Ufuncs exist in two flavors: unary ufuncs, which operate on a single input, and binary ufuncs, which operate on two inputs. We'll see examples of both these types of functions here.

##### Array arithmetic

NumPy's ufuncs feel very natural to use because they make use of Python's native arithmetic operators. The standard addition, subtraction, multiplication, and division can all be used:

```{code-cell}
x = np.arange(4)
print("x     =", x)
print("x + 5 =", x + 5)
print("x - 5 =", x - 5)
print("x * 2 =", x * 2)
print("x / 2 =", x / 2)
print("x // 2 =", x // 2)  # floor division
```

There is also a unary ufunc for negation, and a `**` operator for exponentiation, and a `%` operator for modulus:

```{code-cell}
print("-x     = ", -x)
print("x ** 2 = ", x ** 2)
print("x % 2  = ", x % 2)
```

In addition, these can be strung together however you wish, and the standard order of operations is respected:

```{code-cell}
-(0.5*x + 1) ** 2
```

Each of these arithmetic operations are simply convenient wrappers around specific functions built into NumPy; for example, the `+` operator is a wrapper for the `add` function:

```{code-cell}
np.add(x, 2)
```

The following table lists the arithmetic operators implemented in NumPy:

|Operator|	Equivalent ufunc|	Description|
|:-|:-|:-|
|+|	np.add|	Addition (e.g., 1 + 1 = 2)|
|-|	np.subtract|	Subtraction (e.g., 3 - 2 = 1)|
|-|	np.negative|	Unary negation (e.g., -2)|
|*|	np.multiply|	Multiplication (e.g., 2 * 3 = 6)|
|/|	np.divide|	Division (e.g., 3 / 2 = 1.5)|
|//|	np.floor_divide|	Floor division (e.g., 3 // 2 = 1)|
|**|	np.power|	Exponentiation (e.g., 2 ** 3 = 8)|
|%|	np.mod|	Modulus/remainder (e.g., 9 % 4 = 1)|

##### Absolute value

Just as NumPy understands Python's built-in arithmetic operators, it also understands Python's built-in absolute value function:

```{code-cell}
x = np.array([-2, -1, 0, 1, 2])
abs(x)
```

The corresponding NumPy ufunc is `np.absolute`, which is also available under the alias `np.abs`:

```{code-cell}
np.absolute(x)
```

```{code-cell}
np.abs(x)
```

This ufunc can also handle complex data, in which the absolute value returns the magnitude:

```{code-cell}
x = np.array([3 - 4j, 4 - 3j, 2 + 0j, 0 + 1j])
np.abs(x)
```

##### Trigonometric functions

NumPy provides a large number of useful ufuncs, and some of the most useful for the data scientist are the trigonometric functions. We'll start by defining an array of angles:

```{code-cell}
theta = np.linspace(0, np.pi, 3)
```

Now we can compute some trigonometric functions on these values:

```{code-cell}
print("theta      = ", theta)
print("sin(theta) = ", np.sin(theta))
print("cos(theta) = ", np.cos(theta))
print("tan(theta) = ", np.tan(theta))
```

The values are computed to within machine precision, which is why values that should be zero do not always hit exactly zero. Inverse trigonometric functions are also available:

```{code-cell}
x = [-1, 0, 1]
print("x         = ", x)
print("arcsin(x) = ", np.arcsin(x))
print("arccos(x) = ", np.arccos(x))
print("arctan(x) = ", np.arctan(x))
```

##### Exponents and logarithms

Another common type of operation available in a NumPy ufunc are the exponentials:

```{code-cell}
x = [1, 2, 3]
print("x     =", x)
print("e^x   =", np.exp(x))
print("2^x   =", np.exp2(x))
print("3^x   =", np.power(3, x))
```

The inverse of the exponentials, the logarithms, are also available. The basic np.log gives the natural logarithm; if you prefer to compute the base-2 logarithm or the base-10 logarithm, these are available as well:

```{code-cell}
x = [1, 2, 4, 10]
print("x        =", x)
print("ln(x)    =", np.log(x))
print("log2(x)  =", np.log2(x))
print("log10(x) =", np.log10(x))
```

There are also some specialized versions that are useful for maintaining precision with very small input:

```{code-cell}
x = [0, 0.001, 0.01, 0.1]
print("exp(x) - 1 =", np.expm1(x))
print("log(1 + x) =", np.log1p(x))
```

When `x` is very small, these functions give more precise values than if the raw `np.log` or `np.exp` were to be used.

##### Specialized ufuncs

NumPy has many more ufuncs available, including hyperbolic trig functions, bitwise arithmetic, comparison operators, conversions from radians to degrees, rounding and remainders, and much more. A look through the NumPy documentation reveals a lot of interesting functionality.

Another excellent source for more specialized and obscure ufuncs is the submodule `scipy.special`. If you want to compute some obscure mathematical function on your data, chances are it is implemented in `scipy.special`. There are far too many functions to list them all, but the following snippet shows a couple that might come up in a statistics context:

```{code-cell}
from scipy import special
```

```{code-cell}
# Gamma functions (generalized factorials) and related functions
x = [1, 5, 10]
print("gamma(x)     =", special.gamma(x))
print("ln|gamma(x)| =", special.gammaln(x))
print("beta(x, 2)   =", special.beta(x, 2))
```

```{code-cell}
# Error function (integral of Gaussian)
# its complement, and its inverse
x = np.array([0, 0.3, 0.7, 1.0])
print("erf(x)  =", special.erf(x))
print("erfc(x) =", special.erfc(x))
print("erfinv(x) =", special.erfinv(x))
```

There are many, many more ufuncs available in both NumPy and `scipy.special`. Because the documentation of these packages is available online, a web search along the lines of "gamma function python" will generally find the relevant information.

#### Advanced ufunc features

Many NumPy users make use of ufuncs without ever learning their full set of features. We'll outline a few specialized features of ufuncs here.

##### Specifying output

For large calculations, it is sometimes useful to be able to specify the array where the result of the calculation will be stored. Rather than creating a temporary array, this can be used to write computation results directly to the memory location where you'd like them to be. For all ufuncs, this can be done using the out argument of the function:

```{code-cell}
x = np.arange(5)
y = np.empty(5)
np.multiply(x, 10, out=y)
print(y)
```

This can even be used with array views. For example, we can write the results of a computation to every other element of a specified array:

```{code-cell}
y = np.zeros(10)
np.power(2, x, out=y[::2])
print(y)
```

If we had instead written `y[::2] = 2 ** x`, this would have resulted in the creation of a temporary array to hold the results of `2 ** x`, followed by a second operation copying those values into the `y` array. This doesn't make much of a difference for such a small computation, but for very large arrays the memory savings from careful use of the `out` argument can be significant.

##### Aggregates

For binary ufuncs, there are some interesting aggregates that can be computed directly from the object. For example, if we'd like to reduce an array with a particular operation, we can use the `reduce` method of any ufunc. A reduce repeatedly applies a given operation to the elements of an array until only a single result remains.

For example, calling `reduce` on the `add` ufunc returns the sum of all elements in the array:

```{code-cell}
x = np.arange(1, 6)
np.add.reduce(x)
```

Similarly, calling `reduce` on the `multiply` ufunc results in the product of all array elements:

```{code-cell}
np.multiply.reduce(x)
```

If we'd like to store all the intermediate results of the computation, we can instead use accumulate:

```{code-cell}
np.add.accumulate(x)
```

```{code-cell}
np.multiply.accumulate(x)
```

Note that for these particular cases, there are dedicated NumPy functions to compute the results (`np.sum`, `np.prod`, `np.cumsum`, `np.cumprod`).

##### Outer products

Finally, any ufunc can compute the output of all pairs of two different inputs using the `outer` method. This allows you, in one line, to do things like create a multiplication table:

```{code-cell}
x = np.arange(1, 6)
np.multiply.outer(x, x)
```

### Aggregations: min, max, and everything in between

Often when faced with a large amount of data, a first step is to compute summary statistics for the data in question. Perhaps the most common summary statistics are the mean and standard deviation, which allow you to summarize the "typical" values in a dataset, but other aggregates are useful as well (the sum, product, median, minimum and maximum, quantiles, etc.).

NumPy has fast built-in aggregation functions for working on arrays; we'll discuss and demonstrate some of them here.

#### Summing the values in an array¶

As a quick example, consider computing the sum of all values in an array. Python itself can do this using the built-in `sum` function:

```{code-cell}
import numpy as np
```

```{code-cell}
L = np.random.random(100)
sum(L)
```

The syntax is quite similar to that of NumPy's sum function, and the result is the same in the simplest case:

```{code-cell}
np.sum(L)
```

However, because it executes the operation in compiled code, NumPy's version of the operation is computed much more quickly:

```{code-cell}
big_array = np.random.rand(1000000)
%timeit sum(big_array)
%timeit np.sum(big_array)
```

Be careful, though: the sum function and the np.sum function are not identical, which can sometimes lead to confusion! In particular, their optional arguments have different meanings, and np.sum is aware of multiple array dimensions, as we will see in the following section

#### Minimum and maximum

Similarly, Python has built-in `min` and `max` functions, used to find the minimum value and maximum value of any given array:

```{code-cell}
min(big_array), max(big_array)
```

NumPy's corresponding functions have similar syntax, and again operate much more quickly:

```{code-cell}
np.min(big_array), np.max(big_array)
```

```{code-cell}
%timeit min(big_array)
%timeit np.min(big_array)
```

For `min`, `max`, `sum`, and several other NumPy aggregates, a shorter syntax is to use methods of the array object itself:

```{code-cell}
print(big_array.min(), big_array.max(), big_array.sum())
```

Whenever possible, make sure that you are using the NumPy version of these aggregates when operating on NumPy arrays!

#### Multi dimensional aggregates

One common type of aggregation operation is an aggregate along a row or column. Say you have some data stored in a two-dimensional array:

```{code-cell}
M = np.random.random((3, 4))
print(M)
```

By default, each NumPy aggregation function will return the aggregate over the entire array:

```{code-cell}
M.sum()
```

Aggregation functions take an additional argument specifying the axis along which the aggregate is computed. For example, we can find the minimum value within each column by specifying `axis=0`:

```{code-cell}
M.min(axis=0)
```

The function returns four values, corresponding to the four columns of numbers.

Similarly, we can find the maximum value within each row:

```{code-cell}
M.max(axis=1)
```

The way the axis is specified here can be confusing to users coming from other languages. The `axis` keyword specifies the dimension of the array that will be collapsed, rather than the dimension that will be returned. So specifying `axis=0` means that the first axis will be collapsed: for two-dimensional arrays, this means that values within each column will be aggregated.

#### Other aggregation functions

NumPy provides many other aggregation functions, but we won't discuss them in detail here. Additionally, most aggregates have a `NaN`-safe counterpart that computes the result while ignoring missing values, which are marked by the special IEEE floating-point `NaN` value. Some of these `NaN`-safe functions were not added until NumPy 1.8, so they will not be available in older NumPy versions.

The following table provides a list of useful aggregation functions available in NumPy:

|Function Name|	NaN-safe Version|	Description|
|:-|:-|:-|
|np.sum|	np.nansum|	Compute sum of elements|
|np.prod|	np.nanprod|	Compute product of elements|
|np.mean|	np.nanmean|	Compute median of elements|
|np.std|	np.nanstd|	Compute standard deviation|
|np.var|	np.nanvar|	Compute variance|
|np.min|	np.nanmin|	Find minimum value|
|np.max|	np.nanmax|	Find maximum value|
|np.argmin|	np.nanargmin|	Find index of minimum value|
|np.argmax|	np.nanargmax|	Find index of maximum value|
|np.median|	np.nanmedian|	Compute median of elements
|np.percentile|	np.nanpercentile|	Compute rank-based statistics of elements|
|np.any|	N/A|	Evaluate whether any elements are true|
|np.all|	N/A|	Evaluate whether all elements are true|

### Computation on arrays: broadcasting

We saw in the previous section how NumPy's universal functions can be used to vectorize operations and thereby remove slow Python loops. Another means of vectorizing operations is to use NumPy's broadcasting functionality. Broadcasting is simply a set of rules for applying binary ufuncs (e.g., addition, subtraction, multiplication, etc.) on arrays of different sizes.

#### Introducing broadcasting

Recall that for arrays of the same size, binary operations are performed on an element-by-element basis:

```{code-cell}
import numpy as np
```

```{code-cell}
a = np.array([0, 1, 2])
b = np.array([5, 5, 5])
a + b
```

Broadcasting allows these types of binary operations to be performed on arrays of different sizes–for example, we can just as easily add a scalar (think of it as a zero-dimensional array) to an array:

```{code-cell}
a + 5
```

We can think of this as an operation that stretches or duplicates the value `5` into the array `[5, 5, 5]`, and adds the results. The advantage of NumPy's broadcasting is that this duplication of values does not actually take place, but it is a useful mental model as we think about broadcasting.

We can similarly extend this to arrays of higher dimension. Observe the result when we add a one-dimensional array to a two-dimensional array:

```{code-cell}
M = np.ones((3, 3))
M
```

```{code-cell}
M + a
```

Here the one-dimensional array `a` is stretched, or broadcast across the second dimension in order to match the shape of `M`.

While these examples are relatively easy to understand, more complicated cases can involve broadcasting of both arrays. Consider the following example:

```{code-cell}
a = np.arange(3)
b = np.arange(3)[:, np.newaxis]

print(a)
print(b)
```

```{code-cell}
a + b
```

Just as before we stretched or broadcasted one value to match the shape of the other, here we've stretched both `a` and `b` to match a common shape, and the result is a two-dimensional array! The geometry of these examples is visualized in the following figure.

![broadcasting](https://nbviewer.org/github/donnemartin/data-science-ipython-notebooks/blob/master/numpy/figures/02.05-broadcasting.png)

The light boxes represent the broadcasted values: again, this extra memory is not actually allocated in the course of the operation, but it can be useful conceptually to imagine that it is.

#### Rules of broadcasting

Broadcasting in NumPy follows a strict set of rules to determine the interaction between the two arrays:

- Rule 1: If the two arrays differ in their number of dimensions, the shape of the one with fewer dimensions is padded with ones on its leading (left) side.
- Rule 2: If the shape of the two arrays does not match in any dimension, the array with shape equal to 1 in that dimension is stretched to match the other shape.
- Rule 3: If in any dimension the sizes disagree and neither is equal to 1, an error is raised.

To make these rules clear, let's consider a few examples in detail.

##### Broadcasting example 1

Let's look at adding a two-dimensional array to a one-dimensional array:

```{code-cell}
M = np.ones((2, 3))
a = np.arange(3)
```

Let's consider an operation on these two arrays. The shape of the arrays are:

- `M.shape = (2, 3)`
- `a.shape = (3,)`

We see by rule 1 that the array a has fewer dimensions, so we pad it on the left with ones:

- `M.shape -> (2, 3)`
- `a.shape -> (1, 3)`

By rule 2, we now see that the first dimension disagrees, so we stretch this dimension to match:

- `M.shape -> (2, 3)`
- `a.shape -> (2, 3)`

The shapes match, and we see that the final shape will be `(2, 3)`:

```{code-cell}
M + a
```

##### Broadcasting example 2

Let's take a look at an example where both arrays need to be broadcast:

```{code-cell}
a = np.arange(3).reshape((3, 1))
b = np.arange(3)
```

Again, we'll start by writing out the shape of the arrays:

- `a.shape = (3, 1)`
- `b.shape = (3,)`
Rule 1 says we must pad the shape of `b` with ones:

- `a.shape -> (3, 1)`
- `b.shape -> (1, 3)`

And rule 2 tells us that we upgrade each of these ones to match the corresponding size of the other array:

- `a.shape -> (3, 3)`
- `b.shape -> (3, 3)`

Because the result matches, these shapes are compatible. We can see this here:

```{code-cell}
a + b
```

##### Broadcasting example 3

Now let's take a look at an example in which the two arrays are not compatible:

```{code-cell}
M = np.ones((3, 2))
a = np.arange(3)
```

This is just a slightly different situation than in the first example: the matrix M is transposed. How does this affect the calculation? The shape of the arrays are:


- `M.shape = (3, 2)`
- `a.shape = (3,)`

Again, rule 1 tells us that we must pad the shape of `a` with ones:

- `M.shape -> (3, 2)`
- `a.shape -> (1, 3)`

By rule 2, the first dimension of `a` is stretched to match that of `M`:

`M.shape -> (3, 2)`
`a.shape -> (3, 3)`

Now we hit rule 3–the final shapes do not match, so these two arrays are incompatible, as we can observe by attempting this operation:

```{code-cell}
M + a
```

Note the potential confusion here: you could imagine making `a` and `M` compatible by, say, padding `a`'s shape with ones on the right rather than the left. But this is not how the broadcasting rules work! That sort of flexibility might be useful in some cases, but it would lead to potential areas of ambiguity. If right-side padding is what you'd like, you can do this explicitly by reshaping the array.

```{code-cell}
a[:, np.newaxis].shape
```

```{code-cell}
M + a[:, np.newaxis]
```

Also note that while we've been focusing on the `+` operator here, these broadcasting rules apply to any binary `ufunc`. For example, here is the `logaddexp(a, b)` function, which computes `log(exp(a) + exp(b))` with more precision than the naive approach:

```{code-cell}
np.logaddexp(M, a[:, np.newaxis])
```

#### Broadcasting in practice

Broadcasting operations form the core of many examples we'll see throughout this book. We'll now take a look at a couple simple examples of where they can be useful.

##### Centering an array

In the previous section, we saw that ufuncs allow a NumPy user to remove the need to explicitly write slow Python loops. Broadcasting extends this ability. One commonly seen example is when centering an array of data. Imagine you have an array of 10 observations, each of which consists of 3 values. Using the standard convention, we'll store this in a 10×3 array:

```{code-cell}
X = np.random.random((10, 3))
```

We can compute the mean of each feature using the `mean` aggregate across the first dimension:

```{code-cell}
Xmean = X.mean(0)
Xmean
```

And now we can center the `X` array by subtracting the mean (this is a broadcasting operation):

```{code-cell}
X_centered = X - Xmean
```

To double-check that we've done this correctly, we can check that the centered array has near zero mean:

```{code-cell}
X_centered.mean(0)
```

To within machine precision, the mean is now zero.

##### Plotting a two-dimensional function

One place that broadcasting is very useful is in displaying images based on two-dimensional functions. If we want to define a function z=f(x,y), broadcasting can be used to compute the function across the grid:

```{code-cell}
# x and y have 50 steps from 0 to 5
x = np.linspace(0, 5, 50)
y = np.linspace(0, 5, 50)[:, np.newaxis]

z = np.sin(x) ** 10 + np.cos(10 + y * x) * np.cos(x)
```
We'll use Matplotlib to plot this two-dimensional array.

```{code-cell}
%matplotlib inline
import matplotlib.pyplot as plt
```

```{code-cell}
plt.imshow(z, origin='lower', extent=[0, 5, 0, 5],
           cmap='viridis')
plt.colorbar();
```

The result is a compelling visualization of the two-dimensional function.

### Comparisons, masks, and boolean logic

This section covers the use of Boolean masks to examine and manipulate values within NumPy arrays. Masking comes up when you want to extract, modify, count, or otherwise manipulate values in an array based on some criterion: for example, you might wish to count all values greater than a certain value, or perhaps remove all outliers that are above some threshold. In NumPy, Boolean masking is often the most efficient way to accomplish these types of tasks.

#### Example: counting rainy days

Imagine you have a series of data that represents the amount of precipitation each day for a year in a given city. For example, here we'll load the daily rainfall statistics for the city of Seattle in 2014, using Panda:

```{code-cell}
import numpy as np
import pandas as pd

# use pandas to extract rainfall inches as a NumPy array
rainfall = pd.read_csv('data/Seattle2014.csv')['PRCP'].values
inches = rainfall / 254  # 1/10mm -> inches
inches.shape
```

The array contains 365 values, giving daily rainfall in inches from January 1 to December 31, 2014.

As a first quick visualization, let's look at the histogram of rainy days, which was generated using Matplotlib:

```{code-cell}
%matplotlib inline
import matplotlib.pyplot as plt
import seaborn; seaborn.set()  # set plot styles
```

```{code-cell}
plt.hist(inches, 40);
```

This histogram gives us a general idea of what the data looks like: despite its reputation, the vast majority of days in Seattle saw near zero measured rainfall in 2014. But this doesn't do a good job of conveying some information we'd like to see: for example, how many rainy days were there in the year? What is the average precipitation on those rainy days? How many days were there with more than half an inch of rain?

##### Digging into the data

One approach to this would be to answer these questions by hand: loop through the data, incrementing a counter each time we see values in some desired range. For reasons discussed throughout this chapter, such an approach is very inefficient, both from the standpoint of time writing code and time computing the result. We saw in Computation on NumPy Arrays: Universal Functions that NumPy's ufuncs can be used in place of loops to do fast element-wise arithmetic operations on arrays; in the same way, we can use other ufuncs to do element-wise comparisons over arrays, and we can then manipulate the results to answer the questions we have. We'll leave the data aside for right now, and discuss some general tools in NumPy to use masking to quickly answer these types of questions.

#### Comparison operators as ufuncs

In Computation on NumPy Arrays: Universal Functions we introduced ufuncs, and focused in particular on arithmetic operators. We saw that using `+`, `-`, `*`, `/`, and others on arrays leads to element-wise operations. NumPy also implements comparison operators such as `<` (less than) and `>` (greater than) as element-wise ufuncs. The result of these comparison operators is always an array with a Boolean data type. All six of the standard comparison operations are available:

```{code-cell}
x = np.array([1, 2, 3, 4, 5])
```

```{code-cell}
x < 3  # less than
```

```{code-cell}
x > 3  # greater than
```

```{code-cell}
x <= 3  # less than or equal
```

```{code-cell}
x >= 3  # greater than or equal
```

```{code-cell}
x != 3  # not equal
```

```{code-cell}
x = 3  # equal
```

It is also possible to do an element-wise comparison of two arrays, and to include compound expressions:

```{code-cell}
(2 * x) == (x ** 2)
```

As in the case of arithmetic operators, the comparison operators are implemented as ufuncs in NumPy; for example, when you write `x < 3`, internally NumPy uses `np.less(x, 3)`. A summary of the comparison operators and their equivalent ufunc is shown here:


|Operator|	Equivalent ufunc|		Operator|	Equivalent ufunc|
|:-|:|:-|:-|
|==|	np.equal|		!=|	np.not_equal|
|<|	np.less|		<=|	np.less_equal|
|>|	np.greater|		>=|	np.greater_equal|

Just as in the case of arithmetic ufuncs, these will work on arrays of any size and shape. Here is a two-dimensional example:

```{code-cell}
rng = np.random.RandomState(0)
x = rng.randint(10, size=(3, 4))
x
```

```{code-cell}
x < 6
```

In each case, the result is a Boolean array, and NumPy provides a number of straightforward patterns for working with these Boolean results.

#### Working with boolean arrays

Given a Boolean array, there are a host of useful operations you can do.
We'll work with `x`, the two-dimensional array we created earlier.

```{code-cell}
print(x)
```

##### Counting entries

To count the number of `True` entries in a Boolean array, `np.count_nonzero` is useful:

```{code-cell}
# how many values less than 6?
np.count_nonzero(x < 6)
```

We see that there are eight array entries that are less than 6. Another way to get at this information is to use `np.sum`; in this case, `False` is interpreted as `0`, and `True` is interpreted as `1`:

```{code-cell}
np.sum(x < 6)
```

The benefit of `sum()` is that like with other NumPy aggregation functions, this summation can be done along rows or columns as well:

```{code-cell}
# how many values less than 6 in each row?
np.sum(x < 6, axis=1)
```

This counts the number of values less than 6 in each row of the matrix.

If we're interested in quickly checking whether any or all the values are true, we can use (you guessed it) `np.any` or `np.all`:

```{code-cell}
# are there any values greater than 8?
np.any(x > 8)
```

```{code-cell}
# are there any values less than zero?
np.any(x < 0)
```

```{code-cell}
# are all values less than 10?
np.all(x < 10)
```

```{code-cell}
# are all values equal to 6?
np.all(x == 6)
```

np.all and np.any can be used along particular axes as well. For example:

```{code-cell}
# are all values in each row less than 4?
np.all(x < 8, axis=1)
```

Here all the elements in the first and third rows are less than 8, while this is not the case for the second row.

Finally, a quick warning: as mentioned in Aggregations: Min, Max, and Everything In Between, Python has built-in `sum()`, `any()`, and `all()` functions. These have a different syntax than the NumPy versions, and in particular will fail or produce unintended results when used on multidimensional arrays. Be sure that you are using `np.sum()`, `np.any()`, and `np.all()` for these examples!

##### Boolean operators

We've already seen how we might count, say, all days with rain less than four inches, or all days with rain greater than two inches. But what if we want to know about all days with rain less than four inches and greater than one inch? This is accomplished through Python's bitwise logic operators, `&`, `|`, `^`, and `~`. Like with the standard arithmetic operators, NumPy overloads these as ufuncs which work element-wise on (usually Boolean) arrays.

For example, we can address this sort of compound question as follows:

```{code-cell}
np.sum((inches > 0.5) & (inches < 1))
```

So we see that there are 29 days with rainfall between 0.5 and 1.0 inches.

Note that the parentheses here are important–because of operator precedence rules, with parentheses removed this expression would be evaluated as follows, which results in an error:

```py
inches > (0.5 & inches) < 1
```

Using the equivalence of **A AND B** and **NOT (NOT A OR NOT B)** (which you may remember if you've taken an introductory logic course), we can compute the same result in a different manner:

```{code-cell}
np.sum(~( (inches <= 0.5) | (inches >= 1) ))
```

Combining comparison operators and Boolean operators on arrays can lead to a wide range of efficient logical operations.

The following table summarizes the bitwise Boolean operators and their equivalent ufuncs:

|Operator|	Equivalent ufunc|		Operator|	Equivalent ufunc|
|:-|:-|:-|:-|
|&|	np.bitwise_and|		&#124; |	np.bitwise_or|
|^|	np.bitwise_xor|		~|	np.bitwise_not|

Using these tools, we might start to answer the types of questions we have about our weather data. Here are some examples of results we can compute when combining masking with aggregations:

```{code-cell}
print("Number days without rain:      ", np.sum(inches == 0))
print("Number days with rain:         ", np.sum(inches != 0))
print("Days with more than 0.5 inches:", np.sum(inches > 0.5))
print("Rainy days with < 0.2 inches  :", np.sum((inches > 0) &
                                              (inches < 0.2)))
```

#### Boolean arrays as masks

In the preceding section we looked at aggregates computed directly on Boolean arrays. A more powerful pattern is to use Boolean arrays as masks, to select particular subsets of the data themselves. Returning to our `x` array from before, suppose we want an array of all values in the array that are less than, say, 5:

```{code-cell}
x
```

We can obtain a Boolean array for this condition easily, as we've already seen:

```{code-cell}
x < 5
```

Now to select these values from the array, we can simply index on this Boolean array; this is known as a masking operation:

```{code-cell}
x[x < 5]
```

What is returned is a one-dimensional array filled with all the values that meet this condition; in other words, all the values in positions at which the mask array is `True`.

We are then free do operate on these values as we wish. For example, we can compute some relevant statistics on our Seattle rain data:

```{code-cell}
# construct a mask of all rainy days
rainy = (inches > 0)

# construct a mask of all summer days (June 21st is the 172nd day)
days = np.arange(365)
summer = (days > 172) & (days < 262)

print("Median precip on rainy days in 2014 (inches):   ",
      np.median(inches[rainy]))
print("Median precip on summer days in 2014 (inches):  ",
      np.median(inches[summer]))
print("Maximum precip on summer days in 2014 (inches): ",
      np.max(inches[summer]))
print("Median precip on non-summer rainy days (inches):",
      np.median(inches[rainy & ~summer]))
```

By combining Boolean operations, masking operations, and aggregates, we can very quickly answer these sorts of questions for our dataset.

#### Aside: using the keywords `and`/`or` versus the operators `&`/`|`¶

One common point of confusion is the difference between the keywords and and or on one hand, and the operators `&` and `|` on the other hand. When would you use one versus the other?

The difference is this: `and` and `or` gauge the truth or falsehood of entire object, while `&` and `|` refer to bits within each object.

When you use `and` or `or`, it's equivalent to asking Python to treat the object as a single Boolean entity. In Python, all nonzero integers will evaluate as True. Thus:

```{code-cell}
bool(42), bool(0)
```

```{code-cell}
bool(42 and 0)
```

```{code-cell}
bool(42 or 0)
```

When you use `&` and `|` on integers, the expression operates on the bits of the element, applying the and or the or to the individual bits making up the number:

```{code-cell}
bin(42)
```

```{code-cell}
bin(59)
```

```{code-cell}
bin(42 & 59)
```

```{code-cell}
bin(42 | 59)
```

Notice that the corresponding bits of the binary representation are compared in order to yield the result.

When you have an array of Boolean values in NumPy, this can be thought of as a string of bits where `1 = True` and `0 = False`, and the result of `&` and `|` operates similarly to above:

```{code-cell}
A = np.array([1, 0, 1, 0, 1, 0], dtype=bool)
B = np.array([1, 1, 1, 0, 1, 1], dtype=bool)
A | B
```

Using `or` on these arrays will try to evaluate the truth or falsehood of the entire array object, which is not a well-defined value:

```{code-cell}
A or B
```

Similarly, when doing a Boolean expression on a given array, you should use `|` or `&` rather than `or` or `and`:

```{code-cell}
x = np.arange(10)
(x > 4) & (x < 8)
```

Trying to evaluate the truth or falsehood of the entire array will give the same `ValueError` we saw previously:

```{code-cell}
(x > 4) and (x < 8)
```

So remember this: `and` and `or` perform a single Boolean evaluation on an entire object, while `&` and `|` perform multiple Boolean evaluations on the content (the individual bits or bytes) of an object. For Boolean NumPy arrays, the latter is nearly always the desired operation.

### Fancy indexing

In the previous sections, we saw how to access and modify portions of arrays using simple indices (e.g., `arr[0]`), slices (e.g., `arr[:5]`), and Boolean masks (e.g., `arr[arr > 0]`). In this section, we'll look at another style of array indexing, known as fancy indexing. Fancy indexing is like the simple indexing we've already seen, but we pass arrays of indices in place of single scalars. This allows us to very quickly access and modify complicated subsets of an array's values.

#### Exploring fancy indexing

Fancy indexing is conceptually simple: it means passing an array of indices to access multiple array elements at once. For example, consider the following array:

```{code-cell}
import numpy as np
rand = np.random.RandomState(42)

x = rand.randint(100, size=10)
print(x)
```

Suppose we want to access three different elements. We could do it like this:

```{code-cell}
[x[3], x[7], x[2]]
```

Alternatively, we can pass a single list or array of indices to obtain the same result:

```{code-cell}
ind = [3, 7, 4]
x[ind]
```

When using fancy indexing, the shape of the result reflects the shape of the index arrays rather than the shape of the *array being indexed*:

```{code-cell}
ind = np.array([[3, 7],
                [4, 5]])
x[ind]
```

Fancy indexing also works in multiple dimensions. Consider the following array:

```{code-cell}
X = np.arange(12).reshape((3, 4))
X
```

Like with standard indexing, the first index refers to the row, and the second to the column:

```{code-cell}
row = np.array([0, 1, 2])
col = np.array([2, 1, 3])
X[row, col]
```

Notice that the first value in the result is `X[0, 2]`, the second is `X[1, 1]`, and the third is `X[2, 3]`. So, for example, if we combine a column vector and a row vector within the indices, we get a two-dimensional result:

```{code-cell}
X[row[:, np.newaxis], col]
```

Here, each row value is matched with each column vector, exactly as we saw in broadcasting of arithmetic operations. For example:

```{code-cell}
row[:, np.newaxis] * col
```

It is always important to remember with fancy indexing that the return value reflects the broadcasted shape of the indices, rather than the shape of the array being indexed.

#### Combined indexing

For even more powerful operations, fancy indexing can be combined with the other indexing schemes we've seen:

```{code-cell}
print(X)
```

We can combine fancy and simple indices:

```{code-cell}
X[2, [2, 0, 1]]
```

We can also combine fancy indexing with slicing:

```{code-cell}
X[1:, [2, 0, 1]]
```

And we can combine fancy indexing with masking:

```{code-cell}
mask = np.array([1, 0, 1, 0], dtype=bool)
X[row[:, np.newaxis], mask]
```

All of these indexing options combined lead to a very flexible set of operations for accessing and modifying array values.

#### Example: Selecting Random Points

One common use of fancy indexing is the selection of subsets of rows from a matrix.

For example, we might have an ***N*** by ***D*** matrix representing ***N*** points in ***D*** dimensions, such as the following points drawn from a two-dimensional normal distribution:

```{code-cell}
mean = [0, 0]
cov = [[1, 2],
       [2, 5]]
X = rand.multivariate_normal(mean, cov, 100)
X.shape
```

We can visualize these points as a scatter-plot:

```{code-cell}
%matplotlib inline
import matplotlib.pyplot as plt
import seaborn; seaborn.set()  # for plot styling

plt.scatter(X[:, 0], X[:, 1]);
```

Let's use fancy indexing to select 20 random points. We'll do this by first choosing 20 random indices with no repeats, and use these indices to select a portion of the original array:

```{code-cell}
indices = np.random.choice(X.shape[0], 20, replace=False)
indices
```

```{code-cell}
selection = X[indices]  # fancy indexing here
selection.shape
```

Now to see which points were selected, let's over-plot large circles at the locations of the selected points:

```{code-cell}
plt.scatter(X[:, 0], X[:, 1], alpha=0.3)
plt.scatter(selection[:, 0], selection[:, 1],
            facecolor='none', s=200);
```

This sort of strategy is often used to quickly partition datasets, as is often needed in train/test splitting for validation of statistical models, and in sampling approaches to answering statistical questions.

#### Modifying values with fancy indexing

Just as fancy indexing can be used to access parts of an array, it can also be used to modify parts of an array.

For example, imagine we have an array of indices and we'd like to set the corresponding items in an array to some value:

```{code-cell}
x = np.arange(10)
i = np.array([2, 1, 8, 4])
x[i] = 99
print(x)
```

We can use any assignment-type operator for this. For example:

```{code-cell}
x[i] -= 10
print(x)
```

Notice, though, that repeated indices with these operations can cause some potentially unexpected results. Consider the following:

```{code-cell}
x = np.zeros(10)
x[[0, 0]] = [4, 6]
print(x)
```

Where did the 4 go? The result of this operation is to first assign `x[0] = 4`, followed by `x[0] = 6`.

The result, of course, is that `x[0]` contains the value 6.

Fair enough, but consider this operation:

```{code-cell}
i = [2, 3, 3, 4, 4, 4]
x[i] += 1
x
```

You might expect that `x[3]` would contain the value 2, and `x[3]` would contain the value 3, as this is how many times each index is repeated. Why is this not the case?

Conceptually, this is because `x[i] += 1` is meant as a shorthand of `x[i] = x[i] + 1`. `x[i] + 1` is evaluated, and then the result is assigned to the indices in x.

With this in mind, it is not the augmentation that happens multiple times, but the assignment, which leads to the rather nonintuitive results.

So what if you want the other behavior where the operation is repeated? For this, you can use the `at()` method of ufuncs (available since NumPy 1.8), and do the following:

```{code-cell}
x = np.zeros(10)
np.add.at(x, i, 1)
print(x)
```

The `at()` method does an in-place application of the given operator at the specified indices (here, `i`) with the specified value (here, 1).
Another method that is similar in spirit is the `reduceat()` method of ufuncs, which you can read about in the NumPy documentation.

#### Example: binning data

You can use these ideas to efficiently bin data to create a histogram by hand.

For example, imagine we have 1,000 values and would like to quickly find where they fall within an array of bins.

We could compute it using `ufunc.at` like this:

```{code-cell}
np.random.seed(42)
x = np.random.randn(100)

# compute a histogram by hand
bins = np.linspace(-5, 5, 20)
counts = np.zeros_like(bins)

# find the appropriate bin for each x
i = np.searchsorted(bins, x)

# add 1 to each of these bins
np.add.at(counts, i, 1)
```

The counts now reflect the number of points within each bin–in other words, a histogram:

```{code-cell}
# plot the results
plt.plot(bins, counts, linestyle='solid');
```

Of course, it would be silly to have to do this each time you want to plot a histogram.

This is why Matplotlib provides the `plt.hist()` routine, which does the same in a single line:

```py
plt.hist(x, bins, histtype='step');
```

This function will create a nearly identical plot to the one seen here.
To compute the binning, `matplotlib` uses the `np.histogram` function, which does a very similar computation to what we did before. Let's compare the two here:

```{code-cell}
print("NumPy routine:")
%timeit counts, edges = np.histogram(x, bins)

print("Custom routine:")
%timeit np.add.at(counts, np.searchsorted(bins, x), 1)
```

Our own one-line algorithm is several times faster than the optimized algorithm in NumPy! How can this be?
If you dig into the `np.histogram` source code (you can do this in IPython by typing `np.histogram??`), you'll see that it's quite a bit more involved than the simple search-and-count that we've done; this is because NumPy's algorithm is more flexible, and particularly is designed for better performance when the number of data points becomes large:

```{code-cell}
x = np.random.randn(1000000)
print("NumPy routine:")
%timeit counts, edges = np.histogram(x, bins)

print("Custom routine:")
%timeit np.add.at(counts, np.searchsorted(bins, x), 1)
```

What this comparison shows is that algorithmic efficiency is almost never a simple question. An algorithm efficient for large datasets will not always be the best choice for small datasets, and vice versa.

But the advantage of coding this algorithm yourself is that with an understanding of these basic methods, you could use these building blocks to extend this to do some very interesting custom behaviors.

The key to efficiently using Python in data-intensive applications is knowing about general convenience routines like `np.histogram` and when they're appropriate, but also knowing how to make use of lower-level functionality when you need more pointed behavior.

### Sorting Arrays

Up to this point we have been concerned mainly with tools to access and operate on array data with NumPy.

This section covers algorithms related to sorting values in NumPy arrays.
These algorithms are a favorite topic in introductory computer science courses: if you've ever taken one, you probably have had dreams (or, depending on your temperament, nightmares) about **insertion sorts**, **selection sorts**, **merge sorts**, **quick sorts**, **bubble sorts**, and many, many more.

All are means of accomplishing a similar task: sorting the values in a list or array.

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

In terms of the "big-O" notation often used to characterize these algorithms (see Big-O Notation, selection sort averages *** O[N^2]***: if you double the number of items in the list, the execution time will go up by about a factor of four.

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

This silly sorting method relies on pure chance: it repeatedly applies a random shuffling of the array until the result happens to be sorted.
With an average scaling of ***O[N×N!]***, (that's *N* times *N* factorial) this should–quite obviously–never be used for any real computation.

Fortunately, Python contains built-in sorting algorithms that are *much* more efficient than either of the simplistic algorithms just shown. We'll start by looking at the Python built-ins, and then take a look at the routines included in NumPy and optimized for NumPy arrays.

#### Fast sorting in numPy: `np.sort` and `np.argsort`

Although Python has built-in `sort` and `sorted` functions to work with lists, we won't discuss them here because NumPy's `np.sort` function turns out to be much more efficient and useful for our purposes.
By default `np.sort` uses an ***O[NlogN]***, *quicksort* algorithm, though *mergesort* and *heapsort* are also available. For most applications, the default quicksort is more than sufficient.

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

##### Sorting along rows or columns

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

#### Partial sorts: partitioning

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

#### Example: k-nearest neighbors

Let's quickly see how we might use this `argsort` function along multiple axes to find the nearest neighbors of each point in a set.
We'll start by creating a random set of 10 points on a two-dimensional plane.Using the standard convention, we'll arrange these in a **10×2** array:

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

Now we'll compute the distance between each pair of points.
Recall that the squared-distance between two points is the sum of the squared differences in each dimension;
using the efficient broadcasting and aggregation routines provided by NumPy we can compute the matrix of square distances in a single line of code:

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

Each point in the plot has lines drawn to its two nearest neighbors.
At first glance, it might seem strange that some of the points have more than two lines coming out of them: this is due to the fact that if point A is one of the two nearest neighbors of point B, this does not necessarily imply that point B is one of the two nearest neighbors of point A.

Although the broadcasting and row-wise sorting of this approach might seem less straightforward than writing a loop, it turns out to be a very efficient way of operating on this data in Python.
You might be tempted to do the same type of operation by manually looping through the data and sorting each set of neighbors individually, but this would almost certainly lead to a slower algorithm than the vectorized version we used. The beauty of this approach is that it's written in a way that's agnostic to the size of the input data: we could just as easily compute the neighbors among 100 or 1,000,000 points in any number of dimensions, and the code would look the same.

Finally, I'll note that when doing very large nearest neighbor searches, there are tree-based and/or approximate algorithms that can scale as ***O[NlogN]*** or better rather than the ***O[N^2]*** of the brute-force algorithm. One example of this is the KD-Tree.

#### Aside: big-O notation

Big-O notation is a means of describing how the number of operations required for an algorithm scales as the input grows in size.
To use it correctly is to dive deeply into the realm of computer science theory, and to carefully distinguish it from the related small-o notation, big-***θ*** notation, big-***Ω*** notation, and probably many mutant hybrids thereof.
While these distinctions add precision to statements about algorithmic scaling, outside computer science theory exams and the remarks of pedantic blog commenters, you'll rarely see such distinctions made in practice.
Far more common in the data science world is a less rigid use of big-O notation: as a general (if imprecise) description of the scaling of an algorithm.
With apologies to theorists and pedants, this is the interpretation we'll use throughout this book.

Big-O notation, in this loose sense, tells you how much time your algorithm will take as you increase the amount of data.
If you have an ***O[N]*** (read "order *N*") algorithm that takes 1 second to operate on a list of length *N*=1,000, then you should expect it to take roughly 5 seconds for a list of length *N*=5,000.
If you have an ***O[N^2]*** (read "order *N* squared") algorithm that takes 1 second for *N*=1000, then you should expect it to take about 25 seconds for *N*=5000.

For our purposes, the *N* will usually indicate some aspect of the size of the dataset (the number of points, the number of dimensions, etc.). When trying to analyze billions or trillions of samples, the difference between ***O[N]*** and ***O[N^2]*** can be far from trivial!

Notice that the big-O notation by itself tells you nothing about the actual wall-clock time of a computation, but only about its scaling as you change *N*.
Generally, for example, an ***O[N]*** algorithm is considered to have better scaling than an ***O[N^2]*** algorithm, and for good reason. But for small datasets in particular, the algorithm with better scaling might not be faster.
For example, in a given problem an ***O[N^2]*** algorithm might take 0.01 seconds, while a "better" ***O[N]*** algorithm might take 1 second.
Scale up *N* by a factor of 1,000, though, and the ***O[N]*** algorithm will win out.

Even this loose version of Big-O notation can be very useful when comparing the performance of algorithms, and we'll use this notation throughout the book when talking about how algorithms scale.

### Structured data: numPy's structured arrays

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

#### Creating structured arrays

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

| Character        | Description           | Example                             |
| ---------        | -----------           | -------                             | 
| `'b'`          | Byte                  | `np.dtype('b')`                   |
| `'i'`          | Signed integer        | `np.dtype('i4') == np.int32`      |
| `'u'`          | Unsigned integer      | `np.dtype('u1') == np.uint8`      |
| `'f'`          | Floating point        | `np.dtype('f8') == np.int64`      |
| `'c'`          | Complex floating point| `np.dtype('c16') == np.complex128`|
| `'S'`, `'a'` | String                | `np.dtype('S5')`                  |
| `'U'`          | Unicode string        | `np.dtype('U') == np.str_`        |
| `'V'`          | Raw data (void)       | `np.dtype('V') == np.void`        |

#### More advanced compound types

It is possible to define even more advanced compound types.
For example, you can create a type where each element contains an array or matrix of values. Here, we'll create a data type with a `mat` component consisting of a **3×3** floating-point matrix:

```{code-cell}
tp = np.dtype([('id', 'i8'), ('mat', 'f8', (3, 3))])
X = np.zeros(1, dtype=tp)
print(X[0])
print(X['mat'][0])
```

Now each element in the `X` array consists of an `id` and a **3×3** matrix. Why would you use this rather than a simple multidimensional array, or perhaps a Python dictionary? The reason is that this NumPy `dtype` directly maps onto a C structure definition, so the buffer containing the array content can be accessed directly within an appropriately written C program. If you find yourself writing a Python interface to a legacy C or Fortran library that manipulates structured data, you'll probably find structured arrays quite useful!

#### RecordArrays: structured arrays with a twist

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

#### On to pandas

This section on structured and record arrays is purposely at the end of this chapter, because it leads so well into the next package we will cover: Pandas. Structured arrays like the ones discussed here are good to know about for certain situations, especially in case you're using NumPy arrays to map onto binary data formats in C, Fortran, or another language. For day-to-day use of structured data, the Pandas package is a much better choice, and we'll dive into a full discussion of it in the chapter that follows.

## Pandas