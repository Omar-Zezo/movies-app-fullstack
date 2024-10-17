import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB } from "../../api";

export const getMoviesWithFilter = createAsyncThunk(
  "movies/getMoviesWithFilter",
  async ({ page, queryStr }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return await TMDB.get(
        `discover/movie?api_key=${API_KEY}&${queryStr}&page=${page}`
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

const discoverSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    //get movies with filter
    builder.addCase(getMoviesWithFilter.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getMoviesWithFilter.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getMoviesWithFilter.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default discoverSlice.reducer;
