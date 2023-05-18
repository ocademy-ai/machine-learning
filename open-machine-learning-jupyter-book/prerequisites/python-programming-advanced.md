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

# Python programming advanced

```{code-cell}
:tags: [hide-input]
# append the path for resolving the dependencies while building Jupyter Book
import sys, os
sys.path.append('../assets/code/prerequisites')
```

## Control flow

### The if statement

There can be zero or more `elif` parts, and the else part is optional. The keyword `elif` is short for ‘else if’, and is useful to avoid excessive indentation.

An `if … elif … elif …` sequence is a substitute for the switch or case statements found in other languages.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html
```

```{code-cell}
def get_age_group(age):
    if age >= 0 and age <= 9:
        print("You are a child!")
    elif age > 9 and age <= 18:
        print("You are an adolescent!")
    elif age > 18 and age <= 65:
        print("You are an adult!")
    else: # age > 65
        print("Golden ages!")

get_age_group(3)
get_age_group(50)
```

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20get_age_group%28age%29%3A%0A%20%20%20%20if%20age%20%3E%3D%200%20and%20age%20%3C%3D%209%3A%0A%20%20%20%20%20%20%20%20print%28%22You%20are%20a%20child!%22%29%0A%20%20%20%20elif%20age%20%3E%209%20and%20age%20%3C%3D%2018%3A%0A%20%20%20%20%20%20%20%20print%28%22You%20are%20an%20adolescent!%22%29%0A%20%20%20%20elif%20age%20%3E%2018%20and%20age%20%3C%3D%2065%3A%0A%20%20%20%20%20%20%20%20print%28%22You%20are%20an%20adult!%22%29%0A%20%20%20%20else%3A%20%23%20age%20%3E%2065%0A%20%20%20%20%20%20%20%20print%28%22Golden%20ages!%22%29%0A%0Aget_age_group%283%29%0Aget_age_group%2850%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

### The for statement (and range() function)

The `for` statement in Python differs a bit from what you may be used to in C or Pascal. Rather than always iterating over an arithmetic progression of numbers (like in Pascal), or giving the user the ability to define both the iteration step and halting condition (as C), Python’s for statement iterates over the items of any sequence (a list or a string), in the order that they appear in the sequence. For example (no pun intended):

Measure some strings:

- "cat" length is 3. 
- "window" length is 6. 
- "defenestrate" length is 12.

```{code-cell}
words = ['cat', 'window', 'defenestrate']
words_length = 0

for word in words:
    words_length += len(word)

assert words_length == (3 + 6 + 12)
```

If you need to modify the sequence you are iterating over while inside the loop (for example to duplicate selected items), it is recommended that you first make a copy. Iterating over a sequence does not implicitly make a copy. The slice notation makes this especially convenient:

```{code-cell}
for word in words[:]:  # Loop over a slice copy of the entire list.
    if len(word) > 6:
        words.insert(0, word)
```

Otherwise, with `for w in words`, the example would attempt to create an infinite list, inserting defenestrate over and over again.

```{code-cell}
assert words == ['defenestrate', 'cat', 'window', 'defenestrate']
```

If you do need to iterate over a sequence of numbers, the built-in function `range()` comes in handy. It generates arithmetic progressions:

```{code-cell}
iterated_numbers = []

for number in range(5):
    iterated_numbers.append(number)

assert iterated_numbers == [0, 1, 2, 3, 4]
```

Let's see a more complex example about how to find the prims by in an embedded `for` loops.

```{code-cell}
# find primes using a for-else construct
for n in range(2, 10):
    x_range = range(2, n)
    for x in x_range:
        if n % x == 0:
            break
    else:
        # loop fell through without finding a factor
        print(n)
```

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20find%20primes%20using%20a%20for-else%20construct%0Afor%20n%20in%20range%282,%2010%29%3A%0A%20%20%20%20x_range%20%3D%20range%282,%20n%29%0A%20%20%20%20for%20x%20in%20x_range%3A%0A%20%20%20%20%20%20%20%20if%20n%20%25%20x%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20break%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%23%20loop%20fell%20through%20without%20finding%20a%20factor%0A%20%20%20%20%20%20%20%20print%28n%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=30&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

To iterate over the indices of a sequence, you can combine `range()` and `len()` as follows:

```{code-cell}
words = ['Mary', 'had', 'a', 'little', 'lamb']
concatenated_string = ''

# pylint: disable=consider-using-enumerate
for word_index in range(len(words)):
    concatenated_string += words[word_index] + ' '

assert concatenated_string == 'Mary had a little lamb '
```

Or simply use `enumerate()`.

```{code-cell}
concatenated_string = ''

for word_index, word in enumerate(words):
    concatenated_string += word + ' '

assert concatenated_string == 'Mary had a little lamb '
```

When looping through dictionaries, the key and corresponding value can be retrieved at the same time using the `items()` method.

```{code-cell}
knights_names = []
knights_properties = []

knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for key, value in knights.items():
    knights_names.append(key)
    knights_properties.append(value)

assert knights_names == ['gallahad', 'robin']
assert knights_properties == ['the pure', 'the brave']
```

When looping through a sequence, the position index and corresponding value can be retrieved at the same time using the `enumerate()` function

```{code-cell}
indices = []
values = []
for index, value in enumerate(['tic', 'tac', 'toe']):
    indices.append(index)
    values.append(value)

