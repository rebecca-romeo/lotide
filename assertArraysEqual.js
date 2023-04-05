// FUNCTION: eqArrays checks the values at each index to see 2 arrays are equal
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

// FUNCTION: assertArraysEqual tests if 2 arrays are equal
const assertArraysEqual = function(array1, array2) {
  return (eqArrays(array1, array2)) ?
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2} `);
}

// TESTS
//✅
assertArraysEqual([1, 2, 3], [1, 2, 3]);

//🛑
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2]);