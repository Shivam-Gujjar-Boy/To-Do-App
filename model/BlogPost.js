const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
  commenter: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const likeSchema = new mongoose.Schema({
  liker: {
    type: String,
    required: true,
  },
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLen: 50,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comment: [commentSchema],
  likes: [likeSchema],
});

module.exports = mongoose.model("BlogPost", postSchema);
