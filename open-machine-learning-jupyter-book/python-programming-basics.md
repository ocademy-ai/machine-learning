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

# Python Programming Basics

## What is Python

Python is a popular programming language. It was created in 1991 by Guido van Rossum.

Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming. Python’s elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms.

It is used for:

- web development (server-side),
- software development,
- mathematics,
- system scripting.

## Python Syntax

**Python Syntax compared to other programming languages**

- Python was designed to for readability, and has some similarities to the English language with influence from mathematics.
- Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.
- Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes. Other programming languages often use curly-brackets for this purpose.

### Python Indentations

Where in other programming languages the indentation in code is for readability only, in Python the indentation is very important.

Python uses indentation to indicate a block of code.

```{code-cell}
if 5 > 2:
    print("Five is greater than two!")
```

Python will give you an error if you skip the indentation.

### Comments

Python has commenting capability for the purpose of in-code documentation.

Comments start with a `#`, and Python will render the rest of the line as a comment:

```{code-cell}
#This is a comment.
print("Hello, World!")
```

### Docstrings

Python also has extended documentation capability, called docstrings.

Docstrings can be one line, or multiline. Docstrings are also comments:

Python uses triple quotes at the beginning and end of the docstring:

```{code-cell}
"""This is a 
multiline docstring."""
print("Hello, World!")
```

## Variables

Python is completely object oriented, and not "statically typed". You do not need to declare variables before using them, or declare their type. Every variable in Python is an object. Unlike other programming languages, Python has no command for declaring a variable. A variable is created the moment you first assign a value to it. A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables:

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

```{seealso}
- https://www.w3schools.com/python/python_operators.asp
```

### Arithmetic operators

Arithmetic operators are used with numeric values to perform common mathematical operations

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

## Data Types

### Numbers (including booleans)

```{seealso}
- https://docs.python.org/3/tutorial/introduction.html
- https://www.w3schools.com/python/python_numbers.asp
```

#### Intergers

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

Booleans represent the truth values False and True. The two objects representing the values False and True are the only Boolean objects. The Boolean type is a subtype of the integer type, and Boolean values behave like the values 0 and 1, respectively, in almost all contexts, the exception being that when converted to a string, the strings "False" or "True" are returned, respectively.

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

# Float can also be scientific numbers with an "e" to indicate
# the power of 10.
float_with_small_e = 35e3
float_with_big_e = 12E4

assert float_with_small_e == 35000
assert float_with_big_e == 120000
assert isinstance(12E4, float)
assert isinstance(-87.7e100, float)
```

#### Complexes

A complex number has two parts, real part and imaginary part. Complex numbers are represented as A+Bi or A+Bj, where A is real part and B is imaginary part.

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

# There is full support for floating point; operators with
# mixed type operands convert the integer operand to floating point.
assert 4 * 3.75 - 1 == 14.0
```

### Strings and their methods

#### String Type

Besides numbers, Python can also manipulate strings, which can be expressed in several ways. They can be enclosed in single quotes ('...') or double quotes ("...") with the same result.

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

# Strings created with different kind of quotes are treated the same.
assert name_1 == name_2
assert isinstance(name_1, str)
assert isinstance(name_2, str)

# \ can be used to escape quotes.
# use \' to escape the single quote or use double quotes instead.
single_quote_string = 'doesn\'t'
double_quote_string = "doesn't"

assert single_quote_string == double_quote_string

# \n means newline.
multiline_string = 'First line.\nSecond line.'

# Without print(), \n is included in the output.
# But with print(), \n produces a new line.
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

# In addition to indexing, slicing is also supported. While indexing is
# used to obtain individual characters, slicing allows you to obtain
# substring:
assert word[0:2] == 'Py'  # Characters from position 0 (included) to 2 (excluded).
assert word[2:5] == 'tho'  # Characters from position 2 (included) to 5 (excluded).

# Note how the start is always included, and the end always excluded.
# This makes sure that s[:i] + s[i:] is always equal to s:
assert word[:2] + word[2:] == 'Python'
assert word[:4] + word[4:] == 'Python'

# Slice indices have useful defaults; an omitted first index defaults to
# zero, an omitted second index defaults to the size of the string being
# sliced.
assert word[:2] == 'Py'  # Character from the beginning to position 2 (excluded).
assert word[4:] == 'on'  # Characters from position 4 (included) to the end.
assert word[-2:] == 'on'  # Characters from the second-last (included) to the end.

# One way to remember how slices work is to think of the indices as
# pointing between characters, with the left edge of the first character
# numbered 0. Then the right edge of the last character of a string of n
# characters has index n, for example:
#
# +---+---+---+---+---+---+
#  | P | y | t | h | o | n |
#  +---+---+---+---+---+---+
#  0   1   2   3   4   5   6
# -6  -5  -4  -3  -2  -1

# Attempting to use an index that is too large will result in an error.
with pytest.raises(Exception):
    not_existing_character = word[42]
    assert not not_existing_character

# However, out of range slice indexes are handled gracefully when used
# for slicing:
assert word[4:42] == 'on'
assert word[42:] == ''

# Python strings cannot be changed — they are immutable. Therefore,
# assigning to an indexed position in the string
# results in an error:
with pytest.raises(Exception):
    # pylint: disable=unsupported-assignment-operation
    word[0] = 'J'

# If you need a different string, you should create a new one:
assert 'J' + word[1:] == 'Jython'
assert word[:2] + 'py' == 'Pypy'
```

The built-in function len() returns the length of a string:

```{code-cell}
characters = 'supercalifragilisticexpialidocious'
assert len(characters) == 34
```

String literals can span multiple lines. One way is using triple-quotes: """...""" or '''...'''. End of lines are automatically included in the string, but it’s possible to prevent this by adding a \ at the end of the line. The following example:

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

Strings can be concatenated (glued together) with the + operator, and repeated with *.

```{code-cell}
assert 3 * 'un' + 'ium' == 'unununium'

# 'Py' 'thon'
python = 'Py' 'thon'
assert python == 'Python'

# This feature is particularly useful when you want to break long strings:
text = (
    'Put several strings within parentheses '
    'to have them joined together.'
)
assert text == 'Put several strings within parentheses to have them joined together.'

# If you want to concatenate variables or a variable and a literal, use +:
prefix = 'Py'
assert prefix + 'thon' == 'Python'
```

#### String Methods

```{code-cell}
hello_world_string = "Hello, World!"

# The strip() method removes any whitespace from the beginning or the end.
string_with_whitespaces = " Hello, World! "
assert string_with_whitespaces.strip() == "Hello, World!"

# The len() method returns the length of a string.
assert len(hello_world_string) == 13

# The lower() method returns the string in lower case.
assert hello_world_string.lower() == 'hello, world!'

# The upper() method returns the string in upper case.
assert hello_world_string.upper() == 'HELLO, WORLD!'

# The replace() method replaces a string with another string.
assert hello_world_string.replace('H', 'J') == 'Jello, World!'

# The split() method splits the string into substrings if it finds instances of the separator.
assert hello_world_string.split(',') == ['Hello', ' World!']

# Converts the first character to upper case
assert 'low letter at the beginning'.capitalize() == 'Low letter at the beginning'

# Returns the number of times a specified value occurs in a string.
assert 'low letter at the beginning'.count('t') == 4

# Searches the string for a specified value and returns the position of where it was found.
assert 'Hello, welcome to my world'.find('welcome') == 7

# Converts the first character of each word to upper case
assert 'Welcome to my world'.title() == 'Welcome To My World'

# Returns a string where a specified value is replaced with a specified value.
assert 'I like bananas'.replace('bananas', 'apples') == 'I like apples'

# Joins the elements of an iterable to the end of the string.
my_tuple = ('John', 'Peter', 'Vicky')
assert '-'.join(my_tuple) == 'John-Peter-Vicky'

# Returns True if all characters in the string are upper case.
assert 'ABC'.isupper()
assert not 'AbC'.isupper()

# Check if all the characters in the text are letters.
assert 'CompanyX'.isalpha()
assert not 'Company 23'.isalpha()

# Returns True if all characters in the string are decimals.
assert '1234'.isdecimal()
assert not 'a21453'.isdecimal()
```

#### String Formatting

Often you’ll want more control over the formatting of your output than simply printing space-separated values. There are several ways to format output.

```{code-cell}
# To use formatted string literals, begin a string with f or F before the opening quotation
# mark or triple quotation mark. Inside this string, you can write a Python expression
# between { and } characters that can refer to variables or literal values.
year = 2018
event = 'conference'

assert f'Results of the {year} {event}' == 'Results of the 2018 conference'

# The str.format() method of strings requires more manual effort. You’ll still use { and } to
# mark where a variable will be substituted and can provide detailed formatting directives,
# but you’ll also need to provide the information to be formatted.
yes_votes = 42_572_654  # equivalent of 42572654
no_votes = 43_132_495   # equivalent of 43132495
percentage = yes_votes / (yes_votes + no_votes)

assert '{:-9} YES votes  {:2.2%}'.format(yes_votes, percentage) == ' 42572654 YES votes  49.67%'

# When you don’t need fancy output but just want a quick display of some variables for debugging
# purposes, you can convert any value to a string with the repr() or str() functions. The str()
# function is meant to return representations of values which are fairly human-readable, while
# repr() is meant to generate representations which can be read by the interpreter (or will
# force a SyntaxError if there is no equivalent syntax). For objects which don’t have a
# particular representation for human consumption, str() will return the same value as repr().
# Many values, such as numbers or structures like lists and dictionaries, have the same
# representation using either function. Strings, in particular, have two distinct
# representations.

greeting = 'Hello, world.'
first_num = 10 * 3.25
second_num = 200 * 200

assert str(greeting) == 'Hello, world.'
assert repr(greeting) == "'Hello, world.'"
assert str(1/7) == '0.14285714285714285'

# The argument to repr() may be any Python object:
assert repr((first_num, second_num, ('spam', 'eggs'))) == "(32.5, 40000, ('spam', 'eggs'))"

# Formatted String Literals

# Formatted string literals (also called f-strings for short) let you include the value of
# Python expressions inside a string by prefixing the string with f or F and writing
# expressions as {expression}.

