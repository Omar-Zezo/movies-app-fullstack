import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { getLoggedUser } from "./loggeduserSlice"
import { baseURL } from "../../api"

// add to wishlist
export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async({data, token}, thunkApi)=>{
    const {rejectWithValue, dispatch} = thunkApi
    try{
        const config = {headers: {authorization: `Bearer ${token}`}}
        const res = await baseURL.post("/api/wishlist", data, config)
        dispatch(getLoggedUser(token))
        return res
    }catch(err){
        return rejectWithValue(err.response)
    }
})

// remove from wishlist
export const removeFromWishlist = createAsyncThunk('wishlist/removeFromWishlist', async({data, token}, thunkApi)=>{
    const {rejectWithValue, dispatch} = thunkApi
    try{
        const config = {headers: {authorization: `Bearer ${token}`}}
        const res = await baseURL.put("/api/wishlist", data, config)
        dispatch(getLoggedUser(token))
        return res
    }catch(err){
        return rejectWithValue(err.response)
    }
})

const initialState = {
    data: [],
    loading: false,
    error: null
}

const wishlistSlice = createSlice({
    name: "signup",
    initialState,
    extraReducers: (builder)=>{
        //add
       builder.addCase(addToWishlist.pending, (state)=>{
        state.error = null
        state.loading = true
       })
       builder.addCase(addToWishlist.fulfilled, (state, action)=>{
        state.loading = false
        state.data = action.payload
       })
       builder.addCase(addToWishlist.rejected, (state, action)=>{
        state.loading = false
        state.error = action.payload
       })
       // remove
       builder.addCase(removeFromWishlist.pending, (state)=>{
        state.error = null
        state.loading = true
       })
       builder.addCase(removeFromWishlist.fulfilled, (state, action)=>{
        state.loading = false
        state.data = action.payload
       })
       builder.addCase(removeFromWishlist.rejected, (state, action)=>{
        state.loading = false
        state.error = action.payload
       })
    }
    
})

export default wishlistSlice.reducer