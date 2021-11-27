const router = require('express').Router()
const { findAll, findOne, reserve } = require('../api/restaurant/restaurant.controller')
const validateRequestSchema = require('../utils/validateRequestSchema')
const { reserveSchema } = require('../schema/restaurauntSchema')

router
  .get(
    '/',
    findAll
  )
  .get(
    '/:id',
    findOne
  )
  .put(
    '/:id',
    reserveSchema(),
    validateRequestSchema,
    reserve
  )

module.exports = router
