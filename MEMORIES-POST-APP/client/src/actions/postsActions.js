import {FETCH_ALL, CREATE, DELETE, UPDATE, LIKE} from "../constants/actionTypes";
import * as api from '../api/index.js';

// GET ALL THE POSTS
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: FETCH_ALL,
      payload: data
    });

  } catch (error) {
    console.log(error);
  }
};

// CREATE A POST
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({
      type: CREATE,
      payload: data
    });

  } catch (error) {
    console.log(error);
  }
};

// UPDATE A POST
export const updatePost = (id,post) => async (dispatch) => {
  try{
    const { data } = await api.updatePost(id, post);

    dispatch({
      type: UPDATE,
      payload: data
    });

  }catch (error) {
    console.log(error);
  }
};

// DELETE A POST
export const deletePost = (id) => async (dispatch) => {
  try{
    await api.deletePost(id);

    dispatch({
      type: DELETE,
      payload: id
    });

  } catch (error){
    console.log(error);
  }
};

// LIKE A POST
export const likePost = (id) => async (dispatch) => {
  try{

    const { data } = await api.likePost(id);

    dispatch({
      type: LIKE,
      payload: data
    });

  } catch (error) {
    console.log(error);
  }
};