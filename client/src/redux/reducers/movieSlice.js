import { createSlice } from "@reduxjs/toolkit";
import { getTopRated, getPopular, getUpcoming, searchMovie } from "../actions/movieActions";


const initialState = {
    topRated: [],
    popular: [],
    upcoming: [],
    search: [],
}


const movieSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getTopRated.fulfilled, (state, action)=>{
            state.topRated = action.payload
        }),
        builder.addCase(getPopular.fulfilled, (state, action)=>{
            state.popular = action.payload
        })
        builder.addCase(getUpcoming.fulfilled, (state, action)=>{
            state.upcoming = action.payload
        })
        builder.addCase(searchMovie.fulfilled, (state, action)=>{
            state.search = action.payload
        })
    }
})


export default movieSlice.reducer