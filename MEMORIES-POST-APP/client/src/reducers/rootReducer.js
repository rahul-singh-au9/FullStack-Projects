import { combineReducers } from "redux";
import postsReducer from "./postsReducers";


export default combineReducers({
    posts: postsReducer
});
