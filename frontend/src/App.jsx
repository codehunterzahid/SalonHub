import { BrowserRouter } from 'react-router-dom'
import './App.css'
import HomeRoute from './routes/HomeRoute'
import UserRoute from './routes/UserRoute'
import SalonsRoute from './routes/SalonsRoute'
import AdminRoute from './routes/AdminRoute'
import ScrollToTop from './components/homePageComponents/Scroll'

function App() {

  return (
  
  <BrowserRouter>
    <ScrollToTop />
    <AdminRoute />
  </BrowserRouter>
  
  
  
  )
}

export default App