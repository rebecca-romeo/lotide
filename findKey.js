
const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

// Check the star value for each key in the object
// if found, return the key name : undefined
const findKey = function(object, callback) {
  for (let name in object) {
    // console.log("check name key", name)
    // console.log("check name value", object[name])
    // console.log("check stars value", object[name]["stars"])
    if (callback(object[name])) {
      console.log(name);
      return name;
    }
  }
  return undefined;
};

// Object to check
const namesObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const checkResults1 = findKey(namesObject, x => x.stars === 2); // => noma
const checkResults2 = findKey(namesObject, x => x.stars === 0); // => undefined

assertEqual(checkResults1, "noma"); // => pass
assertEqual(checkResults1, "Blue Hill"); // => fail
assertEqual(checkResults2, undefined); // => pass

module.exports = findKey;