# An optional format specifier can follow the expression. This allows greater control over how
# the value is formatted. The following example rounds pi to three places after the decimal.
pi_value = 3.14159
assert f'The value of pi is {pi_value:.3f}.' == 'The value of pi is 3.142.'

# Passing an integer after the ':' will cause that field to be a minimum number of characters
# wide. This is useful for making columns line up:
table_data = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}
table_string = ''
for name, phone in table_data.items():
    table_string += f'{name:7}==>{phone:7d}'

assert table_string == ('Sjoerd ==>   4127'
                        'Jack   ==>   4098'
                        'Dcab   ==>   7678')

# The String format() Method

# Basic usage of the str.format() method looks like this:
assert 'We are {} who say "{}!"'.format('knights', 'Ni') == 'We are knights who say "Ni!"'

# The brackets and characters within them (called format fields) are replaced with the objects
# passed into the str.format() method. A number in the brackets can be used to refer to the
# position of the object passed into the str.format() method
assert '{0} and {1}'.format('spam', 'eggs') == 'spam and eggs'
assert '{1} and {0}'.format('spam', 'eggs') == 'eggs and spam'

# If keyword arguments are used in the str.format() method, their values are referred to by
# using the name of the argument.
formatted_string = 'This {food} is {adjective}.'.format(
    food='spam',
    adjective='absolutely horrible'
)

assert formatted_string == 'This spam is absolutely horrible.'

# Positional and keyword arguments can be arbitrarily combined
formatted_string = 'The story of {0}, {1}, and {other}.'.format(
    'Bill',
    'Manfred',
    other='Georg'
)

assert formatted_string == 'The story of Bill, Manfred, and Georg.'

# If you have a really long format string that you don’t want to split up, it would be nice if
# you could reference the variables to be formatted by name instead of by position. This can be
# done by simply passing the dict and using square brackets '[]' to access the keys

table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
formatted_string = 'Jack: {0[Jack]:d}; Sjoerd: {0[Sjoerd]:d}; Dcab: {0[Dcab]:d}'.format(table)

assert formatted_string == 'Jack: 4098; Sjoerd: 4127; Dcab: 8637678'

# This could also be done by passing the table as keyword arguments with the ‘**’ notation.
formatted_string = 'Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table)

assert formatted_string == 'Jack: 4098; Sjoerd: 4127; Dcab: 8637678'
```

### Lists and their methods (including list comprehensions)

Python knows a number of compound data types, used to group together other values. The most versatile is the list, which can be written as a list of comma-separated values (items) between square brackets. Lists might contain items of different types, but usually the items all have the same type.

```{seealso}
- https://www.learnpython.org/en/Lists
- https://docs.python.org/3/tutorial/introduction.html
- https://docs.python.org/3/tutorial/datastructures.html#more-on-lists
```

#### List Type

Lists are very similar to arrays. They can contain any type of variable, and they can contain as many variables as you wish. Lists can also be iterated over in a very simple manner.

```{code-cell}
# Here is an example of how to build a list.
squares = [1, 4, 9, 16, 25]

assert isinstance(squares, list)

# Like strings (and all other built-in sequence type), lists can be
# indexed and sliced:
assert squares[0] == 1  # indexing returns the item
assert squares[-1] == 25
assert squares[-3:] == [9, 16, 25]  # slicing returns a new list

# All slice operations return a new list containing the requested elements.
# This means that the following slice returns a new (shallow) copy of
# the list:
assert squares[:] == [1, 4, 9, 16, 25]

