import Navbar from "../../components/homePageComponents/NavBar";
import Hero from "../../components/homePageComponents/HeroSection";
import Features from "../../components/homePageComponents/FeaturesSection";
import Services from "../../components/homePageComponents/ServicesSection";
import Working from "../../components/homePageComponents/HowItWorksSection";
import Testimonials from "../../components/homePageComponents/TestimonialsSection";
import About from "../../components/homePageComponents/AboutSection";
import CTA from "../../components/homePageComponents/CallToAction";
import Footer from "../../components/homePageComponents/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Working />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
