const { check } = require('express-validator')

const signinSchema = () => {
  return [
    check('username')
      .isString(),
    check('password')
      .isString()
  ]
}

const signupSchema = () => {
  return [
    check('username')
      .isString(),
    check('password')
      .isString()
  ]
}

module.exports = {
  signinSchema,
  signupSchema
}
