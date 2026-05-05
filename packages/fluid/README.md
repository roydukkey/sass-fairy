# @sass-fairy/fluid

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/fluid.svg)](https://www.npmjs.com/package/@sass-fairy/fluid)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides Sass utilities to assist in creating completely native fluid typography scales and singular responsive clamps

## Install

### Requires

* Dart Sass: `>=1.95.0`

Install the package:

```bash
npm install @sass-fairy/fluid
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/fluid';
```

Depending on your setup, you may need to configure `node_modules` as include path:

```js
const sass = require('sass');

sass.compile(filePath, {
  loadPaths: ['node_modules']
});
```

## Documentation

See [sass-fairy.com/api/fluid](http://sass-fairy.com/api/fluid) for more information about this package.
