# Sass Fairy

Sass Fairy enhances built-in Sass modules with additional functions and adds modules for handling breakpoints and exceptions. The primary goal is to abstract common functionality which aids in the rapid development of domain specific stylesheets and modules.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<!--

## Packing / Publishing

pnpm cross-env BUILD=exception pnpm package
pnpm cross-env BUILD=exception pnpm publish-package

-->

## Core Modules

This set of modules extend the natively [built-in modules](https://sass-lang.com/documentation/modules) provided by Sass.

### [@sass-fairy/color](https://github.com/roydukkey/sass-fairy/tree/dev/v2/packages/color#readme) [![Release Version](https://img.shields.io/npm/v/@sass-fairy/color/next.svg)](https://www.npmjs.com/package/@sass-fairy/color/v/next)

### [@sass-fairy/list](https://github.com/roydukkey/sass-fairy/tree/dev/v2/packages/list#readme) [![Release Version](https://img.shields.io/npm/v/@sass-fairy/list/next.svg)](https://www.npmjs.com/package/@sass-fairy/list/v/next)

### [@sass-fairy/map](https://github.com/roydukkey/sass-fairy/tree/dev/v2/packages/map#readme) [![Release Version](https://img.shields.io/npm/v/@sass-fairy/map/next.svg)](https://www.npmjs.com/package/@sass-fairy/map/v/next)

### [@sass-fairy/math](https://github.com/roydukkey/sass-fairy/tree/dev/v2/packages/math#readme) [![Release Version](https://img.shields.io/npm/v/@sass-fairy/math/next.svg)](https://www.npmjs.com/package/@sass-fairy/math/v/next)

### [@sass-fairy/meta](https://github.com/roydukkey/sass-fairy/tree/dev/v2/packages/meta#readme) [![Release Version](https://img.shields.io/npm/v/@sass-fairy/meta/next.svg)](https://www.npmjs.com/package/@sass-fairy/meta/v/next)

### [@sass-fairy/string](https://github.com/roydukkey/sass-fairy/tree/dev/v2/packages/string#readme) [![Release Version](https://img.shields.io/npm/v/@sass-fairy/string/next.svg)](https://www.npmjs.com/package/@sass-fairy/string/v/next)

## Special Modules

This set of modules are other concepts and utilities which can be used to aid in developing other modules or designing stylesheets.

### [@sass-fairy/break](https://github.com/roydukkey/sass-fairy/tree/dev/v2/packages/break#readme) [![Release Version](https://img.shields.io/npm/v/@sass-fairy/break/next.svg)](https://www.npmjs.com/package/@sass-fairy/break/v/next)

### [@sass-fairy/exception](https://github.com/roydukkey/sass-fairy/tree/dev/v2/packages/exception#readme) [![Release Version](https://img.shields.io/npm/v/@sass-fairy/exception/next.svg)](https://www.npmjs.com/package/@sass-fairy/exception/v/next)

### [@sass-fairy/url](https://github.com/roydukkey/sass-fairy/tree/dev/v2/packages/url#readme) [![Release Version](https://img.shields.io/npm/v/@sass-fairy/url/next.svg)](https://www.npmjs.com/package/@sass-fairy/url/v/next)

## Dependency Graph

```mermaid
graph TD;
  COLOR[color] --> BREAK[break];
  EXCEPTION[exception] --> COLOR & BREAK & URL & STRING & LIST & MATH & META & MAP;
  LIST[list] --> URL & BREAK & STRING & MAP;
  MAP[map] --> BREAK;
  MATH[math] --> LIST;
  META[meta] --> LIST & MAP;
  STRING[string] --> URL & BREAK;
  URL[url] --> BREAK;
  CORE[core] -.-> EXCEPTION & META & LIST & STRING & MAP;

  style EXCEPTION color:#6574cd,stroke:#6574cd,fill:#6574cd33
  linkStyle 1,2,3,4,5,6,7,8 stroke:#6574cd
  style BREAK color:#3490dc,stroke:#3490dc,fill:#3490dc3;
  style COLOR color:#e3342f,stroke:#e3342f,fill:#e3342f33
  linkStyle 0 stroke:#e3342f
  style LIST color:#38c172,stroke:#38c172,fill:#38c17233
  linkStyle 9,10,11,12 stroke:#38c172
  style MAP color:#9561e2,stroke:#9561e2,fill:#9561e233
  linkStyle 13 stroke:#9561e2
  style MATH color:#b6a722,stroke:#b6a722,fill:#b6a72233
  linkStyle 14 stroke:#b6a722
  style META color:#f6993f,stroke:#f6993f,fill:#f6993f33
  linkStyle 15,16 stroke:#f6993f
  style STRING color:#f66d9b,stroke:#f66d9b,fill:#f66d9b33
  linkStyle 17,18 stroke:#f66d9b
  style URL color:#4dc0b5,stroke:#4dc0b5,fill:#4dc0b533
  linkStyle 19 stroke:#4dc0b5
  style CORE color:#d3d3d3,stroke:#d3d3d3,fill:#d3d3d333
  linkStyle 20,21,22 stroke:#d3d3d3
```