assert indices == [0, 1, 2]
assert values == ['tic', 'tac', 'toe']
```

To loop over two or more sequences at the same time, the entries can be paired with the `zip()` function. In many ways, the object returned by `range()` behaves as if it is a list, but in fact, it isn’t. It is an object which returns the successive items of the desired sequence when you iterate over it, but it doesn’t really make the list, thus saving space.

We say such an object is iterable, that is, suitable as a target for functions and constructs that expect something from which they can obtain successive items until the supply is exhausted. We have seen that the for statement is such an iterator. The function `list()` is another; it creates lists from iterables:

The given end point is never part of the generated sequence; `range(10)` generates 10 values, the legal indices for items of a sequence of length 10. It is possible to let the range start at another number, or to specify a different increment (even negative; sometimes this is called the ‘step’):

```{code-cell}
assert list(range(5)) == [0, 1, 2, 3, 4]
assert list(range(5, 10)) == [5, 6, 7, 8, 9]
assert list(range(0, 10, 3)) == [0, 3, 6, 9]
assert list(range(-10, -100, -30)) == [-10, -40, -70]
```

### The while statement

The while loop executes as long as the condition remains true. In Python, like in C, any non-zero integer value is true; zero is false. The condition may also be a string or list value, in fact, any sequence; anything with a non-zero length is true, and empty sequences are false.

The test used in the example is a simple comparison. The standard comparison operators are written the same as in C: `<` (less than), `>` (greater than), `==` (equal to), `<=` (less than or equal to), `>=` (greater than or equal to) and `!=` (not equal to).

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html
- https://docs.python.org/3/reference/compound_stmts.html#the-while-statement
```

Let's raise the number to certain power using a while loop.

```{code-cell}
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

The try statement is used for exception handling.

When an error occurs, or an exception as we call it, Python will normally stop and generate an error message. These exceptions can be handled using the try statement:

- The `try` block lets you test a block of code for errors.
- The `except` block lets you handle the error.
- The `else` block lets you execute the code if no errors were raised.
- The `finally` block lets you execute code, regardless of the result of the `try` and `except` blocks.

```{seealso}
- https://www.w3schools.com/python/python_try_except.asp
```

The try block will generate an error because x is not defined:

```{code-cell}
exception_has_been_caught = False

try:
    # pylint: disable=undefined-variable
    print(not_existing_variable)
except NameError:
    exception_has_been_caught = True

assert exception_has_been_caught
```

You can define as many exception blocks as you want, e.g. if you want to execute a special block of code for a special kind of error:

```{code-cell}
exception_message = ''

try:
    # pylint: disable=undefined-variable
    print(not_existing_variable)
except NameError:
    exception_message = 'Variable is not defined'

assert exception_message == 'Variable is not defined'
```

You can use the else keyword to define a block of code to be executed if no errors were raised.

```{code-cell}
message = ''
# pylint: disable=broad-except
try:
    message += 'Success.'
except NameError:
    message += 'Something went wrong.'
else:
    message += 'Nothing went wrong.'

assert message == 'Success.Nothing went wrong.'
```

The final block, if specified, will be executed regardless if the `try` block raises an error or not.

```{code-cell}
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

The continue statement is borrowed from C, and continues with the next iteration of the loop.

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

### Function definition (def and return statements)

