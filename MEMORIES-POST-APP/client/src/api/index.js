import axios from 'axios';

const url = 'http://localhost:3001/posts';

// FETCH ALL THE POSTS
export const fetchPosts = () => axios.get(url);

// CREATE A POST
export const createPost = (newPost) => axios.post(url, newPost);

// UPDATE A POST
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// DELETE A POST
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// LIKE A POST
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);