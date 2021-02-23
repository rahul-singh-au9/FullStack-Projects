// ALL REQUEST CONTROLLERS
const postMessage = require("../models/post")


// POST REQUEST
const createPost = async (req, res) => {
    const { name, email, phone, address } = req.body;

    const createdPost = new postMessage({ name, email, phone, address });

    try {
        insertedPost = await createdPost.save();

        res.status(201).send(insertedPost);
    }

    catch (err) {
        res.status(409).send(err);
    }
};

// GET REQUESTS
const getPosts = async (req, res) => {
    try {
        const posts = await postMessage.find();

        res.send(posts);
    }

    catch (error) {
        res.status(404).send(err);
    }
}

// GET INDIVISUAL REQUEST
const getPost = async (req, res) => {
    try {
        const _id = req.params.id
        const post = await postMessage.findById(_id);

        res.status(200).send(post);
    }

    catch (err) {
        res.status(404).send(err);
    }
};

// UPDATE INDIVISUAL REQUEST
const updatePost = async (req, res) => {
    const user = req.body;

    try {
        const _id = req.params.id
        const newPost = await postMessage.findByIdAndUpdate(_id, user, {new: true});

        res.status(204).send(newPost);
    }

    catch (err) {
        res.status(404).send(err);
    }
};

// DELETE INDIVISUAL REQUEST
const deletePost = async (req, res) => {

    try {
        const _id = req.params.id
        const post = await postMessage.findByIdAndDelete(_id);

        res.status(204).send(post);
    }

    catch(err) {
        res.status(404).send(err);
    }
};

module.exports = {createPost, getPosts, getPost, updatePost, deletePost}