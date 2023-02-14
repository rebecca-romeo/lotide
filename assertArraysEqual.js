// ✅ import eqArrays
// ✅ assertArraysEqual function
// ✅ modular testing

// IMPORT eqArrays
const eqArrays = require('./eqArrays');

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function(array1, array2) {
  (eqArrays(array1, array2)) ? console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
};

module.exports = assertArraysEqual;