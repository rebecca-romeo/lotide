// assertEqual to check head function against expected result
const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

};

// Head function that returns first array item
const head = function(array) {
  return array[0];
};


// TESTS
assertEqual(head([21]), 21); // ✅
assertEqual(head([]), undefined); // ✅
assertEqual(head([5,6,7]), 5); // ✅
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // ✅

assertEqual(head([20]), 21); // 🛑
assertEqual(head([5,6,7]), 6); // 🛑
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi"); // 🛑