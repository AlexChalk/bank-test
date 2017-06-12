(function() {
  'use strict';

  var processTransaction = function(amount) {
    var that = this;
    var newTransaction = function(amount) {
      return {
        timestamp: new Date(),
        amount:  amount,
        balance: that.balance
      };
    };

    this.balance += amount;

    if (typeof amount !== 'number') {
      throw { 
        name: 'TypeError',
        message: 'This function takes a number'
      };
    }

    this.history.push(newTransaction(amount));
  };
  module.exports = processTransaction;
})();
