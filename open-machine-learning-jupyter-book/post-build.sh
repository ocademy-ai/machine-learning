cp -R ./slides/images ./_build/html/slides/
cp -R ./assets ./_build/html
cp -R ./assets ./_build/jupyter_execute
jupyter trust ./slides/**/*.ipynb
