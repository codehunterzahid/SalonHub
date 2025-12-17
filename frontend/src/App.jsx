import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Hero />
    <Features />
    <Services />
    </BrowserRouter>
  )
}

export default App
