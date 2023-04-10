// FUNCTION: tail returns all but fist item
const tail = function(array) {
  return array.slice(1);
};
//note: after the slice, it automatically returns empty array if only one item is in the array


module.exports = tail;