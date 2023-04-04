# Contribute by translating lessons

We welcome translations for the lessons in this curriculum! Your contribution will make our material accessible to more people around the world.

### Guidelines

Each lesson folder and lesson introduction folder contain folders with the translated markdown files. You can find them by looking for the two-letter language abbreviation following the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standard. For example, the Chinese files are located in the `zh` folder and the French files are located in the `fr` folder.

Please note that you should not translate any code in the code sample files. The only things that should be translated are the README files, assignments, and quizzes. To make sure we maintain the quality of our translated content, please do not use machine translation. We will verify translations via the community, so please only volunteer for translations in languages where you are proficient.

The translated files should follow this naming convention, e.g.:

- README.[language].md
- assignment.[language].md

For example, if you are translating the README file for Chinese speakers, the file should be named `README.zh.md`. Similarly, if you are translating the assignments for French speakers, the file should be named `assignment.fr.md`.

### Quizzes

To translate the quizzes, add a topic to the [GitHub Issues](https://github.com/open-academy/machine-learning/issues). Please make sure to use the proper naming convention (zh.json, fr.json, etc.). However, please do not localize the words 'true' or 'false'.

After adding your translation, add your language code to the dropdown in the corresponding file. Edit the translations index.js file to add your language.

Finally, please edit ALL the links in your translated `README.md` files to point directly to your translated quiz. For example, if the original quiz link is "https://github", and you are translating the quiz for Indonesian speakers, the new link should be "https://github?loc=id".

### Thank you

We truly appreciate your efforts! With your help, we can make our material more widely accessible and help people around the world learn more about Data Science, Machine Learning, and Deep Learning.