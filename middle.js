// 🛑 assignment incomplete
// ✅ middle function
// 🛑 assertArraysEqual & eqArrays

const middle = function(array) {
  let middleOfArray = [];
  if (array.length <= 2) {
    return middleOfArray;
  }

  if (array.length % 2 === 0) {
    middleOfArray.push(array[Math.floor((array.length - 1) / 2)]);
    middleOfArray.push(array[Math.floor(array.length / 2)]);
  }


  if (array.length % 2 === 1) {
    return middleOfArray = array[Math.floor(array.length / 2)];
  }
  return middleOfArray;
};


console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2]));
