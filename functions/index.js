const functions = require('firebase-functions');
const express = require('express');
const handlers = require('./handlers.js');
const middlewares = require('./middlewares.js')

const app = express();

app.get('/', handlers.helloCashair)
app.post('/user/signin', handlers.logInUser)
app.post('/user/signup', handlers.createUser)

app.get('/transaction', middlewares.validateUserToken, handlers.getTransactions)
app.post('/transaction', middlewares.validateUserToken, handlers.createTransaction)

exports.cashair = functions.https.onRequest(app)