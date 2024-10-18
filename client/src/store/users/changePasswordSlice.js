import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { baseURL } from "../../api"


const initialState = {
    data: [],
    error: null
}

// update logged user password
export const changePassword = createAsyncThunk('loggedUserPassword/changePassword', async({data, token}, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const config = {headers:{authorization: `Bearer ${token}`}}
        const res = await baseURL.put("/api/changePassword", data, config)
        return res
    }catch(err){
        return rejectWithValue(err.response)
    }
})



const changePasswordSlice = createSlice({
    name: "changePassword",
    initialState,
    extraReducers: (builder)=>{
       builder.addCase(changePassword.pending, (state)=>{
        state.data = null
        state.error = null
       })
       builder.addCase(changePassword.fulfilled, (state, action)=>{
        state.data = action.payload
       })
       builder.addCase(changePassword.rejected, (state, action)=>{
        state.error = action.payload
       })
    }
    
})

export default changePasswordSlice.reducer