# Lists also support operations like concatenation:
assert squares + [36, 49, 64, 81, 100] == [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

```{code-cell}
# Unlike strings, which are immutable, lists are a mutable type, i.e. it
# is possible to change their content:
cubes = [1, 8, 27, 65, 125]  # something's wrong here, the cube of 4 is 64!
cubes[3] = 64  # replace the wrong value
assert cubes == [1, 8, 27, 64, 125]

# You can also add new items at the end of the list, by using
# the append() method
cubes.append(216)  # add the cube of 6
cubes.append(7 ** 3)  # and the cube of 7
assert cubes == [1, 8, 27, 64, 125, 216, 343]
```

```{code-cell}
# Assignment to slices is also possible, and this can even change the size
# of the list or clear it entirely:
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
letters[2:5] = ['C', 'D', 'E']  # replace some values
assert letters == ['a', 'b', 'C', 'D', 'E', 'f', 'g']
letters[2:5] = []  # now remove them
assert letters == ['a', 'b', 'f', 'g']
# clear the list by replacing all the elements with an empty list
letters[:] = []
assert letters == []
```

```{code-cell}
# The built-in function len() also applies to lists
letters = ['a', 'b', 'c', 'd']
assert len(letters) == 4
```

```{code-cell}
# It is possible to nest lists (create lists containing other lists),
# for example:
list_of_chars = ['a', 'b', 'c']
list_of_numbers = [1, 2, 3]
mixed_list = [list_of_chars, list_of_numbers]
assert mixed_list == [['a', 'b', 'c'], [1, 2, 3]]
assert mixed_list[0] == ['a', 'b', 'c']
assert mixed_list[0][1] == 'b'
```

#### List Methods

```{code-cell}
import pytest

fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']

# list.append(x)
# Add an item to the end of the list.
# Equivalent to a[len(a):] = [x].
fruits.append('grape')
assert fruits == ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana', 'grape']

# list.remove(x)
# Remove the first item from the list whose value is equal to x.
# It raises a ValueError if there is no such item.
fruits.remove('grape')
assert fruits == ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']

with pytest.raises(Exception):
    fruits.remove('not existing element')

# list.insert(i, x)
# Insert an item at a given position. The first argument is the index of the element
# before which to insert, so a.insert(0, x) inserts at the front of the list,
# and a.insert(len(a), x) is equivalent to a.append(x).
fruits.insert(0, 'grape')
assert fruits == ['grape', 'orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']

# list.index(x[, start[, end]])
# Return zero-based index in the list of the first item whose value is equal to x.
# Raises a ValueError if there is no such item.
# The optional arguments start and end are interpreted as in the slice notation and are used
# to limit the search to a particular subsequence of the list. The returned index is computed
# relative to the beginning of the full sequence rather than the start argument.
assert fruits.index('grape') == 0
assert fruits.index('orange') == 1
assert fruits.index('banana') == 4
assert fruits.index('banana', 5) == 7  # Find next banana starting a position 5

with pytest.raises(Exception):
    fruits.index('not existing element')

# list.count(x)
# Return the number of times x appears in the list.
assert fruits.count('tangerine') == 0
assert fruits.count('banana') == 2

# list.copy()
# Return a shallow copy of the list. Equivalent to a[:].
fruits_copy = fruits.copy()
assert fruits_copy == ['grape', 'orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']

# list.reverse()
# Reverse the elements of the list in place.
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

# list.sort(key=None, reverse=False)
# Sort the items of the list in place (the arguments can be used for sort customization,
# see sorted() for their explanation).
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

# list.pop([i])
# Remove the item at the given position in the list, and return it. If no index is specified,
# a.pop() removes and returns the last item in the list. (The square brackets around the i in
# the method signature denote that the parameter is optional, not that you should type square
# brackets at that position.)
assert fruits == ['grape', 'orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
assert fruits.pop() == 'banana'
assert fruits == ['grape', 'orange', 'apple', 'pear', 'banana', 'kiwi', 'apple']

# list.clear()
# Remove all items from the list. Equivalent to del a[:].
fruits.clear()
assert fruits == []
```

#### The del statement

There is a way to remove an item from a list given its index instead of its value: the del statement. This differs from the pop() method which returns a value. The del statement can also be used to remove slices from a list or clear the entire list (which we did earlier by assignment of an empty list to the slice).

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

#### List Comprehensions

List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable, or to create a subsequence of those elements that satisfy a certain condition. A list comprehension consists of brackets containing an expression followed by a for clause, then zero or more for or if clauses. The result will be a new list resulting from evaluating the expression in the context of the for and if clauses which follow it.

```{code-cell}
# For example, assume we want to create a list of squares, like:
squares = []
for number in range(10):
    squares.append(number ** 2)

assert squares == [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Note that this creates (or overwrites) a variable named "number" that still exists after
# the loop completes. We can calculate the list of squares without any side effects using:
squares = list(map(lambda x: x ** 2, range(10)))
assert squares == [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# or, equivalently (which is more concise and readable):
squares = [x ** 2 for x in range(10)]
assert squares == [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# For example, this listcomp combines the elements of two lists if they are not equal.
combinations = [(x, y) for x in [1, 2, 3] for y in [3, 1, 4] if x != y]
assert combinations == [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]

# and it’s equivalent to:
combinations = []
for first_number in [1, 2, 3]:
    for second_number in [3, 1, 4]:
        if first_number != second_number:
            combinations.append((first_number, second_number))

assert combinations == [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]

# Note how the order of the for and if statements is the same in both these snippets.

# If the expression is a tuple (e.g. the (x, y) in the previous example),
# it must be parenthesized.

# Let's see some more examples:

vector = [-4, -2, 0, 2, 4]

# Create a new list with the values doubled.
doubled_vector = [x * 2 for x in vector]
assert doubled_vector == [-8, -4, 0, 4, 8]

# Filter the list to exclude negative numbers.
positive_vector = [x for x in vector if x >= 0]
assert positive_vector == [0, 2, 4]

# Apply a function to all the elements.
abs_vector = [abs(x) for x in vector]
assert abs_vector == [4, 2, 0, 2, 4]

# Call a method on each element.
fresh_fruit = ['  banana', '  loganberry ', 'passion fruit  ']
clean_fresh_fruit = [weapon.strip() for weapon in fresh_fruit]
assert clean_fresh_fruit == ['banana', 'loganberry', 'passion fruit']

# Create a list of 2-tuples like (number, square).
square_tuples = [(x, x ** 2) for x in range(6)]
assert square_tuples == [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]

# Flatten a list using a listcomp with two 'for'.
vector = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flatten_vector = [num for elem in vector for num in elem]
assert flatten_vector == [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### Nested List Comprehensions

The initial expression in a list comprehension can be any arbitrary expression, including another list comprehension.

```{code-cell}
# Consider the following example of a 3x4 matrix implemented as a list of 3 lists of length 4:
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

# The following list comprehension will transpose rows and columns:
transposed_matrix = [[row[i] for row in matrix] for i in range(4)]
assert transposed_matrix == [
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    [4, 8, 12],
]

# As we saw in the previous section, the nested listcomp is evaluated in the context of the
# for that follows it, so this example is equivalent to:
transposed = []
for i in range(4):
    transposed.append([row[i] for row in matrix])

assert transposed == [
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    [4, 8, 12],
]

# which, in turn, is the same as:
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

# In the real world, you should prefer built-in functions to complex flow statements.
# The zip() function would do a great job for this use case:
assert list(zip(*matrix)) == [
    (1, 5, 9),
    (2, 6, 10),
    (3, 7, 11),
    (4, 8, 12),
]
```

### Tuples

A tuple is a collection which is ordered and unchangeable. In Python tuples are written with
round brackets.

The Tuples have following properties:
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

# You cannot change values in a tuple.
with pytest.raises(Exception):
    # pylint: disable=unsupported-assignment-operation
    fruits_tuple[0] = "pineapple"

# It is also possible to use the tuple() constructor to make a tuple (note the double
# round-brackets).
# The len() function returns the length of the tuple.
fruits_tuple_via_constructor = tuple(("apple", "banana", "cherry"))

assert isinstance(fruits_tuple_via_constructor, tuple)
assert len(fruits_tuple_via_constructor) == 3

# It is also possible to omit brackets when initializing tuples.
another_tuple = 12345, 54321, 'hello!'
assert another_tuple == (12345, 54321, 'hello!')

# Tuples may be nested:
nested_tuple = another_tuple, (1, 2, 3, 4, 5)
assert nested_tuple == ((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))

# As you see, on output tuples are always enclosed in parentheses, so that nested tuples are
# interpreted correctly; they may be input with or without surrounding parentheses, although
# often parentheses are necessary anyway (if the tuple is part of a larger expression). It is
# not possible to assign to the individual items of a tuple, however it is possible to create
# tuples which contain mutable objects, such as lists.

# A special problem is the construction of tuples containing 0 or 1 items: the syntax has some
# extra quirks to accommodate these. Empty tuples are constructed by an empty pair of
# parentheses; a tuple with one item is constructed by following a value with a comma (it is
# not sufficient to enclose a single value in parentheses). Ugly, but effective. For example:
empty_tuple = ()
# pylint: disable=len-as-condition
assert len(empty_tuple) == 0

# pylint: disable=trailing-comma-tuple
singleton_tuple = 'hello',  # <-- note trailing comma
assert len(singleton_tuple) == 1
assert singleton_tuple == ('hello',)

# The following example is called tuple packing:
packed_tuple = 12345, 54321, 'hello!'

# The reverse operation is also possible.
first_tuple_number, second_tuple_number, third_tuple_string = packed_tuple
assert first_tuple_number == 12345
assert second_tuple_number == 54321
assert third_tuple_string == 'hello!'

# This is called, appropriately enough, sequence unpacking and works for any sequence on the
# right-hand side. Sequence unpacking requires that there are as many variables on the left
# side of the equals sign as there are elements in the sequence. Note that multiple assignment
# is really just a combination of tuple packing and sequence unpacking.

# Swapping using tuples.
# Data can be swapped from one variable to another in python using
# tuples. This eliminates the need to use a 'temp' variable.
first_number = 123
second_number = 456
first_number, second_number = second_number, first_number

assert first_number == 456
assert second_number == 123
```

### Sets and their methods

A set is a collection which is unordered and unindexed.
In Python sets are written with curly brackets.

Set objects also support mathematical operations like union, intersection, difference, and symmetric difference.

```{seealso}
- https://www.w3schools.com/python/python_sets.asp
- https://docs.python.org/3.7/tutorial/datastructures.html#sets
```

#### Set Type

```{code-cell}
fruits_set = {"apple", "banana", "cherry"}

assert isinstance(fruits_set, set)

# It is also possible to use the set() constructor to make a set.
# Note the double round-brackets
fruits_set_via_constructor = set(("apple", "banana", "cherry"))

assert isinstance(fruits_set_via_constructor, set)
```

#### Set Methods

```{code-cell}
fruits_set = {"apple", "banana", "cherry"}

# You may check if the item is in set by using "in" statement
assert "apple" in fruits_set
assert "pineapple" not in fruits_set

# Use the len() method to return the number of items.
assert len(fruits_set) == 3

# You can use the add() object method to add an item.
fruits_set.add("pineapple")
assert "pineapple" in fruits_set
assert len(fruits_set) == 4

# Use remove() method to remove an item.
fruits_set.remove("pineapple")
assert "pineapple" not in fruits_set
assert len(fruits_set) == 3

# Demonstrate set operations on unique letters from two word:
first_char_set = set('abracadabra')
second_char_set = set('alacazam')

assert first_char_set == {'a', 'r', 'b', 'c', 'd'}  # unique letters in first word
assert second_char_set == {'a', 'l', 'c', 'z', 'm'}  # unique letters in second word

# Letters in first word but not in second.
assert first_char_set - second_char_set == {'r', 'b', 'd'}

# Letters in first word or second word or both.
assert first_char_set | second_char_set == {'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}

# Common letters in both words.
assert first_char_set & second_char_set == {'a', 'c'}

# Letters in first or second word but not both.
assert first_char_set ^ second_char_set == {'r', 'd', 'b', 'm', 'z', 'l'}

# Similarly to list comprehensions, set comprehensions are also supported:
word = {char for char in 'abracadabra' if char not in 'abc'}
assert word == {'r', 'd'}
```

### Dictionaries

A dictionary is a collection which is unordered, changeable and indexed. In Python dictionaries are written with curly brackets, and they have keys and values.

Dictionaries are sometimes found in other languages as “associative memories” or “associative arrays”. Unlike sequences, which are indexed by a range of numbers, dictionaries are indexed by keys, which can be any immutable type; strings and numbers can always be keys. Tuples can be used as keys if they contain only strings, numbers, or tuples; if a tuple contains any mutable object either directly or indirectly, it cannot be used as a key. You can’t use lists as keys, since lists can be modified in place using index assignments, slice assignments, or methods like append() and extend().

It is best to think of a dictionary as a set of key: value pairs, with the requirement that the keys are unique (within one dictionary). A pair of braces creates an empty dictionary: {}. Placing a comma-separated list of key:value pairs within the braces adds initial key:value pairs to the dictionary; this is also the way dictionaries are written on output.

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

# You may access set elements by keys.
assert fruits_dictionary['apple'] == 'green'
assert fruits_dictionary['banana'] == 'yellow'
assert fruits_dictionary['cherry'] == 'red'

# To check whether a single key is in the dictionary, use the in keyword.
assert 'apple' in fruits_dictionary
assert 'pineapple' not in fruits_dictionary

# Change the apple color to "red".
fruits_dictionary['apple'] = 'red'

# Add new key/value pair to the dictionary
fruits_dictionary['pineapple'] = 'yellow'
assert fruits_dictionary['pineapple'] == 'yellow'

# Performing list(d) on a dictionary returns a list of all the keys used in the dictionary,
# in insertion order (if you want it sorted, just use sorted(d) instead).
assert list(fruits_dictionary) == ['cherry', 'apple', 'banana', 'pineapple']
assert sorted(fruits_dictionary) == ['apple', 'banana', 'cherry', 'pineapple']

# It is also possible to delete a key:value pair with del.
del fruits_dictionary['pineapple']
assert list(fruits_dictionary) == ['cherry', 'apple', 'banana']

# The dict() constructor builds dictionaries directly from sequences of key-value pairs.
dictionary_via_constructor = dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])

assert dictionary_via_constructor['sape'] == 4139
assert dictionary_via_constructor['guido'] == 4127
assert dictionary_via_constructor['jack'] == 4098

# In addition, dict comprehensions can be used to create dictionaries from arbitrary key
# and value expressions:
dictionary_via_expression = {x: x**2 for x in (2, 4, 6)}
assert dictionary_via_expression[2] == 4
assert dictionary_via_expression[4] == 16
assert dictionary_via_expression[6] == 36

# When the keys are simple strings, it is sometimes easier to specify pairs using
# keyword arguments.
dictionary_for_string_keys = dict(sape=4139, guido=4127, jack=4098)
assert dictionary_for_string_keys['sape'] == 4139
assert dictionary_for_string_keys['guido'] == 4127
assert dictionary_for_string_keys['jack'] == 4098
```

### Type Casting

There may be times when you want to specify a type on to a variable. This can be done with casting.
Python is an object-orientated language, and as such it uses classes to define data types,
including its primitive types.

Casting in python is therefore done using constructor functions

- int() - constructs an integer number from an integer literal, a float literal (by rounding down
to the previous whole number) literal, or a string literal (providing the string represents a
whole number)

- float() - constructs a float number from an integer literal, a float literal or a string literal
(providing the string represents a float or an integer)

- str() - constructs a string from a wide variety of data types, including strings, integer
literals and float literals

```{seealso}
- https://www.w3schools.com/python/python_casting.asp
```

```{code-cell}
# Type casting to integer
assert int(1) == 1
assert int(2.8) == 2
assert int('3') == 3

# Type casting to float
assert float(1) == 1.0
assert float(2.8) == 2.8
assert float("3") == 3.0
assert float("4.2") == 4.2

# Type casting to string
assert str("s1") == 's1'
assert str(2) == '2'
assert str(3.0) == '3.0'
```

## Control Flow

### The if statement

There can be zero or more elif parts, and the else part is optional. The keyword ‘elif’ is short for ‘else if’, and is useful to avoid excessive indentation.

An if … elif … elif … sequence is a substitute for the switch or case statements found in other languages.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html
```

```{code-cell}
number = 15
conclusion = ''

if number < 0:
    conclusion = 'Number is less than zero'
elif number == 0:
    conclusion = 'Number equals to zero'
elif number < 1:
    conclusion = 'Number is greater than zero but less than one'
else:
    conclusion = 'Number bigger than or equal to one'

assert conclusion == 'Number bigger than or equal to one'
```

