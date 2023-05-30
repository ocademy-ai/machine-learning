# Ocademy self-paced assignments

[![Binder](http://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/open-academy/assignments-binder-requirements/main?urlpath=git-pull%3Frepo%3Dhttps%253A%252F%252Fgithub.com%252Fopen-academy%252Fmachine-learning%26urlpath%3Dlab%252Ftree%252Fmachine-learning%252F%26branch%3Dmain)

Ocademy sets up the assignment as [Test-driven Development](https://en.wikipedia.org/wiki/Test-driven_development) style. The questions are [unit testing](https://en.wikipedia.org/wiki/Unit_testing) alike, implemented as a bunch of Jupyter Notebooks, and visualized by [jupyterlab-pytutor](https://github.com/jupyterlab-contrib/jupyterlab-pytutor). A real-world code quality assurance environment is simulated. You will learn how to handle software testing while working on the assignments.

## Try it out

There are multiple ways to do exercise with the assignment in self-paced mode. You MUST use Jupyter Lab as the runtime environment.

### Binder

Simply click on this [![Binder](http://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/open-academy/assignments-binder-requirements/main?urlpath=git-pull%3Frepo%3Dhttps%253A%252F%252Fgithub.com%252Fopen-academy%252Fmachine-learning%26urlpath%3Dlab%252Ftree%252Fmachine-learning%252F%26branch%3Dmain).

### Local

1\. Install Python & Conda by following [this](https://github.com/open-academy/machine-learning/blob/main/CONTRIBUTING.md#install-python--conda).

2\. Install Jupyter Lab by following (this)[https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html].

3\. Initialize the Conda env.

```
# first time setup
conda env create -f environment.yml
# or update
conda env update -f environment.yml
```

4\. Activate the Conda environment,

```
conda activate [env-created-by-step-3]
```

5\. Start Jupyter Lab. You are all set!

```
jupyter lab
```

![Screenshot 2023-04-23 at 4 54 20 PM](https://user-images.githubusercontent.com/5424267/233873630-de9c1b75-c635-45bd-b4d0-889f0c917301.png)

### GitHub

To start working on the assignments, you could follow the  steps below:

1. [First time only] Fork the [open-academy/machine-learning](https://github.com/open-academy/machine-learning) under your own GitHub account.
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/fork-01.jpg)
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/fork-02.jpg)
2. [First time only] Create a test branch on your repo forked above, which MUST be named as `assignment`.
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/create_branch-01.jpg)
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/create_branch-02.jpg)
3. [First time only] Enable GitHub Actions for your forked repository.
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/enable_actions.png)
4. [First time only] Clone the repo to your local, and switch to the `assignment` branch.
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/git_clone-01.jpg)
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/clone_checkout.png)
    ```shell
    git clone <the url just copied>
    cd machine-learning
    git checkout assignment
    ```
5. Work on the assignment locally by following the instructions provided in the Jupyter notebook. Test your code by executing the corresponding notebook cells inside the assignment.
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/executing-code-cell.png)
6. [Optional] Make sure that your code can pass local `pytest` test, by taping in the terminal : <br>
    ```shell
   pytest --nbmake <YOUR-ASSIGNMENT-JUPYTER-FILE>.ipynb
   ```

7. Commit & push the local changes to remote once you finish the assignment.
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/commit_push.png)

    ```shell
    git commit -am '<description>'
    git push
    ```

8. A GitHub Action will be triggered automatically, and the result will be shown on your forked repo at GitHub.
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/actions-1.png)
![](https://raw.githubusercontent.com/open-academy/machine-learning/main/images/actions-2.png)

Starting from your second assignment, you need only follow
Step 5-Step 8. Note that Step 6 is optional and you can skip it without any issue.

You don't need to finish all the assignments at the same time. Only the changed file will trigger the verification from GitHub after being pushed to the remote. You could also debug the code by checking the error log from the GitHub Action execution.

```{seealso}
- [How to fork a GitHub repo?](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [How to check GitHub Action result?](https://docs.github.com/en/actions/quickstart#viewing-your-workflow-results)
```

### How does this work?

The assignment is fully automated by leveraging GitHub Action. The action is defined by [assignment.yml](https://github.com/open-academy/machine-learning/blob/main/.github/workflows/assignment.yml), which handles the continuous integration workflow post a code push. It listens to the code change under `open-machine-learning-jupyter-book/assignments` path, gets the changed files, and runs unit testing against them.

`pytest` is the testing framework used for the assignments. To support unit testing for the Jupyter Notebook, `nbmake` is used as a plugin together with `pytest`.

```{seealso}
- [pytest - makes it easy to write small, readable tests, and can scale to support complex functional testing for applications and libraries.](https://docs.pytest.org/)
- [GitHub - treebeardtech/nbmake: Pytest plugin for testing notebooks](https://github.com/treebeardtech/nbmake)
```

## Development

### Environment

The environment is managed at [open-academy/assignments-binder-requirements](https://github.com/open-academy/assignments-binder-requirements) by following [this](https://discourse.jupyter.org/t/tip-speed-up-binder-launches-by-pulling-github-content-in-a-binder-link-with-nbgitpuller/922).

To update the environment,

1. go to [open-academy/assignments-binder-requirements](https://github.com/open-academy/assignments-binder-requirements) and update the `requirements.in`.
2. update the `environment.yml` to match the `requirements.in` mentioned in step 1.
