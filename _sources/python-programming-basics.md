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

### Numbers

### Strings

### Lists

### Dictionaries

### Type Casting

## Control Flow

### The if statement

### The for statement

## Functions

### Function Definition

## Classes

## Modules

## Errors and Exceptions

### Handling Exceptions (try statement)

## Your turn! 🚀

```{seealso}
Here is a list of free/open source learning resources for advanced [Python programming](https://github.com/open-academy/open-learning-resources/blob/main/README.md#python). 
```

## Acknowledgements

Thanks to [Oleksii Trekhleb](https://github.com/trekhleb) who helped create this awesome open source project [learn-python](https://github.com/trekhleb/learn-python) for Python learning. It contributes the majoyrity of the content in this chapter.