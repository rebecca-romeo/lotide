const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  const countedLetters = {};
  for (const letter of string) {
    if (countedLetters[letter]) {
      countedLetters[letter] += 1;
    } else {
      countedLetters[letter] = 1;
    }
  }
  return countedLetters;
};



const result = countLetters("test");

assertEqual(result["t"], 2);