const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


// testing issue: Can't compare arrays directly: [1, 2, 3] === [1, 2, 3] // => false. Instead, need to check the lengths & index values

// MANUAL TESTS

// Check to make sure original array is unaltered
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// ✅
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// let test1 = tail([1, 2, 3, 4]);
// assertEqual(test1.length, 3);
// assertEqual(test1[0], 2);
// assertEqual(test1[1], 3);

// // length of 1 should === []
// let test2 = tail([1]);
// assertEqual(test2.length, 0);
// assertEqual(Array.isArray(test2), true);

// // empty [] should === []
// let test3 = tail([]);
// assertEqual(test3.length, 0);
// assertEqual(Array.isArray(test3), true);

// // 🛑
// assertEqual(test1[0], 1);
// assertEqual(test2.length, 1);
// assertEqual(Array.isArray(test3), false);

// UNIT TESTS WITH MOCHA/CHAI
const array = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  // ensure we get back two elements
  it("returns 2 for array", () => {
    assert.deepEqual(array.length, 2);
  });
  // ensure first element is "Lighthouse"
  it("returns 'Lighthouse' for result[0]", () => {
    assert.deepEqual(array[0], 'Lighthouse');
  });
  // ensure second element is "Labs"
  it("returns 'Labs' for result[1]", () => {
    assert.deepEqual(array[1], 'Labs');
  });
});