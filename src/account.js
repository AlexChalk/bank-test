var BANKAPP = require('../init.js');

BANKAPP.createAccount = function() {
  var initialBalance = 0;

  return {
    history: [],
    processTransaction: function(paramsHash){}
  };
};


module.exports = BANKAPP;
