import {AUTH} from "../constants/actionTypes";
import * as api from "../api/index";

// SIGN-UP ACTION
export const signup = (formData, history) => async (dispatch) => {

  try{
    // signup user
    history.push("/")

  } catch(error){
    console.log(error);
  }
};


// SIGN-IN USER
export const signin = (formData, history) => async (dispatch) => {

  try{
    // signup user
    history.push("/")

  } catch(error){
    console.log(error);
  }
};
