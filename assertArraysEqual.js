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
}

// TESTS
//✅
assertArraysEqual([1, 2, 3], [1, 2, 3]);

//🛑
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2]);