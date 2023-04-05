// ---------------------------------------------------------------
// eqArrays function:
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
// ---------------------------------------------------------------
// assertArraysEqual function:

const assertArraysEqual = function(actual, expected) {
  return (eqArrays(actual, expected)) ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
}

// ---------------------------------------------------------------
// without function:

// Version 1:
// const without2 = function(source, itemsToRemove) {
//   const filteredArray = [];
//   for (let item of source) {
//     if (!itemsToRemove.includes(item)) {
//       filteredArray.push(item);
//     }
//   }
//   return filteredArray;
// }

// Version 2 - Refactored:
const without = (source, itemsToRemove) => source.filter(item => !itemsToRemove.includes(item))


// ---------------------------------------------------------------
// TESTS:

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// ✅
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);