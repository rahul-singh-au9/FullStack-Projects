const express = require("express");

const {getPosts, getPost, createPost, updatePost, deletePost, likePost} = require("../controllers/postController");

const postsRouter = express.Router();

postsRouter.get("/", getPosts);
postsRouter.post("/", createPost);
postsRouter.get("/:id", getPost);
postsRouter.delete("/:id", deletePost);
postsRouter.patch("/:id", updatePost);
postsRouter.patch('/:id/likePost', likePost);

module.exports = postsRouter;