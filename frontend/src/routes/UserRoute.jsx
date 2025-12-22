import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../components/userDashboardComponents/UserLayout'
import Sidebar from '../components/userDashboardComponents/SideBar'
import Salons from '../components/userDashboardComponents/Salons'

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Sidebar />} />
        <Route path="/salons" element={<Salons />} />
      </Route>
    </Routes>
  )
}

export default UserRoute