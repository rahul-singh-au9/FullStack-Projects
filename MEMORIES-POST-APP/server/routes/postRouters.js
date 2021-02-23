const express = require("express");

const {createPost, getPosts, getPost, updatePost, deletePost} = require("../controllers/postControllers");

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.get("/:id", getPost);
postRouter.delete("/:id", deletePost);
postRouter.patch("/:id", updatePost);

module.exports = postRouter;