import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/bookings/bookingSlice";
import serviceReducer from "../features/services/serviceSlice";
import salonSettingsReducer from "../features/salonSetting/salonSettingsSlice";
import salonsReducer from "../features/user/salonsSlice";
import userBookingsReducer from "../features/user/userBookingSlice"; 


export const store = configureStore({
  reducer: {
    bookings: bookingReducer,
    services: serviceReducer,
    salonSettings: salonSettingsReducer,
    salons: salonsReducer,
    userBookings: userBookingsReducer,
  },
});
