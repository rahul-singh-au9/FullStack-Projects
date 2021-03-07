const express = require("express");

const {getCoupons, getCoupon, createCoupon} = require("../controllers/postController");

const auth = require("../middleware/auth");

const postsRouter = express.Router();

postsRouter.get("/", getCoupons);
postsRouter.post("/", auth, createCoupon);
postsRouter.get("/:id", getCoupon);

module.exports = postsRouter;