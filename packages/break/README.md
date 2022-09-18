# @sass-fairy/break

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/break/next.svg)](https://www.npmjs.com/package/@sass-fairy/break/v/next)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides Sass mixins, functions, and variables for working with breakpoints and aids in responsive development.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/break@next
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/break';
```

Configure Sass options to use the functions provided by this package:

```js
const sass = require('sass');
const BreakFunctions = require('@sass-fairy/break');

sass.render({
  file: scss_filename,
  includePaths: ['node_modules'],
  functions: {
    ...BreakFunctions
  }
});
```


## Documentation

See [sass-fairy.com/next/api/break](http://sass-fairy.com/next/api/break) for more information about this package.
