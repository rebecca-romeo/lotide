// ✅ assignment complete
// ✅ eqObjects function
// ✅ assertEquals tests

const eqArrays = function(array1, array2) {
  // loop through the arrays
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
};

const assertEquals = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back false!
const eqObjects = function(object1, object2) {
  // check if the objects have the same amount of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log("false");
    return false;
  }

  // loop through the object1 keys, check if the arrays match
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // check if any do not match the object2 keys
    } else if (object1[key] !== object2[key]) {
      console.log("false");
      return false;
    }
  }
  // if key lengths are equal && and all keys match = true
  console.log("true");
  return true;
};

// PRIMITIVE DATA TYPES TEST - PASSED
// const shirtObject = { color: "red", size: "medium"};
// const anotherShirtObject= { size: "medium", color: "red"};
// eqObjects(shirtObject , anotherShirtObject); // => true
// We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);

//ARRAY DATA TYPES TEST
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEquals(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEquals(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;