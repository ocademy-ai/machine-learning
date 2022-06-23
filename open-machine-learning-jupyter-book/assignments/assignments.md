# Assignments

```{tableofcontents}
```

Open Academy sets up the assignment as [Test-driven Development](https://en.wikipedia.org/wiki/Test-driven_development) style. The questions are [unit testing](https://en.wikipedia.org/wiki/Unit_testing) alike, implemented as bunch of Jupyter Notebooks, and fully automated through CI/CD. A real-world code quanlity ensurance environment is simulated. You will learn how to handle the software testing while working on the assignments.

## Get Started

To start working on the assignments, you could follow below steps.

1. Fork the [open-academy/machine-learning](https://github.com/open-academy/machine-learning) under your own Github account.

2. Create a test branch on your own repo forked above, which MUST be named as `assignment`.

3. Clone the repo to your local, and switch to the `assignment` branch.

4. Work on the assignment locally by following the instruments provided inline.

5. Verify your local changes by executing the corresponding notebook cell inside the assignment.

6. Commit & push the local changes to remote once you finish the assignment.

7. A Github Action will be triggered automatically, and the result will be shown at your forked repo at Github.

You don't need to finish all the assignments at the same time. Only the changed file will trigger the verification from Github after pushed to remote. You could also find based on the error log from the Github Action execution.

```{seealso}
- How to fork a Github repo - https://docs.github.com/en/get-started/quickstart/fork-a-repo.
- How to check Github Action result - https://docs.github.com/en/actions/quickstart#viewing-your-workflow-results
```

## How Does This Work?

The assignment is fully automated by leveraging Github Action. The action is defined by [assignment.yml](https://github.com/open-academy/machine-learning/blob/main/.github/workflows/assignment.yml), which handles the continuous integration workflow post a code push. It listens to the code change under `open-machine-learning-jupyter-book/assignments` path, gets the changed files, and runs unit testing against them.

`pytest` is the testing framework used for the assignments. To support unit test for the Jupyter Notebook, `nbmake` is used as a plugin together with `pytest`.

```{seealso}
- https://docs.pytest.org/
- https://github.com/treebeardtech/nbmake
```