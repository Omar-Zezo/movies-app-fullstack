import {createSlice} from "@reduxjs/toolkit"
import { signup } from "../actions/authActions"


const initialState = {
    signupUser: []
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(signup.fulfilled, (state, action)=>{
            state.signupUser = action.payload
        })
    }
})


export default authSlice.reducer