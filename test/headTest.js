const assertEqual = require('../assertEqual');
const head = require('../head');

// TESTS
// ✅
assertEqual(head([21]), 21);
assertEqual(head([]), undefined);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// 🛑
assertEqual(head([20]), 21);
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi");