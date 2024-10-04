import {combineReducers} from "@reduxjs/toolkit"
import movieReducer from "./movieSlice"
import authReducer from "./authSlice"


const rootReducer = combineReducers({
    movieReducer,
    authReducer
})


export default rootReducer