var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var BANKAPP = require('../init.js');

describe('BANKAPP.printStatement', function() {
  beforeEach(function() {
    header = 'date || credit || debit || balance';
    sinon.spy(console, 'log');
    BANKAPP.init();
    account = BANKAPP.account;
    account.processTransaction(2000); account.processTransaction(-1000); account.processTransaction(3000);
  });

  it('prints a descriptive header', function() {
    BANKAPP.printStatement();
    expect(console.log.getCall(0).args[0]).to.equal(header);
  });
});

