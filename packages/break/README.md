# @sass-fairy/break

<a href="https://sass-fairy.com/"><img src="https://sass-fairy.com/img/logo.svg" alt="Sass Fairy Logo" width="150" align="right" /></a>

[![Release Version](https://img.shields.io/npm/v/@sass-fairy/break.svg)](https://www.npmjs.com/package/@sass-fairy/break)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides Sass mixins, functions, and variables for working with breakpoints and aids in responsive development.

## Install

### Requires

* Dart Sass: `^1.52.0`

Install the package:

```bash
npm install @sass-fairy/break
```

Use the package like any other Sass module:

```scss
@use '@sass-fairy/break';
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

See [sass-fairy.com/api/break](http://sass-fairy.com/api/break) for more information about this package.
