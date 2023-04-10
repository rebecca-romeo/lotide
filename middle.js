
// FUNCTION: middle checks the middle numbers of an array

// 1 or 2 = []
// odd numbers = [1]
// even numbers = [1, 2]

const middle = function(array) {
  // Arrays with 2 or less items, there is no middle = []
  if (array.length < 3) return [];

  // Arrays with even numbers, middle = [x, x]
  if (array.length % 2 === 0) {
    return [array[((array.length / 2) - 1)], array[array.length / 2]];
  }

  // Arrays with odd numbers, middle = [x]
  return [array[Math.floor(array.length / 2)]];

};

module.exports = middle;
