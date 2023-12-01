/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */

const Post = require('../models/postModel');
const factory = require('./handlerFactory');
exports.setUserIds = (req, res, next) => {
    // Allow nested routes
    if (!req.body.user) req.body.user = req.user.id;
    next();
};

exports.getAllPosts = factory.getAll(Post);
exports.getPost = factory.getOne(Post);
exports.createPost = factory.createOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);
