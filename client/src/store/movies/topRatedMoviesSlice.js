import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";

// get top rated movies
export const getTopRated = createAsyncThunk('movies/getTopRated', async (page, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        return await TMDB.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
    }catch(err){
        rejectWithValue(err.response)
    }
})



const initialState = {
    data: [],
    loading: false,
    error: null,
}

const topRatedMoviesSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getTopRated.pending, (state)=>{
         state.loading = true
        })
        builder.addCase(getTopRated.fulfilled, (state, action)=>{
         state.loading = false
         state.data = action.payload
        })
        builder.addCase(getTopRated.rejected, (state, action)=>{
         state.loading = false
         state.error = action.payload
        })
     }
})


export default topRatedMoviesSlice.reducer