### The for statement (and range() function)

The for statement in Python differs a bit from what you may be used to in C or Pascal. Rather than always iterating over an arithmetic progression of numbers (like in Pascal), or giving the user the ability to define both the iteration step and halting condition (as C), Python’s for statement iterates over the items of any sequence (a list or a string), in the order that they appear in the sequence. For example (no pun intended):

```{code-cell}
# Measure some strings:
words = ['cat', 'window', 'defenestrate']
words_length = 0

for word in words:
    words_length += len(word)

# "cat" length is 3
# "window" length is 6
# "defenestrate" length is 12
assert words_length == (3 + 6 + 12)

# If you need to modify the sequence you are iterating over while inside the loop
# (for example to duplicate selected items), it is recommended that you first make a copy.
# Iterating over a sequence does not implicitly make a copy. The slice notation makes this
# especially convenient:
for word in words[:]:  # Loop over a slice copy of the entire list.
    if len(word) > 6:
        words.insert(0, word)

# Otherwise with for w in words:, the example would attempt to create an infinite list,
# inserting defenestrate over and over again.

assert words == ['defenestrate', 'cat', 'window', 'defenestrate']

# If you do need to iterate over a sequence of numbers, the built-in function range() comes in
# handy. It generates arithmetic progressions:
iterated_numbers = []

for number in range(5):
    iterated_numbers.append(number)

assert iterated_numbers == [0, 1, 2, 3, 4]

# To iterate over the indices of a sequence, you can combine range() and len() as follows:
words = ['Mary', 'had', 'a', 'little', 'lamb']
concatenated_string = ''

# pylint: disable=consider-using-enumerate
for word_index in range(len(words)):
    concatenated_string += words[word_index] + ' '

assert concatenated_string == 'Mary had a little lamb '

# Or simply use enumerate().
concatenated_string = ''

for word_index, word in enumerate(words):
    concatenated_string += word + ' '

assert concatenated_string == 'Mary had a little lamb '

# When looping through dictionaries, the key and corresponding value can be retrieved at the
# same time using the items() method.
knights_names = []
knights_properties = []

knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for key, value in knights.items():
    knights_names.append(key)
    knights_properties.append(value)

assert knights_names == ['gallahad', 'robin']
assert knights_properties == ['the pure', 'the brave']

# When looping through a sequence, the position index and corresponding value can be retrieved
# at the same time using the enumerate() function
indices = []
values = []
for index, value in enumerate(['tic', 'tac', 'toe']):
    indices.append(index)
    values.append(value)

assert indices == [0, 1, 2]
assert values == ['tic', 'tac', 'toe']

# To loop over two or more sequences at the same time, the entries can be paired with
# the zip() function.
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
combinations = []

for question, answer in zip(questions, answers):
    combinations.append('What is your {0}?  It is {1}.'.format(question, answer))

assert combinations == [
    'What is your name?  It is lancelot.',
    'What is your quest?  It is the holy grail.',
    'What is your favorite color?  It is blue.',
]
```

If you do need to iterate over a sequence of numbers, the built-in function range() comes in handy. It generates arithmetic progressions.

In many ways the object returned by range() behaves as if it is a list, but in fact it isn’t. It is an object which returns the successive items of the desired sequence when you iterate over it, but it doesn’t really make the list, thus saving space.

We say such an object is iterable, that is, suitable as a target for functions and constructs that expect something from which they can obtain successive items until the supply is exhausted. We have seen that the for statement is such an iterator. The function list() is another; it creates lists from iterables:

```{code-cell}
assert list(range(5)) == [0, 1, 2, 3, 4]

# The given end point is never part of the generated sequence; range(10) generates 10 values,
# the legal indices for items of a sequence of length 10. It is possible to let the range start
# at another number, or to specify a different increment (even negative; sometimes this is
# called the ‘step’):

assert list(range(5, 10)) == [5, 6, 7, 8, 9]
assert list(range(0, 10, 3)) == [0, 3, 6, 9]
assert list(range(-10, -100, -30)) == [-10, -40, -70]
```

### The while statement

The while loop executes as long as the condition remains true. In Python, like in C, any non-zero integer value is true; zero is false. The condition may also be a string or list value, in fact any sequence; anything with a non-zero length is true, empty sequences are false.

The test used in the example is a simple comparison. The standard comparison operators are written the same as in C: < (less than), > (greater than), == (equal to), <= (less than or equal to), >= (greater than or equal to) and != (not equal to).

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html
- https://docs.python.org/3/reference/compound_stmts.html#the-while-statement
```

```{code-cell}
# Let's raise the number to certain power using while loop.
number = 2
power = 5

result = 1

while power > 0:
    result *= number
    power -= 1

# 2^5 = 32
assert result == 32
```

### The try statement

"try" statement is used for exception handling.
When an error occurs, or exception as we call it, Python will normally stop and generate an error
message. These exceptions can be handled using the try statement.

The "try" block lets you test a block of code for errors.
The "except" block lets you handle the error.
The "else" block lets you execute the code if no errors were raised.
The "finally" block lets you execute code, regardless of the result of the try- and except blocks.

```{seealso}
- https://www.w3schools.com/python/python_try_except.asp
```

```{code-cell}
# The try block will generate an error, because x is not defined:
exception_has_been_caught = False

try:
    # pylint: disable=undefined-variable
    print(not_existing_variable)
except NameError:
    exception_has_been_caught = True

assert exception_has_been_caught

# You can define as many exception blocks as you want, e.g. if you want to execute a special
# block of code for a special kind of error:
exception_message = ''

try:
    # pylint: disable=undefined-variable
    print(not_existing_variable)
except NameError:
    exception_message = 'Variable is not defined'

assert exception_message == 'Variable is not defined'

# You can use the else keyword to define a block of code to be executed
# if no errors were raised.
message = ''
# pylint: disable=broad-except
try:
    message += 'Success.'
except NameError:
    message += 'Something went wrong.'
else:
    message += 'Nothing went wrong.'

assert message == 'Success.Nothing went wrong.'

# The finally block, if specified, will be executed regardless if the try block raises an
# error or not.
message = ''
try:
    # pylint: undefined-variable
    print(not_existing_variable)  # noqa: F821
except NameError:
    message += 'Something went wrong.'
finally:
    message += 'The "try except" is finished.'

assert message == 'Something went wrong.The "try except" is finished.'
```

### The break statement

The break statement, like in C, breaks out of the innermost enclosing "for" or "while" loop.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html
```

```{code-cell}
# Let's terminate the loop in case if we've found the number we need in a range from 0 to 100.
number_to_be_found = 42
# This variable will record how many time we've entered the "for" loop.
number_of_iterations = 0

for number in range(100):
    if number == number_to_be_found:
        # Break here and don't continue the loop.
        break
    else:
        number_of_iterations += 1

# We need to make sure that break statement has terminated the loop once it found the number.
assert number_of_iterations == 42
```

### The continue statement

The continue statement is borrowed from C, continues with the next iteration of the loop.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html
```

```{code-cell}
# This list will contain only even numbers from the range.
even_numbers = []
# This list will contain every other numbers (in this case - ods).
rest_of_the_numbers = []

for number in range(0, 10):
    # Check if remainder after division is zero (which would mean that number is even).
    if number % 2 == 0:
        even_numbers.append(number)
        # Stop current loop iteration and go to the next one immediately.
        continue

    rest_of_the_numbers.append(number)

assert even_numbers == [0, 2, 4, 6, 8]
assert rest_of_the_numbers == [1, 3, 5, 7, 9]
```

## Functions

### Function Definition (def and return statements)

The keyword def introduces a function definition. It must be followed by the function name and the parenthesized list of formal parameters. The statements that form the body of the function start at the next line, and must be indented.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#defining-functions
- https://www.thecodeship.com/patterns/guide-to-python-function-decorators/
```

```{code-cell}
def fibonacci_function_example(number_limit):
    """Generate a Fibonacci series up to number_limit.
    The first statement of the function body can optionally be a string literal; this string
    literal is the function’s documentation string, or docstring. There are tools which use
    docstrings to automatically produce online or printed documentation, or to let the user
    interactively browse through code; it’s good practice to include docstrings in code that you
    write, so make a habit of it.
    """

    # The execution of a function introduces a new symbol table used for the local variables of the
    # function. More precisely, all variable assignments in a function store the value in the local
    # symbol table; whereas variable references first look in the local symbol table, then in the
    # local symbol tables of enclosing functions, then in the global symbol table, and finally in
    # the table of built-in names. Thus, global variables cannot be directly assigned a value
    # within a function (unless named in a global statement), although they may be referenced.
    fibonacci_list = []
    previous_number, current_number = 0, 1
    while previous_number < number_limit:
        # The statement result.append(a) calls a method of the list object result. A method is a
        # function that ‘belongs’ to an object and is named obj.methodname, where obj is some
        # object (this may be an expression), and methodname is the name of a method that is
        # defined by the object’s type. Different types define different methods. Methods of
        # different types may have the same name without causing ambiguity. (It is possible to
        # define your own object types and methods, using classes, see Classes) The method
        # append() shown in the example is defined for list objects; it adds a new element at
        # the end of the list. In this example it is equivalent to result = result + [a], but
        # more efficient.
        fibonacci_list.append(previous_number)
        # This is multiple assignment statement. We make current number to be previous one and the
        # sum of previous and current to be a new current.
        previous_number, current_number = current_number, previous_number + current_number

    # The return statement returns with a value from a function. return without an expression
    # argument returns None. Falling off the end of a function also returns None.
    return fibonacci_list

# Now call the function we just defined.
assert fibonacci_function_example(300) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]

# A function definition introduces the function name in the current symbol table. The value of
# the function name has a type that is recognized by the interpreter as a user-defined function.
# This value can be assigned to another name which can then also be used as a function.
# This serves as a general renaming mechanism
fibonacci_function_clone = fibonacci_function_example
assert fibonacci_function_clone(300) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
```

