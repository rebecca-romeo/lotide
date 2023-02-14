// ✅ eqArrays function
// ✅ modular testing

// Function that checks the index of 2 arrays to see if they match
const eqArrays = function(array1, array2) {
  // loop through the arrays
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
};

module.exports = eqArrays;