(function() {
  'use strict';
  var header = 'date || credit || debit || balance';

  var formatMonth = function(date) {
    var currentMonth = date.getMonth();
    if (currentMonth < 10) {
      return '0' + currentMonth;
    } else {
      return currentMonth;
    }
  };

  var formatDate = function(date){
    return date.getDate() + '/' + formatMonth(date) + '/' + date.getFullYear();
  };
    
  if (typeof Number.prototype.addZeros !== 'function') {
    Number.prototype.addZeros = function(){
      if (this === Math.round(this)) {
        return this + '.00';
      } else {
        return this;
      }
    };
  }

  var formatAsDebitOrCredit = function(amount){
    if (amount < 0) {
      return '|| ' + Math.abs(amount).addZeros();
    } else {
      return amount.addZeros() + ' ||';
    }
  };

  var printStatement = function() {
    console.log(header);
    this.history.reverse().forEach(function(transaction) {
      console.log(formatDate(transaction.timestamp) + ' || ' + formatAsDebitOrCredit(transaction.amount) + ' || ' + transaction.balance.addZeros());
    });
  };
  module.exports = printStatement;
}());
