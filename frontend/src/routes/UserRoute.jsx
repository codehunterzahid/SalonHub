import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../components/userDashboardComponents/UserLayout'
import Salons from '../components/userDashboardComponents/Salons'
import MyBookings from '../components/userDashboardComponents/MyBookings'
import Profile from '../components/userDashboardComponents/Profile'
import Wallet from '../components/userDashboardComponents/Wallet'

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Salons />} />
        <Route path="/salons" element={<Salons />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default UserRoute