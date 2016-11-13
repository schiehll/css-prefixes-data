# css-prefixes-data

> A CLI to generate a json file with the CSS features/prefixes based on [caniuse](http://caniuse.com/) data.

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