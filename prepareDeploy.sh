echo "clean previous build"

rm -rf dist/

echo "Installing packages"

# npm i
npm run build

rm -rf src/

mv dist/* .