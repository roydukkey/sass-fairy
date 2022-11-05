# @sass-fairy/string

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/string/next.svg)](https://www.npmjs.com/package/@sass-fairy/string/v/next)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides extended functionality for processing strings in Sass, with interfaces similar to ECMA specifications.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/string@next
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/string';
```

Configure Sass options to use the functions provided by this package:

```js
const sass = require('sass');
const StringFunctions = require('@sass-fairy/string');

sass.compile(filePath, {
  loadPaths: ['node_modules'],
  functions: {
    ...StringFunctions
  }
});
```

## Documentation

See [sass-fairy.com/next/api/string](http://sass-fairy.com/next/api/string) for more information about this package.
