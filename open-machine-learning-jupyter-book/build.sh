rm -rf ./assignments/prerequisites
cp -r ../assignments .

jupyter-book build --all -W --keep-going . 