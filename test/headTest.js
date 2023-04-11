// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head = require('../head');

// TESTS
// ✅
// assertEqual(head([1, 2, 3]), 1);
// assertEqual(head([5]), 5);
// assertEqual(head([]), undefined);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// // 🛑
// assertEqual(head([20]), 21);
// assertEqual(head([5,6,7]), 6);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns 'hello' for ['hello', 'lighthouse, 'labs']", () => {
    assert.strictEqual(head(['hello', 'lighthouse', 'labs']), 'hello');
  });

});
