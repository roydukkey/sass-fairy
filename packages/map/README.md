# @sass-fairy/map

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/map.svg)](https://www.npmjs.com/package/@sass-fairy/map)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides extended functionality for processing key/value pairs in Sass maps.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/map
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/map';
```

Configure Sass options to use the functions provided by this package:

```js
const sass = require('sass');
const MapFunctions = require('@sass-fairy/map');

sass.render({
  file: scss_filename,
  includePaths: ['node_modules'],
  functions: {
    ...MapFunctions
  }
});
```


## Documentation

See [sass-fairy.com/api/map](http://sass-fairy.com/api/map) for more information about this package.
