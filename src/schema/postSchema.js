const { check, body } = require('express-validator')

const createPostSchema = () => {
  return [
    body('title').isString(),
    body('body').isString(),
    check('userId').isString()
      // .optional({ checkFalsy: true })
  ]
}

const updatePostSchema = () => {
  return [
    body('title').isString(),
    body('body').isString()
      // .optional({ checkFalsy: true })
  ]
}


module.exports = {
  createPostSchema,
  updatePostSchema
}
