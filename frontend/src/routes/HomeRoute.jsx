import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "../components/common/HomeLayout";
import HeroPage from "../pages/home/HeroPage";
import FeaturesPage from "../pages/home/FeaturesPage";
import ServicesPage from "../pages/home/ServicesPage";
import WorkingPage from "../pages/home/HowItWorksPage";
import TestimonialsPage from "../pages/home/TestimonialsPage";
import AboutPage from "../pages/home/AboutPage";
import Home from "../pages/home/Home";

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
      </Route>
    </Routes>
  );
};

export default HomeRoute;
