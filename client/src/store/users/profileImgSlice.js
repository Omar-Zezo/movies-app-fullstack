import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { getLoggedUser } from "./loggeduserSlice"
import { baseURL } from "../../api"


const initialState = {
    data: [],
    error: null
}

// update user profile image
export const updateProfileImg = createAsyncThunk('profileImg/updateProfileImg', async({formData, token}, thunkApi)=>{
    const {rejectWithValue, dispatch} = thunkApi
    try{
        const config = {headers:{"Content-Type": "multipart/form-data", authorization: `Bearer ${token}`}}
        const res = await baseURL.put("/api/profileImg", formData, config)
        dispatch(getLoggedUser(token))
        return res
    }catch(err){
        return rejectWithValue(err.response)
    }
})

// remove profile image
export const removeProfileImg = createAsyncThunk('profileImg/removeProfileImg', async(token, thunkApi)=>{
    const {rejectWithValue, dispatch} = thunkApi
    try{
        const config = {headers: {authorization: `Bearer ${token}`}}
        const res = await baseURL.delete("/api/profileImg", config)
        dispatch(getLoggedUser(token))
        return res
    }catch(err){
        return rejectWithValue(err.response)
    }
})


const profileImgSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: (builder)=>{
        //add
       builder.addCase(updateProfileImg.pending, (state)=>{
        state.error = null
       })
       builder.addCase(updateProfileImg.fulfilled, (state, action)=>{
        state.data = action.payload
       })
       builder.addCase(updateProfileImg.rejected, (state, action)=>{
        state.error = action.payload
       })
       // remove
       builder.addCase(removeProfileImg.pending, (state)=>{
        state.error = null
       })
       builder.addCase(removeProfileImg.fulfilled, (state, action)=>{
        state.data = action.payload
       })
       builder.addCase(removeProfileImg.rejected, (state, action)=>{
        state.error = action.payload
       })
    }
    
})

export default profileImgSlice.reducer