```{code-cell}
# In Python, functions are first class citizens, they are objects and that means we can do 
# a lot of useful stuff with them.

# Assign functions to variables.

def greet(name):
    return 'Hello, ' + name

greet_someone = greet

assert greet_someone('John') == 'Hello, John'

# Define functions inside other functions.

def greet_again(name):
    def get_message():
        return 'Hello, '

    result = get_message() + name
    return result

assert greet_again('John') == 'Hello, John'

# Functions can be passed as parameters to other functions.

def greet_one_more(name):
    return 'Hello, ' + name

def call_func(func):
    other_name = 'John'
    return func(other_name)

assert call_func(greet_one_more) == 'Hello, John'

# Functions can return other functions. In other words, functions generating other functions.

def compose_greet_func():
    def get_message():
        return 'Hello there!'

    return get_message

greet_function = compose_greet_func()
assert greet_function() == 'Hello there!'

# Inner functions have access to the enclosing scope.

# More commonly known as a closure. A very powerful pattern that we will come across while
# building decorators. Another thing to note, Python only allows read access to the outer
# scope and not assignment. Notice how we modified the example above to read a "name" argument
# from the enclosing scope of the inner function and return the new function.

def compose_greet_func_with_closure(name):
    def get_message():
        return 'Hello there, ' + name + '!'

    return get_message

greet_with_closure = compose_greet_func_with_closure('John')

assert greet_with_closure() == 'Hello there, John!'
```

### Scopes of Variables Inside Functions (global and nonlocal statements)

A NAMESPACE is a mapping from names to objects. Most namespaces are currently implemented as Python dictionaries, but that’s normally not noticeable in any way (except for performance), and it may change in the future. Examples of namespaces are: the set of built-in names (containing functions such as abs(), and built-in exception names); the global names in a module; and the local names in a function invocation. In a sense the set of attributes of an object also form a namespace.
The important thing to know about namespaces is that there is absolutely no relation between names in different namespaces; for instance, two different modules may both define a function maximize without confusion — users of the modules must prefix it with the module name.

By the way, we use the word attribute for any name following a dot — for example, in the expression z.real, real is an attribute of the object z. Strictly speaking, references to names in modules are attribute references: in the expression modname.func_name, modname is a module object and func_name is an attribute of it. In this case there happens to be a straightforward mapping between the module’s attributes and the global names defined in the module: they share the same namespace!

A SCOPE is a textual region of a Python program where a namespace is directly accessible.
“Directly accessible” here means that an unqualified reference to a name attempts to find the name in the namespace.


Although scopes are determined statically, they are used dynamically. At any time during execution, there are at least three nested scopes whose namespaces are directly accessible:
- the innermost scope, which is searched first, contains the local names.
- the scopes of any enclosing functions, which are searched starting with the nearest enclosing scope, contains non-local, but also non-global names.
- the next-to-last scope contains the current module’s global names.
- the outermost scope (searched last) is the namespace containing built-in names.


**BE CAREFUL!!!**
-------------
Changing global or nonlocal variables from within an inner function might be a BAD practice and might lead to harder debugging and to more fragile code! Do this only if you know what you're doing.

```{code-cell}
# pylint: disable=invalid-name
test_variable = 'initial global value'


def test_function_scopes():
    """Scopes and Namespaces Example"""

    # This is an example demonstrating how to reference the different scopes and namespaces, and
    # how global and nonlocal affect variable binding:

    # pylint: disable=redefined-outer-name
    test_variable = 'initial value inside test function'

    def do_local():
        # Create variable that is only accessible inside current do_local() function.
        # pylint: disable=redefined-outer-name
        test_variable = 'local value'
        return test_variable

    def do_nonlocal():
        # Address the variable from outer scope and try to change it.
        # pylint: disable=redefined-outer-name
        nonlocal test_variable
        test_variable = 'nonlocal value'
        return test_variable

    def do_global():
        # Address the variable from very global scope and try to change it.
        # pylint: disable=redefined-outer-name,global-statement
        global test_variable
        test_variable = 'global value'
        return test_variable

    # On this level currently we have access to local for test_function_scopes() function variable.
    assert test_variable == 'initial value inside test function'

    # Do local assignment.
    # It doesn't change global variable and variable from test_function_scopes() scope.
    do_local()
    assert test_variable == 'initial value inside test function'

    # Do non local assignment.
    # It doesn't change global variable but it does change variable
    # from test_function_scopes() function scope.
    do_nonlocal()
    assert test_variable == 'nonlocal value'

    # Do global assignment.
    # This one changes global variable but doesn't change variable from
    # test_function_scopes() function scope.
    do_global()
    assert test_variable == 'nonlocal value'


def test_global_variable_access():
    """Testing global variable access from within a function"""

    # Global value of test_variable has been already changed by do_global() function in previous
    # test so let's check that.
    # pylint: disable=global-statement
    global test_variable
    assert test_variable == 'global value'

test_function_scopes()
test_global_variable_access()
```

### Default Argument Values

The most useful form is to specify a default value for one or more arguments. This creates a function that can be called with fewer arguments than it is defined to allow.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#default-argument-values
```

```{code-cell}
def power_of(number, power=2):
    """ Raises number to specific power.
    You may notice that by default the function raises number to the power of two.
    """
    return number ** power

# This function power_of can be called in several ways because it has default value for
# the second argument. First we may call it omitting the second argument at all.
assert power_of(3) == 9
# We may also want to override the second argument by using the following function calls.
assert power_of(3, 2) == 9
assert power_of(3, 3) == 27
```

### Keyword Arguments

Functions can be called using keyword arguments of the form kwarg=value.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments
```

```{code-cell}
import pytest
def parrot(voltage, state='a stiff', action='voom', parrot_type='Norwegian Blue'):
    """Example of multi-argument function

    This function accepts one required argument (voltage) and three optional arguments
    (state, action, and type).
    """

    message = 'This parrot wouldn\'t ' + action + ' '
    message += 'if you put ' + str(voltage) + ' volts through it. '
    message += 'Lovely plumage, the ' + parrot_type + '. '
    message += 'It\'s ' + state + '!'

    return message

message = (
    "This parrot wouldn't voom if you put 1000 volts through it. "
    "Lovely plumage, the Norwegian Blue. "
    "It's a stiff!"
)
# 1 positional argument
assert parrot(1000) == message
# 1 keyword argument
assert parrot(voltage=1000) == message

message = (
    "This parrot wouldn't VOOOOOM if you put 1000000 volts through it. "
    "Lovely plumage, the Norwegian Blue. "
    "It's a stiff!"
)
# 2 keyword arguments
assert parrot(voltage=1000000, action='VOOOOOM') == message
# 2 keyword arguments
assert parrot(action='VOOOOOM', voltage=1000000) == message

# 3 positional arguments
message = (
    "This parrot wouldn't jump if you put 1000000 volts through it. "
    "Lovely plumage, the Norwegian Blue. "
    "It's bereft of life!"
)
assert parrot(1000000, 'bereft of life', 'jump') == message

# 1 positional, 1 keyword
message = (
    "This parrot wouldn't voom if you put 1000 volts through it. "
    "Lovely plumage, the Norwegian Blue. "
    "It's pushing up the daisies!"
)
assert parrot(1000, state='pushing up the daisies') == message

# But all the following calls would be invalid.

with pytest.raises(Exception):
    # Required argument missing.
    # pylint: disable=no-value-for-parameter
    parrot()

# Non-keyword argument after a keyword argument.
# parrot(voltage=5.0, 'dead')

with pytest.raises(Exception):
    # pylint: disable=redundant-keyword-arg
    parrot(110, voltage=220)

with pytest.raises(Exception):
    # unknown keyword argument
    # pylint: disable=unexpected-keyword-arg,no-value-for-parameter
    parrot(actor='John Cleese')
```

In a function call, keyword arguments must follow positional arguments. All the keywordmarguments passed must match one of the arguments accepted by the function (e.g. actor is not a valid argument for the parrot function), and their order is not important. This also includes non-optional arguments (e.g. parrot(voltage=1000) is valid too). No argument may receive a value more than once. Here’s an example that fails due to this restriction:

```{code-cell}
import pytest

def function_with_one_argument(number):
    return number

with pytest.raises(Exception):
    # pylint: disable=redundant-keyword-arg
    function_with_one_argument(0, number=0)
```

When a final formal parameter of the form **name is present, it receives a dictionary containing all keyword arguments except for those corresponding to a formal parameter. This may be combined with a formal parameter of the form *name which receives a tuple containing the positional arguments beyond the formal parameter list. (*name must occur before **name.) For example, if we define a function like this:

```{code-cell}
def test_function(first_param, *arguments, **keywords):
    """This function accepts its arguments through "arguments" tuple and keywords dictionary."""
    assert first_param == 'first param'
    assert arguments == ('second param', 'third param')
    assert keywords == {
        'fourth_param_name': 'fourth named param',
        'fifth_param_name': 'fifth named param'
    }

test_function(
    'first param',
    'second param',
    'third param',
    fourth_param_name='fourth named param',
    fifth_param_name='fifth named param',
)
```

### Arbitrary Argument Lists

Function can be called with an arbitrary number of arguments. These arguments will be wrapped up in a tuple. Before the variable number of arguments, zero or more normal arguments may occur.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists
```

```{code-cell}
# When a final formal parameter of the form **name is present, it receives a dictionary
# containing all keyword arguments except for those corresponding to a formal parameter.
# This may be combined with a formal parameter of the form *name which receives a tuple
# containing the positional arguments beyond the formal parameter list.
# (*name must occur before **name.) For example, if we define a function like this:
def test_function(first_param, *arguments):
    """This function accepts its arguments through "arguments" tuple"""
    assert first_param == 'first param'
    assert arguments == ('second param', 'third param')

test_function('first param', 'second param', 'third param')

# Normally, these variadic arguments will be last in the list of formal parameters, because
# they scoop up all remaining input arguments that are passed to the function. Any formal
# parameters which occur after the *args parameter are ‘keyword-only’ arguments, meaning that
# they can only be used as keywords rather than positional arguments.
def concat(*args, sep='/'):
    return sep.join(args)

assert concat('earth', 'mars', 'venus') == 'earth/mars/venus'
assert concat('earth', 'mars', 'venus', sep='.') == 'earth.mars.venus'
```

### Unpacking Argument Lists (* and ** statements)

Unpacking arguments may be executed via * and ** operators. See below for further details.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#unpacking-argument-lists
```

