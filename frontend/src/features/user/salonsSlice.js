import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

// Fetch all salons from backend
export const fetchSalons = createAsyncThunk(
  "salons/fetchSalons",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/salons");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const salonsSlice = createSlice({
  name: "salons",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalons.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSalons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default salonsSlice.reducer;
