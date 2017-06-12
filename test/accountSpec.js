var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var BANKAPP = require('../init.js');

describe('BANKAPP.account', function() {
  describe('processTransaction', function() {
    var clock;
    var account;
    beforeEach(function() {
      BANKAPP.init();
      account = BANKAPP.account;
      clock = sinon.useFakeTimers();
    });
    afterEach(function() {
      clock.restore();
    });

    it('errors if its param is not a number', function() {
      expect(account.processTransaction.bind(account, 'elephant')).to.throw(/number/);
    });

    it('pushes object to account.history that knows the transaction date', function() {
      account.processTransaction(1000);
      expect(account.history[0].timestamp).to.equal(Date.now);
    });

    it('pushes object to account.history that knows the transaction amount', function() {
      account.processTransaction(2000);
      expect(account.history[0].amount).to.equal(2000);
    });

    it('pushes object to account.history that knows the new account balance', function() {
      account.processTransaction(1000);
      account.processTransaction(2000);
      expect(account.history[1].balance).to.equal(3000);
    });

  });
});


