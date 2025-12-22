import { BrowserRouter } from 'react-router-dom'
import './App.css'
import HomeRoute from './routes/HomeRoute'
import ScrollToTop from './components/homePageComponents/Scroll'

function App() {

  return (
  
  <BrowserRouter>
    <ScrollToTop />
    <HomeRoute />
  </BrowserRouter>
  
  
  
  )
}

export default App
