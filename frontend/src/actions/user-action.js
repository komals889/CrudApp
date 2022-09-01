import { ADMIN_FAIL, ADMIN_REQUEST, ADMIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/signup";
import axios from 'axios'
export const loginAction= (userLogin) => async(dispatch,getState) => {
    try {
        dispatch({ type:USER_LOGIN_REQUEST})
        const { data } = await axios.post("http://localhost:5000/api/v1/login", userLogin);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: { info:data.allData, token: data.token} })
        localStorage.setItem("loginUser",JSON.stringify(getState().userLogin.userloginRedux))
    } catch (error) {
     dispatch({ type:USER_LOGIN_FAIL,payload:error.response.data.message})
    }
 } 

 export const signupAction= (userSignUp) => async(dispatch) => {
    try {
        dispatch({ type:USER_SIGNUP_REQUEST})
        const { data } = await axios.post("http://localhost:5000/api/v1/signup",userSignUp);
        dispatch({ type:USER_SIGNUP_SUCCESS,payload:data.data})
        // console.log(data);
    } catch (error) {
     dispatch({ type:USER_SIGNUP_FAIL,payload:error})
    }
 } 

 export const adminUserDataAction= () => async(dispatch,getState) => {
    // console.warn("/////");
    // console.log(postData);
    try {
        dispatch({ type:ADMIN_REQUEST})
        const { data } = await axios.get("http://localhost:5000/api/v1/admin");
        // console.log(data.data);
        dispatch({ type: ADMIN_SUCCESS, payload:data.data })
    } catch (error) {
     dispatch({ type:ADMIN_FAIL,payload:error})
    }
}

export const logOutAction= () => async(dispatch) => {
    dispatch({ type: USER_LOGOUT })
    localStorage.removeItem("loginUser")
} 