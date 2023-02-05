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

<details>

<summary><b>LICENSE</b></summary>

MIT License

Copyright (c) 2018 Oleksii Trekhleb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</details>

# Python programming basics

## Python syntax

**Python syntax compared to other programming languages**

- Python was designed for readability and has some similarities to the English language with influence from mathematics.
- Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.
- Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes. Other programming languages often use curly brackets for this purpose.

### Python indentations

While in other programming languages the indentation in code is for readability only, in Python the indentation is very important.

Python uses indentation to indicate a block of code.

```{code-cell}
if 5 > 2:
    print("Five is greater than two!")
```

Python will give you an error if you skip the indentation.

### Comments

Python has the commenting capability for the purpose of in-code documentation. Comments start with a `#`, and Python will render the rest of the line as a comment:

```{code-cell}
# This is a comment.
print("Hello, World!")
```

### Docstrings

Python also has extended documentation capability, called docstrings. Docstrings can be one line, or multiline. Docstrings are also comments. Python uses `"""` at the beginning and end of the docstring:

```{code-cell}
"""This is a 
multiline docstring."""
print("Hello, World!")
```

## Variables

Python is completely object-oriented, and not "statically typed". You do not need to declare variables before using them or declare their type. Every variable in Python is an object. Unlike other programming languages, Python has no command for declaring a variable. A variable is created the moment you first assign a value to it. A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables:

- A variable name must start with a letter or the underscore character.
- A variable name cannot start with a number.
- A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ ).
- Variable names are case-sensitive (age, Age and AGE are three different variables).

```{seealso}
- https://docs.python.org/3/tutorial/introduction.html
- https://www.w3schools.com/python/python_variables.asp
- https://www.learnpython.org/en/Variables_and_Types
```

```{code-cell}
integer_variable = 5
string_variable = 'John'

assert integer_variable == 5
assert string_variable == 'John'
```

## Operators

Operators are used to performing operations on variables and values. Python divides the operators into the following groups:

- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators
- Identity operators
- Membership operators
- Bitwise operators

```{seealso}
- https://www.w3schools.com/python/python_operators.asp
```

### Arithmetic operators

Arithmetic operators are used with numeric values to perform common mathematical operations.

```{code-cell}
# Addition.
assert 5 + 3 == 8

# Subtraction.
assert 5 - 3 == 2

# Multiplication.
assert 5 * 3 == 15
assert isinstance(5 * 3, int)

# Division.
# Result of division is float number.
assert 5 / 3 == 1.6666666666666667
assert 8 / 4 == 2
assert isinstance(5 / 3, float)
assert isinstance(8 / 4, float)

# Modulus.
assert 5 % 3 == 2

# Exponentiation.
assert 5 ** 3 == 125
assert 2 ** 3 == 8
assert 2 ** 4 == 16
assert 2 ** 5 == 32
assert isinstance(5 ** 3, int)

# Floor division.
assert 5 // 3 == 1
assert 6 // 3 == 2
assert 7 // 3 == 2
assert 9 // 3 == 3
assert isinstance(5 // 3, int)
```

### Comparison operators

Comparison operators are used to compare two values.

```{code-cell}
# Equal.
number = 5
assert number == 5

# Not equal.
number = 5
assert number != 3

# Greater than.
number = 5
assert number > 3

# Less than.
number = 5
assert number < 8

# Greater than or equal to
number = 5
assert number >= 5
assert number >= 4

# Less than or equal to
number = 5
assert number <= 5
assert number <= 6
```

## Data types

In programming, data type is an important concept. Variables can store data of different types, and different types can do different things. Python has the following data types built in by default, in these categories:

Name | Type
---------|----------
Text Type | `str`
Numeric Types | `int`, `float`, `complex`
Sequence Types | `list`, `tuple`, `range`
Mapping Type | `dict`
Set Types | `set`, `frozenset`
Boolean Type | `bool`
Binary Types | `bytes`, `bytearray`, `memoryview`
None Type | `NoneType`

```{seealso}
- https://docs.python.org/3/tutorial/introduction.html
- https://www.w3schools.com/python/python_datatypes.asp
```

### Numbers (including booleans)

There are three numeric types in Python:

- `int`
- `float`
- `complex`

```{seealso}
- https://docs.python.org/3/tutorial/introduction.html
- https://www.w3schools.com/python/python_numbers.asp
```

#### Integers

Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.

```{code-cell}
positive_integer = 1
negative_integer = -3255522
big_integer = 35656222554887711

assert isinstance(positive_integer, int)
assert isinstance(negative_integer, int)
assert isinstance(big_integer, int)
```

#### Booleans

Booleans represent the truth values `False` and `True`. The two objects representing the values `False` and `True` are the only Boolean objects. The Boolean type is a subtype of the integer type, and Boolean values behave like the values 0 and 1, respectively, in almost all contexts, the exception being that when converted to a string, the strings `False` or `True` are returned, respectively.

