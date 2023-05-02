# Style guide

## In general

* Be precise, clear, engaging, pragmatic, and consistent

## Text

Use warm, inclusive language (such as “them”, even when referring to a single person). Stick to simple language, as many of the readers/contributors may not be native English speakers. You could leverage tools like [Grammarly](https://app.grammarly.com/) to help with spelling and grammar checks.

* Chapters and Sections
  * Provide an overview at the beginning of each chapter.
  * Be consistent in the structure of each section.
    * Add a copyright section at the beginning wrapped by `<detail>` if needed. E.g. <details>
      <summary><b>LICENSE</b></summary>

      MIT License

      ...
      </details>
    * `## Your turn! 🚀` for exercises/assignments.
    * `## Self study` for further reading resources.
    * `## Acknowledgments` if needed.
    * Add [bibliography](https://jupyterbook.org/en/stable/reference/cheatsheet.html?highlight=docname%20in%20docnames#citations) by using the JupyterBook built-in way.
  * Only capitalize the first letter.
* Don't add the URL as plain text. Instead, add it as a [preview](https://link-previews.stephanbogner.de/).
* Quotes - use double quotes
* Symbol descriptions - timestep t（not t timestep）
* Use numerals when they are explaining or part of code or math.
* Acceptable abbreviations
  * AI, MLP, CNN, RNN, GRU, LSTM, model names (e.g., ELMo, GPT, BERT)
  * We spell out full names in some cases to be clear (e.g., NLP -> natural language processing)

## Math

* Be consistent in [math notation](./NOTATION.md)
* Place punctuations within equations if necessary
  * e.g., comma and period
* Assignment symbol
  * \leftarrow
* Use mathematical numerals only when they are part of math: "$x$ is either $1$ or $-1$", "the greatest common divisor of $12$ and $18$ is $6$".
* We do not use "thousands separator" (since different publishing houses have different styles). E.g., 10,000 should be written as 10000 in the source markdown files.

## Figure

* Software
  * [draw.io](https://app.diagrams.net/), add/edit the `.draw.io` file in the `./drawio` folder.
    * [Example-diagrams](https://www.diagrams.net/example-diagrams) as a quick reference.
  * Follow [this](https://opencomputinglab.github.io/SubjectMatterNotebooks/diagram/overview.html) for mermaid, wavedrom, plantuml, tikz, blockdiag.
  * Add inline [quiz](https://github.com/bonartm/quizdown-js).
* Be careful about **COPYRIGHT**. Add the reference inline by using the [markdown figure format](https://jupyterbook.org/en/stable/content/figures.html#markdown-figures).
* Always add the link to the original source.
* Style(optional)
  * Size：
    * Horizontal：<= 400 pixels  (limited by page width)
    * Vertical：<= 200 pixels (exceptions may be made)
  * Thickness：
    * StickArrow
    * 1pt
    * arrowhead size: 50%
  * Font：
    * Arial (for text), STIXGeneral (for math), 9pt（subscripts/superscripts：6pt）
    * Do not italicize numbers or parentheses in subscripts or superscripts
  * Color：
White as the background (text is black)
  * (Try to avoid) Extra Dark：#3FA3FD
  * Dark：#66BFFF
  * Light：#B2D9FF
  * (Try to avoid) Extra Light: #CFF4FF

One way to add a figure is to use `figure-md` as below:

```text
:::{figure-md} figure_label
<img src="path/to/your/figure/file" width="90%" class="bg-white mb-1">

Caption for the figure (markdown is supported for hyperlinks, references, etc.)
:::
```

The other way is to use `{figure}`. For example:

<pre>
```{figure} path/to/your/figure/file
---
name: 'figure_label'
width: 90%
---
Caption for the figure (markdown is supported for hyperlinks, references, etc.)
```
</pre>

Typically, we set the width to `90%`. However, for some smaller figures, you could change that to other values such as `50%` or `30%`.

## Code

* Python
  * Please use [Black](https://github.com/psf/black) as the default lint formatter. You can [format the active cell on VScode](https://stackoverflow.com/questions/65747615/how-to-format-jupyter-notebook-in-vscode) by using [Black plugin](https://dev.to/adamlombard/how-to-use-the-black-python-code-formatter-in-vscode-3lo0).
  * Please follow the [PEP8](https://www.python.org/dev/peps/pep-0008/) where the lint static checking does not cover, e.g. the naming convention.
* Markdown - please refer to [markdownlint](https://github.com/DavidAnson/markdownlint), where you can find the command line tool and VSCode plugin.

## Data

If sample data is needed for the book or assignments, first try to use built-in ones from [sklearn](https://scikit-learn.org/stable/datasets.html) or [tensorflow](https://www.tensorflow.org/datasets) if possible.

To introduce your own dataset, put the data file into the `./assets/data` folder, then it could be referred to by a relative path. You can also add Python code, binary, and any other type of static asserts.

## Slides

The project's slide source code is hosted in `open-machine-learning-jupyter-book/slides/`. If you want to add or edit any slide, please refer to the demo and example code [here](https://github.com/damianavila/RISE). The slideshow functionality is powered by [reveal.js](https://revealjs.com/), and you could find the detailed documentation there.

## References

* Refer to [jupyterbook - References and cross-references](https://jupyterbook.org/en/stable/content/references.html) on how to add references for figures, tables and equations.

## Citations

1\. Use [zoterobib](https://zbib.org/) to generate consistent keys for bibtex entries. Please keep the format to be consistent with zoterobib if you prefer any other bib management tools.

2\. Add the bibtex entry to `references.bib` on the root directory. Such as below,

```bibtext
@article{wood2011sequence,
  title={The sequence memoizer},
  author={Wood, Frank and Gasthaus, Jan and Archambeau, C{\'e}dric and James, Lancelot and Teh, Yee Whye},
  journal={Communications of the ACM},
  volume={54},
  number={2},
  pages={91--98},
  year={2011},
  publisher={ACM}
}
```

3\. In the text, use the following to cite the added paper:

```markdown
{cite}`Wood.Gasthaus.Archambeau.ea.2011`
```

## Appendix

* [How to give attribution? | Creative Commons](https://creativecommons.org/use-remix/attribution/)

## HTML snippets

1\. Put the folder containing your HTML/CSS/Javascript files under `assets/html/`. For example:

```output
assets/
    html/
        my-html-folder/
            js/      
            css/
            index.html
```

2\. To include the `index.html` file as an HTML `iframe` in the Markdown file, simply use:

```html
<p style="text-align: center;">
  <iframe src="../assets/html/my-html-folder/my-file.html" width="105%" height="700px;" style="border:none;"></iframe>
  Caption of the iframe. <a href="source/of/the/iframe">[source]</a>
</p>
```

Note that we may need to set the `width` to `105%` so that all content of `index.html` will be rendered correctly. Also, the `height` has to be set manually.

## YouTube video

To include a YouTube video:

```html
<div class="yt-container">
  <iframe src="https://www.youtube.com/embed/YUyec4eCEiY" allowfullscreen></iframe>
</div>
```

Here `YUyec4eCEiY` is the YouTube `id` of the video, and you should change it accordingly.

How does it work? In fact, the `class="yt-container"` is set to use the CSS style defined in `open-machine-learning-jupyter-book/_static/youtube.css`. This `youtube.css` file will be included in every generated HTML file of Jupyter Book.

## Emoji

Emojis should be put on the right place, used with consistency, coherence and uniformity.

The list of all emojis can be found here: 
- [HTML](https://www.quackit.com/character_sets/emoji/emoji_v3.0/unicode_emoji_v3.0_characters_all.cfm)
- [Markdown](https://gist.github.com/rxaviers/7360908)

| Emoji | Use case                                      | Code HTML                              | Code Markdown                       | Rendered as                      |
|-------|-----------------------------------------------|----------------------------------------|-------------------------------------|----------------------------------|
| 🔗     | when referring to source of figures or texts  | ```[&#x1F517;source](your/url/here)``` | ```[:link:source](your/url/here)``` | [&#x1F517;source](your/url/here) |
| 🚀     | JupyterBook - Your turn (assignments) | ```Your turn! &#x1F680;```             |   ```Your turn! :rocket:```     | Your turn! 🚀                    |


## Table

Whenever possible, use Table instead of Screenshot/Figures.

How to generate tables:
- [Markdown](https://www.tablesgenerator.com/markdown_tables)
- [HTML](https://www.tablesgenerator.com/html_tables)

## Acknowledgments

Inspired by [d2l-ai](https://github.com/d2l-ai/).
