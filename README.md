# accounting-notebook

## This application shows the history of transactions made.

### How to run it locally:

- Download the repo
- `cd server; npm install`
- `npm run start`

In a new console:
- `cd client; npm install`
- `npm run start`

This will start the server listening in the 5000 port and the application in the 3000 port.

### How to run the tests:

To run the unit (Mocha) tests stop the server and run in another console:
`cd server; npm run test`

To run the e2e (Cypress) tests you must make sure that both the server and the application are running. In another console:
`cd client; npm run cypress`
This will open a new window showing the Integracion tests. Click one to run it.
