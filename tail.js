// FUNCTION: assertEqual checks tail function against expected result
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION: tail returns all but fist item
const tail = function(array) {
  return array.slice(1);
};
//note: after the slice, it automatically returns empty array if only one item is in the array




// TESTS
// testing issue:
// Can't compare arrays directly: [1, 2, 3] === [1, 2, 3] // => false
// Instead, check the lengths & index values

// Check to make sure original array is unaltered
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// ✅
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

let test1 = tail([1, 2, 3, 4]);
assertEqual(test1.length, 3);
assertEqual(test1[0], 2);
assertEqual(test1[1], 3);

// length of 1 should === []
let test2 = tail([1]);
assertEqual(test2.length, 0);
assertEqual(Array.isArray(test2), true);

// empty [] should === []
let test3 = tail([]);
assertEqual(test3.length, 0);
assertEqual(Array.isArray(test3), true);

// 🛑
assertEqual(test1[0], 1);
assertEqual(test2.length, 1);
assertEqual(Array.isArray(test3), false);

// Result: all passed & failed as expected
