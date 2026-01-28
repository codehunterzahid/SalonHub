import { createSlice } from "@reduxjs/toolkit";
import {
  fetchServices,
  addService,
  updateService,
  deleteService,
} from "./serviceThunks";

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      /* FETCH */
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ADD */
      .addCase(addService.fulfilled, (state, action) => {
        state.services.unshift(action.payload);
      })

      /* UPDATE */
      .addCase(updateService.fulfilled, (state, action) => {
        state.services = state.services.map((s) =>
          s._id === action.payload._id ? action.payload : s
        );
      })

      /* DELETE */
      .addCase(deleteService.fulfilled, (state, action) => {
        state.services = state.services.filter(
          (s) => s._id !== action.payload
        );
      });
  },
});

export default serviceSlice.reducer;
