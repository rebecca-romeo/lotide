
// Assertions code
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
};


const assertArraysEqual = function(actual, expected) {
  (eqArrays(actual, expected)) ? console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

// Function code: takeUntil

// will return a "slice of the array with elements taken from the beginning."
// should keep going until the callback/predicate returns a truthy value
// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(array, callback) {
  // empty array to hold the new results
  let result = [];
  // loop over each array item
  for (let item of array) {
    // if the callback item is reached, aka true, stop the loop and do not print anymore items to the array
    if (callback(item)) {
      break;
    }
    // if the callback is false, aka not yet reached, keep adding items to the array
    result.push(item);
  }
  return result;
};


// To keep things simple, the callback should only be provided one value: The item in the array.
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


// Assertion tests
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;