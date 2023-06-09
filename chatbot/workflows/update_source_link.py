import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from prep_data import prep_data



def main():
    # Update the source links.
    update_source_link()
    # Update the embeddings of text.
    prep_data()


def update_source_link():
    path = 'open-machine-learning-jupyter-book'
    folders = []
    md_files = []
    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
        for dir in dirs:
            if not dir.startswith('.'):
                folders.append(dir)

    for folder in folders:
        file_content = f"#### {folder}:\n"
        folder_md_files = []

        for md_file in md_files:
            if md_file.startswith(os.path.join(path, folder)):
                md_file = md_file.replace('\\', '/')
                folder_md_files.append(f"'https://github.com/open-academy/machine-learning/tree/main/{md_file}',\n")

        file_content += ''.join(folder_md_files)
        #file_content += '\n'

        if folder_md_files:
            with open(r'chatbot\vector-db-persist-directory\resources\{}.txt'.format(folder), 'w') as f:
                f.write(file_content)


if __name__ == '__main__':
    main()