const assertEqual = require('../assertEqual');

// TEST CODE
// 🛑
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hi", "hi");
assertEqual("hi", "bye");
assertEqual(1, "1");
assertEqual(9, 0);

// ✅
assertEqual(1, 1);
assertEqual("Hi", "Hi");