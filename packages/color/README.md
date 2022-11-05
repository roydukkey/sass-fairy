# @sass-fairy/color

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/color/next.svg)](https://www.npmjs.com/package/@sass-fairy/color/v/next)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides extended functionality for generating new colors from existing colors and building color themes in Sass.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/color@next
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/color';
```

Configure Sass options to use the functions provided by this package:

```js
const sass = require('sass');
const ColorFunctions = require('@sass-fairy/color');

sass.compile(filePath, {
  loadPaths: ['node_modules'],
  functions: {
    ...ColorFunctions
  }
});
```

## Documentation

See [sass-fairy.com/next/api/color](http://sass-fairy.com/next/api/color) for more information about this package.
