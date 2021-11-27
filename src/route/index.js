const router = require('express').Router()
const verifyToken = require('../utils/verifyToken')

const restaurauntRoute = require('./restaurauntRoute')
const authRoute = require('./authRoute')

router.use('/', authRoute)
router.use('/restauraunt', verifyToken, restaurauntRoute)

module.exports = router
