import {AUTH} from "../constants/actionTypes";
import * as api from "../api/index";

// SIGN-UP ACTION
export const signup = (formData, router) => async (dispatch) => {

  try{
    // signup user
    const {data} = await api.signup(formData)

    dispatch({
      type: AUTH,
      data
    })

    router.push("/home")

  } catch(error){
    console.log(error);
  }
};


// SIGN-IN USER
export const signin = (formData, router) => async (dispatch) => {

  try{
    // signup user
    const { data } = await api.signin(formData)

    dispatch({
      type: AUTH,
      data
    })

    router.push("/home")

  } catch(error){
    console.log(error);
  }
};
