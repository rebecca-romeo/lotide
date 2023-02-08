// Implement assertEqual Lotide Assignment


// FUNCTION IMPLEMENTATION

// Version 1
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("✅✅✅ Assertion passed: " + actual + " === " + expected);
//   } else {
//     console.log("🛑🛑🛑 Assertion failed: " + actual + " !== " + expected);
//   }
// };

// Version 2 - refactored to eliminate use of else statment
// const assertEqual = function(actual, expected) {
//   if (actual === expected) return console.log("✅✅✅ Assertion passed: " + actual + " === " + expected);

//   return console.log("🛑🛑🛑 Assertion failed: " + actual + " !== " + expected);
// };

// Version 3 - refactored using ternary operator to create cleaner more readable code
const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, "1");
assertEqual(1, 1);
assertEqual(1, 20);