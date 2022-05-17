# @sass-fairy/meta

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/meta.svg)](https://www.npmjs.com/package/@sass-fairy/meta)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides extended functionality for handling Sass’s inner workings.

## Install

### Requires

* Dart Sass: `>=1.23.0`

Install the package:

```bash
npm install @sass-fairy/meta
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/meta';
```

Depending on your setup, you may need to configure `node_modules` as include path:

```js
const sass = require('sass');

sass.render({
  file: scss_filename,
  includePaths: ['node_modules']
});
```


## Documentation

See [sass-fairy.com/api/meta](http://sass-fairy.com/api/meta) for more information about this package.
