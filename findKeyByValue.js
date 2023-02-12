// ✅ assignment complete
  // ✅ findKeyByValue function
  // ✅ assertEqual test

const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};


// Function to check object for value ? return the first key that contains the value : undefined
const findKeyByValue = function(object, value) {
  // Object.keys creates an array of all the keys in an object
  // You can then loop the array using for of to check each key
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      console.log(key);
      return key;
    }
  }
  console.log("undefined");
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);