# Guidelines for contributing

Thank you for your interest in contributing to this open-source book! We greatly value feedback and contributions from our community.

Please read through this document before you submit any pull requests or issues. It will help us work together more effectively.

## What to expect when you contribute

When you submit a pull request, our team is notified and will respond as quickly as we can. We'll do our best to work with you to ensure that your pull request adheres to our style and standards. If we merge your pull request, we might make additional edits later for style or clarity.

The source files on GitHub aren't published directly to the official website. If we merge your pull request, we'll publish your changes to the staging website as soon as we can, but they won't appear immediately or automatically.

We look forward to receiving your pull requests for:

* New content you'd like to contribute (such as new code samples or tutorials)
* Inaccuracies in the content
* Information gaps in the content that need more detail to be complete
* Typos or grammatical errors
* Suggested rewrites that improve clarity and reduce confusion

**Note:** We all write differently, and you might not like how we've written or organized something currently. We want that feedback. But please be sure that your request for a rewrite is supported by the previous criteria. If it isn't, we might decline to merge it.

## How to contribute

To contribute, send us a pull request. For small changes, such as fixing a typo or adding a link, you can use the [GitHub Edit Button](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files). For larger changes:

1. [Fork the repository](https://help.github.com/articles/fork-a-repo/).
2. In your fork, make your change in a new branch (e.g., by [`git branch`](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)) that's based on this repo's **master** branch.
3. Commit the change to your fork, using a clear and descriptive commit message.
4. [Create a pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/), answering any questions in the pull request form.

Before you send us a pull request, please be sure that:

1. You're working from the latest source on the **master** branch.
2. You check [existing open](https://github.com/open-academy/open-learning-resources/pulls), and [recently closed](https://github.com/open-academy/open-learning-resources/pulls?q=is%3Apr+is%3Aclosed), pull requests to be sure that someone else hasn't already addressed the problem.
3. You [create an issue](https://github.com/open-academy/open-learning-resources/issues/new) before working on a contribution that will take a significant amount of your time.

For contributions that will take a significant amount of time, [open a new issue](https://github.com/open-academy/open-learning-resources/issues/new) to pitch your idea before you get started. Explain the problem and describe the content you want to see added to the documentation. Let us know if you'll write it yourself or if you'd like us to help. We'll discuss your proposal with you and let you know whether we're likely to accept it. We don't want you to spend a lot of time on a contribution that might be outside the scope of the documentation or that's already in the works.

## Finding contributions to work on

If you'd like to contribute, but don't have a project in mind, look at the [open issues](https://github.com/open-academy/open-learning-resources/issues) in this repository for some ideas. Issues with the [help wanted](https://github.com/open-academy/open-learning-resources/labels/help%20wanted), [good first issue](https://github.com/open-academy/open-learning-resources/labels/good%20first%20issue) or [enhancement](https://github.com/open-academy/open-learning-resources/labels/enhancement) labels are a great place to start.

In addition to written content, we really appreciate new examples and code samples for our documentation, such as examples for different platforms or environments, and code samples in additional languages.

## Notes for contributors

This section describes the development environment setup and workflow which should be followed when modifying/porting python code and making changes to one of the machine learning frameworks in the book. We follow a set of pre-defined [style guidelines](https://github.com/open-academy/machine-learning/blob/main/STYLE_GUIDE.md) for consistent code quality throughout the book and expect the same from our community contributors. You may need to check other chapters from other contributors as well for this step.

All the chapter sections are generated by [JupyterBook](https://jupyterbook.org/en/stable/index.html). Start by cloning the repo.

Clone your repo fork to a local machine.

```bash
git clone https://github.com/<UserName>/machine-learning.git
```

> **Warning**
>
> You may see below errors that prevent you from connecting to the remote repository, or timeout errors when you do push operations, especially if you are using the HTTP protocol.
>
> ```bash
> Permission denied (publickey).
> fatal: Could not read from remote repository.
> fatal: unable to access 'https://github.com/<UserName>/machine-learning.git/': Recv failure: Connection was reset.
> fatal: unable to access 'https://github.com/<UserName>/machine-learning.git/': The requested URL returned error : 403.
> ```
>
> Solution:
>
> 1. Use [SSH protocol](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to access the repo.
> 2. Try more times in case the push operation fails occasionally.

### Install Python & Conda

Before you start, you will need [Python](https://wiki.python.org/moin/BeginnersGuide/Download) and [Conda](https://docs.anaconda.com/anaconda/install/) on your computer.

Add the following paths(depending on your OS) to the environment variable `PATH`` if needed. To Windows,

```bash
D:\Python\Python310\Scripts\
D:\Python\Python310\
D:\anaconda3\Scripts
```

### Install Jupyter Book

Follow the [Jupyter Book](https://jupyterbook.org/en/stable/start/overview.html) official guidance to install the latest version.

### Install draw.io

[draw.io](https://www.draw.io/) is needed for generating draw.io-based diagrams in build time. Install the [draw.io desktop application](https://github.com/jgraph/drawio-desktop/releases) on your local machine. By default, the draw.io execution is correctly located at the platform-appropriate path:

* Windows: `C:\Program Files\draw.io\draw.io.exe` (Attention: Don't change the installtion path.)
* Linux: `/opt/drawio/drawio` or `/opt/draw.io/drawio` (older versions)
* macOS: `/Applications/draw.io.app/Contents/MacOS/draw.io`.

Mostly, you don't need to do anything here. The executable will be picked up by [sphinxcontrib-drawio](https://pypi.org/project/sphinxcontrib-drawio/) automatically.

### Initialize the environment

Clone the source code from remote through your preferred protocol.

```bash
# through HTTP
git clone https://github.com/open-academy/machine-learning.git
```

Move to the working directory.

```bash
cd machine-learning/open-machine-learning-jupyter-book/
```

Initialize the Conda env.

```bash
# first time setup
conda env create -f environment.yml
# or update
conda env update -f environment.yml
```

To Mac,

> **Warning**
>
> You may see below Tensorflow installation failures, especially on the ARM-based M1 Mac.
>
> ```bash
> ERROR: Could not find a version that satisfies the requirement tensorflow (from versions: none)
> ERROR: No matching distribution found for tensorflow
> ```
>
> Solution:
>
> 1. Comment out Tensorflow in **environment.yml**.
> 2. Follow Apple's [official documentation](https://developer.apple.com/metal/tensorflow-plugin/) to install the Tensorflow.
> 3. Run `conda env update -f environment.yml` again to install the remaining dependencies.
> 4. Optional - try to uncomment the Tensorflow in **environment.yml**.

> **Warning**
>
> You may see below error when you have trouble access GitHub.
>
> ```bash
> error: RPC failed; curl 56 LibreSSL SSL_read: error:02FFF03C:system library:func(4095):Operation timed out, errno 60
> fatal: expected flush after ref listing
> ```
>
> Solution:
>
> **Change your network.** In order to proceed smoothly later, hope you can solve this problem here.

To Windows,

> **Warning**
>
> You may see below HTTP error first.
>
> ```bash
> An HTTP error occurred when trying to retrieve this URL.
> HTTP errors are often intermittent, and a simple retry will get you on your way.
> ```
>
> Create `.condarc` conda configuration file(This file should):
>
> ```bash
> conda config --set show_channel_urls yes
> ```
>
> This file is in your user directory by default,for example:
>
> ```C:\Users\gouha\.gitconfig```
>
> Delete initial content in `.condarc`, the add the following content to `.condarc`.
>
> ```
> channels:
>   - defaults
> show_channel_urls: true
> default_channels:
>   - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
>   - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
>   - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
> custom_channels:
>   conda-forge: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
>   msys2: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
>   bioconda: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
>   menpo: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
>   pytorch: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
>   simpleitk: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
> ```

> **Warning**
>
> You may see below error when you have trouble access GitHub.
>
> ```bash
> error: RPC failed; curl 56 LibreSSL SSL_read: error:02FFF03C:system library:func(4095):Operation timed out, errno 60
> fatal: expected flush after ref listing
> ```
>
> Solution:
>
> **Change your network.** In order to proceed smoothly later, hope you can solve this problem here.

> **Warning**
> 
> You may encounter download or run failures due to **lack of administrator privileges**.
> 
> ```bash
> error: Could not install packages due to an OSError: [WinError 5] Access denied.
> Consider using the `--user` option or check the permissions.
> ```
> 
> Solution:
> 
> Turn off administrator privileges by using the **command prompt**.
> 
>  1. Run cmd as Administrator.
>
>  2. Enter the command `NET USER administrator /active:no`and run.

> **Warning**
> 
> When you are **building the book**, you may encounter an error when running terminal (like **powershell**).
> 
> ```bash
> error: Failed building wheel for jupyter-nbextensions-configurator 
>        or Unable to load file: C:\Users\87897\Documents\WindowsPowerShell\profile.ps1
> ```
> 
> Solution:
> 
> Enter the command: `set-ExecutionPolicy RemoteSigned`, then enter `Y`.
> 
> Tips: You can use the command `get-ExecutionPolicy`  to check , and if `RemoteSigned` appears, it means the modification is successful.


### Activate the Conda environment

```bash
conda activate open-machine-learning-jupyter-book
```

### Build the book

```bash
# official guidance - https://jupyterbook.org/en/stable/start/build.html

# Windows
jupyter-book build .

# Mac
# if you are using bash
bash ./build.sh
# or you can rebuild everything
bash ./build-force-all.sh
```

Then you should be able to follow the build success message to view the book locally.

To Mac,

> **Warning**
>
> You may encouter following problem when you program on ARM-based M1 Mac.
>
> ```bash
> OSError: no library called "cairo-2" was found
> no library called "cairo" was found
> no library called "libcairo-2" was found
> ```
>
> Solution:
>
> 1. Install [Homebrew](https://brew.sh/).
> 2. Fetch Homebrew sources:
>
> ```bash
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
> ```bash
> 3. Install the below missing dependencies through Homebrew:
> 
> ```bash
> brew install cairo pango gdk-pixbuf libxml2 libxslt libffi
> ```
>
> 4. Find out the path of `cairo`, `glib` and `pango` installation, and export them to DYLD_LIBRARY_PATH:
>
> ```bash
> # for example
> export DYLD_LIBRARY_PATH=/opt/homebrew/Cellar/cairo/1.16.0_5/lib/:/opt/homebrew/Cellar/pango/1.50.9/lib/:/opt/homebrew/Cellar/glib/2.72.3_1/lib/
> ```
>
> **How to find out above pathes?** Here is an example of cairo:
>
> * Run the command `which brew`.
> * If the response is `/opt/homebrew/bin/brew`, now we get the Homebrew root path as '/opt/homebrew/'.(**The result may depend on your OS!!**)
> * Check if `cairo`, `glib`, `pango` are existing in `/opt/homebrew/Cellar`.
> * Find out the lib path for above libraries, such as `/opt/homebrew/Cellar/cairo/1.16.0_5/lib`.(**The result may depend on your OS!! Remind again.**)
>
> 5. Rerun `jupyter-book build .`
> 6. Run `pip uninstall xcffib` if error still exists, and then try again.

To Windows,

> **Warning**
>
> You may encouter following problem when you program.
>
> ```bash
> OSError: no library called "cairo-2" was found
> no library called "cairo" was found
> no library called "libcairo-2" was found
> ```
>
> Solution:
>
> Download [GTK3](https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer/releases).
>
> Run the following command.
>
> ```bash
> pip uninstall xcffib
> ```
>
> Restart the terminal and build again.

### Build the slides (optional)

The slides are implemented as notebooks in `slides/`, which is powered by [RISE](https://github.com/damianavila/RISE).

If you want to edit or preview the slides locally, you need to use [Jupyter Notebook](https://jupyter.org/). Once you use Jupyter Notebook/JupyterLab to load the project, the slide will be launched in live mode after you open any corresponding notebook.

```bash
# Install javascript and css files
jupyter contrib nbextension install --user

# Enabling extensions
jupyter nbextension enable init_cell/main

# Launch the notebook
jupyter notebook
```

> **Warning**
>
> Please make sure the Jupyter Notebook is running in trusted mode, and the [init_cell](https://jupyter-contrib-nbextensions.readthedocs.io/en/latest/nbextensions/init_cell/README.html) is configured for the first cell of slide notebook. So that the first cell will be automatically executed to load the CSS.

### Deployment

This repo maintains two active branches.

1. `main` is the development branch, and it is automatically deployed to Netlify as a preview site. Please reach out to the [Admin team](https://github.com/orgs/open-academy/teams/admin) if you need to access it for testing.
2. `release` is the production branch hosting the public available site. The merge from `main` to `release` is manually handled today.

## Code of conduct

See the [code of conduct](https://github.com/open-academy/machine-learning/blob/main/CODE_OF_CONDUCT.md) for more information.

## Licensing

See the LICENSE files([code](https://github.com/open-academy/machine-learning/blob/master/LICENSE-CODE), [text](https://github.com/open-academy/machine-learning/blob/master/LICENSE-TEXT)) for this project's licensing. We will ask you to confirm the licensing of your contribution. We may ask you to sign a [Contributor License Agreement (CLA)](http://en.wikipedia.org/wiki/Contributor_License_Agreement) for larger changes.