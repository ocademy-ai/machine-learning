
# Get started

To start working on the assignments, you could follow the below steps:

1. Fork the [open-academy/machine-learning](https://github.com/open-academy/machine-learning) under your own GitHub account.
![](../../images/fork-01.jpg)
![](../../images/fork-02.jpg)
2. Create a test branch on your repo forked above, which MUST be named as `assignment`.
![](../../images/create_branch-01.jpg)
![](../../images/create_branch-02.jpg)
3. Clone the repo to your local, and switch to the `assignment` branch.
![](../../images/git_clone-01.jpg)
![](../../images/git_clone-02.jpg)
![](../../images/checkout_branch-01.jpg)
4. Work on the assignment locally by following the instruments provided inline.
5. Verify your local changes by executing the corresponding notebook cell inside the assignment.
6. Commit & push the local changes to remote once you finish the assignment.
![](../../images/git_commit-01.jpg)
![](../../images/git_push-01.jpg)
7. A GitHub Action will be triggered automatically, and the result will be shown on your forked repo at Github.

You don't need to finish all the assignments at the same time. Only the changed file will trigger the verification from Github after being pushed to the remote. You could also debug the code by checking the error log from the GitHub Action execution.

```{seealso}
- [How to fork a Github repo?](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [How to check Github Action result?](https://docs.github.com/en/actions/quickstart#viewing-your-workflow-results)
```

## How does this work?

The assignment is fully automated by leveraging GitHub Action. The action is defined by [assignment.yml](https://github.com/open-academy/machine-learning/blob/main/.github/workflows/assignment.yml), which handles the continuous integration workflow post a code push. It listens to the code change under `open-machine-learning-jupyter-book/assignments` path, gets the changed files, and runs unit testing against them.

`pytest` is the testing framework used for the assignments. To support unit testing for the Jupyter Notebook, `nbmake` is used as a plugin together with `pytest`.

```{seealso}
- [pytest - makes it easy to write small, readable tests, and can scale to support complex functional testing for applications and libraries.](https://docs.pytest.org/)
- [GitHub - treebeardtech/nbmake: Pytest plugin for testing notebooks](https://github.com/treebeardtech/nbmake)
```
