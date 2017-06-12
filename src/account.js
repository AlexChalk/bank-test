(function() {
  'use strict';

  var createAccount = function() {

    return {
      balance: 0,
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
