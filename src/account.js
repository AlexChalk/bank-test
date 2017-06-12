(function() {
  'use strict';

  var createAccount = function() {
    var initialBalance = 0;

    return {
      history: [],
      newTransaction: require('./transaction.js'),
      processTransaction: function(amount) {

        if (typeof amount !== 'number') {
          throw { 
            name: 'TypeError',
            message: 'This function takes a number'
          };
        }

        this.history.push(this.newTransaction(amount));
      }
    };
  };
  module.exports = createAccount;
}());

