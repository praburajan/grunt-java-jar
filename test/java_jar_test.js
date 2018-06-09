'use strict';

var grunt = require('grunt');
var fs = require("fs");

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.java_jar = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  myjar: function(test) {
    test.expect(1);

    var actual = fs.statSync('dist/jar/myjar.jar');
    var expected = fs.statSync('test/expected/myjar.jar');
    console.log("Actual size == "+actual.size+ " Expected size == "+expected.size);
    test.equal(actual.size, expected.size, 'both jars should be the same');

    test.done();
  }
};
