// ALL REQUEST CONTROLLERS
const postMessage = require("../models/postsModel")


const getPosts = async (req, res) => {
    try {
        const posts = await postMessage.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getPost = async (req, res) => {
    const { _id } = req.params;

    try {
        const post = await postMessage.findById(_id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const createPost = async (req, res) => {
    const post = req.body;

    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = { createPost, getPosts, getPost }
