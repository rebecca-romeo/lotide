// IMPORT assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');

const array1 = [1, 2, 3];
const array2 = [1, 2];
const array3 = [1, 2];

assertArraysEqual(array1, array2);  // => false
assertArraysEqual(array2, array3);  // => true