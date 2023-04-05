// ---------------------------------------------------------------
// eqArrays function:
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};
// ---------------------------------------------------------------
// assertArraysEqual function:

const assertArraysEqual = function(array1, array2) {
  return (eqArrays(array1, array2)) ?
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2} `);
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