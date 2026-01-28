import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/bookings/bookingSlice";
import serviceReducer from "../features/services/serviceSlice";
import salonSettingsReducer from "../features/salonSetting/salonSettingsSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingReducer,
    services: serviceReducer,
    salonSettings: salonSettingsReducer,
  },
});
