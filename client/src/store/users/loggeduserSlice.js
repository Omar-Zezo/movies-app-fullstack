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


const initialState = {
    data: [],
    isLogin: false,
    loading: false,
    error: null
}

const loggeduserSlice = createSlice({
    name: "loggeduser",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getLoggedUser.pending, (state)=>{
            state.error = null
            state.loading = true
        })
        builder.addCase(getLoggedUser.fulfilled, (state, action)=>{
            state.loading = false
            state.isLogin = true
            state.data = action.payload
        })
        builder.addCase(getLoggedUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default loggeduserSlice.reducer