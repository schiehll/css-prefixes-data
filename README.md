# css-prefixes-data

> A CLI to generate a json file with the CSS features/prefixes based on [caniuse](http://caniuse.com/) data.

[![version](https://img.shields.io/npm/v/css-prefixes-data.svg?style=flat-square)](http://npm.im/css-prefixes-data)
[![MIT License](https://img.shields.io/npm/l/css-prefixes-data.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# Usage

Install with `npm install -g css-prefix-data` then run it like this:

```shell
Usage: css-prefixes-data [options]

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -s, --scope <browser scope>  The browser scope
    -f, --filename [filename]    The filename

```

It will generate the file in the current working directory.

# The data

The data in the file will look like this:

```js
[
  {
    "name":"columns",
    "prefixes":["-webkit-"]
  },
  {
    "name":"flex",
    "prefixes":["-webkit-", "-ms-"]
  },
  ...
]
```