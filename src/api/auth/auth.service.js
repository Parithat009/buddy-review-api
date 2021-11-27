const jwt = require('jsonwebtoken')
const { userSystem } = require('../../mockData')

const methods = {
  async signInService(params) {
    const filterUser = userSystem && userSystem.find(item => item.username === params.username && item.password === params.password)
    if (filterUser && filterUser.username) {
      return await jwt.sign(
        { ...params },
        `${process.env.EXPRESS_AUTHENAPP_SECRETKEY}`,
        { expiresIn: '6000s' }
      )
    } else {
      // return { message: 'not have username' }
      throw Error('Error not have username')
    }
  },

  signUpService(params) {
    userSystem.push(params)
    return { message: 'Sign Up Success' }
  }
}

module.exports = { ...methods }