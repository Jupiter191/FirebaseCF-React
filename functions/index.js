const functions = require('firebase-functions');
const inspect = require('util').inspect;
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


admin.initializeApp();

const database = admin.database().ref('/items');

// functions.https creates a function that handles HTTP events.
// The onRequest event handler listens for requests.
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from a Serverless Database!");
});

exports.addItem = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        
    });
});