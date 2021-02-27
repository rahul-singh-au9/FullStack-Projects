import { combineReducers } from "redux";
import postsReducer from "./postsReducers";
import authReducer from "./authReducers";


export default combineReducers({
    posts: postsReducer,
    auth: authReducer
});