```{code-cell}
# The situation may occur when the arguments are already in a list or tuple but need to be
# unpacked for a function call requiring separate positional arguments. For instance, the
# built-in range() function expects separate start and stop arguments. If they are not
# available separately, write the function call with the *-operator to unpack the arguments out
# of a list or tuple:

# Normal call with separate arguments:
assert list(range(3, 6)) == [3, 4, 5]

# Call with arguments unpacked from a list.
arguments_list = [3, 6]
assert list(range(*arguments_list)) == [3, 4, 5]

# In the same fashion, dictionaries can deliver keyword arguments with the **-operator:
def function_that_receives_names_arguments(first_word, second_word):
    return first_word + ', ' + second_word + '!'

arguments_dictionary = {'first_word': 'Hello', 'second_word': 'World'}
assert function_that_receives_names_arguments(**arguments_dictionary) == 'Hello, World!'
```

### Lambda Expressions (lambda statement)

Small anonymous functions can be created with the lambda keyword. Lambda functions can be used wherever function objects are required. They are syntactically restricted to a single expression. Semantically, they are just syntactic sugar for a normal function definition. Like nested function definitions, lambda functions can reference variables from the containing scope.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions
```

```{code-cell}
# This function returns the sum of its two arguments: lambda a, b: a+b
# Like nested function definitions, lambda functions can reference variables from the
# containing scope.

def make_increment_function(delta):
    """This example uses a lambda expression to return a function"""
    return lambda number: number + delta

increment_function = make_increment_function(42)

assert increment_function(0) == 42
assert increment_function(1) == 43
assert increment_function(2) == 44

# Another use of lambda is to pass a small function as an argument.
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
# Sort pairs by text key.
pairs.sort(key=lambda pair: pair[1])

assert pairs == [(4, 'four'), (1, 'one'), (3, 'three'), (2, 'two')]
```

### Documentation Strings

Here are some conventions about the content and formatting of documentation strings.

The first line should always be a short, concise summary of the object’s purpose. For brevity, it should not explicitly state the object’s name or type, since these are available by other means (except if the name happens to be a verb describing a function’s operation). This line should begin with a capital letter and end with a period.

If there are more lines in the documentation string, the second line should be blank, visually separating the summary from the rest of the description. The following lines should be one or more paragraphs describing the object’s calling conventions, its side effects, etc.

```{seealso}
https://docs.python.org/3/tutorial/controlflow.html#documentation-strings
```

```{code-cell}
def do_nothing():
    """Do nothing, but document it.

    No, really, it doesn't do anything.
    """
    pass

# The Python parser does not strip indentation from multi-line string literals in Python, so
# tools that process documentation have to strip indentation if desired. This is done using the
# following convention. The first non-blank line after the first line of the string determines
# the amount of indentation for the entire documentation string. (We can’t use the first line
# since it is generally adjacent to the string’s opening quotes so its indentation is not
# apparent in the string literal.) Whitespace “equivalent” to this indentation is then stripped
# from the start of all lines of the string. Lines that are indented less should not occur, but
# if they occur all their leading whitespace should be stripped. Equivalence of whitespace
# should be tested after expansion of tabs (to 8 spaces, normally).

assert do_nothing.__doc__ == """Do nothing, but document it.

No, really, it doesn't do anything.
"""
```

### Function Annotations

Function annotations are completely optional metadata information about the types used by user-defined functions.

Annotations are stored in the __annotations__ attribute of the function as a dictionary and have no effect on any other part of the function. Parameter annotations are defined by a colon after the parameter name, followed by an expression evaluating to the value of the annotation. Return annotations are defined by a literal ->, followed by an expression, between the parameter list and the colon denoting the end of the def statement.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#function-annotations
```

```{code-cell}
def breakfast(ham: str, eggs: str = 'eggs') -> str:
    """Breakfast creator.

    This function has a positional argument, a keyword argument, and the return value annotated.
    """
    return ham + ' and ' + eggs

assert breakfast.__annotations__ == {'eggs': str, 'ham': str, 'return': str}
```

### Function Decorators

Function decorators are simply wrappers to existing functions. In the context of design patterns, decorators dynamically alter the functionality of a function, method or class without having to directly use subclasses. This is ideal when you need to extend the functionality of functions that you don't want to modify. We can implement the decorator pattern anywhere, but Python facilitates the implementation by providing much more expressive features and syntax for that.

```{seealso}
- https://www.thecodeship.com/patterns/guide-to-python-function-decorators/
```

```{code-cell}
# Function decorators are simply wrappers to existing functions. Putting the ideas mentioned
# above together, we can build a decorator. In this example let's consider a function that
# wraps the string output of another function by p tags.

# This is the function that we want to decorate.
def greeting(name):
    return "Hello, {0}!".format(name)

# This function decorates another functions output with <p> tag.
def decorate_with_p(func):
    def function_wrapper(name):
        return "<p>{0}</p>".format(func(name))
    return function_wrapper

# Now, let's call our decorator and pass the function we want decorate to it.
my_get_text = decorate_with_p(greeting)

# Here we go, we've just decorated the function output without changing the function itself.
assert my_get_text('John') == '<p>Hello, John!</p>'  # With decorator.
assert greeting('John') == 'Hello, John!'  # Without decorator.

# Now, Python makes creating and using decorators a bit cleaner and nicer for the programmer
# through some syntactic sugar  There is a neat shortcut for that, which is to mention the
# name of the decorating function before the function to be decorated. The name of the
# decorator should be prepended with an @ symbol.

@decorate_with_p
def greeting_with_p(name):
    return "Hello, {0}!".format(name)

assert greeting_with_p('John') == '<p>Hello, John!</p>'

# Now let's consider we wanted to decorate our greeting function by one more functions to wrap a
# div the string output.

# This will be our second decorator.
def decorate_with_div(func):
    def function_wrapper(text):
        return "<div>{0}</div>".format(func(text))
    return function_wrapper

# With the basic approach, decorating get_text would be along the lines of
# greeting_with_div_p = decorate_with_div(decorate_with_p(greeting_with_p))

# With Python's decorator syntax, same thing can be achieved with much more expressive power.
@decorate_with_div
@decorate_with_p
def greeting_with_div_p(name):
    return "Hello, {0}!".format(name)

assert greeting_with_div_p('John') == '<div><p>Hello, John!</p></div>'

# One important thing to notice here is that the order of setting our decorators matters.
# If the order was different in the example above, the output would have been different.

# Passing arguments to decorators.

# Looking back at the example before, you can notice how redundant the decorators in the
# example are. 2 decorators(decorate_with_div, decorate_with_p) each with the same
# functionality but wrapping the string with different tags. We can definitely do much better
# than that. Why not have a more general implementation for one that takes the tag to wrap
# with as a string? Yes please!

def tags(tag_name):
    def tags_decorator(func):
        def func_wrapper(name):
            return "<{0}>{1}</{0}>".format(tag_name, func(name))
        return func_wrapper
    return tags_decorator

@tags('div')
@tags('p')
def greeting_with_tags(name):
    return "Hello, {0}!".format(name)

assert greeting_with_tags('John') == '<div><p>Hello, John!</p></div>'
```

## Classes

### Class Definition (class statement)

Python is an object oriented programming language.
Almost everything in Python is an object, with its properties and methods.
A Class is like an object constructor, or a "blueprint" for creating objects.

```{seealso}
- https://docs.python.org/3/tutorial/classes.html
```

```{code-cell}
# Class definitions, like function definitions (def statements) must be executed before they
# have any effect. (You could conceivably place a class definition in a branch of an if
# statement, or inside a function.)

class GreetingClass:
    """Example of the class definition

    This class contains two public methods and doesn't contain constructor.
    """
    name = 'user'

    def say_hello(self):
        """Class method."""
        # The self parameter is a reference to the class itself, and is used to access variables
        # that belongs to the class. It does not have to be named self , you can call it
        # whatever you like, but it has to be the first parameter of any function in the class.
        return 'Hello ' + self.name

    def say_goodbye(self):
        """Class method."""
        return 'Goodbye ' + self.name

# When a class definition is entered, a new namespace is created, and used as the local scope —
# thus, all assignments to local variables go into this new namespace. In particular, function
# definitions bind the name of the new function here.

# Class instantiation uses function notation. Just pretend that the class object is a
# parameterless function that returns a new instance of the class. For example the following
# code will creates a new instance of the class and assigns this object to the local variable.
greeter = GreetingClass()

assert greeter.say_hello() == 'Hello user'
assert greeter.say_goodbye() == 'Goodbye user'
```

### Class Objects

After defining the class attributes to a class, the class object can be created by assigning the object to a variable. The created object would have instance attributes associated with it.

Class objects support two kinds of operations:
- attribute references
- instantiation

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#class-objects
```

```{code-cell}

# ATTRIBUTE REFERENCES use the standard syntax used for all attribute references in
# Python: obj.name. Valid attribute names are all the names that were in the class’s namespace
# when the class object was created. For class MyCounter the following references are valid
# attribute references:

class ComplexNumber:
    """Example of the complex numbers class"""

    real = 0
    imaginary = 0

    def get_real(self):
        """Return real part of complex number."""
        return self.real

    def get_imaginary(self):
        """Return imaginary part of complex number."""
        return self.imaginary

assert ComplexNumber.real == 0

# __doc__ is also a valid attribute, returning the docstring belonging to the class
assert ComplexNumber.__doc__ == 'Example of the complex numbers class'

# Class attributes can also be assigned to, so you can change the value of
# ComplexNumber.counter by assignment.
ComplexNumber.real = 10
assert ComplexNumber.real == 10

# CLASS INSTANTIATION uses function notation. Just pretend that the class object is a
# parameterless function that returns a new instance of the class. For example
# (assuming the above class):
complex_number = ComplexNumber()

assert complex_number.real == 10
assert complex_number.get_real() == 10

# Let's change counter default value back.
ComplexNumber.real = 10
assert ComplexNumber.real == 10

