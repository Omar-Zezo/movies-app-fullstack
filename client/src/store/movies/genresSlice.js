import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";

export const getMoviesGenre = createAsyncThunk('movies/getMoviesGenre', async (_, thunkApi)=>{    
    const {rejectWithValue} = thunkApi
    try{
        return await TMDB.get(`genre/movie/list?api_key=${API_KEY}`)
    }catch(err){
        rejectWithValue(err.response)
    }
})



const initialState = {
    data: [],
    loading: false,
    error: null,
}

const genresSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getMoviesGenre.pending, (state)=>{
         state.loading = true
        })
        builder.addCase(getMoviesGenre.fulfilled, (state, action)=>{
         state.loading = false
         state.data = action.payload
        })
        builder.addCase(getMoviesGenre.rejected, (state, action)=>{
         state.loading = false
         state.error = action.payload
        })
     }
})


export default genresSlice.reducer