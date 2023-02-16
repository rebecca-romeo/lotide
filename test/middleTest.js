const assert = require('chai').assert;
const middle = require('../middle.js');


// TESTS
describe("#middle", () => {
  // ensure odd number arrays return 1 middle value
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  // ensure even number arrays return 2 middle values
  it("returns 2, 3 for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  // ensure arrays with no middle value return an empty array
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});