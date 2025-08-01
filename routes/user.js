const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const postController = require('../controllers/post');

router.post('/token', userController.generateToken);
router.post('/register', userController.createUser);
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.delete('/', userController.truncateUsers);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);
router.get('/:username/posts', postController.getPostsByUser);

module.exports = router;