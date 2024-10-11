import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";

// get popular movies
export const getMoviesByCategory = createAsyncThunk('movies/getMoviesByCategory', async ({page, category}, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        return await TMDB.get(`movie${category}?api_key=${API_KEY}&language=en-US&page=${page}`)
    }catch(err){
        rejectWithValue(err.response)
    }
})



const initialState = {
    data: [],
    loading: false,
    error: null,
}

const MoviesSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getMoviesByCategory.pending, (state)=>{
         state.loading = true
        })
        builder.addCase(getMoviesByCategory.fulfilled, (state, action)=>{
         state.loading = false
         state.data = action.payload
        })
        builder.addCase(getMoviesByCategory.rejected, (state, action)=>{
         state.loading = false
         state.error = action.payload
        })
     }
})


export default MoviesSlice.reducer