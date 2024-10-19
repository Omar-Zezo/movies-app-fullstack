import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { baseURL } from "../../api"


const initialState = {
    data: [],
    error: null
}

export const subscribe = createAsyncThunk('subscription/subscribe', async(data, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const res = await baseURL.post("/api/subscribe", data)
        return res
    }catch(err){
        return rejectWithValue(err.response)
    }
})



const subscribeSlice = createSlice({
    name: "subscription",
    initialState,
    extraReducers: (builder)=>{
       builder.addCase(subscribe.pending, (state)=>{
        state.data = null
        state.error = null
       })
       builder.addCase(subscribe.fulfilled, (state, action)=>{
        state.data = action.payload
       })
       builder.addCase(subscribe.rejected, (state, action)=>{
        state.error = action.payload
       })
    }
    
})

export default subscribeSlice.reducer