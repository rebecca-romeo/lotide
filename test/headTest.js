// IMPORT head function
const head = require('../head');
// IMPORT tests
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Bye");
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 6);
assertEqual(head([5]), 5);
assertEqual(head([]), 45);