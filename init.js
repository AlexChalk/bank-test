var BANKAPP = {
  createAccount: require('./src/account.js'),
  init: function() { 
    this.account = this.createAccount(); 
  },
};
module.exports = BANKAPP;
