import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/Routes'
import HomeRoute from './routes/HomeRoute'
import UserRoute from './routes/UserRoute'
import SalonsRoute from './routes/SalonsRoute'
import AdminRoute from './routes/AdminRoute'
import ScrollToTop from './utils/ScrollToTop'

function App() {

  return (
  
  <BrowserRouter>
    <ScrollToTop />
    <HomeRoute />
  </BrowserRouter>
  
  
  
  )
}

export default App