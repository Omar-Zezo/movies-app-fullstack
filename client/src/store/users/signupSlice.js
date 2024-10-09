import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../api";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await baseURL.post("/api/signup", data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default signupSlice.reducer;
