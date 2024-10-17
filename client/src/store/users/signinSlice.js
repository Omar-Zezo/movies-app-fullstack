import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { baseURL } from "../../api"


export const signin = createAsyncThunk('auth/signin', async(data, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const res = await baseURL.post("/api/signin", data)
        return res
    }catch(err){
        return rejectWithValue(err.response)
    }
})

const initialState = {
    data: [],
    error: null
}

const signinSlice = createSlice({
    name: "signup",
    initialState,
    extraReducers: (builder)=>{
       builder.addCase(signin.pending, (state)=>{
        state.error = null
       })
       builder.addCase(signin.fulfilled, (state, action)=>{
        state.data = action.payload
       })
       builder.addCase(signin.rejected, (state, action)=>{
        state.error = action.payload
       })
    }
    
})

export default signinSlice.reducer