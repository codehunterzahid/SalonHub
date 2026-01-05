import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/Home";
import SignUpPage from "../pages/auth/SignupPage";
import LogInPage from "../pages/auth/LoginPage";

const HomeRoute = () => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Auth Pages */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
    </Routes>
  );
};

export default HomeRoute;
