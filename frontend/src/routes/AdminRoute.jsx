import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/adminDashboardComponents/AdminLayout";
import SalonsPage from "../pages/adminDashboardPages/SalonsPage";
import AdminSettingsPage from "../pages/adminDashboardPages/SettingsPage";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="/salons" element={<SalonsPage />} />
        <Route path="/settings" element={<AdminSettingsPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;
