const utilities = require('./utilities.js')
const config_vars = require('./config_vars.js')


exports.validateUserToken = (req, res, next) => {
  const secret = config_vars.secret
  const token = req.get('Authorization')
  utilities.verifyTokenGetPayload(token, secret)
  .then(decoded => {
    req.userId = decoded.uid
    next()
  })
  .catch(err =>
    res.status(401).json(err)
  )
}