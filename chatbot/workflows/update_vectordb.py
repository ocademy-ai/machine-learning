import os

#path = 'open-machine-learning-jupyter-book'
#folders = []
#md_files = []
#for root, dirs, files in os.walk(path):
#    for file in files:
#        if file.endswith('.md'):
#            md_files.append(os.path.join(root, file))
#    for dir in dirs:
#        if not dir.startswith('.'):
#            folders.append(dir)

#with open("md_files.txt", 'w') as f:
#    for folder in folders:
#        f.write(f'#### {folder}:\n')
#        for md_file in md_files:
#            if md_file.startswith(os.path.join(path, folder)):
#                f.write(f'{md_file}\n')
#        f.write('\n')



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

with open(r'chatbot\vector-db-persist-directory\resources\md_files.txt', 'w') as f:
    for folder in folders:
        f.write(f"#### {folder}:\n")
        for md_file in md_files:
            if md_file.startswith(os.path.join(path, folder)):
                md_file = md_file.replace('\\', '/')
                f.write(f"'https://github.com/open-academy/machine-learning/tree/main/{md_file}',\n")
        f.write('\n')