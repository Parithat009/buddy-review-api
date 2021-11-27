const { body } = require('express-validator')

const reserveSchema = () => {
  return [
    body('customerName').isString().withMessage('Invalid customer name'),
    body('date').isString().withMessage('Invalid date'),
    body('time').isString().withMessage('Invalid time'),
  ]
}

module.exports = {
  reserveSchema
}
