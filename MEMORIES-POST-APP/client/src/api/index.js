import axios from "axios";

const API = axios.create({baseURL: "https://memmoriess.herokuapp.com"});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

// FETCH ALL POSTS
export const fetchPosts = () => API.get("/posts");

// CREATE A POST
export const createPost = (newPost) => API.post("/posts", newPost);

// LIKE A POST
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// UPDATE A POST
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

// DELETE A POST
export const deletePost = (id) => API.delete(`/posts/${id}`);

// SIGN-UP
export const signup = (formData) => API.post("/user/signup", formData);

// SIGN-IN
export const signin = (formData) => API.post("/user/signin", formData);

