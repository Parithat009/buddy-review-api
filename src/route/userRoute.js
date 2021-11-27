const express = require('express')
const userController = require('../api/user/user.controller')
const { createUserSchema } = require('../schema/userSchema')

const router = express.Router()

router
  .get('/', userController.getUsers)
  .get('/:id', userController.getUserById)
  .post('/', createUserSchema(), userController.createUser)
  .put('/:id', createUserSchema(), userController.updateUser)

module.exports = router
