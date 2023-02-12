// ✅ assignment complete
// ✅ countOnly function
// ✅ assertEqual tests


//It would be nice to make use of our handy assertEqual function. Copy it from its source file and paste it in to the top of countOnly.js.
const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // loop through each name
  for (const item of allItems) {
    // if the name matches a name inside the itemsToCount object, continue to next conditional
    if (itemsToCount[item]) {
      // if the name matches a name in results, add 1 : add the name to results key with a value of 1
      (results[item]) ? results[item] += 1 : results[item] = 1;
    }
  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// take a list of names, check them against the object of names
// if the list name matches the object name, add it to a new object
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// compare the new object names with the second argument to see if it matches
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);