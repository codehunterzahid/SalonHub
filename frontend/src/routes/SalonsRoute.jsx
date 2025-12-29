import React from "react";
import { Route, Routes } from "react-router-dom";
import SalonsLayout from "../components/salonDashboardComponents/SalonsLayout";
import OverviewPage from "../pages/salonDashboardPages/OverviewPage";
import BookingsPage from "../pages/salonDashboardPages/BookingsPage";

const SalonsRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SalonsLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Route>
    </Routes>
  );
};

export default SalonsRoute;
