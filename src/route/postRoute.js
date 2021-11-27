const express = require('express')
const { getPosts, getPostById, createPost, updatePost } = require('../api/post/post.controller')
const { createPostSchema, updatePostSchema } = require('../schema/postSchema')

const router = express.Router()

router
  .get('/', getPosts)
  .get('/:id', getPostById)
  .post('/', createPostSchema(), createPost)
  .put('/:id', updatePostSchema(), updatePost)

module.exports = router
