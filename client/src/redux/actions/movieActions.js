import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";



// get top rated movies
export const getTopRated = createAsyncThunk('movies/getTopRated', async (page)=>{
    return await TMDB.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
})

// get top rated movies
export const getPopular = createAsyncThunk('movies/getPopular', async (page)=>{
    return await TMDB.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
})

// get top rated movies
export const getUpcoming = createAsyncThunk('movies/getUpcoming', async (page)=>{
    return await TMDB.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
})

// get top rated movies
export const searchMovie = createAsyncThunk('movies/searchMovie', async ({keyword, page})=>{
    return await TMDB.get(`search/movie?query=${keyword}&api_key=${API_KEY}&page=${page}`)
})