# The instantiation operation (“calling” a class object) creates an empty object. Many classes
# like to create objects with instances customized to a specific initial state. Therefore a
# class may define a special method named __init__(), like this:

class ComplexNumberWithConstructor:
    """Example of the class with constructor"""
    def __init__(self, real_part, imaginary_part):
        self.real = real_part
        self.imaginary = imaginary_part

    def get_real(self):
        """Return real part of complex number."""
        return self.real

    def get_imaginary(self):
        """Return imaginary part of complex number."""
        return self.imaginary

complex_number = ComplexNumberWithConstructor(3.0, -4.5)
assert complex_number.real, complex_number.imaginary == (3.0, -4.5)
```

### Instance objects

Now what can we do with instance objects? The only operations understood by instance objects are attribute references. There are two kinds of valid attribute names:
- data attributes
- methods

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#instance-objects
```

```{code-cell}
# DATA ATTRIBUTES need not be declared; like local variables, they spring into existence when
# they are first assigned to. For example, if x is the instance of MyCounter created above,
# the following piece of code will print the value 16, without leaving a trace.

# pylint: disable=too-few-public-methods
class DummyClass:
    """Dummy class"""
    pass

dummy_instance = DummyClass()

# pylint: disable=attribute-defined-outside-init
dummy_instance.temporary_attribute = 1
assert dummy_instance.temporary_attribute == 1
del dummy_instance.temporary_attribute
```

### Methods objects

Classes can have two types of attribute references: data or methods. Class methods are called by [variable_name].[method_name]([parameters]) as opposed to class data which lacks the ().

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#method-objects
```

```{code-cell}
class MyCounter:
    """A simple example of the counter class"""
    counter = 10

    def get_counter(self):
        """Return the counter"""
        return self.counter

    def increment_counter(self):
        """Increment the counter"""
        self.counter += 1
        return self.counter

# The other kind of instance attribute reference is a method. A method is a function that
# “belongs to” an object. (In Python, the term method is not unique to class instances: other
# object types can have methods as well. For example, list objects have methods called append,
# insert, remove, sort, and so on. However, in the following discussion, we’ll use the term
# method exclusively to mean methods of class instance objects, unless explicitly stated
# otherwise.)

# But be aware that counter.get_counter() is not the same thing as MyCounter.get_counter() —
# it is a method object, not a function object.

# Usually, a method is called right after it is bound
counter = MyCounter()
assert counter.get_counter() == 10

# However, it is not necessary to call a method right away: counter.get_counter() is a method
# object, and can be stored away and called at a later time. For example:
get_counter = counter.get_counter
assert get_counter() == 10

# What exactly happens when a method is called? You may have noticed that counter.get_counter()
# was called without an argument above, even though the function definition for get_counter()
# specified an argument (self). What happened to the argument? Surely Python raises an
# exception when a function that requires an argument is called without any — even if the
# argument isn’t actually used…

# Actually, you may have guessed the answer: the special thing about methods is that the
# instance object is passed as the first argument of the function. In our example, the call
# counter.get_counter() is exactly equivalent to MyCounter.get_counter(counter). In general,
# calling a method with a list of n arguments is equivalent to calling the corresponding
# function with an argument list that is created by inserting the method’s instance object
# before the first argument.

assert counter.get_counter() == 10
assert MyCounter.get_counter(counter) == 10
```

### Class and Instance Variables

Generally speaking, instance variables are for data unique to each instance and class variables are for attributes and methods shared by all instances of the class.

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables
```

```{code-cell}
# pylint: disable=too-few-public-methods
class Dog:
    """Dog class example"""
    kind = 'canine'  # Class variable shared by all instances.

    def __init__(self, name):
        self.name = name  # Instance variable unique to each instance.

fido = Dog('Fido')
buddy = Dog('Buddy')

# Shared by all dogs.
assert fido.kind == 'canine'
assert buddy.kind == 'canine'

# Unique to fido.
assert fido.name == 'Fido'

# Unique to buddy.
assert buddy.name == 'Buddy'

# Shared data can have possibly surprising effects with involving mutable objects such as lists
# and dictionaries. For example, the tricks list in the following code should not be used as a
# class variable because just a single list would be shared by all Dog instances.

# pylint: disable=too-few-public-methods
class DogWithSharedTricks:
    """Dog class example with wrong shared variable usage"""
    tricks = []  # Mistaken use of a class variable (see below) for mutable objects.

    def __init__(self, name):
        self.name = name  # Instance variable unique to each instance.

    def add_trick(self, trick):
        """Add trick to the dog

        This function illustrate mistaken use of mutable class variable tricks (see below).
        """
        self.tricks.append(trick)

fido = DogWithSharedTricks('Fido')
buddy = DogWithSharedTricks('Buddy')

fido.add_trick('roll over')
buddy.add_trick('play dead')

assert fido.tricks == ['roll over', 'play dead']  # unexpectedly shared by all dogs
assert buddy.tricks == ['roll over', 'play dead']  # unexpectedly shared by all dogs

# Correct design of the class should use an instance variable instead:

# pylint: disable=too-few-public-methods
class DogWithTricks:
    """Dog class example"""

    def __init__(self, name):
        self.name = name  # Instance variable unique to each instance.
        self.tricks = []  # creates a new empty list for each dog

    def add_trick(self, trick):
        """Add trick to the dog

        This function illustrate a correct use of mutable class variable tricks (see below).
        """
        self.tricks.append(trick)

fido = DogWithTricks('Fido')
buddy = DogWithTricks('Buddy')

fido.add_trick('roll over')
buddy.add_trick('play dead')

assert fido.tricks == ['roll over']
assert buddy.tricks == ['play dead']
```

### Inheritance

Inheritance is one of the principles of object-oriented programming. Since classes may share a lot of the same code, inheritance allows a derived class to reuse the same code and modify accordingly.

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#inheritance
```

```{code-cell}
# pylint: disable=too-few-public-methods
class Person:
    """Example of the base class"""
    def __init__(self, name):
        self.name = name

    def get_name(self):
        """Get person name"""
        return self.name


# The syntax for a derived class definition looks like this.
# pylint: disable=too-few-public-methods
class Employee(Person):
    """Example of the derived class

    The Base Class (in our case Person) must be defined in a scope containing the derived class
    definition. In place of a base class name, other arbitrary expressions are also allowed.

    Derived classes may override methods of their base classes. Because methods have no special
    privileges when calling other methods of the same object, a method of a base class that calls
    another method defined in the same base class may end up calling a method of a derived class
    that overrides it.

    An overriding method in a derived class may in fact want to extend rather than simply replace
    the base class method of the same name. There is a simple way to call the base class method
    directly: just call BaseClassName.methodname(self, arguments). This is occasionally useful to
    clients as well. (Note that this only works if the base class is accessible as BaseClassName
    in the global scope.)
    """
    def __init__(self, name, staff_id):
        Person.__init__(self, name)
        # You may also use super() here in order to avoid explicit using of parent class name:
        # >>> super().__init__(name)
        self.staff_id = staff_id

    def get_full_id(self):
        """Get full employee id"""
        return self.get_name() + ', ' + self.staff_id

# There’s nothing special about instantiation of derived classes: DerivedClassName() creates a
# new instance of the class. Method references are resolved as follows: the corresponding class
# attribute is searched, descending down the chain of base classes if necessary, and the method
# reference is valid if this yields a function object.
person = Person('Bill')
employee = Employee('John', 'A23')

assert person.get_name() == 'Bill'
assert employee.get_name() == 'John'
assert employee.get_full_id() == 'John, A23'

# Python has two built-in functions that work with inheritance:
#
# - Use isinstance() to check an instance’s type: isinstance(obj, int) will be True only if
# obj.__class__ is int or some class derived from int.
#
# - Use issubclass() to check class inheritance: issubclass(bool, int) is True since bool is
# a subclass of int. However, issubclass(float, int) is False since float is not a subclass
# of int.

assert isinstance(employee, Employee)
assert not isinstance(person, Employee)

assert isinstance(person, Person)
assert isinstance(employee, Person)

assert issubclass(Employee, Person)
assert not issubclass(Person, Employee)
```

### Multiple Inheritance

Some classes may derive from multiple classes. This means that the derived class would have its attributes, along with the attributes of all the classes that it was derived from.

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#multiple-inheritance
```

```{code-cell}
# pylint: disable=too-few-public-methods
class Clock:
    """Clock class"""

    time = '11:23 PM'

    def get_time(self):
        """Get current time

        Method is hardcoded just for multiple inheritance illustration.
        """
        return self.time

# pylint: disable=too-few-public-methods
class Calendar:
    """Calendar class"""

    date = '12/08/2018'

    def get_date(self):
        """Get current date

        Method is hardcoded just for multiple inheritance illustration.
        """
        return self.date

# Python supports a form of multiple inheritance as well. A class definition with multiple
# base classes looks like this.
class CalendarClock(Clock, Calendar):
    """Class that uses multiple inheritance.

    For most purposes, in the simplest cases, you can think of the search for attributes
    inherited from a parent class as depth-first, left-to-right, not searching twice in the same
    class where there is an overlap in the hierarchy. Thus, if an attribute is not found in
    CalendarClock, it is searched for in Clock, then (recursively) in the base classes of
    Clock, and if it was not found there, it was searched for in Calendar, and so on.

    In fact, it is slightly more complex than that; the method resolution order changes
    dynamically to support cooperative calls to super(). This approach is known in some other
    multiple-inheritance languages as call-next-method and is more powerful than the super call
    found in single-inheritance languages.

    Dynamic ordering is necessary because all cases of multiple inheritance exhibit one or more
    diamond relationships (where at least one of the parent classes can be accessed through
    multiple paths from the bottommost class). For example, all classes inherit from object,
    so any case of multiple inheritance provides more than one path to reach object. To keep
    the base classes from being accessed more than once, the dynamic algorithm linearizes the
    search order in a way that preserves the left-to-right ordering specified in each class,
    that calls each parent only once, and that is monotonic (meaning that a class can be
    subclassed without affecting the precedence order of its parents).
    """

calendar_clock = CalendarClock()

assert calendar_clock.get_date() == '12/08/2018'
assert calendar_clock.get_time() == '11:23 PM'
```

