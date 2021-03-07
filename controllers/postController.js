// ALL REQUEST CONTROLLERS
const postMessage = require("../models/postsModel")

// POST REQUEST
const createCoupon = async (req, res) => {
    const post = req.body;

    const createdPost = new postMessage({...post, creator: req.userId,
        createdAt: new Date().toISOString()  });

    try {
        insertedPost = await createdPost.save();

        res.status(201).json(insertedPost);
    }

    catch (err) {
        res.status(409).json(err);
    }
};

// GET REQUESTS
const getCoupons = async (req, res) => {
    try {
        const posts = await postMessage.find();

        res.status(200).json(posts);
    }

    catch (error) {
        res.status(404).send(err);
    }
}


// GET INDIVISUAL REQUEST
const getCoupon = async (req, res) => {
    try {
        const _id = req.params.id
        const post = await postMessage.findById(_id);

        res.status(200).json(post);
    }

    catch (err) {
        res.status(404).json(err);
    }
};




module.exports = { createCoupon, getCoupons, getCoupon }