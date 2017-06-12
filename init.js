require('./lib/goodPartsMethods.js');
require('./src/account.js');

var BANKAPP = {
  init: function() { BANKAPP.createAccount(); }
};
module.exports = BANKAPP;