The keyword def introduces a function definition. It must be followed by the function name and the parenthesized list of formal parameters. The statements that form the body of the function start at the next line and must be indented.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#defining-functions
- https://www.thecodeship.com/patterns/guide-to-python-function-decorators/
```

```{code-cell}
def fibonacci_function_example(number_limit):
    """Generate a Fibonacci series up to number_limit.
    
    The first statement of the function body can optionally be a string literal; this string literal is the function’s documentation string, or docstring. There are tools which use docstrings to automatically produce online or printed documentation, or to let the user interactively browse through code; it’s good practice to include docstrings in code that you write, so make a habit of it.
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
```

Now call the function we just defined.

```{code-cell}
assert fibonacci_function_example(300) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
```

A function definition introduces the function name in the current symbol table. The value of the function name has a type that is recognized by the interpreter as a user-defined function. This value can be assigned to another name which can then also be used as a function.

This serves as a general renaming mechanism.

```{code-cell}
fibonacci_function_clone = fibonacci_function_example
assert fibonacci_function_clone(300) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
```

In Python, functions are first-class citizens, they are objects and that means we can do a lot of useful stuff with them.

Assign functions to variables.

```{code-cell}
def greet(name):
    return 'Hello, ' + name

greet_someone = greet

assert greet_someone('John') == 'Hello, John'
```

Define functions inside other functions.

```{code-cell}
def greet_again(name):
    def get_message():
        return 'Hello, '

    result = get_message() + name
    return result

assert greet_again('John') == 'Hello, John'
```

Functions can be passed as parameters to other functions.

```{code-cell}
def greet_one_more(name):
    return 'Hello, ' + name

def call_func(func):
    other_name = 'John'
    return func(other_name)

assert call_func(greet_one_more) == 'Hello, John'
```

Functions can return other functions. In other words, functions generate other functions.

```{code-cell}
def compose_greet_func():
    def get_message():
        return 'Hello there!'

    return get_message

greet_function = compose_greet_func()
assert greet_function() == 'Hello there!'
```

Inner functions have access to the enclosing scope.

More commonly known as a closure. A very powerful pattern that we will come across while building decorators. Another thing to note, Python only allows read access to the outer scope and not assignment. Notice how we modified the example above to read a `name` argument from the enclosing scope of the inner function and return the new function.

```{code-cell}
def compose_greet_func_with_closure(name):
    def get_message():
        return 'Hello there, ' + name + '!'

    return get_message

greet_with_closure = compose_greet_func_with_closure('John')

assert greet_with_closure() == 'Hello there, John!'
```

### Scopes of variables inside functions (global and nonlocal statements)

A NAMESPACE is a mapping from names to objects. Most namespaces are currently implemented as Python dictionaries, but that’s normally not noticeable in any way (except for performance), and it may change in the future. Examples of namespaces are the set of built-in names (containing functions such as `abs()`, and built-in exception names); the global names in a module; and the local names in a function invocation. In a sense, the set of attributes of an object also forms a namespace.

The important thing to know about namespaces is that there is absolutely no relation between names in different namespaces; for instance, two different modules may both define a function `maximize` without confusion — users of the modules must prefix it with the module name.

By the way, we use the word attribute for any name following a dot — for example, in the expression `z.real`, `real` is an attribute of the object `z`. Strictly speaking, references to names in modules are attribute references: in the expression `modname.func_name`, `modname` is a module object and `func_name` is an attribute of it. In this case, there happens to be a straightforward mapping between the module’s attributes and the global names defined in the module: they share the same namespace!

A SCOPE is a textual region of a Python program where a namespace is directly accessible. (“Directly accessible” here means that an unqualified reference to a name attempts to find the name in the namespace.)

Although scopes are determined statically, they are used dynamically. At any time during execution, there are at least three nested scopes whose namespaces are directly accessible:

- The innermost scope, which is searched first, contains the local names.
- The scopes of any enclosing functions, which are searched starting with the nearest enclosing scope, contain non-local, but also non-global names.
- The next-to-last scope contains the current module’s global names.
- The outermost scope (searched last) is the namespace containing built-in names.

BE CAREFUL!!!

Changing global or nonlocal variables from within an inner function might be a BAD practice and might lead to harder debugging and to more fragile code! Do this only if you know what you're doing.

```{code-cell}
# pylint: disable=invalid-name
test_variable = 'initial global value'
```

This is a scopes and namespaces example demonstrating how to reference the different scopes and namespaces, and how global and nonlocal affect variable binding:

```{code-cell}
# pylint: disable=invalid-name
test_variable = 'initial global value'


def test_function_scopes():
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

On this example you may see how accessing and changing global variables from within inner functions might make debugging more difficult and code to be less predictable. Since you might have expected that `test_variable` should still be equal to 'initial global value' but it was changed by "someone" you need to know about the CONTEXT of who had changed that. So once again access global and non-local scope only if you know what you're doing otherwise it might be considered a bad practice.

### Default argument values

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
```

This function `power_of` can be called in several ways because it has default value for the second argument. First, we may call it omitting the second argument at all.

```{code-cell}
assert power_of(3) == 9
```

We may also want to override the second argument by using the following function calls.

```{code-cell}
assert power_of(3, 2) == 9
assert power_of(3, 3) == 27
```

### Keyword arguments

Functions can be called using keyword arguments of the form `kwarg=value`.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments
```

This is an example of multi-argument function. This function accepts one required argument (`voltage`) and three optional arguments(`state`, `action`, and `type`)：

```{code-cell}
def parrot(voltage, state='a stiff', action='voom', parrot_type='Norwegian Blue'):
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

# 1 positional argument.
assert parrot(1000) == message

# 1 keyword argument.
assert parrot(voltage=1000) == message

message = (
    "This parrot wouldn't VOOOOOM if you put 1000000 volts through it. "
    "Lovely plumage, the Norwegian Blue. "
    "It's a stiff!"
)

# 2 keyword arguments.
assert parrot(voltage=1000000, action='VOOOOOM') == message
assert parrot(action='VOOOOOM', voltage=1000000) == message

message = (
    "This parrot wouldn't jump if you put 1000000 volts through it. "
    "Lovely plumage, the Norwegian Blue. "
    "It's bereft of life!"
)

# 3 positional arguments.
assert parrot(1000000, 'bereft of life', 'jump') == message

message = (
    "This parrot wouldn't voom if you put 1000 volts through it. "
    "Lovely plumage, the Norwegian Blue. "
    "It's pushing up the daisies!"
)

# 1 positional, 1 keyword.
assert parrot(1000, state='pushing up the daisies') == message
```

But all the following calls would be invalid:

```py
import pytest

# Required argument missing.
with pytest.raises(Exception):
    # pylint: disable=no-value-for-parameter
    parrot()

# No argument may receive a value more than once.
with pytest.raises(Exception):
    # pylint: disable=redundant-keyword-arg
    parrot(110, voltage=220)

# Non-keyword argument after a keyword argument.
# Below code will result in SyntaxError as this.
#   File "/tmp/ipykernel_44/168525738.py", line 9
#    parrot(voltage=5.0, 'dead')
#   SyntaxError: positional argument follows keyword argument
parrot(voltage=5.0, 'dead')

# Unknown keyword argument.
with pytest.raises(Exception):
    # pylint: disable=unexpected-keyword-arg,no-value-for-parameter
    parrot(actor='John Cleese')
```

In a function call, keyword arguments must follow positional arguments. All the keyword arguments passed must match one of the arguments accepted by the function (e.g. `actor` is not a valid argument for the `parrot` function), and their order is not important. This also includes non-optional arguments (e.g. `parrot(voltage=1000)` is valid too).  

### Arbitrary argument lists

Function can be called with an arbitrary number of arguments. These arguments will be wrapped up in a tuple. Before the variable number of arguments, zero or more normal arguments may occur.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists
```

When a final formal parameter of the form `**name` is present, it receives a dictionary containing all keyword arguments except for those corresponding to a formal parameter. This may be combined with a formal parameter of the form `*name` which receives a tuple containing the positional arguments beyond the formal parameter list. (`*name` must occur before `**name`.)

For example, if we define a function like this. This function accepts its arguments through `arguments` tuple:

```{code-cell}
def test_function(first_param, *arguments):
    assert first_param == 'first param'
    assert arguments == ('second param', 'third param')

test_function('first param', 'second param', 'third param')
```

Normally, these variadic arguments will be last in the list of formal parameters, because they scoop up all remaining input arguments that are passed to the function. Any formal parameters which occur after the `*args` parameter are **keyword-only arguments**, meaning that they can only be used as keywords rather than positional arguments.

```{code-cell}
def concat(*args, sep='/'):
    return sep.join(args)

assert concat('earth', 'mars', 'venus') == 'earth/mars/venus'
assert concat('earth', 'mars', 'venus', sep='.') == 'earth.mars.venus'
```

### Unpacking argument lists (* and ** statements)

Unpacking arguments may be executed via `*` and `**` operators. See below for further details.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#unpacking-argument-lists
```

The situation may occur when the arguments are already in a list or tuple but need to be unpacked for a function call requiring separate positional arguments. For instance, the built-in `range()` function expects separate start and stop arguments. If they are not available separately, write the function call with the `*` operator to unpack the arguments out of a list or tuple:

```{code-cell}
# Normal call with separate arguments.
assert list(range(3, 6)) == [3, 4, 5]

# Call with arguments unpacked from a list.
arguments_list = [3, 6]
assert list(range(*arguments_list)) == [3, 4, 5]

# In the same fashion, dictionaries can deliver keyword arguments with the ** operator.
def function_that_receives_names_arguments(first_word, second_word):
    return first_word + ', ' + second_word + '!'

arguments_dictionary = {'first_word': 'Hello', 'second_word': 'World'}
assert function_that_receives_names_arguments(**arguments_dictionary) == 'Hello, World!'
```

### Lambda expressions (lambda statement)

Small anonymous functions can be created with the `lambda` keyword. Lambda functions can be used wherever function objects are required. They are syntactically restricted to a single expression. Semantically, they are just syntactic sugar for a normal function definition. Like nested function definitions, lambda functions can reference variables from the containing scope.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions
```

Here is an example of Lambda Expressions. This function returns the sum of its two arguments: lambda a, b: a+b. Like nested function definitions, lambda functions can reference variables from the containing scope.

```{code-cell}
def make_increment_function(delta):
    return lambda number: number + delta

increment_function = make_increment_function(42)

assert increment_function(0) == 42
assert increment_function(1) == 43
assert increment_function(2) == 44
```

Another use of lambda is to pass a small function as an argument.

```{code-cell}
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
# Sort pairs by text key.
pairs.sort(key=lambda pair: pair[1])

assert pairs == [(4, 'four'), (1, 'one'), (3, 'three'), (2, 'two')]
```

### Documentation strings

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
```

The Python parser does not strip indentation from multi-line string literals in Python, so tools that process documentation have to strip indentation if desired. This is done using the following convention. The first non-blank line after the first line of the string determines the amount of indentation for the entire documentation string. (We can’t use the first line since it is generally adjacent to the string’s opening quotes so its indentation is not apparent in the string literal.) Whitespace “equivalent” to this indentation is then stripped from the start of all lines of the string. Lines that are indented less should not occur, but if they occur all their leading whitespace should be stripped. Equivalence of whitespace should be tested after expansion of tabs (to 8 spaces, normally).

```py
assert do_nothing.__doc__ == """Do nothing, but document it.

