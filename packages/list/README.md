# @sass-fairy/list

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/list.svg)](https://www.npmjs.com/package/@sass-fairy/list)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides extended functionality for accessing and modifying lists in Sass, with interfaces similar to ECMA specifications.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/list
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/list';
```

Configure Sass options to use the functions provided by this package:

```js
const sass = require('sass');
const ListFunctions = require('@sass-fairy/list');

sass.render({
  file: scss_filename,
  includePaths: ['node_modules'],
  functions: {
    ...ListFunctions
  }
});
```


## Documentation

See [sass-fairy.com/api/list](http://sass-fairy.com/api/list) for more information about this package.
