const { check, body } = require('express-validator')

const createUserSchema = () => {
  return [
    body('name').isString().withMessage('Input name'),
    body('username').isString().withMessage('input username'),
    // body('email')
    //   .isEmail().withMessage('Input email')
    //   .isLength(25).withMessage('length email')
  ]
}

const updateUserSchema = () => {
  return [
    body('name').isString().withMessage('Input name'),
    body('username').isString().withMessage('input username'),
    // body('email')
    //   .isEmail().withMessage('Input email')
    //   .isLength(25).withMessage('length email')
  ]
}

module.exports = {
  createUserSchema,
  updateUserSchema
}
