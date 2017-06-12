# Bank Test

A one-day challenge to implement basic logic for a banking system. 

## Installation
The following assumes you have Node installed:

1. Clone the repository: `git clone git@github.com:adc17/bank-test.git`.
2. `npm install`.

## Usage

Here is an example of app use in the node repl:

```
$ node                           
> BANKAPP = require('./init.js');
{ createAccount: [Function: createAccount] }
> account = BANKAPP.createAccount();
{ balance: 0,
  history: [],
  printStatement: [Function: printStatement],
  processTransaction: [Function: processTransaction] }
> account.processTransaction(2000);
undefined
> account.processTransaction(-800);
undefined
> account.processTransaction(3000);
undefined
> account.printStatement();
date || credit || debit || balance
12/05/2017 || 3000.00 || || 4200.00
12/05/2017 || || 800.00 || 1200.00
12/05/2017 || 2000.00 || || 2000.00
undefined
```

## Tests

```
npm tests
```

## Specification

### Requirements

- You should be able to interact with the your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### User Stories:

```
as a bank client
so i can keep track of my balance
i would like to see it displayed in the app

as a bank client
so i can keep track of balance changes (credit/debits)
i would like to see them displayed in the app

as a bank client
so i don't become confused
i would like the balance to update when it changes

as a bank client
so i'm clearer on which payments occur when
i would like the date of all payments to be displayed within the app
```
## Other notes

A challenge from the [Makers Academy](http://www.makersacademy.com) Bootcamp.