```{code-cell}
true_boolean = True
false_boolean = False

assert true_boolean
assert not false_boolean

assert isinstance(true_boolean, bool)
assert isinstance(false_boolean, bool)

# Let's try to cast boolean to string.
assert str(true_boolean) == "True"
assert str(false_boolean) == "False"
```

#### Floats

Float, or "floating point number" is a number, positive or negative, containing one or more decimals.

```{code-cell}
float_number = 7.0
# Another way of declaring float is using float() function.
float_number_via_function = float(7) 
float_negative = -35.59

assert float_number == float_number_via_function
assert isinstance(float_number, float)
assert isinstance(float_number_via_function, float)
assert isinstance(float_negative, float)
```

Float can also be scientific numbers with an "e" to indicate the power of 10.

```{code-cell}
float_with_small_e = 35e3
float_with_big_e = 12E4

assert float_with_small_e == 35000
assert float_with_big_e == 120000
assert isinstance(12E4, float)
assert isinstance(-87.7e100, float)
```

#### Complexes

A complex number has two parts, a real part and an imaginary part. Complex numbers are represented as A+Bi or A+Bj, where A is the real part and B is the imaginary part.

```{code-cell}
complex_number_1 = 5 + 6j
complex_number_2 = 3 - 2j

assert isinstance(complex_number_1, complex)
assert isinstance(complex_number_2, complex)
assert complex_number_1 * complex_number_2 == 27 + 8j
```

#### Number operation

```{code-cell}
# Addition.
assert 2 + 4 == 6

# Multiplication.
assert 2 * 4 == 8

# Division always returns a floating point number.
assert 12 / 3 == 4.0
assert 12 / 5 == 2.4
assert 17 / 3 == 5.666666666666667

# Modulo operator returns the remainder of the division.
assert 12 % 3 == 0
assert 13 % 3 == 1

# Floor division discards the fractional part.
assert 17 // 3 == 5

# Raising the number to specific power.
assert 5 ** 2 == 25  # 5 squared
assert 2 ** 7 == 128  # 2 to the power of 7

# There is full support for floating point; operators with mixed type operands convert the integer operand to floating point.
assert 4 * 3.75 - 1 == 14.0
```

### Strings and their methods

Besides numbers, Python can also manipulate strings, which can be expressed in several ways. They can be enclosed in single quotes `''` or double quotes `""` with the same result.

```{seealso}
- https://docs.python.org/3/tutorial/introduction.html
- https://www.w3schools.com/python/python_strings.asp
- https://www.w3schools.com/python/python_ref_string.asp
```

```{code-cell}
# String with double quotes.
name_1 = "John"

# String with single quotes.
name_2 = 'John'

assert name_1 == name_2
assert isinstance(name_1, str)
assert isinstance(name_2, str)
```

#### String type

`\` can be used to escape quotes. Use `\'` to escape the single quote or use double quotes instead.

```{code-cell}
single_quote_string = 'doesn\'t'
double_quote_string = "doesn't"

assert single_quote_string == double_quote_string
```

`\n` means newline.

```{code-cell}
multiline_string = 'First line.\nSecond line.'
```

Without `print()`, `\n` is included in the output. But with `print()`, `\n` produces a new line.

```{code-cell}
assert multiline_string == 'First line.\nSecond line.'
```

Strings can be indexed, with the first character having index 0. There is no separate character type; a character is simply a string of size one. Note that since -0 is the same as 0, negative indices start from -1.

```{code-cell}
import pytest
word = 'Python'
assert word[0] == 'P'  # First character.
assert word[5] == 'n'  # Fifth character.
assert word[-1] == 'n'  # Last character.
assert word[-2] == 'o'  # Second-last character.
assert word[-6] == 'P'  # Sixth from the end or zeroth from the beginning.

assert isinstance(word[0], str)
```

In addition to indexing, slicing is also supported. While indexing is used to obtain individual characters, slicing allows you to obtain substring.

```{code-cell}
assert word[0:2] == 'Py'  # Characters from position 0 (included) to 2 (excluded).
assert word[2:5] == 'tho'  # Characters from position 2 (included) to 5 (excluded).
```

Note how the start is always included, and the end is always excluded. This makes sure that `s[:i] + s[i:]` is always equal to `s`:

```{code-cell}
assert word[:2] + word[2:] == 'Python'
assert word[:4] + word[4:] == 'Python'
```

Slice indices have useful defaults; an omitted first index defaults to zero, and an omitted second index defaults to the size of the string being sliced.

```{code-cell}
assert word[:2] == 'Py'  # Character from the beginning to position 2 (excluded).
assert word[4:] == 'on'  # Characters from position 4 (included) to the end.
assert word[-2:] == 'on'  # Characters from the second-last (included) to the end.
```

