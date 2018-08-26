const jwt = require('jsonwebtoken')


exports.generateToken = (userId, secret, expiresIn = '90 days') => {
  return new Promise((resolve, reject) => {
    const options = {
      expiresIn,
      issuer: 'CashAir'
    };
    const payload = { uid: userId };
    return jwt.sign(
      payload,
      secret,
      options,
      (err, token) => {
        return (err) ? reject(err) : resolve(token);
      }
    )
  })
}

exports.verifyTokenGetPayload = (token, secret, maxAge = '90 days') => {
  return new Promise((resolve, reject) => {
    const options = {
      maxAge,
      issuer: 'CashAir',
    };
    jwt.verify(
      token,
      secret,
      options,
      (err, decoded) => {
        return (err) ? reject(err) : resolve(decoded);
      }
    )
  })
}