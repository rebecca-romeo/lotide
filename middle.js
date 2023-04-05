// FUNCTION: eqArrays checks the values at each index to see 2 arrays are equal
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

// FUNCTION: assertArraysEqual tests if 2 arrays are equal
const assertArraysEqual = function(actual, expected) {
  return (eqArrays(actual, expected)) ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
};


// FUNCTION: middle checks the middle numbers of an array

// 1 or 2 = []
// odd numbers = [1]
// even numbers = [1, 2]

const middle = function(array) {
  // Arrays with 2 or less items, there is no middle = []
  if (array.length < 3) return [];

  // Arrays with even numbers, middle = [x, x]
  if (array.length % 2 === 0) {
    return [array[((array.length / 2) - 1)], array[array.length / 2]];
  }

  // Arrays with odd numbers, middle = [x]
  return [array[Math.floor(array.length / 2)]];

};



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

