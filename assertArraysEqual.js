const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return compareArrayValues(array1, array2);
};

const compareArrayValues = function(compareArray1, compareArray2) {
  for (let i = 0; i < compareArray1.length; i++) {
    if (compareArray1[i] === compareArray2[i]) {
      continue;
    }
    return false;
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  return (eqArrays(array1, array2)) ?
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2} `);
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2]);