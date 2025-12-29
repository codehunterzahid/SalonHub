import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../components/userDashboardComponents/UserLayout'
import SalonsPage from '../pages/userDashboardPages/SalonsPage'
import BookingsPage from '../pages/userDashboardPages/MyBookingsPage'
import WalletPage from '../pages/userDashboardPages/WalletPage'
import ProfilePage from '../pages/userDashboardPages/ProfilePage'

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<SalonsPage />} />
        <Route path="/salons" element={<SalonsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default UserRoute