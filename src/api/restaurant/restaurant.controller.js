const { findAllService, findOneService, reserveService } = require('./restauraunt.service')

const methods = {
  async findAll(req, res) {
    try {
      const response = await findAllService()
      return res.send(response)
    } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
    }
  },

  async findOne(req, res) {
    try {
      const response = await findOneService(req.params.id)
      res.status(200).send(response)
    } catch (error) {
      return res.status(400).json({ status: 400, message: error.message })
    }
  },

  async reserve(req, res) {
    try {
      const response = await reserveService(req.params.id, req.body)
      res.send(response)
    } catch (error) {
      return res.status(400).json({ status: 400, message: error.message })
    }
  }
}

module.exports = { ...methods }
