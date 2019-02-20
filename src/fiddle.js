const { setIn, merge, updateIn } = require('immutable');

const data = {
  a: {
    x: 5,
    y: 6
  }
}

console.log(updateIn(data, ['a'], cur => merge(cur, { x: 9, r: 8 })));
