import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";

// get top rated movies
export const getUpcoming = createAsyncThunk('movies/getUpcoming', async (page, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        return await TMDB.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
    }catch(err){
        rejectWithValue(err.response)
    }
})



const initialState = {
    data: [],
    loading: false,
    error: null,
}

const upcomingMoviesSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getUpcoming.pending, (state)=>{
         state.loading = true
        })
        builder.addCase(getUpcoming.fulfilled, (state, action)=>{
         state.loading = false
         state.data = action.payload
        })
        builder.addCase(getUpcoming.rejected, (state, action)=>{
         state.loading = false
         state.error = action.payload
        })
     }
})


export default upcomingMoviesSlice.reducer