One way to remember how slices work is to think of the indices as pointing between characters, with the left edge of the first character numbered 0. Then the right edge of the last character of a string of `n` characters has index `n`, for example:

 
|   | P |   | y |   | t |   | h |   | o |   | n |   |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|  0|   |  1|   |  2|   |  3|   |  4|   |  5|   |  6|
| -6|   | -5|   | -4|   | -3|   | -2|   | -1|   

Attempting to use an index that is too large will result in an error.

```{code-cell}
with pytest.raises(Exception):
    not_existing_character = word[42]
    assert not not_existing_character
```

However, out-of-range slice indexes are handled gracefully when used for slicing.

```{code-cell}
assert word[4:42] == 'on'
assert word[42:] == ''
```

Python strings cannot be changed — they are immutable. Therefore, assigning to an indexed position in the string results in an error:

```{code-cell}
with pytest.raises(Exception):
    # pylint: disable=unsupported-assignment-operation
    word[0] = 'J'
```

If you need a different string, you should create a new one.

```{code-cell}
assert 'J' + word[1:] == 'Jython'
assert word[:2] + 'py' == 'Pypy'
```

The built-in function `len()` returns the length of a string.

```{code-cell}
characters = 'supercalifragilisticexpialidocious'
assert len(characters) == 34
```

String literals can span multiple lines. One way is using triple-quotes: `"""..."""` or `'''...'''`. The end of lines are automatically included in the string, but it’s possible to prevent this by adding a `\` at the end of the line. The following example:

```{code-cell}
multi_line_string = '''\
    First line
    Second line
'''

assert multi_line_string == '''\
    First line
    Second line
'''
```

#### String operations

Strings can be concatenated (glued together) with the `+` operator, and repeated with `*`.

```{code-cell}
assert 3 * 'un' + 'ium' == 'unununium'

python = 'Py' 'thon'
assert python == 'Python'
```

This feature is particularly useful when you want to break long strings:

```{code-cell}
text = (
    'Put several strings within parentheses '
    'to have them joined together.'
)
assert text == 'Put several strings within parentheses to have them joined together.'
```

If you want to concatenate variables or a variable and a literal, use `+`:

```{code-cell}
prefix = 'Py'
assert prefix + 'thon' == 'Python'
```

#### String methods

```{code-cell}
hello_world_string = "Hello, World!"
```

The `strip()` method removes any whitespace from the beginning or the end.

```{code-cell}
string_with_whitespaces = " Hello, World! "
assert string_with_whitespaces.strip() == "Hello, World!"
```

The `len()` method returns the length of a string.

```{code-cell}
assert len(hello_world_string) == 13
```

The `lower()` method returns the string in lowercase.

```{code-cell}
assert hello_world_string.lower() == 'hello, world!'
```

The `upper()` method returns the string in the upper case.

```{code-cell}
assert hello_world_string.upper() == 'HELLO, WORLD!'
```

The `replace()` method replaces a string with another string.

```{code-cell}
assert hello_world_string.replace('H', 'J') == 'Jello, World!'
```

The `split()` method splits the string into substrings if it finds instances of the separator.

```{code-cell}
assert hello_world_string.split(',') == ['Hello', ' World!']
```

The `capitalize()` method converts the first character to upper case.

```{code-cell}
assert 'low letter at the beginning'.capitalize() == 'Low letter at the beginning'
```

The `count()` method returns the number of times a specified value occurs in a string.

```{code-cell}
assert 'low letter at the beginning'.count('t') == 4
```

The `find()` method searches the string for a specified value and returns the position of where it was found.

```{code-cell}
assert 'Hello, welcome to my world'.find('welcome') == 7
```

The `title()` method converts the first character of each word to upper case.

```{code-cell}
assert 'Welcome to my world'.title() == 'Welcome To My World'
```

The `replace()` method returns a string where a specified value is replaced with a specified value.

```{code-cell}
assert 'I like bananas'.replace('bananas', 'apples') == 'I like apples'
```

The `join()` method joins the elements of an iterable to the end of the string.

```{code-cell}
my_tuple = ('John', 'Peter', 'Vicky')
assert '-'.join(my_tuple) == 'John-Peter-Vicky'
```

The `isupper()` method returns True if all characters in the string are upper case.

```{code-cell}
assert 'ABC'.isupper()
assert not 'AbC'.isupper()
```

The `isalpha()` method checks if all the characters in the text are letters.

```{code-cell}
assert 'CompanyX'.isalpha()
assert not 'Company 23'.isalpha()
```

The `isdecimal()` method returns True if all characters in the string are decimals.

```{code-cell}
assert '1234'.isdecimal()
assert not 'a21453'.isdecimal()
```

#### String formatting

Often you’ll want more control over the formatting of your output than simply printing space-separated values. There are several ways to format output.

##### Formatted string literals

Formatted string literals (also called f-strings for short) let you include the value of Python expressions inside a string by prefixing the string with `f` or `F` and writing expressions as `{expression}`.

An optional format specifier can follow the expression. This allows greater control over how the value is formatted. The following example rounds pi to three places after the decimal.

```{code-cell}
pi_value = 3.14159
assert f'The value of pi is {pi_value:.3f}.' == 'The value of pi is 3.142.'
```

Passing an integer after the `:` will cause that field to be a minimum number of characters wide. This is useful for making columns line up.

```{code-cell}
table_data = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}
table_string = ''
for name, phone in table_data.items():
    table_string += f'{name:7}==>{phone:7d}'

