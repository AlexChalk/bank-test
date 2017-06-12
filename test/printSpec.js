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
    BANKAPP.init();
    account = BANKAPP.account;
    clock = sinon.useFakeTimers(new Date(2012,1,10).getTime());
    account.processTransaction(1000); clock.tick(1000 * 60 * 60 * 72);
    account.processTransaction(2000); clock.tick(1000 * 60 * 60 * 24);
    account.processTransaction(-500);
    BANKAPP.printStatement();
  });
  after(function() {
    clock.restore();
  });

  it('prints a descriptive header', function() {
    expect(console.log.getCall(0).args[0]).to.equal(header);
  });

  it('prints date of transactions', function() {
    expect(console.log.getCall(1).args[0]).to.include('14/01/2012');
  });

  it('prints amounts with two decimal places', function() {
    expect(console.log.getCall(3).args[0]).to.include('1000.00');
  });

  it('prints amount of transactions', function() {
    expect(console.log.getCall(3).args[0]).to.include('1000.00');
  });

  it('always prints amount as positive number', function() {
    expect(console.log.getCall(1).args[0]).to.include('|| 500.00');
  });

  it('prints credits in credit column', function() {
    expect(console.log.getCall(2).args[0]).to.include('2000.00 || || ');
  });

  it('prints debits in debit column', function() {
    expect(console.log.getCall(1).args[0]).to.include('|| || 500.00');
  });

  it('prints balance after each transaction', function() {
    expect(console.log.getCall(1).args[0]).to.include('2500.00');
  });
});

