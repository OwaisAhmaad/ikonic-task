/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const User = require('./userModel')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        select: false
    }
}
);

postSchema.index({ user: 1 });
postSchema.pre(/^find/, function (next) {


    this.populate({
        path: 'user',
        select: 'name photo'
    });
    next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
