# Guidelines for contributing to awesome lists

Thank you for your interest in contributing to our awesome lists! Please read through this document before you submit any pull requests or issues. It will help us work together more effectively.

## How to contribute

To contribute, send us a pull request. Please review our general [Guidelines for contributing](https://github.com/ocademy-ai/machine-learning/blob/main/CONTRIBUTING.md) and [Style guide](https://github.com/ocademy-ai/machine-learning/blob/main/STYLE_GUIDE.md) before you start.

## Notes for contributors

All the records of a list are managed in several parts,

- a CSV file contains the actual content.
- a Jupyter Notebook `README.ipynb` parses the content from the CSV file and generates the output as a table.
- a Markdown file `README.md` renders the parsed records in an easier-to-access way.

### How to set up the development environment?

You need nothing but a Jupyter Notebook environment to start the development. You can either [set up the environnement in your local or use any cloud based solutions like Google Colab](https://chat.openai.com/share/7debcafb-21b4-44ca-a9cf-bddcca73047d). If you are using VSCode, please follow [this](https://chat.openai.com/share/7debcafb-21b4-44ca-a9cf-bddcca73047d).

### How to add, update or remove the content?

Please follow the below steps.

1. Edit the CSV file for your content. Feel free to use any [editor](#how-to-edit-a-csv-file) you prefer.
   1. Please NEVER update the `id` of an existing record.
   2. Please MUST [add a UUID](#how-to-add-a-uuid) as `id` for any new record.
   3. Please add or update the `createdAt` and `updatedAt` field with a ISO 8601 timestamp in `YYYY-MM-DDThh:mm:ssTZD`.
2. Set up [Jupyter Notebook environment](#how-to-set-up-the-development-environment), open the corresponding `README.ipynb` file, and run all the cells to generate the output.
3. If you want to update the output rendering logic,
   1. add new introduced Python libraries if necessary.
   2. update the rendering code in Python.
4. Use [nbconvert to sync](#how-to-use-nbconvert) the latest Jupyter Notebook with the `README.md` Markdown file.

### How to use **nbconvert**?

**nbconvert** is used to generate the final Markdown file from the Jupyter Notebook Content. You can set it up by following [this](https://chat.openai.com/share/d7a0ea4a-886f-4872-9e91-ba315ffe2c02), then simply run below command.

```bash
jupyter nbconvert README.ipynb --no-input --to markdown --TagRemovePreprocessor.enabled=True --TagRemovePreprocessor.remove_cell_tags remove_cell
```

### How to edit a CSV file?

There are [plenty of tools](https://chat.openai.com/share/50a546e4-255e-4938-81dd-c034473ed240) to edit a CSV file. If you prefer using VSCode, there are plugins like [**Rainbow CSV** and **Edit csv**(recommended)](https://chat.openai.com/share/9d1ea2b7-5799-42cb-9c74-586abc410827) to help you out.

### How to add a UUID?

You can use [any programming language or available online tools](https://chat.openai.com/share/c1d0a5fa-9ee7-4f8d-92da-13fabe2c6726) to generate a UUID. If you prefer using VSCode, you can choose [one of the many plugins or the `uuidgen` from the built-in console](https://chat.openai.com/share/59017637-56ff-4b21-b2f9-29d95d7f9df7).

### How to add an ISO timestamp?

You can always generate an ISO timestamp in [a programming way](https://chat.openai.com/share/17e938b3-a7d4-42f1-ba1f-b3186df65836). Or, 
