const router = require('express').Router()
const { findAll, findOne, reserve } = require('../api/restaurant/restaurant.controller')
const validateRequestSchema = require('../utils/validateRequestSchema')

router
  .get(
    '/',
    findAll
  )
  .get(
    '/:id',
    findOne
  )

module.exports = router
