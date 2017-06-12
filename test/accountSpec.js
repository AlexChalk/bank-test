var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var BANKAPP = require('../init.js');

describe('BANKAPP', function() {
  describe('processTransaction', function() {
    var clock;
    beforeEach(function() {
      BANKAPP.init();
      clock = sinon.useFakeTimers();
    });
    afterEach(function() {
      clock.restore();
    });

    it('errors if its param is not a number', function() {
      expect(BANKAPP.account.processTransaction.bind(BANKAPP.account, 'elephant')).to.throw(/number/);
    });


    it('pushes object to account.history that knows the transaction date', function() {
      BANKAPP.account.processTransaction(1000);
      expect(BANKAPP.account.history[0].timestamp).to.equal(Date.now);
    });

    it('pushes object to account.history that knows the transaction amount', function() {
      BANKAPP.account.processTransaction(2000);
      expect(BANKAPP.account.history[0].amount).to.equal(2000);
    });

  });
});


