import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import Services from "../../components/home/Services";
import Working from "../../components/home/HowItWorks";
import Testimonials from "../../components/home/Testimonials";
import About from "../../components/home/About";
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
