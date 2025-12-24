import HeroPage from "./HeroPage";
import FeaturesPage from "./FeaturesPage";
import ServicesPage from "./ServicesPage";
import WorkingPage from "./HowItWorksPage";
import TestimonialsPage from "./TestimonialsPage";
import AboutPage from "./AboutPage";

import React from "react";

export const Home = () => {
  return (
    <>
      <HeroPage />
      <FeaturesPage />
      <ServicesPage />
      <WorkingPage />
      <TestimonialsPage />
      <AboutPage />
    </>
  );
};

export default Home;
