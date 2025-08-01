const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.get('/search', postController.searchPosts);
router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);

module.exports = router;