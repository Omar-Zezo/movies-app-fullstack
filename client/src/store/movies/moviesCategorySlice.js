import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";


export const getMoviesCategory = createAsyncThunk(
  "movies/getMoviesCategory",
  async ({ page, category }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await TMDB.get(
        `movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
      );
    } catch (err) {
      rejectWithValue(err.response);
    }
  }
);

const initialState = {
  data: [],
  error: null,
};

const MoviesCategorySlice = createSlice({
  name: "moviesCategory",
  initialState,
  extraReducers: (builder) => {
    //get movies category
    builder.addCase(getMoviesCategory.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getMoviesCategory.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getMoviesCategory.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default MoviesCategorySlice.reducer;
