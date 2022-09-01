import { createStore, applyMiddleware, combineReducers } from "redux"

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { adminUserDataReducer, userloginReducer } from "./reducers/user-reducer"

const rootReducer=combineReducers({
    userLogin:userloginReducer,
    allUsers:adminUserDataReducer
})
const userInfoFromLocalStore = localStorage.getItem("loginUser")
    ? JSON.parse(localStorage.getItem("loginUser"))  
    : undefined;
  
const intial = {
    userLogin:{
        userloginRedux:userInfoFromLocalStore
      }
  }  
const store = createStore(rootReducer,  intial, composeWithDevTools(applyMiddleware(thunk)))

export default store;