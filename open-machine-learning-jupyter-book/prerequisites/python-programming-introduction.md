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
  language: Python
  name: Python3
---

# Python programming introduction

Python is a high-level programming language for general-purpose programming. It is an open-source, interpreted, objected-oriented programming language. Python was created by a Dutch programmer, Guido van Rossum. The name of the Python programming language was derived from a British sketch comedy series, Month Python's Flying Circus. The first version was released on February 20, 1991.

Python is an easy-to-learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming. Python’s elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms.

It is used for:

- web development (server-side),
- software development,
- mathematics,
- system scripting.
These Python programming-related sections are designed for beginners and professionals who want to learn Python programming language. If you are in favor of videos, you may get started with this [Python for Absolute Beginners video](https://www.youtube.com/watch?v=11OYpBrhdyM).

## Why Python?

It is a programming language that is very close to human language and because of that, it is easy to learn and use. Python is used by various industries and companies (including Google). It has been used to develop web applications, desktop applications, system administration, and Machine Learning libraries. Python is a highly embraced language in the data science and Machine Learning community. I hope this is enough to convince you to start learning Python. Python is eating the world and you are killing it before it eats you.

## Environment setup

### Installing Python

To run a Python script you need to install Python. Let's [download](https://www.Python.org/) Python.

If you are a windows user. Click the button encircled in red.

[![installing on Windows](../../images/installing_on_windows.png)](https://www.Python.org/)

If you are a macOS user. Click the button encircled in red.

[![installing on Windows](../../images/installing_on_macOS.png)](https://www.Python.org/)

To check if Python is installed write the following command on your device terminal.

```shell
Python --version
```

![Python Version](../../images/python_version.png)

As you can see from the terminal, I am using _Python 3.7.5_ version at the moment. Your version of Python might be different from mine, but it should be 3.6 or above. If you manage to see the Python version, well done. Python has been installed on your machine. Continue to the next section.

### Python shell

Python is an interpreted scripting language, so it does not need to be compiled. It means it executes the code line by line. Python comes with a _Python Shell (Python Interactive Shell)_. It is used to execute a single Python command and get the result.

Python Shell waits for the Python code from the user. When you enter the code, it interprets the code and shows the result in the next line. Open your terminal or command prompt(cmd) and write:

```shell
Python
```

![Python Scripting Shell](../../images/opening_Python_shell.png)

The Python interactive shell is opened and it is waiting for you to write Python code(Python script). You will write your Python script next to this symbol >>> and then click Enter.
Let us write our very first script on the Python scripting shell.

![Python script on Python shell](../../images/adding_on_Python_shell.png)

Well done, you wrote your first Python script on Python interactive shell. How do we close the Python interactive shell?

To close the shell, next to this symbol `>>` write `exit()` command and press Enter.

![Exit from the Python shell](../../images/exit_from_shell.png)

Now, you know how to open the Python interactive shell and how to exit from it.

Python will give you results if you write scripts that Python understands, if not it returns errors. Let's make a deliberate mistake and see what Python will return.

![Invalid Syntax Error](../../images/invalid_syntax_error.png)

As you can see from the returned error, Python is so clever that it knows the mistake we made and which was `Syntax Error: invalid syntax`. Using `x` as multiplication in Python is a syntax error because `x` is not the valid syntax in Python. Instead of `x`, we use an asterisk `*` for multiplication. The returned error clearly shows what to fix.

The process of identifying and removing errors from a program is called _debugging_. Let us debug it by putting `*` in place of `x`.

![Fixing Syntax Error](../../images/fixing_syntax_error.png)

Our bug was fixed, the code ran and we got the result we were expecting. As a programmer, you will see such kinds of errors on daily basis. It is good to know how to debug. To be good at debugging you should understand what kind of errors you are facing. Some of the Python errors you may encounter are `SyntaxError`, `IndexError`, `NameError`, `ModuleNotFoundError`, `KeyError`, `ImportError`, `AttributeError`, `TypeError`, `ValueError`, `ZeroDivisionError` etc. We will see more about different Python **_error types_** in later sections.

Let us practice more on how to use Python interactive shell. Go to your terminal or command prompt and write the word `Python`.

![Python Scripting Shell](../../images/opening_Python_shell.png)

The Python interactive shell is opened. Let us do some basic mathematical operations (addition, subtraction, multiplication, division, modulus, exponential).

Let us do some maths first before we write any Python code:

- $ 2 + 3 = 5 $
- $ 3 - 2 = 1 $
- $ 3 * 2 = 6 $
- $ 3 / 2 = 1.5 $
- $ 3 ^ 2 = 3 x 3 = 9 $

In Python we have the following additional operations:

- `3 % 2 = 1` => which means finding the remainder
- `3 // 2 = 1` => which means removing the remainder

Let us change the above mathematical expressions to Python code. The Python shell has been opened and lets us write a comment at the very beginning of the shell.

A _comment_ is a part of the code that is not executed by Python. So we can leave some text in our code to make our code more readable. Python does not run the comment part. Comment in Python starts with the hash(`#`) symbol.

This is how you write a comment in Python

```shell
# comment starts with hash
# this is a Python comment, because it starts with a (#) symbol
```

![Maths on Python shell](../../images/maths_on_Python_shell.png)

Before we move on to the next section, let us practice more on the Python interactive shell. Close the opened shell by writing `exit()` on the shell and open it again and let us practice how to write text on the Python shell.

![Writing String on Python shell](../../images/writing_string_on_shell.png)

### Installing Visual Studio Code

The Python interactive shell is good to try and test small script codes but it will not be for a big project. In the real work environment, developers use different code editors to write codes. Will use Visual Studio Code. Visual Studio Code is a very popular open-source text editor. I am a fan of Visual Studio Code and I would recommend [downloading](https://code.visualstudio.com/) Visual Studio Code, but if you are in favor of other editors, feel free to follow with what you have.

[![Visual Studio Code](../../images/vscode.png)](https://code.visualstudio.com/)

If you installed Visual Studio Code, let us see how to use it. If you prefer a video, you can follow this Visual Studio Code for Python [Video tutorial](https://www.youtube.com/watch?v=bn7Cx4z-vSo)

#### How to use Visual Studio Code

Open the Visual Studio Code by double-clicking the visual studio icon. When you open it you will get this kind of interface. Try to interact with the labeled icons.

![Visual Studio Code](../../images/vscode_ui.png)

Create a folder named `open-academy` on your desktop. Then open it using Visual Studio Code.

![Opening Project on Visual studio](../../images/how_to_open_project_on_vscode.png)

![Opening a project](../../images/opening_project.png)

After opening it you will see shortcuts for creating files and folders inside of `open-academy` project's directory. As you can see below, I have created the very first file, `helloworld.py`. You can do the same.

![Creating a Python file](../../images/helloworld.png)

After a long day of coding, you want to close your code editor, right? This is how you will close the opened project.

![Closing project](../../images/closing_opened_project.png)

Congratulations, you have finished setting up the development environment. Let us start coding.

## Basic Python

### Python syntax

A Python script can be written in Python interactive shell or the code editor. A Python file has an extension `.py`.

### Python indentation

An indentation is a white space in a text. Indentation in many languages is used to increase code readability, however, Python uses indentation to create blocks of codes. In other programming languages, curly brackets are used to create blocks of codes instead of an indentation. One of the common bugs when writing Python code is the wrong indentation.

![Indentation Error](../../images/indentation.png)

### Comments

Comments are very important to make the code more readable and to leave remarks in our code. Python does not run comment parts of our code. Any text starting with a hash(`#`) in Python is a comment.

**Example: Single Line Comment**

```shell
# This is the first comment
# This is the second comment
# Python is eating the world
```

**Example: Multiline Comment**

The triple quote can be used for multiline comment if it is not assigned to a variable

```shell
"""This is multiline comment
multiline comment takes multiple lines.
Python is eating the world
"""
```

### Data types

In Python, there are several types of data types. Let us get started with the most common ones. Different data types will be covered in detail in other sections. For the time being, let us just go through the different data types and get familiar with them. You do not have to have a clear understanding now.

#### Number

- Integer: integer(negative, zero and positive) numbers.
    Example: ... -3, -2, -1, 0, 1, 2, 3 ...
- Float: decimal number.
    Example: ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...
- Complex.
    Example: 1 + j, 2 + 4j

#### String

A collection of one or more characters under a single or double quote. If a string is more than one sentence then we use a triple quote.

**Example:**

```py
'Asabeneh'
'Finland'
'Python'
'I love teaching'
'I hope you are enjoying the first day of open-academy Challenge'
```

#### Booleans

A boolean data type is either a `True` or `False` value. `T` and `F` should be always uppercase.

**Example:**

```Python
True  #  Is the light on? If it is on, then the value is True
False # Is the light on? If it is off, then the value is False
```

#### List

Python list is an ordered collection that allows to store items of different data types. A list is similar to an array in JavaScript.

**Example:**

```py
[0, 1, 2, 3, 4, 5]  # all are the same data types - a list of numbers
['Banana', 'Orange', 'Mango', 'Avocado'] # all the same data types - a list of strings (fruits)
['Finland','Estonia', 'Sweden','Norway'] # all the same data types - a list of strings (countries)
['Banana', 10, False, 9.81] # different data types in the list - string, integer, boolean and float
```

#### Dictionary

A Python dictionary object is an unordered collection of data in a key-value pair format.

**Example:**

```py
{
'first_name':'Asabeneh',
'last_name':'Yetayeh',
'country':'Finland', 
'age':250, 
'is_married':True,
'skills':['JS', 'React', 'Node', 'Python']
}
```

#### Tuple

A tuple is an ordered collection of different data types like a list, but tuples can not be modified once they are created. They are immutable.

**Example:**

```py
('Asabeneh', 'Pawel', 'Brook', 'Abraham', 'Lidiya') # Names
```

```py
('Earth', 'Jupiter', 'Neptune', 'Mars', 'Venus', 'Saturn', 'Uranus', 'Mercury') # planets
```

#### Set

A set is a collection of data types similar to a list and tuple. Unlike the list and the tuple, a set is not an ordered collection of items. Like in Mathematics, set in Python only stores unique items. In later sections, we will go into detail about every Python data type.

**Example:**

```py
{2, 4, 3, 5}
{3.14, 9.81, 2.7} # order is not important in set
```

### Checking data types

To check the data type of certain data/variables we use the `type` function. In the following terminal you will see different Python data types:

![Checking Data types](../../images/checking_data_types.png)

### Python file

First open your project folder, `open-academy`. If you don't have this folder, create a folder name called `open-academy`. Inside this folder, create a file called `helloworld.py`. Now, let's do what we did on Python interactive shell using Visual Studio Code.

The Python interactive shell was printing without using `print` but on Visual Studio Code to see our result we should use a built-in function `print()`. The `print()` built-in function takes one or more arguments as follows `print('arument1', 'argument2', 'argument3')`. See the examples below.

**Example:**

The file name is `helloworld.py`.

```py
print(2 + 3)             # addition(+)
print(3 - 1)             # subtraction(-)
print(2 * 3)             # multiplication(*)
print(3 / 2)             # division(/)
print(3 ** 2)            # exponential(**)
print(3 % 2)             # modulus(%)
print(3 // 2)            # Floor division operator(//)

# Checking data types
print(type(10))          # Int
print(type(3.14))        # Float
print(type(1 + 3j))      # Complex number
print(type('Asabeneh'))  # String
print(type([1, 2, 3]))   # List
print(type({'name':'Asabeneh'})) # Dictionary
print(type({9.8, 3.14, 2.7}))    # Set
print(type((9.8, 3.14, 2.7)))    # Tuple
```

To run the Python file check the image below. You can run the Python file either by running the green button on Visual Studio Code or by typing `Python helloworld.py` in the terminal.

![Running Python script](../../images/running_Python_script.png)

🌕  You are amazing. You have just completed our challenge and you are on your way to greatness. Now do some exercises for your brain and muscles.

## Your turn! 🚀

### Exercise: Level 1

1. Check the Python version you are using
2. Open the Python interactive shell and do the following operations. The operands are 3 and 4.
   - addition(+)
   - subtraction(-)
   - multiplication(\*)
   - modulus(%)
   - division(/)
   - exponential(\*\*)
   - floor division operator(//)
3. Write strings on the Python interactive shell. The strings are the following:
   - Your name
   - Your family name
   - Your country
   - I am enjoying 30 days of Python
4. Check the data types of the following data:
   - 10
   - 9.8
   - 3.14
   - 4 - 4j
   - ['Asabeneh', 'Python', 'Finland']
   - Your name
   - Your family name
   - Your country

### Exercise: Level 2

1. Create a folder named day_1 inside `open-academy` folder. Inside day_1 folder, create a Python file `helloworld.py` and repeat questions 1, 2, 3 and 4. Remember to use `print()` when you are working on a Python file. Navigate to the directory where you have saved your file, and run it.

### Exercise: Level 3

1. Write an example for different Python data types such as Number(Integer, Float, Complex), String, Boolean, List, Tuple, Set and Dictionary.
2. Find a [Euclidian distance](https://en.wikipedia.org/wiki/Euclidean_distance#:~:text=In%20mathematics%2C%20the%20Euclidean%20distance,being%20called%20the%20Pythagorean%20distance.) between (2, 3) and (10, 8)

🎉 CONGRATULATIONS! 🎉

## Acknowledgments

Thanks to [Asabeneh](https://github.com/Asabeneh) who helped create this awesome open source project [30-Days-Of-Python](https://github.com/Asabeneh/30-Days-Of-Python/blob/master/readme.md) for Python learning. It contributes the majority of the content in this chapter.
