// FUNCTION: eqArrays checks the values at each index to see 2 arrays are equal
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

// FUNCTION: assertArraysEqual tests if 2 arrays are equal
const assertArraysEqual = function(actual, expected) {
  return (eqArrays(actual, expected)) ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
};


// FUNCTION: letterPositions shows the index position for each letter in a sentance
const letterPositions = function(sentence) {
  const results = {};

  for (const index in sentence) {
    // console.log("index", index)
    // console.log("key", sentence[index])
    let key = sentence[index];

    if (results[key]) {
      results[key].push(Number(index));
    } else {
      results[key] = [Number(index)];
    }
  }

  console.log(results);
  return results;
};

letterPositions("hello");


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lhl").l, [0, 2]);

module.exports = letterPositions;