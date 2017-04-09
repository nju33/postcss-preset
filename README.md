# Postcss preset

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Preset for nju33.

## Install

```bash
yarn add -D @nju33/postcss-preset
```

```js
postcss([
  ...preset(),
  /* other plugins */
])
```

## Plugins

```js
"dependencies": {
  "autoprefixer": "^6.7.7",
  "css-mqpacker": "^5.0.1",
  "cssnano": "^3.10.0",
  "postcss-animation": "^0.0.12",
  "postcss-assets": "^4.1.0",
  "postcss-blokk": "^0.0.2",
  "postcss-brand-colors": "^0.4.0",
  "postcss-colorblind": "^1.0.0",
  "postcss-easings": "^0.3.0",
  "postcss-flexbugs-fixes": "^2.1.0",
  "postcss-focus": "^1.0.0",
  "postcss-font-magician": "^1.6.1",
  "postcss-modules": "^0.6.4",
  "postcss-octicon": "^0.0.1",
  "postcss-resemble-image": "^2.1.1",
  "postcss-sprites": "^4.2.0",
  "postcss-will-change": "^1.1.0",
  "postcss-yu-gothic": "^0.0.5"
},
```

## Options

```js
const default = {
  // To specify the root path
  // (postcssAssets.basePath, postcssAssets.baseURL)
  bases: ['.', '/'],
  // That of `autoprefixer.browsers`
  browsers: ['> 3%', 'last 2 versions'],
  // Setting `postcssFontMagician.variants`
  variants: {},
  // Specify project image directory
  // (`postcssAssets.loadPaths`)
  imagePaths: [],
  // Specify whether to modularize
  // (`postcssModules`)
  module: false, // or `({fileName, json}) => {}`
  // Minify if it is true
  // (`cssMqpacker` & `cssnano`)
  minify: false // or `true`
}
```

## Lisence

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
