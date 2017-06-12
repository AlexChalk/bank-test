(function() {
  'use strict';
  var header = 'date || credit || debit || balance';

  var printStatement = function() {
    console.log(header);
  };
  module.exports = printStatement;
}());
