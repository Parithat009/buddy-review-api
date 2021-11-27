const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./route')
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()

// app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Start server at port ${PORT}.`)
})
