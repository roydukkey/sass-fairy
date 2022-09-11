# @sass-fairy/math

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/math.svg)](https://www.npmjs.com/package/@sass-fairy/math)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides extended functionality for working with numbers in Sass.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/math@next
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/math';
```

Configure Sass options to use the functions provided by this package:

```js
const sass = require('sass');
const MathFunctions = require('@sass-fairy/math');

sass.render({
  file: scss_filename,
  includePaths: ['node_modules'],
  functions: {
    ...MathFunctions
  }
});
```


## Documentation

See [sass-fairy.com/api/math](http://sass-fairy.com/api/math) for more information about this package.
