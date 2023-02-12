// ✅ assignment complete
  // ✅ countLetters function
  // ✅ assertEqual tests

const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

// A function to count all the letters in a string and return how many of each letter there are
const countLetters = function(string) {
  // object to hold all the key-value pairs of letter/number
  const countedLetters = {};
  // loop through each letter of the string
  for (const letter of string) {
    // if that letter is in the object, add 1
    if (countedLetters[letter]) {
      countedLetters[letter] += 1;
    } else {
      // if  that letter is not found in the object, add the letter name(key) and 1 (value)
      countedLetters[letter] = 1;
    }
  }
  return countedLetters;
};


// The string that is being looped
const result = countLetters("testing this");

// check to see if the amount of t's === 2
assertEqual(result["t"], 3);