(function() {
  'use strict';

  var createAccount = function() {
    return {
      balance: 0,
      history: [],
      printStatement: require('./print.js'),
      processTransaction: require('./transaction.js'),
    };
  };

  module.exports = createAccount;
}());
