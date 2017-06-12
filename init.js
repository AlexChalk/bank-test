var BANKAPP = {
  init: function() { 
    this.account = this.createAccount(); 
  },
  createAccount: require('./src/account.js'),
  printStatement: require('./src/print.js')
};
module.exports = BANKAPP;
