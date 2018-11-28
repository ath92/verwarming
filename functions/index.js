const functions = require('firebase-functions');
const admin = require('firebase-admin');
const isNotANumber = require('lodash/isNaN.js');

const names = ['pim', 'tom', 'wouter'];

exports.setTemperatureOverride = functions.https.onRequest((req, res) => {
  // Grab the name parameter
  const name = req.query.name;

  // Grab temperature
  // Let's say -1 = no override
  const temperature = parseInt(req.query.temperature);

  // Do some validation:
  const nameIsValid = names.some(n => n === name);
  const temperatureIsValid = !isNotANumber(temperature);

  // If invalid, respond with 500
  if (!nameIsValid || !temperatureIsValid) {
  	return res.sendStatus(500);
  }

  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.database().ref(`/overrides/${name}/`).push({ temperature }).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    return res.redirect(303, snapshot.ref.toString());
  });
});

exports.getTemperatureOverrides = functions.https.onRequest((req, res) => {
	return firebase.database().ref('/overrides/').once('value').then(function(snapshot) {
	  return res.json(snapshot);
	});
});