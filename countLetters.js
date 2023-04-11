const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentance) {
  const results = {};

  for (const letter of sentance) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  console.log(results);
  return results;
};

const sentance = "hello";
const result1 = countLetters(sentance);
assertEqual(result1["h"], 1);
assertEqual(result1["e"], 1);
assertEqual(result1["l"], 2);
assertEqual(result1["o"], 1);

module.exports = countLetters;