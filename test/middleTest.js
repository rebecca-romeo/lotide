const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TESTS

// For arrays with one or two elements, there is no middle. Return an empty array.
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// // For arrays with odd number of elements, an array containing a single middle element should be returned.
// assertArraysEqual(middle([1, 17, 3]), [17]);

// // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// assertArraysEqual(middle([1, 17, 18, 4]), [17, 18]);


describe('#middle', () => {
  // empty array
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  // length = 2
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  // length = odd
  it('returns [17] for [1, 17, 3]', () => {
    assert.deepEqual(middle([1, 17, 3]), [17]);
  });

  // length = even
  it('returns [17, 18] for [1, 17, 18, 2]', () => {
    assert.deepEqual(middle([1, 17, 18, 2]), [17, 18]);
  });
});
