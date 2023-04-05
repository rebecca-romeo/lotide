const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

};



const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return compareArrayValues(array1, array2);
};

// Helper function.
//  If both arrays at index i are equal, continue. Returns true if continues to end of loop
// If not equal, return false

const compareArrayValues = function(compareArray1, compareArray2) {
  for (let i = 0; i < compareArray1.length; i++) {
    if (compareArray1[i] === compareArray2[i]) {
      continue;
    }
    return false;
  }

  return true;
};

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1, 4]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);