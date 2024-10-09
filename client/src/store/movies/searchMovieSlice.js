import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";

export const searchMovie = createAsyncThunk('movies/searchMovie', async ({keyword, page}, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        return await TMDB.get(`search/movie?query=${keyword}&api_key=${API_KEY}&page=${page}`)
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
        builder.addCase(searchMovie.pending, (state)=>{
         state.error = false   
         state.loading = true
         state.data = []
        })
        builder.addCase(searchMovie.fulfilled, (state, action)=>{
         state.loading = false
         state.data = action.payload
        })
        builder.addCase(searchMovie.rejected, (state, action)=>{
         state.loading = false
         state.error = action.payload
        })
     }
})


export default singleMovieSlice.reducer