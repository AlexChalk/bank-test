var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var BANKAPP = require('../init.js');

describe('BANKAPP', function() {
  describe('processTransaction', function() {
    beforeEach(function() {
      BANKAPP.init();
    });

    it('errors if its param is not a number', function() {
      expect(BANKAPP.account.processTransaction.bind(BANKAPP.account, { amount: 'elephant'} )).to.throw(/number/);
    });


    xit('populates account.history with a datestamped object', function() {
    });

  });
});