assert table_string == ('Sjoerd ==>   4127'
                        'Jack   ==>   4098'
                        'Dcab   ==>   7678')
```

##### The string format() method

Basic usage of the `str.format()` method looks like this:

```{code-cell}
assert 'We are {} who say "{}!"'.format('knights', 'Ni') == 'We are knights who say "Ni!"'
```

The brackets and characters within them (called format fields) are replaced with the objects passed into the `str.format()` method. A number in the brackets can be used to refer to the position of the object passed into the `str.format()` method.

```{code-cell}
assert '{0} and {1}'.format('spam', 'eggs') == 'spam and eggs'
assert '{1} and {0}'.format('spam', 'eggs') == 'eggs and spam'
```

If keyword arguments are used in the `str.format()` method, their values are referred to by using the name of the argument.

```{code-cell}
formatted_string = 'This {food} is {adjective}.'.format(
    food='spam',
    adjective='absolutely horrible'
)

assert formatted_string == 'This spam is absolutely horrible.'
```

Positional and keyword arguments can be arbitrarily combined.

```{code-cell}
formatted_string = 'The story of {0}, {1}, and {other}.'.format(
    'Bill',
    'Manfred',
    other='Georg'
)

assert formatted_string == 'The story of Bill, Manfred, and Georg.'
```

If you have a really long format string that you don’t want to split up, it would be nice if you could reference the variables to be formatted by name instead of by position. This can be done by simply passing the dict and using square brackets `[]` to access the keys.

```{code-cell}
table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
formatted_string = 'Jack: {0[Jack]:d}; Sjoerd: {0[Sjoerd]:d}; Dcab: {0[Dcab]:d}'.format(table)

assert formatted_string == 'Jack: 4098; Sjoerd: 4127; Dcab: 8637678'
```

This could also be done by passing the table as keyword arguments with the `**` notation.

```{code-cell}
formatted_string = 'Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table)

assert formatted_string == 'Jack: 4098; Sjoerd: 4127; Dcab: 8637678'
```

### Lists and their methods (including list comprehensions)

Python knows several compound data types, used to group together other values. The most versatile is the list, which can be written as a list of comma-separated values (items) between square brackets. Lists might contain items of different types, but usually, the items all have the same type.

```{seealso}
- https://www.learnpython.org/en/Lists
- https://docs.python.org/3/tutorial/introduction.html
- https://docs.python.org/3/tutorial/datastructures.html#more-on-lists
```

#### List type

Lists are very similar to arrays. They can contain any type of variable, and they can contain as many variables as you wish. Lists can also be iterated over in a very simple manner.

Here is an example of how to build a list.

```{code-cell} 
squares = [1, 4, 9, 16, 25]

