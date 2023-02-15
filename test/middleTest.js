const assertArraysEqual = require('../assertArraysEqual.js')
const middle = require('../middle.js');

// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2]));

// TESTS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4])
assertArraysEqual(middle([1, 2]), [])

