# @sass-fairy/meta

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/meta/next.svg)](https://www.npmjs.com/package/@sass-fairy/meta/v/next)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides extended functionality for handling Sass’s inner workings.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/meta@next
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/meta';
```

Configure Sass options to use the functions provided by this package:

```js
const sass = require('sass');
const MetaFunctions = require('@sass-fairy/meta');

sass.compile(filePath, {
  loadPaths: ['node_modules'],
  functions: {
    ...MetaFunctions
  }
});
```

## Documentation

See [sass-fairy.com/next/api/meta](http://sass-fairy.com/next/api/meta) for more information about this package.
