const admin = require('firebase-admin');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const utils = require('./utilities.js')
const config_vars = require('./config_vars.js')

admin.initializeApp();

exports.helloCashair = (request, response) => {
 response.send("Hello from Cashair!");
};

exports.createTransaction = (request, response) => {
  const { userId } = request
  const {
    mobile,
    cash,
    airtime,
    type
  } = request.body
  const value = {
    mobile,
    airtime,
    cash,
    type,
    userId,
    verified: false,
    completed: false
  }
  return admin.database().ref('transaction').push(value)
  .then(snapshot =>
    response.json({
      transaction: value,
      address: snapshot.ref.toString()
    })
  )
  .catch(err =>
    response.status(500).json("Error encountered")
  )
}

exports.getTransactions = (request, response) => {
  const { userId } = request
  console.log(userId)
  const ref = admin.database().ref('transaction')
  ref.orderByChild("userId").equalTo(userId)
  .limitToLast(20)
  .once("value",
    (snapshot) =>
      response.json(snapshot.val()),
    (error) =>
      response.status(500).json(error)
  )
}

exports.createUser = (request, response) => {
  const secret = config_vars.secret
  const { email, secretKey } = request.body
  const db = admin.database()
  admin.auth().createUser({ email, emailVerified: false })
  .then(userRecord =>
    bcrypt.hash(secretKey.toString(), 10)
    .then(hash =>
      db.ref(`users/${userRecord.uid}`).set(hash)
      .then(() => userRecord)
    )
  )
  .then(userRecord =>
    utils.generateToken(
      userRecord.uid,
      secret
    )
  )
  .then(token =>
    response.json({ message: "success", token })
  )
  .catch(err =>
    response.status(500).json(err)
  )
}

exports.logInUser = (request, response) => {
  const secret = config_vars.secret
  const { email, secretKey } = request.body
  admin.auth().getUserByEmail(email)
  .then(userRecord => userRecord.uid)
  .then(userId =>
    admin.database()
    .ref(`users/${userId}`)
    .once("value")
    .then(snapshot =>
      ({
        hashedSecretKey: snapshot.val(),
        userId
      })
    )
  )
  .then(({ hashedSecretKey, userId }) =>
    bcrypt.compare(secretKey, hashedSecretKey)
    .then(isValid =>
      (isValid) ?
        utils.generateToken(
          userId,
          secret
        ) : Promise.reject(Error('Invalid secret key'))
    )
    .then(token =>
      response.json({ message: "success", token })
    )
    .catch(err =>
      err.message === "Invalid secret key" ?
      response.json(401, "Invalid authentication credentials") :
      response.status(500).json("Error authenticating user")
    )
  )
}
