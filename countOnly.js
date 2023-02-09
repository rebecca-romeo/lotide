//t would be nice to make use of our handy assertEqual function. Copy it from its source file and paste it in to the top of countOnly.js.
const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allNames, itemsToCount) {
  const results = {};

  for (const names of allNames) {
    if (itemsToCount[names]) {
      if (results[names]) {
        results[names] += 1;
      } else {
        results[names] = 1;
      }
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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);