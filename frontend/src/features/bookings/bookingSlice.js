import { createSlice } from "@reduxjs/toolkit";
import { fetchSalonBookings, completeBooking } from "./bookingThunks";

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // FETCH BOOKINGS
      .addCase(fetchSalonBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSalonBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchSalonBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // COMPLETE BOOKING
      .addCase(completeBooking.fulfilled, (state, action) => {
        const { id, status } = action.payload;
        const booking = state.bookings.find((b) => b._id === id);
        if (booking) booking.status = status;
      });
  },
});

export default bookingSlice.reducer;
