const express = require("express");

const {getPosts, getPost, createPost, updatePost, deletePost, likePost} = require("../controllers/postController");

const auth = require("../middleware/auth");

const postsRouter = express.Router();

postsRouter.get("/", getPosts);
postsRouter.post("/", auth, createPost);
postsRouter.get("/:id", getPost);
postsRouter.delete("/:id", auth, deletePost);
postsRouter.patch("/:id", auth, updatePost);
postsRouter.patch('/:id/likePost', auth, likePost);

module.exports = postsRouter;