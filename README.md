### Example of use in node repl:

```
adc@adc-mbpr ~/m/bank-tech-test> node                                  
> BANKAPP = require('./init.js');
{ init: [Function: init],
  createAccount: [Function: createAccount],
  printStatement: [Function: printStatement] }
> BANKAPP.init();
undefined
> BANKAPP.account.processTransaction(1000);
undefined
> BANKAPP.account.processTransaction(2000);
undefined
> BANKAPP.account.processTransaction(-500);
undefined
> BANKAPP.printStatement();
date || credit || debit || balance
12/05/2017 || || 500.00 || 2500.00
12/05/2017 || 2000.00 || || 3000.00
12/05/2017 || 1000.00 || || 1000.00
undefined
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

