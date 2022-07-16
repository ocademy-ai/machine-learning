# machine-learning

## Question Bank
- https://docs.moodle.org/400/en/Question_bank
- https://moodle3.grok.lsu.edu/Article.aspx?articleid=20068
- https://www.concordia.ca/ctl/digital-teaching/using-moodle/quizzes/bulk-upload.html

## Contribution

### Notes for contributors

#### Install Python & Conda

Before you start, you will need [Python](https://wiki.python.org/moin/BeginnersGuide/Download) and [Conda](https://docs.anaconda.com/anaconda/install/) on your computer.

#### Install draw.io

[draw.io](https://www.draw.io/) is needed for generating draw.io-based diagrams in build time. Install the [draw.io desktop application](https://github.com/jgraph/drawio-desktop/releases) on your local machine. By default the draw.io execution is correctly located at the platform-appropriate path:

- Windows: `C:\Program Files\draw.io\draw.io.exe`
- Linux: `/opt/drawio/drawio` or `/opt/draw.io/drawio` (older versions)
- macOS: `/Applications/draw.io.app/Contents/MacOS/draw.io`.

Mostly, you don't need to do anything here. The executable will be picked up by [sphinxcontrib-drawio](https://pypi.org/project/sphinxcontrib-drawio/) automatically.

#### Initialize the environment

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

Activate the Conda environment.

```bash
conda activate open-machine-learning-jupyter-book
```

Build the book after you make any changes.

```bash
# official guidance - https://jupyterbook.org/en/stable/start/build.html
jupyter-book build . 
```

## Help wanted

If you would like to translate all or part of the curriculum, please follow our [Translations](https://github.com/open-academy/machine-learning/blob/main/TRANSLATIONS.md) guide.
