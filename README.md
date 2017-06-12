### Example of use in node repl:

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

