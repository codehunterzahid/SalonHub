import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/adminDashboardComponents/AdminLayout";
import OverviewPage from "../pages/adminDashboardPages/OverviewPage";
import SalonsPage from "../pages/adminDashboardPages/SalonsPage";
import TransactionsPage from "../pages/adminDashboardPages/TransactionsPage";
import AdminWalletPage from "../pages/adminDashboardPages/WalletPage";
import AdminSettingsPage from "../pages/adminDashboardPages/SettingsPage";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/salons" element={<SalonsPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/wallet" element={<AdminWalletPage />} />
        <Route path="/settings" element={<AdminSettingsPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;
