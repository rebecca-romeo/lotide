// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
// 🛑
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hi", "hi");
assertEqual("hi", "bye");
assertEqual(1, "1");
assertEqual(9, 0);

// ✅
assertEqual(1, 1);
assertEqual("Hi", "Hi");
