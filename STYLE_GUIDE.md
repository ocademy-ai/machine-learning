# Style guide

>

## In general

* Be precise, clear, engaging, pragmatic, and consistent

## Text

Use warm, inclusive language (such as “them”, even when referring to a single person). Stick to simple language, as many of the readers/contributors may not be native English speakers. You could leverage tools like [Grammarly](https://app.grammarly.com/) to help with spelling and grammar checks.

* Chapters and Sections
  * Provide an overview at the beginning of each chapter.
  * Be consistent in the structure of each section.
    * `## Your turn! 🚀` for exercises/assignments.
    * `## Self study` for further reading resources.
    * `## Acknowledgments` if needed.
    * add [bibliography](https://jupyterbook.org/en/stable/reference/cheatsheet.html?highlight=docname%20in%20docnames#citations) by using the JupyterBook built-in way.
  * Only capitalize the first letter.
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
  * Follow [this](https://opencomputinglab.github.io/SubjectMatterNotebooks/diagram/overview.html) for mermaid, wavedrom, plantuml, tikz, blockdiag.
  * Add inline [quiz](https://github.com/bonartm/quizdown-js).
* Be careful about **COPYRIGHT**.
* Always add the link to the original source.
* Style - optional
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
    * Blue as background (text is black)
      * (Try to avoid) Extra Dark：3FA3FD
      * Dark：66BFFF
      * Light：B2D9FF
      * (Try to avoid) Extra Light: CFF4FF

## Code

* Python - [PEP8](https://www.python.org/dev/peps/pep-0008/)
* Markdown - [markdownlint](https://github.com/DavidAnson/markdownlint)

## References

* Refer to [jupyterbook - References and cross-references](https://jupyterbook.org/en/stable/content/references.html) on how to add references for figures, tables and equations.

## Citations

1. Use [zoterobib](https://zbib.org/) to generate consistent keys for bibtex entries. Please keep the format to be consistent with zoterobib if you prefer any other bib management tools.

1. Add the bibtex entry to `references.bib` on the root directory. Such as below,

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

3. In the text, use the following to cite the added paper:

```markdown
{cite}`Wood.Gasthaus.Archambeau.ea.2011`
```

## Acknowledgments

Inspired by [d2l-ai](https://github.com/d2l-ai/).
