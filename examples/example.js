require('../index.js');

var data = {string: 'foo', nullElement: null, bool: false, integer: 42, array: ['Foo', 'bar']};

// Colorized
console.log(JSON.colorStringify(data, null, 2));

// Not colorized
console.log(JSON.stringify(data, null, 2));

// Colorized with replace
console.log(JSON.colorStringify(data, ['nullElement'], 2));
console.log(JSON.colorStringify(data, (key, value) => {
  if (key === 'string') {
    return undefined;
  } else if (value === null) {
    return 0;
  }

  return value;
}, 2));
