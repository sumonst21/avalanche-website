const path = require(`path`);

const sass2css = require(`../lib/sass2css.js`);

module.exports = (packageName) => {
  const packagePath = path.join(process.cwd(), `avalanche`, `packages`, packageName);
  const inputFile = path.join(packagePath, `scss`, `index.scss`);
  const outputFile = path.join(process.cwd(), `dist`, `packages`, packageName, `css`, `index.css`);

  sass2css(
    inputFile,
    outputFile,
    {},
    false,
    [path.join(process.cwd(), `avalanche/packages/${packageName}/scss/sub/dir/dir`)]
  );
};
