
// IMPORT chai
const assert = require('chai').assert;

// IMPORT tail function
const tail = require('../tail');


// TESTS
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  // ensure we get back two elements
  it("returns 2 for result", () => {
    assert.deepEqual(result.length, 2);
  });
  // ensure first element is "Lighthouse"
  it("returns 'Lighthouse' for result[0]", () => {
    assert.deepEqual(result[0], 'Lighthouse');
  });
  // ensure second element is "Labs"
  it("returns 'Labs' for result[1]", () => {
    assert.deepEqual(result[1], 'Labs');
  });
});

