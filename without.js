// ---------------------------------------------------------------
// eqArrays function:

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

// ---------------------------------------------------------------
// assertArraysEqual function:

const assertArraysEqual = function(array1, array2) {
  return (eqArrays(array1, array2)) ?
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2} `);
}

// ---------------------------------------------------------------
// without function:

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
}


// ---------------------------------------------------------------
// TESTS:

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);