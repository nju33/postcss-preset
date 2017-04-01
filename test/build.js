const fs = require('fs');
const postcss = require('postcss');
const preset = require('..').default;

const css = fs.readFileSync(`${__dirname}/index.css`, 'utf-8');

postcss([
  ...preset()
])
  .process(css, {from: `${__dirname}/index.css`})
  .then(result => console.log(result.css));
