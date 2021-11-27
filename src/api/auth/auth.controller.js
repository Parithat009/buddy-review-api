const { signInService, signUpService } = require('./auth.service')

const methods = {
  async signIn(req, res) {
    try {
      const response = await signInService(req.body)
      return res.send({ token: response })
    } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
    }
  },

  async signUp(req, res) {
    try {
      const response = await signUpService(req.body)
      res.status(201).send(response)
    } catch (error) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  }
}

module.exports = { ...methods }
