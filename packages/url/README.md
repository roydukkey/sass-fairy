# @sass-fairy/exception

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/url.svg)](https://www.npmjs.com/package/@sass-fairy/url)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides Sass functions for working with URL data, encoding, and inline SVGs.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/url@next
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/url';
```

Configure Sass options to use the functions provided by this package:

```js
const sass = require('sass');
const UrlFunctions = require('@sass-fairy/url');

sass.render({
  file: scss_filename,
  includePaths: ['node_modules'],
  functions: {
    ...UrlFunctions
  }
});
```


## Documentation

See [sass-fairy.com/api/url](http://sass-fairy.com/api/url) for more information about this package.
