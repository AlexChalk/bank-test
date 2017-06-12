(function() {
  'use strict';

  var newTransaction = function(amount) {
    return {
      timestamp:  Date.now,
      amount:  amount
    };
  };

  module.exports = newTransaction;
})();
