var BANKAPP = require('../init.js');

var BANKAPP = {
  init: function() { 
    this.account = BANKAPP.createAccount(); 
  },

  createAccount: function() {
    var initialBalance = 0;

    return {
      history: [],
      processTransaction: function(paramsHash){}
    };
  }
};

module.exports = BANKAPP;
