const express = require("express");

const {getPosts, getPost, createPost } = require("../controllers/postController");

const auth = require("../middleware/auth");

const postsRouter = express.Router();

postsRouter.get("/", getPosts);
postsRouter.post("/", auth, createPost);
postsRouter.get("/:id", getPost);

module.exports = postsRouter;