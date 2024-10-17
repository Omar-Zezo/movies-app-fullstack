import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { baseURL } from "../../api"

export const getLoggedUser = createAsyncThunk('users/getLoggedUser', async (token, thunkAp)=>{
    const {rejectWithValue} = thunkAp
   try{
    const config = {headers: {authorization: `Bearer ${token}`}}
    return await baseURL.get("/api/getMe", config)
   }catch(err){
    return rejectWithValue(err.response)
   }
})

export const updateLoggedUser = createAsyncThunk('users/updateLoggedUser', async ({token, data}, thunkAp)=>{
    const {rejectWithValue, dispatch} = thunkAp
   try{
    const config = {headers: {authorization: `Bearer ${token}`}}
    const res = await baseURL.put("/api/updateLoggedUser", data ,config)
    dispatch(getLoggedUser(token))
    return res
   }catch(err){
    return rejectWithValue(err.response)
   }
})


const initialState = {
    data: [],
    updateUser: null,
    error: null
}

const loggeduserSlice = createSlice({
    name: "loggeduser",
    initialState,
    extraReducers: (builder)=>{
        //get logged user
        builder.addCase(getLoggedUser.pending, (state)=>{
            state.error = null
        })
        builder.addCase(getLoggedUser.fulfilled, (state, action)=>{
            state.data = action.payload
        })
        builder.addCase(getLoggedUser.rejected, (state, action)=>{
            state.error = action.payload
        })
        //update logged user
        builder.addCase(updateLoggedUser.pending, (state)=>{
            state.updateUser = null
            state.error = null
        })
        builder.addCase(updateLoggedUser.fulfilled, (state, action)=>{
            state.error = null
            state.updateUser = action.payload
        })
        builder.addCase(updateLoggedUser.rejected, (state, action)=>{
            state.updateUser = null
            state.error = action.payload
        })
    }
})

export default loggeduserSlice.reducer