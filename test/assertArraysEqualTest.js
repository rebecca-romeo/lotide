const assertArraysEqual = require('../assertArraysEqual');

// TESTS
//✅
assertArraysEqual([1, 2, 3], [1, 2, 3]);

//🛑
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2]);