var BANKAPP = require('../init.js');

var BANKAPP = {
  init: function() { 
    this.account = BANKAPP.createAccount(); 
  },

  createAccount: function() {
    var initialBalance = 0;

    return {
      history: [],
      processTransaction: function(amount) {

        if (typeof amount !== 'number') {
          throw { 
            name: 'TypeError',
            message: 'This function takes a number'
          };
        }

      }
    };
  }
};

module.exports = BANKAPP;