No, really, it doesn't do anything.
"""
```

### Function annotations

Function annotations are completely optional metadata information about the types used by user-defined functions.

Annotations are stored in the `__annotations__` attribute of the function as a dictionary and have no effect on any other part of the function. Parameter annotations are defined by a colon after the parameter name, followed by an expression evaluating the value of the annotation. Return annotations are defined by a literal `->`, followed by an expression, between the parameter list and the colon denoting the end of the `def` statement.

```{seealso}
- https://docs.python.org/3/tutorial/controlflow.html#function-annotations
```

Here is an example of Function Annotations. This function has a positional argument, a keyword argument, and the return value annotated.

```{code-cell}
def breakfast(ham: str, eggs: str = 'eggs') -> str:
    return ham + ' and ' + eggs

assert breakfast.__annotations__ == {'eggs': str, 'ham': str, 'return': str}
```

### Function decorators

Function decorators are simply wrappers to existing functions. In the context of design patterns, decorators dynamically alter the functionality of a function, method or class without having to directly use subclasses. This is ideal when you need to extend the functionality of functions that you don't want to modify. We can implement the decorator pattern anywhere, but Python facilitates the implementation by providing much more expressive features and syntax for that.

```{seealso}
- https://www.thecodeship.com/patterns/guide-to-python-function-decorators/
```

Function decorators are simply wrappers to existing functions. Putting the ideas mentioned above together, we can build a decorator. In this example let's consider a function that wraps the string output of another function by `p` tags.

This is the function that we want to decorate.

```{code-cell}
def greeting(name):
    return "Hello, {0}!".format(name)
```

This function decorates another functions output with `<p>` tag.

```{code-cell}
def decorate_with_p(func):
    def function_wrapper(name):
        return "<p>{0}</p>".format(func(name))
    return function_wrapper
```

Now, let's call our decorator and pass the function we want to decorate to it.

```{code-cell}
my_get_text = decorate_with_p(greeting)
```

Here we go, we've just decorated the function output without changing the function itself.

```{code-cell}
assert my_get_text('John') == '<p>Hello, John!</p>'  # With decorator.
assert greeting('John') == 'Hello, John!'  # Without decorator.
```

Now, Python makes creating and using decorators a bit cleaner and nicer for the programmer through some syntactic sugar. There is a neat shortcut for that, which is to mention the name of the decorating function before the function to be decorated. The name of the decorator should be prepended with an `@` symbol.

```{code-cell}
@decorate_with_p
def greeting_with_p(name):
    return "Hello, {0}!".format(name)

assert greeting_with_p('John') == '<p>Hello, John!</p>'
```

Now let's consider we wanted to decorate our greeting function with one more function to wrap a `div` in the string output.

```{code-cell}
# This will be our second decorator.
def decorate_with_div(func):
    def function_wrapper(text):
        return "<div>{0}</div>".format(func(text))
    return function_wrapper
```

With the basic approach, decorating get_text would be along the lines of `greeting_with_div_p = decorate_with_div(decorate_with_p(greeting_with_p))`

With Python's decorator syntax, the same thing can be achieved with much more expressive power.

```{code-cell}
@decorate_with_div
@decorate_with_p
def greeting_with_div_p(name):
    return "Hello, {0}!".format(name)

assert greeting_with_div_p('John') == '<div><p>Hello, John!</p></div>'
```

One important thing to notice here is that the order of setting our decorators matters. If the order was different in the example above, the output would have been different.

**Passing arguments to decorators.**

Looking back at the example before, you can notice how redundant the decorators in the example are. 2 decorators(`decorate_with_div`, `decorate_with_p`) each with the same functionality but wrapping the string with different tags. We can do much better than that. Why not have a more general implementation for one that takes the tag to wrap with as a string? Yes, please!

```{code-cell}
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

### Class definition (class statement)

Python is an object-oriented programming language. Almost everything in Python is an object, with its properties and methods. A Class is like an object constructor or a "blueprint" for creating objects.

```{seealso}
- https://docs.python.org/3/tutorial/classes.html
```

Class definitions, like function definitions (`def` statement) must be executed before they have any effect. (You could conceivably place a class definition in a branch of an if statement, or inside a function.)

```{code-cell}
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
```

When a class definition is entered, a new namespace is created, and used as the local scope — thus, all assignments to local variables go into this new namespace. In particular, function definitions bind the name of the new function here.

Class instantiation uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example, the following code will create a new instance of the class and assigns this object to the local variable.

```{code-cell}
greeter = GreetingClass()

assert greeter.say_hello() == 'Hello user'
assert greeter.say_goodbye() == 'Goodbye user'
```

### Class objects

After defining the class attributes to a class, the class object can be created by assigning the object to a variable. The created object would have instance attributes associated with it.

Class objects support two kinds of operations:

- attribute references
- instantiation

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#class-objects
```

ATTRIBUTE REFERENCES use the standard syntax used for all attribute references in Python: `obj.name`. Valid attribute names are all the names that were in the class’s namespace when the class object was created. For class ComplexNumber the following references are valid attribute references:

Example of the complex numbers class.

```{code-cell}
class ComplexNumber:
    real = 0
    imaginary = 0

    def get_real(self):
        """Return real part of complex number."""
        return self.real

    def get_imaginary(self):
        """Return imaginary part of complex number."""
        return self.imaginary

assert ComplexNumber.real == 0
```

 `__doc__` is also a valid attribute, returning the docstring belonging to the class:

```py
assert ComplexNumber.__doc__ == 'Example of the complex numbers class'
```

Class attributes can also be assigned, so you can change the value of `ComplexNumber.counter` by assignment.

```{code-cell}
ComplexNumber.real = 10
assert ComplexNumber.real == 10
```

CLASS INSTANTIATION uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example (assuming the above class):

```{code-cell}
complex_number = ComplexNumber()

assert complex_number.real == 10
assert complex_number.get_real() == 10
```

The instantiation operation (“calling” a class object) creates an empty object. Many classes like to create objects with instances customized to a specific initial state. Therefore a class may define a special method named `__init__()`, like this:

```{code-cell}
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

Now, what can we do with instance objects? The only operations understood by instance objects are attribute references. There are two kinds of valid attribute names:

- data attributes
- methods

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#instance-objects
```

DATA ATTRIBUTES need not be declared; like local variables, they spring into existence when they are first assigned to them. For example:

```{code-cell}
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

Classes can have two types of attribute references: data or methods. Class methods are called by `variable_name.method_name(parameters)` as opposed to class data which lacks the `()`.

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#method-objects
```

A simple example of the `Mycounter` class.

```{code-cell}
class MyCounter:
    counter = 10

    def get_counter(self):
        """Return the counter"""
        return self.counter

    def increment_counter(self):
        """Increment the counter"""
        self.counter += 1
        return self.counter
```

A method is a function that “belongs to” an object. (In Python, the term method is not unique to class instances: other object types can have methods as well. For example, list objects have methods called `append`, `insert`, `remove`, `sort`, and so on. However, in the following discussion, we’ll use the term method exclusively to mean methods of class instance objects, unless explicitly stated otherwise.)

Usually, a method is called right after it is bound.

```{code-cell}
counter = MyCounter()
assert counter.get_counter() == 10
```

However, it is not necessary to call a method right away: `counter.get_counter()` is a method object, and can be stored away and called at a later time. For example:

```{code-cell}
get_counter = counter.get_counter
assert get_counter() == 10
```

But be aware that `counter.get_counter()` is not the same thing as `MyCounter.get_counter()` — it is a method object, not a function object.

What exactly happens when a method is called? You may have noticed that `counter.get_counter()` was called without an argument above, even though the function definition for `get_counter()` specified an argument (`self`). What happened to the argument? Surely Python raises an exception when a function that requires an argument is called without any — even if the argument isn’t actually used...

Actually, you may have guessed the answer: the special thing about methods is that the instance object is passed as the first argument of the function. In our example, the call `counter.get_counter()` is exactly equivalent to `MyCounter.get_counter(counter)`. In general, calling a method with a list of n arguments is equivalent to calling the corresponding function with an argument list that is created by inserting the method’s instance object before the first argument.

```{code-cell}
assert counter.get_counter() == 10
assert MyCounter.get_counter(counter) == 10
```

### Class and instance variables

Generally speaking, instance variables are for data unique to each instance and class variables are for attributes and methods shared by all instances of the class.

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables
```

Let's look at the example of `Dog` class:

```{code-cell}
# pylint: disable=too-few-public-methods
class Dog:
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
```

Shared data can have possibly surprising effects involving mutable objects such as lists and dictionaries. For example, the tricks list in the following code should not be used as a class variable because just a single list would be shared by all Dog instances.

Here is a `Dog` class example with wrong shared variable usage:

```{code-cell}
# pylint: disable=too-few-public-methods
class DogWithSharedTricks:
    # Mistaken use of a class variable (see below) for mutable objects.
    tricks = []  

    def __init__(self, name):
        # Instance variable unique to each instance.
        self.name = name  

    def add_trick(self, trick):
        """Add trick to the dog

        This function illustrate mistaken use of mutable class variable tricks (see below).
        """
        self.tricks.append(trick)

fido = DogWithSharedTricks('Fido')
buddy = DogWithSharedTricks('Buddy')

fido.add_trick('roll over')
buddy.add_trick('play dead')

# unexpectedly shared by all dogs
assert fido.tricks == ['roll over', 'play dead']
assert buddy.tricks == ['roll over', 'play dead']
```

The correct design of the class should use an instance variable instead:

```{code-cell}
# pylint: disable=too-few-public-methods
class DogWithTricks:
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

Inheritance is one of the principles of object-oriented programming. Since classes may share a lot of the same code, inheritance allows a derived class to reuse the same code and modify it accordingly.

```{seealso}
- https://docs.python.org/3/tutorial/classes.html#inheritance
```

Here is an example of the base class:

```{code-cell}
# pylint: disable=too-few-public-methods
class Person:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        """Get person name"""
        return self.name
```

The base class (in our case `Person`) must be defined in a scope containing the derived class definition. In place of a base class name, other arbitrary expressions are also allowed.

Derived classes may override methods of their base classes. Because methods have no special privileges when calling other methods of the same object, a method of a base class that calls another method defined in the same base class may end up calling a method of a derived class that overrides it.

An overriding method in a derived class may in fact want to extend rather than simply replace the base class method of the same name. There is a simple way to call the base class method directly: just call `BaseClassName.methodname(self, arguments)`. This is occasionally useful to clients as well. (Note that this only works if the base class is accessible as `BaseClassName` in the global scope.)

The syntax for a derived class definition looks like this:

```{code-cell}
# pylint: disable=too-few-public-methods
class Employee(Person):
    def __init__(self, name, staff_id):
        Person.__init__(self, name)
        # You may also use super() here in order to avoid explicit using of parent class name:
        # >>> super().__init__(name)
        self.staff_id = staff_id

    def get_full_id(self):
        """Get full employee id"""
        return self.get_name() + ', ' + self.staff_id
```

There’s nothing special about the instantiation of derived classes: `DerivedClassName()` creates a new instance of the class. Method references are resolved as follows: the corresponding class attribute is searched, descending the chain of base classes if necessary, and the method reference is valid if this yields a function object.

```{code-cell}
person = Person('Bill')
employee = Employee('John', 'A23')

assert person.get_name() == 'Bill'
assert employee.get_name() == 'John'
assert employee.get_full_id() == 'John, A23'
```

Python has two built-in functions that work with inheritance:

- Use `isinstance()` to check an instance’s type: `isinstance(obj, int)` will be True only if `obj.__class__` is int or some class derived from int.
- Use `issubclass()` to check class inheritance: `issubclass(bool, int)` is True since bool is a subclass of int. However, `issubclass(float, int)` is False since float is not a subclass of int.

```{code-cell}
assert isinstance(employee, Employee)
assert not isinstance(person, Employee)

assert isinstance(person, Person)
assert isinstance(employee, Person)

assert issubclass(Employee, Person)
assert not issubclass(Person, Employee)
```

### Multiple inheritance

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
```

Python supports a form of multiple inheritances as well. A class definition with multiple base classes looks like this:

```{code-cell}
class CalendarClock(Clock, Calendar):
    pass

calendar_clock = CalendarClock()

assert calendar_clock.get_date() == '12/08/2018'
assert calendar_clock.get_time() == '11:23 PM'
```

For most purposes, in the simplest cases, you can think of the search for attributes inherited from a parent class as depth-first, left-to-right, not searching twice in the same class where there is an overlap in the hierarchy. Thus, if an attribute is not found in `CalendarClock`, it is searched for in `Clock`, then (recursively) in the base classes of `Clock`, and if it was not found there, it was searched for in `Calendar`, and so on.

In fact, it is slightly more complex than that; the method resolution order changes dynamically to support cooperative calls to `super()`. This approach is known in some other multiple-inheritance languages as call-next-method and is more powerful than the super call found in single-inheritance languages.

Dynamic ordering is necessary because all cases of multiple inheritance exhibit one or more diamond relationships (where at least one of the parent classes can be accessed through multiple paths from the bottommost class). For example, all classes inherit from an object, so any case of multiple inheritances provides more than one path to reach the object. To keep the base classes from being accessed more than once, the dynamic algorithm linearizes the search order in a way that preserves the left-to-right ordering specified in each class, that calls each parent only once, and is monotonic (meaning that a class can be subclassed without affecting the precedence order of its parents).

## Modules

### Modules (import statement)

As your program gets longer, you may want to split it into several files for easier maintenance. You may also want to use a handy function that you’ve written in several programs without copying its definition into each program.

To support this, Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter. Such a file is called a module; definitions from a module can be imported into other modules or into the main module (the collection of variables that you have access to in a script executed at the top level and in calculator mode).

A module is a file containing Python definitions and statements. The file name is the module name with the suffix .py appended. Within a module, the module’s name (as a string) is available as the value of the global variable `__name__`.

When the interpreter executes the import statement, it searches for a module in a list of directories assembled from the following sources:

- The directory from which the input script was run or the current directory if the interpreter is being run interactively.
- The list of directories contained in the `PYTHONPATH` environment variable, if it is set. (The format for `PYTHONPATH` is OS-dependent but should mimic the PATH environment variable.)
- An installation-dependent list of directories configured at the time Python is installed.

The resulting search path is accessible in the Python variable `sys.path`, which is obtained from a module named sys:

```python
import sys
sys.path
```

```{seealso}
- https://docs.python.org/3/tutorial/modules.html
- https://realpython.com/python-modules-packages/
```

This does not enter the names of the functions defined in `fibonacci_module` directly in the current symbol table; it only enters the module name `fibonacci_module` there.

```{code-cell}
import fibonacci_module
```

There is a variant of the import statement that imports names from a module directly into the importing module’s symbol table. For example:

```{code-cell}
# pylint: disable=reimported
from fibonacci_module import fibonacci_at_position, fibonacci_smaller_than
```

There is even a variant to import all names that a module defines. This imports all names except those beginning with an underscore `_`. In most cases Python programmers do not use this facility since it introduces an unknown set of names into the interpreter, possibly hiding some things you have already defined.

If the module name is followed by as then the name following as is bound directly to the imported module:

```{code-cell}
import fibonacci_module as fibonacci_module_renamed
```

It can also be used when utilizing from with similar effects:

```{code-cell}
from fibonacci_module import fibonacci_at_position as fibonacci_at_position_renamed
```

When a module named spam is imported, the interpreter first searches for a built-in module with that name. If not found, it then searches for a file named spam.py in a list of directories given by the variable `sys.path`. `sys.path` is initialized from these locations:

- The directory containing the input script (or the current directory when no file is specified).
- PYTHONPATH (a list of directory names, with the same syntax as the shell variable PATH).
- The installation-dependent default.

```{code-cell}
assert fibonacci_module.fibonacci_at_position(7) == 13
assert fibonacci_at_position(7) == 13
assert fibonacci_module_renamed.fibonacci_at_position(7) == 13
assert fibonacci_at_position_renamed(7) == 13

assert fibonacci_module.fibonacci_smaller_than(100) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
assert fibonacci_smaller_than(100) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
assert fibonacci_module_renamed.fibonacci_smaller_than(10) == [0, 1, 1, 2, 3, 5, 8]
```

If you intend to use a function often you can assign it to a local name.

```{code-cell}
fibonacci = fibonacci_module.fibonacci_smaller_than
assert fibonacci(100) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
```

The built-in function `dir()` is used to find out which names a module defines. It returns a sorted list of strings.

```{code-cell}
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

Packages are a way of structuring Python’s module namespace by using “dotted module names”. For example, the module name `A.B` designates a submodule named `B` in a package named `A`. Just like the use of modules saves the authors of different modules from having to worry about each other’s global variable names, the use of dotted module names saves the authors of multi-module packages like NumPy or Pillow from having to worry about each other’s module names.

The `__init__.py` files are required to make Python treat the directories as containing packages; this is done to prevent directories with a common name, such as string, from unintentionally hiding valid modules that occur later on the module search path. In the simplest case, `__init__.py` can just be an empty file, but it can also execute the initialization code for the package or set the `__all__` variable, described later.

Users of the package can import individual modules from the package, for example:

```{code-cell}
import sound_package.effects.echo
```

An alternative way of importing the submodule is:

```{code-cell}
# pylint: disable=reimported
from sound_package.effects import echo
```

Yet another variation is to import the desired function or variable directly:

```{code-cell}
from sound_package.effects.echo import echo_function
```

Note that when using from package import item, the item can be either a submodule (or subpackage) of the package or some other name defined in the package, like a function, class, or variable.

The import statement first tests whether the item is defined in the package; if not, it assumes it is a module and attempts to load it. If it fails to find it, an `ImportError` exception is raised.

Contrarily, when using syntax like import `item.subitem.subsubitem`, each item except for the last must be a package; the last item can be a module or a package but can’t be a class or function or variable defined in the previous item.

```{code-cell}
assert sound_package.effects.echo.echo_function() == 'Do echo effect'
assert echo.echo_function() == 'Do echo effect'
assert echo_function() == 'Do echo effect'
```

## Errors and exceptions

### Handling exceptions (try statement)

Even if a statement or expression is syntactically correct, it may cause an error when an attempt
is made to execute it. Errors detected during execution are called exceptions and are not
unconditionally fatal.

It is possible to write programs that handle selected exceptions.

```{seealso}
https://docs.python.org/3/tutorial/errors.html#errors-and-exceptions
```

The `try` statement works as follows.

- First, the `try` clause (the statement(s) between the `try` and `except` keywords) is executed.
- If no exception occurs, the `except` clause is skipped and execution of the `try` statement is finished.
- If an exception occurs during the execution of the `try` clause, the rest of the clause is skipped. Then if its type matches the exception named after the except keyword, the `except` clause is executed, and then execution continues after the `try` statement.
- If an exception occurs that does not match the exception named in the `except` clause, it is passed on to outer `try` statements; if no handler is found, it is an unhandled exception and execution stops with a message.

Let's simulate division by zero exception.

```{code-cell}
exception_has_been_handled = False
try:
    result = 10 * (1 / 0)  # division by zero
    # We should not get here at all.
    assert result
except ZeroDivisionError:
    # We should get here because of division by zero.
    exception_has_been_handled = True

assert exception_has_been_handled
```

Let's simulate an undefined variable access exception.

```{code-cell}
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
```

A `try` statement may have more than one `except` clause, to specify handlers for different exceptions. At most one handler will be executed. Handlers only handle exceptions that occur in the corresponding `try` clause, not in other handlers of the same `try` statement. An `except` clause may name multiple exceptions as a parenthesized tuple, for example:

```{code-cell}
exception_has_been_handled = False
try:
    result = 10 * (1 / 0)  # division by zero
    # We should not get here at all.
    assert result
except (ZeroDivisionError, NameError):
    # We should get here because of division by zero.
    exception_has_been_handled = True

assert exception_has_been_handled
```

Exception handlers may be chained.

```{code-cell}
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
```

The `try … except` statement has an optional `else` clause, which, when present, must follow all `except` clauses. It is useful for code that must be executed if the `try` clause does not raise an exception. For example:

```{code-cell}
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

### Raising exceptions (raise statement)

The `raise` statement allows the programmer to force a specified exception to occur.

```{seealso}
https://docs.python.org/3/tutorial/errors.html#raising-exceptions
```

The `raise` statement allows the programmer to force a specified exception to occur.

```{code-cell}
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

Programs may name their own exceptions by creating a new exception class. Exceptions should typically be derived from the `Exception` class, either directly or indirectly. Most exceptions are defined with names that end in `Error,` similar to the naming of the standard exceptions. Many standard modules define their own exceptions to report errors that may occur in functions they define.

User-defined exceptions.

```{code-cell}
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

Practice the Python programming basics by following this [assignment](../assignments/prerequisites/python-programming-advanced.ipynb).

## Self study

Here is a list of free/open-source learning resources for advanced [Python programming](https://github.com/open-academy/open-learning-resources/blob/main/README.md#python).

## Acknowledgments

Thanks to [Oleksii Trekhleb](https://github.com/trekhleb) who helped create this awesome open source project [learn-python](https://github.com/trekhleb/learn-python) for Python learning. It contributes the majority of the content in this chapter.

Thanks to [pythontutor](https://pythontutor.com/) for providing the ability to visualize the code execution. It also contributes some code to this chapter.