## Modules

### Modules (import statement)

As your program gets longer, you may want to split it into several files for easier maintenance. You may also want to use a handy function that you’ve written in several programs without copying its definition into each program.

To support this, Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter. Such a file is called a module; definitions from a module can be imported into other modules or into the main module (the collection of variables that you have access to in a script executed at the top level and in calculator mode).

A module is a file containing Python definitions and statements. The file name is the module name with the suffix .py appended. Within a module, the module’s name (as a string) is available as the value of the global variable __name__.

When the interpreter executes the import statement, it searches for module in a list of directories assembled from the following sources:

- The directory from which the input script was run or the current directory if the interpreter is being run interactively
- The list of directories contained in the PYTHONPATH environment variable, if it is set. (The format for PYTHONPATH is OS-dependent but should mimic the PATH environment variable.)
- An installation-dependent list of directories configured at the time Python is installed

The resulting search path is accessible in the Python variable sys.path, which is obtained from a module named sys:
>>> import sys
>>> sys.path

```{seealso}
- https://docs.python.org/3/tutorial/modules.html
- https://realpython.com/python-modules-packages/
```

```{code-cell}
# This does not enter the names of the functions defined in fibonacci_module directly in the
# current symbol table; it only enters the module name fibonacci_module there.
import fibonacci_module

# There is a variant of the import statement that imports names from a module directly into the
# importing module’s symbol table. For example:

# pylint: disable=reimported
from fibonacci_module import fibonacci_at_position, fibonacci_smaller_than

# There is even a variant to import all names that a module defines. This imports all names except
# those beginning with an underscore (_). In most cases Python programmers do not use this facility
# since it introduces an unknown set of names into the interpreter, possibly hiding some things you
# have already defined.
# >>> from fibonacci_module import *

# If the module name is followed by as, then the name following as is bound directly to the
# imported module:
import fibonacci_module as fibonacci_module_renamed

# It can also be used when utilising from with similar effects:
from fibonacci_module import fibonacci_at_position as fibonacci_at_position_renamed

# When a module named spam is imported, the interpreter first searches for a built-in module with
# that name. If not found, it then searches for a file named spam.py in a list of directories
# given by the variable sys.path. sys.path is initialized from these locations:
#
# - The directory containing the input script (or the current directory when no file is specified).
# - PYTHONPATH (a list of directory names, with the same syntax as the shell variable PATH).
# - The installation-dependent default.

assert fibonacci_module.fibonacci_at_position(7) == 13
assert fibonacci_at_position(7) == 13
assert fibonacci_module_renamed.fibonacci_at_position(7) == 13
assert fibonacci_at_position_renamed(7) == 13

assert fibonacci_module.fibonacci_smaller_than(100) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
assert fibonacci_smaller_than(100) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
assert fibonacci_module_renamed.fibonacci_smaller_than(10) == [0, 1, 1, 2, 3, 5, 8]

# If you intend to use a function often you can assign it to a local name.
fibonacci = fibonacci_module.fibonacci_smaller_than
assert fibonacci(100) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

# The built-in function dir() is used to find out which names a module defines. It returns a
# sorted list of strings.
assert dir(fibonacci_module) == [
    '__builtins__',
    '__cached__',
    '__doc__',
    '__file__',
    '__loader__',
    '__name__',
    '__package__',
    '__spec__',
    'fibonacci_at_position',
    'fibonacci_smaller_than',
]
```

### Packages

Packages are a way of structuring Python’s module namespace by using “dotted module names”. For example, the module name A.B designates a submodule named B in a package named A. Just like the use of modules saves the authors of different modules from having to worry about each other’s global variable names, the use of dotted module names saves the authors of multi-module packages like NumPy or Pillow from having to worry about each other’s module names.

The __init__.py files are required to make Python treat the directories as containing packages; this is done to prevent directories with a common name, such as string, from unintentionally hiding valid modules that occur later on the module search path. In the simplest case, __init__.py can just be an empty file, but it can also execute initialization code for the package or set the __all__ variable, described later.

When the interpreter executes the import statement, it searches for module in a list of directories assembled from the following sources:

- The directory from which the input script was run or the current directory if the interpreter is being run interactively
- The list of directories contained in the PYTHONPATH environment variable, if it is set. (The format for PYTHONPATH is OS-dependent but should mimic the PATH environment variable.)
- An installation-dependent list of directories configured at the time Python is installed

The resulting search path is accessible in the Python variable sys.path, which is obtained from a module named sys:

>>> import sys
>>> sys.path

```{seealso}
- https://docs.python.org/3/tutorial/modules.html#packages
- https://realpython.com/python-modules-packages/
```

```{code-cell}
# Users of the package can import individual modules from the package, for example.
import sound_package.effects.echo

# An alternative way of importing the submodule is:

# pylint: disable=reimported
from sound_package.effects import echo

# Yet another variation is to import the desired function or variable directly:
from sound_package.effects.echo import echo_function

# Note that when using from package import item, the item can be either a submodule (or subpackage)
# of the package, or some other name defined in the package, like a function, class or variable.
# The import statement first tests whether the item is defined in the package; if not, it assumes
# it is a module and attempts to load it. If it fails to find it, an ImportError exception is
# raised.

# Contrarily, when using syntax like import item.subitem.subsubitem, each item except for the last
# must be a package; the last item can be a module or a package but can’t be a class or function or
# variable defined in the previous item.

assert sound_package.effects.echo.echo_function() == 'Do echo effect'
assert echo.echo_function() == 'Do echo effect'
assert echo_function() == 'Do echo effect'
```

## Errors and Exceptions

### Handling Exceptions (try statement)

Even if a statement or expression is syntactically correct, it may cause an error when an attempt
is made to execute it. Errors detected during execution are called exceptions and are not
unconditionally fatal.

It is possible to write programs that handle selected exceptions.

```{seealso}
https://docs.python.org/3/tutorial/errors.html#errors-and-exceptions
```

The try statement works as follows.
- First, the try clause (the statement(s) between the try and except keywords) is executed.
- If no exception occurs, the except clause is skipped and execution of the try statement is finished.
- If an exception occurs during execution of the try clause, the rest of the clause is skipped. Then if its type matches the exception named after the except keyword, the except clause is executed, and then execution continues after the try statement.
- If an exception occurs which does not match the exception named in the except clause, it is passed on to outer try statements; if no handler is found, it is an unhandled exception and execution stops with a message.

```{code-cell}
# Let's simulate division by zero exception.
exception_has_been_handled = False
try:
    result = 10 * (1 / 0)  # division by zero
    # We should not get here at all.
    assert result
except ZeroDivisionError:
    # We should get here because of division by zero.
    exception_has_been_handled = True

assert exception_has_been_handled

# Let's simulate undefined variable access exception.
exception_has_been_handled = False
try:
    # pylint: disable=undefined-variable
    result = 4 + spam * 3  # name 'spam' is not defined
    # We should not get here at all.
    assert result
except NameError:
    # We should get here because of division by zero.
    exception_has_been_handled = True

assert exception_has_been_handled

# A try statement may have more than one except clause, to specify handlers for different
# exceptions. At most one handler will be executed. Handlers only handle exceptions that occur
# in the corresponding try clause, not in other handlers of the same try statement. An except
# clause may name multiple exceptions as a parenthesized tuple, for example:

exception_has_been_handled = False
try:
    result = 10 * (1 / 0)  # division by zero
    # We should not get here at all.
    assert result
except (ZeroDivisionError, NameError):
    # We should get here because of division by zero.
    exception_has_been_handled = True

assert exception_has_been_handled

# Exception handlers may be chained.
exception_has_been_handled = False
try:
    result = 10 * (1 / 0)  # division by zero
    # We should not get here at all.
    assert result
except NameError:
    # We should get here because of division by zero.
    exception_has_been_handled = True
except ZeroDivisionError:
    # We should get here because of division by zero.
    exception_has_been_handled = True

assert exception_has_been_handled

# The try … except statement has an optional else clause, which, when present, must follow all
# except clauses. It is useful for code that must be executed if the try clause does not raise
# an exception. For example:

exception_has_been_handled = False
no_exceptions_has_been_fired = False

try:
    result = 10
    # We should not get here at all.
    assert result
except NameError:
    # We should get here because of division by zero.
    exception_has_been_handled = True
else:
    no_exceptions_has_been_fired = True

assert not exception_has_been_handled
assert no_exceptions_has_been_fired
```

### Raising Exceptions (raise statement)

The raise statement allows the programmer to force a specified exception to occur.

```{seealso}
https://docs.python.org/3/tutorial/errors.html#raising-exceptions
```

```{code-cell}
"""Raising Exceptions.

The raise statement allows the programmer to force a specified exception to occur.
"""
exception_is_caught = False

try:
    # The sole argument to raise indicates the exception to be raised. This must be either an
    # exception instance or an exception class (a class that derives from Exception). If an
    # exception class is passed, it will be implicitly instantiated by calling its constructor
    # with no arguments
    raise NameError('HiThere')  # shorthand for 'raise ValueError()'
except NameError:
    exception_is_caught = True

assert exception_is_caught
```

```{code-cell}
"""User-defined Exceptions"""

# Programs may name their own exceptions by creating a new exception class. Exceptions should
# typically be derived from the Exception class, either directly or indirectly.
# Most exceptions are defined with names that end in “Error,” similar to the naming of the
# standard exceptions. Many standard modules define their own exceptions to report errors
# that may occur in functions they define.
class MyCustomError(Exception):
    """Example of MyCustomError exception."""
    def __init__(self, message):
        super().__init__(message)
        self.message = message

custom_exception_is_caught = False

try:
    raise MyCustomError('My custom message')
except MyCustomError:
    custom_exception_is_caught = True

assert custom_exception_is_caught
```

## Your turn! 🚀

## Self Study

Here is a list of free/open source learning resources for advanced [Python programming](https://github.com/open-academy/open-learning-resources/blob/main/README.md#python).

## Acknowledgments

Thanks to [Oleksii Trekhleb](https://github.com/trekhleb) who helped create this awesome open source project [learn-python](https://github.com/trekhleb/learn-python) for Python learning. It contributes the majority of the content in this chapter.