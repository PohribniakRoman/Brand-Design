echo "clean previous build"

rm -rf dist/

echo "Installing packages"

npm i
npm run build

rm -rf src/

mv dist/* .

git branch -D gh-pages 

git checkout -b gh-pages

git add -A

git commit -m "deploy"

git push -f origin gh-pages

git checkout main