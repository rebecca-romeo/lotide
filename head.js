// ✅ assignment complete
  // ✅ head function
  // ✅ assertEqual tests

// Function that returns just the head at index 0
function head(arr) {
  return arr[0];
}


// console.log(head(array))

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Bye");
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 6);
assertEqual(head([5]), 5);
assertEqual(head([]), 45);
