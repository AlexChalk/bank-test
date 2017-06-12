(function() {
  'use strict';

  var newTransaction = function(amount) {
    this.balance += amount;
    return {
      timestamp:  Date.now,
      amount:  amount,
      balance: this.balance
    };
  };

  module.exports = newTransaction;
})();
