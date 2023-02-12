// ✅ assignment complete
// ✅ use eqArrays
// ✅ assertArraysEqual function


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

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function(array1, array2) {
  (eqArrays(array1, array2)) ? console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
};

const array1 = [1, 2, 3];
const array2 = [1, 2];

assertArraysEqual(array1, array2);
