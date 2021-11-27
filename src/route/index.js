const router = require('express').Router()
const verifyToken = require('../utils/verifyToken')

// const userRoute = require('./userRoute')
const restaurauntRoute = require('./restaurauntRoute')
const authRoute = require('./authRoute')

// router.use('/user', verifyToken, userRoute)
router.use('/', authRoute)
router.use('/restauraunt', verifyToken, restaurauntRoute)

module.exports = router
