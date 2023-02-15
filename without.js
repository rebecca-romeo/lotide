// ✅ assignment complete
// ✅ without function
// ✅ assertArraysEqual tests

// FUNCTION: assertArraysEqual
// takes in two arrays and returns console.log
const assertArraysEqual = function(array1, array2) {
  (eqArrays(array1, array2)) ? console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
};

// FUNCTION: eqArrays
// checks if two arrays are identicle
const eqArrays = function(array1, array2) {
  // loop through the arrays
  for (let i = 0; i < array1.length; i++) {
    // Check if indexes do not match
    if (array1[i] !== array2[i]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
};

// FUNCTION: without
// returns a subset of an array, removes unwanted items
// returns elements from source not present in itemstoremove
const without = function(source, itemsToRemove) {
  let newArray = [];
  // check every item in source
  for (const item of source) {

    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

// TEST: without function
let results = without([1, 2, 3], [1]); // => [2, 3]
console.log(results);

console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ['1', '2']


// TEST: assertArraysEqual to check if new array === expected result
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => true

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // => ['hello, 'world']
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => true

module.exports = without;