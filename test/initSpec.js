var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var BANKAPP = require('../init.js');

describe('BANKAPP', function() {
  describe('init', function() {
    it('creates a new account', function() {
      sinon.spy(BANKAPP, "createAccount");
      BANKAPP.init();
      expect(BANKAPP.createAccount).to.have.been.calledOnce;
    });
  });
});
