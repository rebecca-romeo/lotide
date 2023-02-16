// ✅ tail function
// ✅ refactored modular testing

// a function to return the tail of the array only
const tail = function(arr) {
  // if the length is greater than 1, slice the head, otherwise just return arr
  return (arr.length > 1) ? arr.slice(1) : arr;
};

module.exports = tail;