# Guidelines for contributing to awesome lists

Thank you for your interest in contributing to our awesome lists! Please read through this document before you submit any pull requests or issues. It will help us work together more effectively.

## How to contribute

To contribute, send us a pull request. Please review our general [Guidelines for contributing](../CONTRIBUTING.md) and [Style guide](../STYLE_GUIDE.md) before you start.

## Notes for contributors

This section describes the development environment setup and workflow which should be followed when making changes. We follow a set of pre-defined [Style guide](./STYLE_GUIDE.md) for consistent code quality throughout the book and expect the same from our community contributors. You may need to check other chapters from other contributors as well for this step.

The awesome lists are structured into several parts.

- A SQLite database containing the actual data.
- A [Directus](https://directus.io/) CMS as a user-friendly interface for data management.
- To each list, there are,
  - a Jupyter Notebook `README.ipynb` queries the corresponding data from the SQLite database, and generates the output as a table.
  - a Markdown file `README.md` renders the parsed records in an easier-to-access way.

Here is the latest ERD of the database.

![Screenshot 2023-08-16 at 1 39 37 PM](https://github.com/ocademy-ai/machine-learning/assets/5424267/194ce266-8f0b-49d9-9210-d8c42d731e33)

### How to update the data?

#### STEP 1. Update the data

The built-in Directus CRM is the recommended way to update the data. But if you'd like to be in a more handy way, feel free to use any preferred [SQLite editor or through any programming language](https://shareg.pt/4iQxJ9F).

The Directus is defined by the `awesome/database/docker-compose.yml` by following the [official self-hosting guidance](https://docs.directus.io/self-hosted/quickstart.html), including,

- the login credential,
- SQLite database location,
- port,
- key and secret.

You can simply follow the below steps to launch the Directus instance on your local.

1. [Set up Docker](https://sharegpt.com/c/6C9MF91).
2. `cd machine-learning/awesome/database`.
3. `docker compose up`.
4. Go visit `http://localhost:8055`.
5. Update data through the Directus Data Studio App. Go through this official [instruction](https://docs.directus.io/app/data-model.html) if you want to learn how to use it.

**some notes**

1. please do not fill the link provided by the task in the source field of the course, instead of the official website link of the course.
2. regarding the authorCount field, if the number of authors of the course exceeds 3, please fill this field, otherwise please do not make any changes to this field
3. please do not fill the link of course in the source field of organization and user table, instead of the link of organization and author

#### STEP 2. Update the corresponding Jupyter Notebook

You need nothing but a Jupyter Notebook environment to start the development of this step. You can either [set up the environment locally or use any cloud-based solution like Google Colab](https://chat.openai.com/share/7debcafb-21b4-44ca-a9cf-bddcca73047d). If you are using VSCode, please follow [this](https://chat.openai.com/share/7debcafb-21b4-44ca-a9cf-bddcca73047d).

E.g. you are adding some new content to the courses list.

1. Launch JupyterLab or Jupyter Notebook as your IDE.
2. Open `machine-learning/awesome/lists/courses/README.ipynb`.
3. Rerun all the cells.
4. If you want to update the output rendering logic in the Notebook or `machine-learning/awesome/lists/lib`,
   1. add newly introduced Python libraries if needed,
   2. update the rendering code in Python.
   3. Go back to JupyterLab or Jupyter Notebook, restart the kernel, and rerun all the cells.
5. Check the output `README.md`.

#### STEP 3. Submit PR

Now, you are ready to submit a PR for your changes. Please make sure you have gone through above STEPs successfully first. Then,

1. submit PR, a SQLite database [diff](https://github.com/ocademy-ai/machine-learning/actions/runs/5971587037/job/16243737705) will be generated automatically by the GitHub action,
2. review the GitHub Action build log, and make sure only intended database change is included,
3. review the content of the `README.md`.

#### An example

TBD

#### STEP 4. Resolve conflicts

If there is no conflict in your pr, you can skip this step.
Otherwise, you can resolve conflicts according to the following solution.

1. go to github actions page, find your pr and copy the output of `Show database differences` and save it as a `.sql` file.
2. reset your code by `git reset --hard upstream/main`.
3. execute the `.sql` file in SQLiteStudio.
4. push your changes to the corresponding origin branch.

**Note**: Do not pass the .sql file to pr together, you can delete it after you execute the file

#### An example

1. copy sqldiff

![sqldiff](https://static-1300131294.cos.accelerate.myqcloud.com/images/awesome/sqldiff.png)

2. create .sql file
   
![.sql_file](https://static-1300131294.cos.accelerate.myqcloud.com/images/awesome/.sql_file.png)

3. execute the sql file in SQLiteStudio

![execute_sql_from_file](https://static-1300131294.cos.accelerate.myqcloud.com/images/awesome/execute_sql_from_file.png)

### How to update the database schema?

The awesome lists SQLite database schema is managed by the [Knex migration](https://knexjs.org/guide/migrations.html). The scripts are in `machine-learning/awesome/lists/`, including,

- the definition of all the awesome lists entities,
- the minimal manipulating to the Directus system tables.

To update the awesome lists data schema,

1. `cd machine-learning/awesome/`
2. `npm install`. You need to set up [node.js](https://shareg.pt/2hKgATL) environment first.
3. `cd database`
4. `knex migrate:make {VERSION_NUMBER}_{DESCRIPTION}`.
5. Update the generated migration file.
6. If a new entity is introduced, please follow [[2](./database/migrations/20230815224628_013_insert_directus_fields_constrain_for_createdAt_and_updatedAt.js), [2](./database/migrations/20230815224628_013_insert_directus_fields_constrain_for_createdAt_and_updatedAt.js)] to update Directus `directus_fields` table so that Directus could,
   1. automatically create `id` column as a `uuid`,
   2. automatically update the `createdAt` column and `updatedAt` column.
7. `knex migrate:latest`
8. Verify your changes by using Directus, a SQLite editor or any other way you prefer.
9. Update the database ERD in the [Notes for contributors](#notes-for-contributors) section if needed.
10. Submit PR, a SQLite database diff will be generated automatically by the GitHub action.
11. Review the GitHub Action build log, and make sure only intended change is included.

#### An example

TBD

## FAQ

### How to use **nbconvert**?

**nbconvert** is used to generate the final Markdown file from the Jupyter Notebook Content. You can set it up by following [this](https://chat.openai.com/share/d7a0ea4a-886f-4872-9e91-ba315ffe2c02), then simply run the below command.

```bash
jupyter nbconvert README.ipynb --no-input --to markdown --TagRemovePreprocessor.enabled=True --TagRemovePreprocessor.remove_cell_tags remove_cell
```

### How to edit a CSV file?

There are [plenty of tools](https://chat.openai.com/share/50a546e4-255e-4938-81dd-c034473ed240) to edit a CSV file. If you prefer using VSCode, there are plugins like [**Rainbow CSV** and **Edit csv**(recommended)](https://chat.openai.com/share/9d1ea2b7-5799-42cb-9c74-586abc410827) to help you out.

### How to add a UUID?

You can use [any programming language or available online tools](https://chat.openai.com/share/c1d0a5fa-9ee7-4f8d-92da-13fabe2c6726) to generate a UUID. If you prefer using VSCode, you can choose [one of the many plugins or the `uuidgen` from the built-in console](https://chat.openai.com/share/59017637-56ff-4b21-b2f9-29d95d7f9df7).

### How to add an ISO timestamp?

You can always generate an ISO timestamp in [a programming way](https://chat.openai.com/share/17e938b3-a7d4-42f1-ba1f-b3186df65836).
