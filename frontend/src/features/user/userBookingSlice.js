// src/features/bookings/userBookingsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

// Fetch user bookings
export const fetchUserBookings = createAsyncThunk(
  "userBookings/fetchUserBookings",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/bookings/my");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Cancel a booking
export const cancelUserBooking = createAsyncThunk(
  "userBookings/cancelUserBooking",
  async (bookingId, { dispatch, rejectWithValue }) => {
    try {
      await api.put(`/bookings/${bookingId}/cancel`);
      dispatch(fetchUserBookings()); // refresh bookings after cancel
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Reschedule a booking
export const rescheduleUserBooking = createAsyncThunk(
  "userBookings/rescheduleUserBooking",
  async ({ bookingId, date, time }, { dispatch, rejectWithValue }) => {
    try {
      await api.put(`/bookings/${bookingId}/reschedule`, { date, time });
      dispatch(fetchUserBookings()); // refresh bookings after reschedule
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const userBookingsSlice = createSlice({
  name: "userBookings",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch bookings
      .addCase(fetchUserBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // cancel/reschedule (optional: show error in state)
      .addCase(cancelUserBooking.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(rescheduleUserBooking.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userBookingsSlice.reducer;
