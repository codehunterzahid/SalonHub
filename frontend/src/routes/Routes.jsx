// src/routes/Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

/* ===== Public Pages ===== */
import Home from "../pages/homePage/Home";
import SignupPage from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/LoginPage";

/* ===== User Dashboard ===== */
import UserLayout from "../components/userDashboardComponents/UserLayout";
import UserSalonsPage from "../pages/userDashboardPages/SalonsPage";
import UserBookingsPage from "../pages/userDashboardPages/MyBookingsPage";
import UserWalletPage from "../pages/userDashboardPages/WalletPage";
import UserProfilePage from "../pages/userDashboardPages/ProfilePage";

/* ===== Salon Dashboard ===== */
import SalonsLayout from "../components/salonDashboardComponents/SalonsLayout";
import SalonOverviewPage from "../pages/salonDashboardPages/OverviewPage";
import SalonBookingsPage from "../pages/salonDashboardPages/BookingsPage";
import SalonServicesPage from "../pages/salonDashboardPages/ServicesPage";
import SalonWalletPage from "../pages/salonDashboardPages/WalletPage";
import SalonSettingsPage from "../pages/salonDashboardPages/SettingsPage";

/* ===== Admin Dashboard ===== */
import AdminLayout from "../components/adminDashboardComponents/AdminLayout";
import AdminOverviewPage from "../pages/adminDashboardPages/OverviewPage";
import AdminSalonsPage from "../pages/adminDashboardPages/SalonsPage";
import AdminTransactionsPage from "../pages/adminDashboardPages/TransactionsPage";
import AdminWalletPage from "../pages/adminDashboardPages/WalletPage";
import AdminSettingsPage from "../pages/adminDashboardPages/SettingsPage";

/* ===== Protection ===== */
import ProtectedRoute from "../utils/ProtectedRoute";
const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* ================= USER DASHBOARD ================= */}
      <Route element={<ProtectedRoute allowedRole="customer" />}>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserSalonsPage />} />
          <Route path="salons" element={<UserSalonsPage />} />
          <Route path="bookings" element={<UserBookingsPage />} />
          <Route path="wallet" element={<UserWalletPage />} />
          <Route path="profile" element={<UserProfilePage />} />
        </Route>
      </Route>

      {/* ================= SALON DASHBOARD ================= */}
      <Route element={<ProtectedRoute allowedRole="salonOwner" />}>
        <Route path="/salon" element={<SalonsLayout />}>
          <Route index element={<SalonOverviewPage />} />
          <Route path="overview" element={<SalonOverviewPage />} />
          <Route path="bookings" element={<SalonBookingsPage />} />
          <Route path="services" element={<SalonServicesPage />} />
          <Route path="wallet" element={<SalonWalletPage />} />
          <Route path="settings" element={<SalonSettingsPage />} />
        </Route>
      </Route>

      {/* ================= ADMIN DASHBOARD ================= */}
      <Route element={<ProtectedRoute allowedRole="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminOverviewPage />} />
          <Route path="overview" element={<AdminOverviewPage />} />
          <Route path="salons" element={<AdminSalonsPage />} />
          <Route path="transactions" element={<AdminTransactionsPage />} />
          <Route path="wallet" element={<AdminWalletPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
