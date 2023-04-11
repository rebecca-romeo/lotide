
const eqObjects = function(object1, object2) {
  // check if the objects have the same amount of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log("false");
    return false;
  }
  // loop through the object1 keys, check if the arrays match
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqObjects(object1[key], object2[key])) {
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


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Implement me!
  (eqObjects(actual, expected)) ?
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const obj1 = {one: 1, two: 2, three: 3};
const obj2 = {one: 1, two: 2, three: 3};
const obj3 = {one: 1, two: 2};
assertObjectsEqual(obj1, obj2); // => true
assertObjectsEqual(obj1, obj3); // => false

module.exports = assertObjectsEqual;