const { findAllService, findOneService } = require('./restauraunt.service')

const methods = {
  async findAll(req, res) {
    const response = await findAllService()
    return res.status(200).send(response)
  },

  async findOne(req, res) {
    const response = await findOneService(req.params.id)
    res.status(200).send(response)
  },

  // async reserve(req, res) {
  //   try {
  //     const response = await signUpService(req.body)
  //     res.status(201).send(response)
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }
}

module.exports = { ...methods }
