(function() {
  'use strict';

  var newTransaction = function(amount) {
    this.balance += amount;
    return {
      timestamp: new Date(),
      amount:  amount,
      balance: this.balance
    };
  };

  module.exports = newTransaction;
})();
