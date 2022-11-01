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

![Mermaid Graph](https://mermaid.ink/img/pako:eNqNlLtuwyAUhl8FUSkTkYKvsYdOWTuloxdsSGL5KoKlRlHevcDBl8Ye6sHwH_98HA6YJy46LnCKr5L1N_R9ylqkn6KrO4n2-0-US8EqCIqfQvSq7Nr5A9o56w7V5V3ppmG9faubaYRiurkrWbZX3RlkDShrXlJg2Npo4m9pWLaJGYgLmXnGENDggwMuZ5rQurNEjwMetVis1K4u_YjCOCg40biuEqMcl9JWZzuKEo_4JCAhiUhMjmjLDXzIxbH9IDnwYmKDXLqhws4tfD_wLpMb5Hsmh3-4gW0LNiZyLGjszYlY-Y5OCD0QSgn10JYRqGbXHDQJIypmKMhV5Xy0ZRhher8dLY9Y7M00kCtagLYMjmaOiqNdoiTx5-qAXNFCQiO05QGgO2ITMuJJvkAauULGhB7RlgeQ5mQ6XsCLQx5OPJArXoL-GjDBjZANK7n-s5_GnmF1E43IcKq7nMkqw1n70j42qO78aAucKjkIgoeeMyVOJdMXQoPTC6vvOip4qTr5BVeFvTFev3jqT6w?type=png)

<!-- SOURCE:

https://mermaid.live/edit#pako:eNqNlLtuwyAUhl8FUSkTkYKvsYdOWTuloxdsSGL5KoKlRlHevcDBl8Ye6sHwH_98HA6YJy46LnCKr5L1N_R9ylqkn6KrO4n2-0-US8EqCIqfQvSq7Nr5A9o56w7V5V3ppmG9faubaYRiurkrWbZX3RlkDShrXlJg2Npo4m9pWLaJGYgLmXnGENDggwMuZ5rQurNEjwMetVis1K4u_YjCOCg40biuEqMcl9JWZzuKEo_4JCAhiUhMjmjLDXzIxbH9IDnwYmKDXLqhws4tfD_wLpMb5Hsmh3-4gW0LNiZyLGjszYlY-Y5OCD0QSgn10JYRqGbXHDQJIypmKMhV5Xy0ZRhher8dLY9Y7M00kCtagLYMjmaOiqNdoiTx5-qAXNFCQiO05QGgO2ITMuJJvkAauULGhB7RlgeQ5mQ6XsCLQx5OPJArXoL-GjDBjZANK7n-s5_GnmF1E43IcKq7nMkqw1n70j42qO78aAucKjkIgoeeMyVOJdMXQoPTC6vvOip4qTr5BVeFvTFev3jqT6w

graph TD
  color -- > break
  exception -- > break & color & list & map & math & meta & string & url
  list -- > break & map & string & url
  map -- > break
  math -- > list
  meta -- > list & map
  string -- > break & url
  url -- > break

  style exception color:#6574cd,stroke:#6574cd
  linkStyle 1,2,3,4,5,6,7,8 stroke:#6574cd
  style break color:#3490dc,stroke:#3490dc
  style color color:#e3342f,stroke:#e3342f
  linkStyle 0 color:#e3342f,stroke:#e3342f
  style list color:#38c172,stroke:#38c172
  linkStyle 9,10,11,12 stroke:#38c172
  style map color:#9561e2,stroke:#9561e2
  linkStyle 13 stroke:#9561e2
  style math color:#b6a722,stroke:#b6a722
  linkStyle 14 stroke:#b6a722
  style meta color:#f6993f,stroke:#f6993f
  linkStyle 15,16 stroke:#f6993f
  style string color:#f66d9b,stroke:#f66d9b
  linkStyle 17,18 stroke:#f66d9b
  style url color:#4dc0b5,stroke:#4dc0b5
  linkStyle 19 stroke:#4dc0b5
-->
