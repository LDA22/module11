#!/usr/bin/env sh
set -e

npm run build
cd dist

git init
git checkout -B gh-pages
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f https://github.com/LDA22/module11.git gh-pages

cd -
