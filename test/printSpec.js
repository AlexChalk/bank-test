var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var BANKAPP = require('../init.js');

describe('BANKAPP.printStatement', function() {
  before(function() {
    header = 'date || credit || debit || balance';
    sinon.spy(console, 'log');
  });
  beforeEach(function() {
    BANKAPP.init();
    account = BANKAPP.account;
    clock = sinon.useFakeTimers(new Date(2012,1,10).getTime());
    account.processTransaction(1000); clock.tick(1000 * 60 * 60 * 72);
    account.processTransaction(2000); clock.tick(1000 * 60 * 60 * 24);
    account.processTransaction(-500);
  });
  after(function() {
    clock.restore();
  });

  it('prints a descriptive header', function() {
    BANKAPP.printStatement();
    expect(console.log.getCall(0).args[0]).to.equal(header);
  });

  it('prints date of transactions', function() {
    BANKAPP.printStatement();
    expect(console.log.getCall(1).args[0]).to.include('14/01/2012');
  });

  it('prints amount of transactions', function() {
    BANKAPP.printStatement();
    expect(console.log.getCall(3).args[0]).to.include('1000');
  });

  it('always prints amount as positive number', function() {
    BANKAPP.printStatement();
    expect(console.log.getCall(1).args[0]).to.include('|| 500');
  });

  it('prints balance after each transaction', function() {
    BANKAPP.printStatement();
    expect(console.log.getCall(1).args[0]).to.include('2500');
  });
});

