import {sum, square, variable, Student} from '../lib/hello';

var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('square', function() {
  it('should return b * b', function () {
    assert.equal(25, square(5));
  });
});

