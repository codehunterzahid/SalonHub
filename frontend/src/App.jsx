import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Working from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import About from './components/About'
import CTA from './components/CallToAction'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Hero />
    <Features />
    <Services />
    <Working />
    <Testimonials />
    <About />
    <CTA />
    <Footer />
    </BrowserRouter>
  )
}

export default App
