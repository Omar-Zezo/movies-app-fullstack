import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";

// get top rated movies
export const getSingleMovie = createAsyncThunk('movies/getSingleMovie', async (id, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        return await TMDB.get(`movie/${id}?api_key=${API_KEY}`)
    }catch(err){
        rejectWithValue(err.response)
    }
})



const initialState = {
    data: [],
    loading: false,
    error: null,
}

const singleMovieSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getSingleMovie.pending, (state)=>{
         state.loading = true
        })
        builder.addCase(getSingleMovie.fulfilled, (state, action)=>{
         state.loading = false
         state.data = action.payload
        })
        builder.addCase(getSingleMovie.rejected, (state, action)=>{
         state.loading = false
         state.error = action.payload
        })
     }
})


export default singleMovieSlice.reducer