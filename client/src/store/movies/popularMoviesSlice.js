import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";

// get popular movies
export const getPopular = createAsyncThunk('movies/getPopular', async (page, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        return await TMDB.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    }catch(err){
        rejectWithValue(err.response)
    }
})



const initialState = {
    data: [],
    loading: false,
    error: null,
}

const popularMoviesSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getPopular.pending, (state)=>{
         state.loading = true
        })
        builder.addCase(getPopular.fulfilled, (state, action)=>{
         state.loading = false
         state.data = action.payload
        })
        builder.addCase(getPopular.rejected, (state, action)=>{
         state.loading = false
         state.error = action.payload
        })
     }
})


export default popularMoviesSlice.reducer