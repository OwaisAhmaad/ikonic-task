/* eslint-disable prettier/prettier */
const express = require('express');
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);
router.use(authController.restrictTo('admin', 'user'));
router
    .route('/')
    .get(postController.getAllPosts)
    .post(
        postController.setUserIds,
        postController.createPost);

router
    .route('/:id')
    .get(postController.getPost)
    .patch(postController.updatePost)
    .delete(
        postController.deletePost
    );

module.exports = router;
