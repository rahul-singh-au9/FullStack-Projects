const express = require("express");

const {getPosts, getPost, createPost, updatePost, deletePost, likePost} = require("../controllers/postControllers");

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.get("/:id", getPost);
postRouter.delete("/:id", deletePost);
postRouter.patch("/:id", updatePost);
postRouter.patch('/:id/likePost', likePost);

module.exports = postRouter;