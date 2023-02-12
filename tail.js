// ✅ assignment complete
// ✅ tail function
// ✅ assertEqual tests

const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

// a function to return the tail of the array only
const tail = function(arr) {
  // if the length is greater than 1, slice the head, otherwise just return arr
  return (arr.length > 1) ? arr.slice(1) : arr;
};

// console.log(tail([1,2,4,5]))
// console.log(tail([1]))

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

