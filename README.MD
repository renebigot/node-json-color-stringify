# node-json-color-stringify

Add a colorized version of `JSON.stringify` to JSON for console (Compatible with Windows and UNIX like systems).

## Features

![screenshot macOS](https://raw.githubusercontent.com/renebigot/node-json-color-stringify/master/img/mac.png)

`node-json-color-stringify` offers an alternative method to replace JSON.stringify method by a new one that highlights JSON content for console output.


## Install

`npm install --save node-json-color-stringify`


## Usage

Colorized version is available as `JSON.colorStringify`:

```javascript
require('node-json-color-stringify');
console.log(JSON.colorStringify({string: 'foo', nullElement: null, bool: false, integer: 42, array: ['Foo', 'bar']}));
```

Import `node-json-color-stringify` and use `JSON.stringify` as usual for non-colorized object output:

```javascript
require('node-json-color-stringify');
console.log(JSON.stringify({string: 'foo', nullElement: null, bool: false, integer: 42, array: ['Foo', 'bar']}));
```

Replace array or function are also available:

```javascript
require('node-json-color-stringify');
console.log(JSON.colorStringify(data, ['nullElement'], 2));
console.log(JSON.colorStringify(data, (key, value) => {
  if (key === 'string') {
    return undefined;
  } else if (value === null) {
    return 0; 
  }
  return value;
}, 2));

```

## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests.

## Author

René BIGOT

## License

- **MIT** : http://opensource.org/licenses/MIT
