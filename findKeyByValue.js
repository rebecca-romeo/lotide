const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value) {
  for (const key in object) {
    // console.log("object", object)
    // console.log("key:", key)
    // console.log("value:", object[key])
    if (object[key] === value) {
      return key;
    }
  }
};


// TESTS
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);