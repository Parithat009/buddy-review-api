const router = require('express').Router()
const { signIn, signUp } = require('../api/auth/auth.controller')
const { signinSchema, signupSchema } = require('../schema/authSchema')
const validateRequestSchema = require('../utils/validateRequestSchema')

router
  .post(
    '/signin',
    signinSchema(),
    validateRequestSchema,
    signIn
  )
  .post(
    '/signup',
    signupSchema(),
    validateRequestSchema,
    signUp
  )

module.exports = router
