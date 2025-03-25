# @sass-fairy/color

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/color.svg)](https://www.npmjs.com/package/@sass-fairy/color)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides extended functionality for generating new colors from existing colors and building color themes in Sass.

## Install

### Requires

* Dart Sass: `>=1.79.0`

Install the package:

```bash
npm install @sass-fairy/color
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/color';
```

Depending on your setup, you may need to configure `node_modules` as include path:

```js
const sass = require('sass');

sass.compile(filePath, {
  loadPaths: ['node_modules']
});
```

## Documentation

See [sass-fairy.com/api/color](http://sass-fairy.com/api/color) for more information about this package.
