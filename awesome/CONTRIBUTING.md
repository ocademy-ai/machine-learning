# Guidelines for contributing to awesome lists

Thank you for your interest in contributing to our awesome lists! Please read through this document before you submit any pull requests or issues. It will help us work together more effectively.

## How to contribute

To contribute, send us a pull request. Please review our general [Guidelines for contributing](../CONTRIBUTING.md) and [Style guide](../STYLE_GUIDE.md) before you start.

## Notes for contributors

This section describes the development environment setup and workflow which should be followed when making changes. We follow a set of pre-defined [Style guide](./STYLE_GUIDE.md) for consistent code quality throughout the book and expect the same from our community contributors. You may need to check other chapters from other contributors as well for this step.

The awesome lists are structured as several parts.

- A SQLite database containing the actual data.
- A [Directus](https://directus.io/) CMS as a user-friendly interface for data management.
- To each list, there are,
  - a Jupyter Notebook `README.ipynb` queries the corresponding data from database, and generates the output as a table.
  - a Markdown file `README.md` renders the parsed records in an easier-to-access way.

### How to update the data?

#### Update the data

The build-in Directus CRM is the recommended way to update the data. But if you'd like be in a more handy way, feel free to use any preferred [SQLite editor or through any programming language](https://shareg.pt/4iQxJ9F).

The Directus is defined by the `awesome/database/docker-compose.yml` by following the [official self-hosting guidance](https://docs.directus.io/self-hosted/quickstart.html), including,

- the login credential,
- SQLite database location,
- port,
- key and secret.

You can simply follow below steps to launch the Directus instance on your local.

1. [Set up Docker](https://sharegpt.com/c/6C9MF91).
2. `cd machine-learning/awesome/database`.
3. `docker compose up`.
4. Go visit `http://localhost:8055`.

Now you are ready to make changes to the data through the Directus Data Studio App. Go through this official [instruction](https://docs.directus.io/app/data-model.html) about how to use the web app, if you want to know better about it.

#### Update the corresponding Jupyter Notebook

You need nothing but a Jupyter Notebook environment for to start the development of this step. You can either [set up the environnement in your local or use any cloud based solutions like Google Colab](https://chat.openai.com/share/7debcafb-21b4-44ca-a9cf-bddcca73047d). If you are using VSCode, please follow [this](https://chat.openai.com/share/7debcafb-21b4-44ca-a9cf-bddcca73047d).

E.g. you are adding some new content to the courses list.

1. Launch JupyterLab or Jupyter Notebook as your IDE.
2. Open `machine-learning/awesome/lists/courses/README.ipynb`.
3. Rerun all the cells.
4. If you want to update the output rendering logic in the Notebook or `machine-learning/awesome/lists/lib`,
   1. add new introduced Python libraries if needed,
   2. update the rendering code in Python.
5. Go back to the JupyterLab or Jupyter NOtebook, restart the kernel, and rerun all the cells.
6. Use [nbconvert to sync](#how-to-use-nbconvert) the latest `README.ipynb` with the `README.md` Markdown file.

### How to update the database schema?

TBD

## FAQ

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
