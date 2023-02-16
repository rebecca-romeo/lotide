// ✅ assignment complete
// ✅ letterPositions function
// ✅ assertArraysEqual tests

const assertArraysEqual = function(array1, array2) {
  (eqArrays(array1, array2)) ? console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
};


const eqArrays = function(array1, array2) {
  // loop through the arrays
  for (let i = 0; i < array1.length; i++) {
    // Check if indexes do not match
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentance) {
  const results = {};
  // logic to update results here

  // loop through each letter in the string
  // if the letter does exist ?
  // add index position to the value :
  // add key to object and index to value
  // if the letter does exist
  // add the index to the key's value array
  for (let i = 0; i < sentance.length; i++) {
    const letter = sentance[i];
    (results[letter]) ?
      results[letter].push(i) :
      results[letter] = [i];
  }
  return results;
};

// TESTS
console.log(letterPositions("hello"));
// => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }

assertArraysEqual(letterPositions("testing").t, [0, 3]); // => true


// Expected structure example:
// console.log(letterPositions("lighthouse in the house"));
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

module.exports = letterPositions;