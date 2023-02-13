// assignment

// Our map function will take in two arguments:

// An array to map
// A callback function

// The map function will return a new array based on the results of the callback function.

// Collection of words
const words = ["ground", "control", "to", "major", "tom"];

// This works:
// const results1 = words.map(word => word[0]);
// console.log(results1);

// Let's write our own map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
