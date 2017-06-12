var foo = require('../src/foo.js').foo;
var expect = require('chai').expect;

describe('foo', function() {
  it('should pass', function() {
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
  });
});
