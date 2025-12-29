import { BrowserRouter } from 'react-router-dom'
import './App.css'
import HomeRoute from './routes/HomeRoute'
import UserRoute from './routes/UserRoute'
import SalonsRoute from './routes/SalonsRoute'
import ScrollToTop from './components/homePageComponents/Scroll'

function App() {

  return (
  
  <BrowserRouter>
    <ScrollToTop />
    <SalonsRoute />
  </BrowserRouter>
  
  
  
  )
}

export default App