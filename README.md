-I did not connect the API and front-end, however that can easily be done by utilzing Nswag gen to automatically generate me an API service on the angular side made from the openAPI documentation.

-With this role being primarily front-end, I heavily focused on the angular implementation, There is an auth-guard that utilizes the mock API service, and the application utilizes NGRX.

-I did add storybooks and replaced the Karma testing with the Jest testing framework, HOWEVER, I did not have time to properly implement those. All that is needed for them is for tests to be written regarding the business logic, and for the test suites and storybooks to have mock services in order to properly work. Jest has solid documentation on setting up their Mock functions, storybooks' angular documentation is HEAVILY lacking.

-Even though the test did not require a DB, I did utilize SQLite and created a DB library that utilizes entity frameworks.



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
