rm -rf ./assignments/prerequisites
cp -r ../assignments .

jupyter-book clean -a .
jupyter-book build --all -W --keep-going . 