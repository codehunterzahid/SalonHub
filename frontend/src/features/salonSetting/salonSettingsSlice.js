import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

/* ============================
   THUNKS
============================ */

// Fetch salon settings
export const fetchSalonSettings = createAsyncThunk(
  "salonSettings/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/salon");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch settings"
      );
    }
  }
);

// Update salon settings
export const updateSalonSettings = createAsyncThunk(
  "salonSettings/update",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.put("/salon", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to save settings"
      );
    }
  }
);

/* ============================
   SLICE
============================ */

const salonSettingsSlice = createSlice({
  name: "salonSettings",
  initialState: {
    data: {
      salonName: "",
      fullName: "",
      email: "",
      location: "",
      bankAccount: "",
    },
    loading: false,
    error: null,
    saved: false,
  },
  reducers: {
    clearSaved(state) {
      state.saved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchSalonSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalonSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSalonSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateSalonSettings.pending, (state) => {
        state.loading = true;
        state.saved = false;
      })
      .addCase(updateSalonSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.saved = true;
      })
      .addCase(updateSalonSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSaved } = salonSettingsSlice.actions;
export default salonSettingsSlice.reducer;
