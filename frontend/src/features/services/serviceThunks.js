import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

/* FETCH SERVICES */
export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/services");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch services"
      );
    }
  }
);

/* ADD SERVICE */
export const addService = createAsyncThunk(
  "services/addService",
  async (service, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/services", service);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add service"
      );
    }
  }
);

/* UPDATE SERVICE */
export const updateService = createAsyncThunk(
  "services/updateService",
  async (service, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/services/${service._id}`, service);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to update service");
    }
  }
);

/* DELETE SERVICE */
export const deleteService = createAsyncThunk(
  "services/deleteService",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/services/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue("Failed to delete service");
    }
  }
);
