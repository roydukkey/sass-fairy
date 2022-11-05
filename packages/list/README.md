# @sass-fairy/list

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/list.svg)](https://www.npmjs.com/package/@sass-fairy/list)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides extended functionality for accessing and modifying lists in Sass, with interfaces similar to ECMA specifications.

## Install

### Requires

* Dart Sass: `>=1.33.0`

Install the package:

```bash
npm install @sass-fairy/list
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/list';
```

Depending on your setup, you may need to configure `node_modules` as include path:

```js
const sass = require('sass');

sass.compile(filePath, {
  loadPaths: ['node_modules']
});
```

## Documentation

See [sass-fairy.com/api/list](http://sass-fairy.com/api/list) for more information about this package.
