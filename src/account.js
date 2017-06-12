var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var BANKAPP = require('../init.js');

var BANKAPP = {
  init: function() { 
    this.account = BANKAPP.createAccount(); 
  },

  createAccount: function() {
    var initialBalance = 0;

    return {
      history: [],
      processTransaction: function(params) {

        if (typeof params.amount !== 'number') {
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
