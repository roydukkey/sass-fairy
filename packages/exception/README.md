# @sass-fairy/exception

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/exception/next.svg)](https://www.npmjs.com/package/@sass-fairy/exception/v/next)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides Sass functions to standardize exception messages and assist with common validation.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/exception@next
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/exception';
```

Configure Sass options to use the functions provided by this package:

```js
const sass = require('sass');
const ExceptionFunctions = require('@sass-fairy/exception');

sass.render({
  file: scss_filename,
  includePaths: ['node_modules'],
  functions: {
    ...ExceptionFunctions
  }
});
```


## Documentation

See [sass-fairy.com/next/api/exception](http://sass-fairy.com/next/api/exception) for more information about this package.
