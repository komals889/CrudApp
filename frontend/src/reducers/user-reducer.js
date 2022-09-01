import { ADMIN_FAIL, ADMIN_REQUEST, ADMIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/signup"



export const userloginReducer = (state={},{type,payload}) => {
    switch (type) {
        case  USER_LOGIN_REQUEST: return {isloading:true}
        case USER_LOGIN_SUCCESS : return{userloginRedux:payload,isloading:false}
        case USER_LOGIN_FAIL: return { userloginReduxError: payload, isloading: false }
        case USER_LOGOUT : return {}
        default:
            return state
    }
}
export const adminUserDataReducer = (state = { adminData: [] },{type,payload}) => {
    switch (type) {
        case ADMIN_REQUEST: return {adminData: [],isloading:true}
        case ADMIN_SUCCESS : return{adminData:payload,isloading:false}
        case ADMIN_FAIL: return { adminDataError:payload, isloading: false }
        default:
            return state
    }
}