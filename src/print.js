(function() {
  'use strict';
  var header = 'date || credit || debit || balance';

  var month = function(date) {
    var currentMonth = date.getMonth();
    if (currentMonth < 10) {
      return '0' + currentMonth;
    } else {
      return currentMonth;
    }
  };

  var formatDate = function(date){
    return date.getDate() + '/' + month(date) + '/' + date.getFullYear();
  };
    
  var formatAmount = function(amount){
    if (amount < 0) {
      return '|| ' + Math.abs(amount);
    } else {
      return amount + ' ||';
    }
  };

  var printStatement = function() {
    console.log(header);
    this.account.history.reverse().forEach(function(transaction) {
      console.log(formatDate(transaction.timestamp) + ' || ' + formatAmount(transaction.amount) + ' || ' + transaction.balance);
    });
  };
  module.exports = printStatement;
}());
