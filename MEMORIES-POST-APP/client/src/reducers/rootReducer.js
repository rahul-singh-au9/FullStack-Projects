// IMPORTING COMBINE_REDUCERS FROM REDUX TO COMBINE ALL THE REDUCERS
import { combineReducers } from 'redux';

import postsReducer from "./postsReducer"

export default combineReducers({
    posts: postsReducer
});