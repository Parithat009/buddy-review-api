const { signInService, signUpService } = require('./auth.service')

const methods = {
  async signIn(req, res) {
    try {
      const response = await signInService(req.body)
      return res.send({ token: response })
    } catch (error) {
      throw new Error(error)
    }
  },

  async signUp(req, res) {
    try {
      const response = await signUpService(req.body)
      res.status(201).send(response)
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = { ...methods }
