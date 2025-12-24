import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "../components/common/HomeLayout";
import FeaturesPage from "../pages/homePages/FeaturesPage";
import ServicesPage from "../pages/homePages/ServicesPage";
import WorkingPage from "../pages/homePages/HowItWorksPage";
import TestimonialsPage from "../pages/homePages/TestimonialsPage";
import AboutPage from "../pages/homePages/AboutPage";
import SignUpPage from "../pages/homePages/SignupPage";
import LogInPage from "../pages/homePages/LoginPage";
import Home from "../pages/homePages/Home";

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/working" element={<WorkingPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Route>
    </Routes>
  );
};

export default HomeRoute;