assert isinstance(squares, list)
```

Like strings (and all other built-in sequence types), lists can be indexed and sliced:

```{code-cell}
assert squares[0] == 1  # indexing returns the item
assert squares[-1] == 25
assert squares[-3:] == [9, 16, 25]  # slicing returns a new list
```

All slice operations return a new list containing the requested elements.
This means that the following slice returns a new (shallow) copy of the list:

```{code-cell}
assert squares[:] == [1, 4, 9, 16, 25]
```

Lists also support operations like concatenation:

```{code-cell}
assert squares + [36, 49, 64, 81, 100] == [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

Unlike strings, which are immutable, lists are a mutable type, i.e. it is possible to change their content:

```{code-cell} 
cubes = [1, 8, 27, 65, 125]  # something's wrong here, the cube of 4 is 64!
cubes[3] = 64  # replace the wrong value
assert cubes == [1, 8, 27, 64, 125]
```

You can also add new items at the end of the list, by using the `append()` method.

```{code-cell}
cubes.append(216)  # add the cube of 6
cubes.append(7 ** 3)  # and the cube of 7
assert cubes == [1, 8, 27, 64, 125, 216, 343]
```

Assignment to slices is also possible, and this can even change the size of the list or clear it entirely:

```{code-cell}
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
letters[2:5] = ['C', 'D', 'E']  # replace some values
assert letters == ['a', 'b', 'C', 'D', 'E', 'f', 'g']
letters[2:5] = []  # now remove them
assert letters == ['a', 'b', 'f', 'g']
```

Clear the list by replacing all the elements with an empty list.

```{code-cell}
letters[:] = []
assert letters == []
```

The built-in function `len()` also applies to lists.

```{code-cell}
letters = ['a', 'b', 'c', 'd']
assert len(letters) == 4
```

It is possible to nest lists (create lists containing other lists), for example:

```{code-cell}
list_of_chars = ['a', 'b', 'c']
list_of_numbers = [1, 2, 3]
mixed_list = [list_of_chars, list_of_numbers]
assert mixed_list == [['a', 'b', 'c'], [1, 2, 3]]
assert mixed_list[0] == ['a', 'b', 'c']
assert mixed_list[0][1] == 'b'
```

#### List methods

```{code-cell}
import pytest

fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana', 'grape']
```

`list.remove(x)` removes the first item from the list whose value is equal to x. It raises a `ValueError` if there is no such item.

```{code-cell}
fruits.remove('grape')
assert fruits == ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']

with pytest.raises(Exception):
    fruits.remove('not existing element')
```

`list.insert(i, x)` inserts an item at a given position. The first argument is the index of the element before which to insert, so `a.insert(0, x)` inserts at the front of the list, and `a.insert(len(a), x)` is equivalent to `a.append(x)`.

```{code-cell}
fruits.insert(0, 'grape')
assert fruits == ['grape', 'orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
```

`list.index(x[, start[, end]])` returns a zero-based index in the list of the first item whose value is equal to x. Raises a ValueError if there is no such item. The optional arguments start and end are interpreted as in the slice notation and are used to limit the search to a particular subsequence of the list. The returned index is computed relative to the beginning of the full sequence rather than the start argument.

```{code-cell}
assert fruits.index('grape') == 0
assert fruits.index('orange') == 1
assert fruits.index('banana') == 4
assert fruits.index('banana', 5) == 7  # Find next banana starting a position 5

with pytest.raises(Exception):
    fruits.index('not existing element')
```

`list.count(x)` returns the number of times x appears in the list.

```{code-cell}
assert fruits.count('tangerine') == 0
assert fruits.count('banana') == 2
```

`list.copy()` returns a shallow copy of the list. Equivalent to `a[:]`.

```{code-cell}
fruits_copy = fruits.copy()
assert fruits_copy == ['grape', 'orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
```

`list.reverse()` reverses the elements of the list in place.

```{code-cell}
fruits_copy.reverse()
assert fruits_copy == [
    'banana',
    'apple',
    'kiwi',
    'banana',
    'pear',
    'apple',
    'orange',
    'grape',
]
```

`list.sort(key=None, reverse=False)` sorts the items of the list in place. (The arguments can be used for sort customization, see `sorted()` for their explanation.)

```{code-cell}
fruits_copy.sort()
assert fruits_copy == [
    'apple',
    'apple',
    'banana',
    'banana',
    'grape',
    'kiwi',
    'orange',
    'pear',
]
```

`list.pop([i])` removes the item at the given position in the list and returns it. If no index is specified, `a.pop()` removes and returns the last item in the list. (The square brackets around the `i` in the method signature denote that the parameter is optional, not that you should type square brackets at that position.)

```{code-cell}
assert fruits == ['grape', 'orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
assert fruits.pop() == 'banana'
assert fruits == ['grape', 'orange', 'apple', 'pear', 'banana', 'kiwi', 'apple']
```

`list.clear()` removes all items from the list. Equivalent to `del a[:]`.

```{code-cell}
fruits.clear()
assert fruits == []
```

#### The del statement

There is a way to remove an item from a list given its index instead of its value: the `del` statement. This differs from the `pop()` method which returns a value. The `del` statement can also be used to remove slices from a list or clear the entire list (which we did earlier by assignment of an empty list to the slice).

```{code-cell}
import pytest

numbers = [-1, 1, 66.25, 333, 333, 1234.5]

del numbers[0]
assert numbers == [1, 66.25, 333, 333, 1234.5]

del numbers[2:4]
assert numbers == [1, 66.25, 1234.5]

del numbers[:]
assert numbers == []

# del can also be used to delete entire variables:
del numbers
with pytest.raises(Exception):
    # Referencing the name a hereafter is an error (at least until another
    # value is assigned to it).
    assert numbers == []  # noqa: F821
```

#### List comprehensions

List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable or to create a subsequence of those elements that satisfy a certain condition. A list comprehension consists of brackets containing an expression followed by a for clause, then zero or more `for` or `if` clauses. The result will be a new list resulting from evaluating the expression in the context of the `for` and `if` clauses that follow it.

For example, assume we want to create a list of squares, like:

```{code-cell}
squares = []
for number in range(10):
    squares.append(number ** 2)

assert squares == [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

Note that this creates (or overwrites) a variable named "number" that still exists after the loop completes. We can calculate the list of squares without any side effects using:

```{code-cell}
squares = list(map(lambda x: x ** 2, range(10)))
assert squares == [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

Or, equivalently (which is more concise and readable):

```{code-cell}
squares = [x ** 2 for x in range(10)]
assert squares == [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

For example, this list comprehension combines the elements of two lists if they are not equal:

```{code-cell}
combinations = [(x, y) for x in [1, 2, 3] for y in [3, 1, 4] if x != y]
assert combinations == [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
```

And it’s equivalent to:

```{code-cell}
combinations = []
for first_number in [1, 2, 3]:
    for second_number in [3, 1, 4]:
        if first_number != second_number:
            combinations.append((first_number, second_number))

assert combinations == [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
```

Note how the order of the `for` and `if` statements is the same in both these snippets.

If the expression is a tuple (e.g. the (x, y) in the previous example), it must be parenthesized. Let's see some more examples:

```{code-cell}
vector = [-4, -2, 0, 2, 4]
```

Create a new list with the values doubled.

```{code-cell}
doubled_vector = [x * 2 for x in vector]
assert doubled_vector == [-8, -4, 0, 4, 8]
```

Filter the list to exclude negative numbers.

```{code-cell}
positive_vector = [x for x in vector if x >= 0]
assert positive_vector == [0, 2, 4]
```

Apply a function to all the elements.

```{code-cell}
abs_vector = [abs(x) for x in vector]
assert abs_vector == [4, 2, 0, 2, 4]
```

Call a method on each element.

```{code-cell}
fresh_fruit = ['  banana', '  loganberry ', 'passion fruit  ']
clean_fresh_fruit = [weapon.strip() for weapon in fresh_fruit]
assert clean_fresh_fruit == ['banana', 'loganberry', 'passion fruit']
```

Create a list of 2-tuples like (number, square).

```{code-cell}
square_tuples = [(x, x ** 2) for x in range(6)]
assert square_tuples == [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]
```

Flatten a list using a list comprehension with two `for`.

```{code-cell}
vector = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flatten_vector = [num for elem in vector for num in elem]
assert flatten_vector == [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### Nested list comprehensions

The initial expression in a list comprehension can be any arbitrary expression, including another list comprehension.

Consider the following example of a 3x4 matrix implemented as a list of 3 lists of length 4:

```{code-cell}
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]
```

The following list comprehension will transpose rows and columns:

```{code-cell}
transposed_matrix = [[row[i] for row in matrix] for i in range(4)]
assert transposed_matrix == [
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    [4, 8, 12],
]
```

As we saw in the previous section, the nested list comprehension is evaluated in the context of the for that follows it, so this example is equivalent to:

```{code-cell}
transposed = []
for i in range(4):
    transposed.append([row[i] for row in matrix])

assert transposed == [
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    [4, 8, 12],
]
```

Which, in turn, is the same as:

```{code-cell}
transposed = []
for i in range(4):
    # the following 3 lines implement the nested listcomp
    transposed_row = []
    for row in matrix:
        transposed_row.append(row[i])
    transposed.append(transposed_row)

assert transposed == [
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    [4, 8, 12],
]
```

In the real world, you should prefer built-in functions to complex flow statements. The `zip()` function would do a great job for this use case.

```{code-cell}
assert list(zip(*matrix)) == [
    (1, 5, 9),
    (2, 6, 10),
    (3, 7, 11),
    (4, 8, 12),
]
```

### Tuples

A tuple is a collection that is ordered and unchangeable. In Python, tuples are written with
round brackets.

The Tuples have the following properties:

- You cannot change values in a tuple.
- You cannot remove items in a tuple.

```{seealso}
- https://www.w3schools.com/python/python_tuples.asp
- https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences
```

```{code-cell}
import pytest

fruits_tuple = ("apple", "banana", "cherry")

assert isinstance(fruits_tuple, tuple)
assert fruits_tuple[0] == "apple"
assert fruits_tuple[1] == "banana"
assert fruits_tuple[2] == "cherry"
```

You cannot change values in a tuple.

```{code-cell}
with pytest.raises(Exception):
    # pylint: disable=unsupported-assignment-operation
    fruits_tuple[0] = "pineapple"
```

It is also possible to use the `tuple()` constructor to make a tuple (note the double round-brackets).

The `len()` function returns the length of the tuple.

```{code-cell}
fruits_tuple_via_constructor = tuple(("apple", "banana", "cherry"))

assert isinstance(fruits_tuple_via_constructor, tuple)
assert len(fruits_tuple_via_constructor) == 3
```

It is also possible to omit brackets when initializing tuples.

```{code-cell}
another_tuple = 12345, 54321, 'hello!'
assert another_tuple == (12345, 54321, 'hello!')
```

Tuples may be nested:

```{code-cell}
nested_tuple = another_tuple, (1, 2, 3, 4, 5)
assert nested_tuple == ((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))
```

As you see, on output tuples are always enclosed in parentheses, so that nested tuples are interpreted correctly; they may be input with or without surrounding parentheses, although often parentheses are necessary anyway (if the tuple is part of a larger expression). It is not possible to assign to the individual items of a tuple, however, it is possible to create tuples that contain mutable objects, such as lists.

A special problem is the construction of tuples containing 0 or 1 item: the syntax has some extra quirks to accommodate these. Empty tuples are constructed by an empty pair of parentheses; a tuple with one item is constructed by following a value with a comma (it is not sufficient to enclose a single value in parentheses). Ugly, but effective. For example:

```{code-cell}
empty_tuple = ()
# pylint: disable=len-as-condition
assert len(empty_tuple) == 0

# pylint: disable=trailing-comma-tuple
singleton_tuple = 'hello',  # <-- note trailing comma
assert len(singleton_tuple) == 1
assert singleton_tuple == ('hello',)
```

The following example is called **tuple packing**:

```{code-cell}
packed_tuple = 12345, 54321, 'hello!'
```

The reverse operation is also possible.

```{code-cell}
first_tuple_number, second_tuple_number, third_tuple_string = packed_tuple
assert first_tuple_number == 12345
assert second_tuple_number == 54321
assert third_tuple_string == 'hello!'
```

This is called, appropriately enough, **sequence unpacking** and works for any sequence on the right-hand side. Sequence unpacking requires that there are as many variables on the left side of the equals sign as there are elements in the sequence. 

Note that multiple assignments are really just a combination of tuple packing and sequence unpacking.

Data can be swapped from one variable to another in Python using tuples. This eliminates the need to use a 'temp' variable.

```{code-cell}
first_number = 123
second_number = 456
first_number, second_number = second_number, first_number

assert first_number == 456
assert second_number == 123
```

### Sets and their methods

A set is a collection that is unordered and unindexed.

In Python, sets are written with `{}`.

Set objects also support mathematical operations like union, intersection, difference, and symmetric difference.

```{seealso}
- https://www.w3schools.com/python/python_sets.asp
- https://docs.python.org/3.7/tutorial/datastructures.html#sets
```

#### Set type

```{code-cell}
fruits_set = {"apple", "banana", "cherry"}

assert isinstance(fruits_set, set)
```

It is also possible to use the `set()` constructor to make a set. Note the `(())`.

```{code-cell}
fruits_set_via_constructor = set(("apple", "banana", "cherry"))

assert isinstance(fruits_set_via_constructor, set)
```

#### Set methods

```{code-cell}
fruits_set = {"apple", "banana", "cherry"}
```

You may check if the item is in set by using statement `in`.

```{code-cell}
assert "apple" in fruits_set
assert "pineapple" not in fruits_set
```

Use the `len()` method to return the number of items.

```{code-cell}
assert len(fruits_set) == 3
```

You can use the `add()` object method to add an item.

```{code-cell}
fruits_set.add("pineapple")
assert "pineapple" in fruits_set
assert len(fruits_set) == 4
```

Use `remove()` object method to remove an item.

```{code-cell}
fruits_set.remove("pineapple")
assert "pineapple" not in fruits_set
assert len(fruits_set) == 3
```

Demonstrate set operations on unique letters from two words:

```{code-cell}
first_char_set = set('abracadabra')
second_char_set = set('alacazam')

assert first_char_set == {'a', 'r', 'b', 'c', 'd'}  # unique letters in first word
assert second_char_set == {'a', 'l', 'c', 'z', 'm'}  # unique letters in second word
```

Letters in the first word but not in second.

```{code-cell}
assert first_char_set - second_char_set == {'r', 'b', 'd'}
```

Letters in the first word or second word or both.

```{code-cell}
assert first_char_set | second_char_set == {'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
```

Common letters in both words.

```{code-cell}
assert first_char_set & second_char_set == {'a', 'c'}
```

Letters in first or second word but not both.

```{code-cell}
assert first_char_set ^ second_char_set == {'r', 'd', 'b', 'm', 'z', 'l'}
```

Similarly to list comprehensions, set comprehensions are also supported:

```{code-cell}
word = {char for char in 'abracadabra' if char not in 'abc'}
assert word == {'r', 'd'}
```

### Dictionaries

A dictionary is a collection that is unordered, changeable and indexed. In Python, dictionaries are written with curly brackets, and they have keys and values.

Dictionaries are sometimes found in other languages as “associative memories” or “associative arrays”. Unlike sequences, which are indexed by a range of numbers, dictionaries are indexed by keys, which can be any immutable type; strings and numbers can always be keys. Tuples can be used as keys if they contain only strings, numbers, or tuples; if a tuple contains any mutable object either directly or indirectly, it cannot be used as a key. You can’t use lists as keys, since lists can be modified in place using index assignments, slice assignments, or methods like `append()` and `extend()`.

It is best to think of a dictionary as a set of key: value pairs, with the requirement that the keys are unique (within one dictionary). A pair of braces creates an empty dictionary: `{}`. Placing a comma-separated list of key-value pairs within the braces adds initial key-value pairs to the dictionary; this is also the way dictionaries are written on output.

```{seealso}
- https://docs.python.org/3/tutorial/datastructures.html#dictionaries
- https://www.w3schools.com/python/python_dictionaries.asp
```

```{code-cell}
fruits_dictionary = {
    'cherry': 'red',
    'apple': 'green',
    'banana': 'yellow',
}

assert isinstance(fruits_dictionary, dict)
```

You may access set elements by keys.

```{code-cell}
assert fruits_dictionary['apple'] == 'green'
assert fruits_dictionary['banana'] == 'yellow'
assert fruits_dictionary['cherry'] == 'red'
```

To check whether a single key is in the dictionary, use the keyword `in`.

```{code-cell}
assert 'apple' in fruits_dictionary
assert 'pineapple' not in fruits_dictionary
```

Change the apple color to "red".

```{code-cell}
fruits_dictionary['apple'] = 'red'
```

Add new key/value pair to the dictionary.

```{code-cell}
fruits_dictionary['pineapple'] = 'yellow'
assert fruits_dictionary['pineapple'] == 'yellow'
```

Performing `list(d)` on a dictionary returns a list of all the keys used in the dictionary, in insertion order. (If you want it sorted, just use `sorted(d)` instead.)

```{code-cell}
assert list(fruits_dictionary) == ['cherry', 'apple', 'banana', 'pineapple']
assert sorted(fruits_dictionary) == ['apple', 'banana', 'cherry', 'pineapple']
```

It is also possible to delete a key-value pair with `del`.

```{code-cell}
del fruits_dictionary['pineapple']
assert list(fruits_dictionary) == ['cherry', 'apple', 'banana']
```

The `dict()` constructor builds dictionaries directly from sequences of key-value pairs.

```{code-cell}
dictionary_via_constructor = dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])

assert dictionary_via_constructor['sape'] == 4139
assert dictionary_via_constructor['guido'] == 4127
assert dictionary_via_constructor['jack'] == 4098
```

In addition, dict comprehensions can be used to create dictionaries from arbitrary key and value expressions:

```{code-cell}
dictionary_via_expression = {x: x**2 for x in (2, 4, 6)}
assert dictionary_via_expression[2] == 4
assert dictionary_via_expression[4] == 16
assert dictionary_via_expression[6] == 36
```

When the keys are simple strings, it is sometimes easier to specify pairs using keyword arguments.

```{code-cell}
dictionary_for_string_keys = dict(sape=4139, guido=4127, jack=4098)
assert dictionary_for_string_keys['sape'] == 4139
assert dictionary_for_string_keys['guido'] == 4127
assert dictionary_for_string_keys['jack'] == 4098
```

### Type casting

There may be times when you want to specify a type to a variable. This can be done with **casting**. Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types. Casting in Python is therefore done using constructor functions.

- `int()` - constructs an integer number from an integer literal, a float literal (by rounding down
to the previous whole number) literal, or a string literal (providing the string represents a
whole number)
- `float()` - constructs a float number from an integer literal, a float literal or a string literal
(providing the string represents a float or an integer)
- `str()` - constructs a string from a wide variety of data types, including strings, integer
literals and float literals

```{seealso}
- https://www.w3schools.com/python/python_casting.asp
```

Type casting to integer.

```{code-cell}
assert int(1) == 1
assert int(2.8) == 2
assert int('3') == 3
```

Type casting to float.

```{code-cell}
assert float(1) == 1.0
assert float(2.8) == 2.8
assert float("3") == 3.0
assert float("4.2") == 4.2
```

Type casting to string.

```{code-cell}
assert str("s1") == 's1'
assert str(2) == '2'
assert str(3.0) == '3.0'
```

## Your turn! 🚀

Practice the Python programming basics by following this [assignment](../assignments/prerequisites/python-programming-basics.ipynb).

## Self study

Here is a list of free/open source learning resources for advanced [Python programming](https://github.com/open-academy/open-learning-resources/blob/main/README.md#python).

## Acknowledgments

Thanks to [Oleksii Trekhleb](https://github.com/trekhleb) who helped create this awesome open source project [learn-python](https://github.com/trekhleb/learn-python) for Python learning. It contributes the majority of the content in this chapter.
