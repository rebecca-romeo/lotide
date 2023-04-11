
const eqArrays = function(actual, expected) {
  // loop through the arrays
  for (let i = 0; i < actual.length; i++) {
    // Check if indexes do not match
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  (eqArrays(actual, expected)) ? console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};


// Our map function will take in two arguments:
// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

// Collection of words
const words = ["ground", "control", "to", "major", "tom"];

// Let's write our own map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Write test cases using at least three different ways of using map.
const results1 = map(words, word => word[0]);
const results2 = map(words, function(word) {
  return word[0];
});
const results3 = map(words, (word) => {
  return word[0];
});

console.log(results1);
console.log(results2);
console.log(results3);

// Tests
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results3,[ 'g', 'c', 't', 'm', 't' ]);

module.exports = map;