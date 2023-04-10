const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TESTS

// For arrays with one or two elements, there is no middle. Return an empty array.
// middle([1]) // => []
// middle([1, 2]) // => []
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
assertArraysEqual(middle([1, 17, 3]), [17]);
assertArraysEqual(middle([1, 2, 10, 4, 5]), [10]);

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 9, 12, 6, 7, 8]), [9, 12]);

