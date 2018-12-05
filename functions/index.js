const functions = require('firebase-functions');
const inspect = require('util').inspect;

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// functions.https creates a function that handles HTTP events.
// The onRequest event handler listens for requests.

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from a Serverless Database!");
});