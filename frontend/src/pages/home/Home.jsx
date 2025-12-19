import Hero from "../../components/homePageComponents/Hero";
import Features from "../../components/homePageComponents/Features";
import Services from "../../components/homePageComponents/Services";
import Working from "../../components/homePageComponents/HowItWorks";
import Testimonials from "../../components/homePageComponents/Testimonials";
import About from "../../components/homePageComponents/About";
import React from "react";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Working />
      <Testimonials />
      <About />
    </>
  );
};

export default Home;
