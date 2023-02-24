# RadBank

RadBank is a solution to a coding test to develop a basic bank web application.

The solution includes the following:

* RadBank API: a .NET Core API to serve as the backend [Click here to check API readme](https://github.com/AdhamFA/RadBank/tree/main/rad-bank-api)
* RadBank UI: an Angular front-end with Jest, NGRX, and Storybooks [Click here to check UI readme](https://github.com/AdhamFA/RadBank/tree/main/rad-bank-ui)

The requirements for the application are as such:

* A user can have as many accounts as they want.
* A user can create and delete accounts.
* A user can deposit and withdraw from accounts.
* An account cannot have less than $100 at any time in an account.
* A user cannot withdraw more than 90% of their total balance from an account in a single transaction.
* A user connat deposit more than $10,000 in a single transaction.
