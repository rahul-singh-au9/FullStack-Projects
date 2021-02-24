// ALL REQUEST CONTROLLERS
const postMessage = require("../models/post")

// POST REQUEST
const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const createdPost = new postMessage({ title, message, selectedFile, creator, tags });

    try {
        insertedPost = await createdPost.save();

        res.status(201).json(insertedPost);
    }

    catch (err) {
        res.status(409).json(err);
    }
};

// GET REQUESTS
const getPosts = async (req, res) => {
    try {
        const posts = await postMessage.find();

        res.status(200).json(posts);
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

        res.status(200).json(post);
    }

    catch (err) {
        res.status(404).json(err);
    }
};

// UPDATE INDIVISUAL REQUEST
const updatePost = async (req, res) => {
    const post = req.body;

    try {
        const _id = req.params.id
        const updatedPost = await postMessage.findByIdAndUpdate(_id, post, {new: true});

        res.status(204).json(updatedPost);
    }

    catch (err) {
        res.status(404).json(err);
    }
};


// DELETE INDIVISUAL REQUEST
const deletePost = async (req, res) => {

    try {
        const _id = req.params.id
        const post = await postMessage.findByIdAndDelete(_id);

        res.status(204).json(post);
    }

    catch(err) {
        res.status(404).send(err);
    }
};

// LIKE POST
const likePost = async (req, res) => {
    try{
        const _id = req.params.id
        const post = await postMessage.findById(_id);

        const updatedPost = await postMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount+1}, { new: true})

        res.json(updatedPost);

    }catch(err){
        res.status(404).send(err)
    }
}

module.exports = {createPost, getPosts, getPost, updatePost, deletePost, likePost}