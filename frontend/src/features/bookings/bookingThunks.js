import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

// FETCH SALON BOOKINGS
export const fetchSalonBookings = createAsyncThunk(
  "bookings/fetchSalonBookings",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/bookings/salon");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch bookings");
    }
  }
);

// MARK BOOKING AS COMPLETED
export const completeBooking = createAsyncThunk(
  "bookings/completeBooking",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/bookings/${id}/complete`);
      return { id, status: data.status };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update booking");
    }
  }
);
