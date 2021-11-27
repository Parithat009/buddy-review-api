const jwt = require('jsonwebtoken')
const { userSystem } = require('../mockData')

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = await jwt.verify(token, `${process.env.EXPRESS_AUTHENAPP_SECRETKEY}`)
    const filterUser = userSystem && userSystem.find(item => item.username === decodedToken.username)

    if (!(filterUser && filterUser.username)) {
      throw 'Invalid user ID'
    } else {
      next()
    }
  } catch {
    res.status(401).json({
      error: { message: 'Unauthorization' }
    })
  }
}