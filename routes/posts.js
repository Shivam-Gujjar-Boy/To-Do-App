const express = require("express");
const router = express.Router();

//import controllers
const { createPost } = require("../controllers/createPost");
const { getPosts } = require("../controllers/getPosts");
const { like } = require("../controllers/like");
const { unlike } = require("../controllers/unlike");
const { createComment } = require("../controllers/createComment");
const { getComments } = require("../controllers/getComments");

//define API routes and link them with respective controllers
router.post("/posts/create", createPost);
router.get("/posts", getPosts);
router.put("/likes/like/:id", like);
router.put("/likes/unlike/:id", unlike);
router.put("/comments/create/:id", createComment);
router.get("/comments/:id", getComments);

module.exports = router;
