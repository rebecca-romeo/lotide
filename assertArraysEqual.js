const eqArrays = require('./eqArrays');

// FUNCTION: assertArraysEqual tests if 2 arrays are equal
const assertArraysEqual = function(actual, expected) {
  return (eqArrays(actual, expected)) ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
};

module.exports = assertArraysEqual;