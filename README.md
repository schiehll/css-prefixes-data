# css-prefixes-data

> A CLI to generate a json file with the CSS features/prefixes based on [caniuse](http://caniuse.com/) data.

# How to use

Install with `npm install -g css-prefix-data` then run it like this:

```shell
css-prefix-data --scope '> 5%' --filename 'prefixes.json'
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