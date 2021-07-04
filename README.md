# TypeScript Challenge Instructions

Write a Node project that:

1.  reads in the file `data.json` transforms it into a format that matches `example-output.json`
2.  load transformed data into a datastore - store can be of your choice, in memory or a local database
3.  Create an API that has 2 get API calls. One for customers and one for orders that pull data from the datastore
4.  Create a simple UI that calls the API and displays the customer and the customers orders

## General Approach and Assumptions

- Solution should be implemetned in TypeScript.
- Read JSON `data.json` async from it's directory, convert data async, write into datastore async
- Solution should be run from the command line using `npm run`.
- Solution should be non-blocking.
- Solution should use React or modern equivilent for UI
- Solution APIs should be REST compliant

## Criteria

Your work will be evaluated primarily on:

- Consistency of coding style.
- Correct use of promises, including proper error handling.
- Correct use of TypeScript, including interface/object definitions.
- Absence of "callback hell".
- Correct and complete unit test coverage.
- General quality of code and technical communication.

## How to submit your work

1.  Fork this project on github.
2.  Update this README.md file with instructions on how to build/test/run your script.
3.  When you're finished, send us the URL of your public repository.

# Pre-requisite

1.  Install node
2.  Install yarn (npm will work fine too)
3.  Clone the directory
4.  Run npm install from root directory to install all required packages.

# Build

1.  `npm run build ` from project root directory.

# test

1.  `npm run test` from project root directory.
2.  App test might not start after the server tests, please press `a` or follow the direction in prompt.

# Start

1.  `npm run start` from project root directory.

# Individual Start

1. `cd app & npm run start` to start the app from project root directory.
2. `cd server & npm run start` to start the app from project root directory.
