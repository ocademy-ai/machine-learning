# Displaying airport data

You have been provided a [database](../../../assets/airports.db) built on [SQLite](https://sqlite.org/index.html) which contains information about airports. The schema is displayed below. You will use the [SQLite extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite&WT.mc_id=academic-77958-bethanycheum) in [Visual Studio Code](https://code.visualstudio.com?WT.mc_id=academic-77958-bethanycheum) to display information about different cities' airports.

## Instructions

To get started with the assignment, you'll need to perform a couple of steps. You'll need to install a bit of tooling and download the sample database.

### Setup your system

You can use Visual Studio Code and the SQLite extension to interact with the database.

1. Navigate to [code.visualstudio.com](https://code.visualstudio.com?WT.mc_id=academic-77958-bethanycheum) and follow the instructions to install Visual Studio Code
1. Install the [SQLite extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite&WT.mc_id=academic-77958-bethanycheum) extension as instructed on the Marketplace page

### Download and open the database

Next, you will download and open the database.

1. Download the database file [airports.db](../../../assets/airports.db) and save it to a directory
2. Open Visual Studio Code
3. Open the database in the SQLite extension by selecting **Ctl-Shift-P** (or **Cmd-Shift-P** on a Mac) and typing `SQLite: Open database`
4. Select **Choose database from file** and open the **airports.db** file you downloaded previously
5. After opening the database (you won't see an update on the screen), create a new query window by selecting **Ctl-Shift-P** (or **Cmd-Shift-P** on a Mac) and typing `SQLite: New query`

Once open, the new query window can be used to run SQL statements against the database. You can use the command **Ctl-Shift-Q** (or **Cmd-Shift-Q** on a Mac) to run queries against the database.

```{note}
For more information about the SQLite extension, you can consult the [documentation](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite&WT.mc_id=academic-77958-bethanycheum)
```

## Database schema

A database's schema is its table design and structure. The **airports** database has two tables, `cities`, which contains a list of cities in the United Kingdom and Ireland, and `airports`, which contains the list of all airports. Because some cities may have multiple airports, two tables were created to store the information. In this exercise, you will use joins to display information for different cities.

| Cities           |
| ---------------- |
| id (PK, integer) |
| city (text)      |
| country (text)   |

| Airports                         |
| -------------------------------- |
| id (PK, integer)                 |
| name (text)                      |
| code (text)                      |
| city_id (FK to id in **Cities**) |

## Assignment

Create queries to return the following information:

1. all city names in the `Cities` table
1. all cities in Ireland in the `Cities` table
1. all airport names with their city and country
1. all airports in London, United Kingdom

## Rubric

| Exemplary | Adequate | Needs Improvement |
| --------- | -------- | ----------------- |

## Acknowledgments

Thanks to Microsoft for creating the open-source course [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners). It inspires the majority of the content in this chapter.
