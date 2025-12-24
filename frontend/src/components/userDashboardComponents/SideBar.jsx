import React from "react";
import { NavLink } from "react-router-dom";
import { Calendar, Wallet, User, LogOut, Scissors, Search } from "lucide-react";

const Sidebar = ({ customer }) => {
  return (
    <div className="w-64 bg-white shadow-lg p-6 flex flex-col">
      <div className="flex items-center mb-4 py-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500">
          <Scissors className="text-white" size={24} />
        </div>
        <span className="ml-2 font-bold text-xl bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          SalonHub
        </span>
      </div>

      <div className="flex items-center mb-8 bg-gray-100 p-4 rounded-lg">
        <div className="w-12 h-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
          {customer.initials}
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-black">{customer.name}</h3>
          <p className="text-gray-500 text-sm">{customer.role}</p>
        </div>
      </div>

      <nav className="flex-1">
        <NavLink
          to="/salons"
          className={({ isActive }) =>
            `flex items-center mb-4 px-3 py-3 rounded-lg transition-all
       ${
         isActive
           ? "text-white bg-linear-to-r from-purple-500 to-pink-500"
           : "text-gray-700 hover:bg-gray-100"
       }`
          }
        >
          <Search className="mr-2" /> Browse Salons
        </NavLink>

        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `flex items-center mb-4 px-3 py-3 rounded-lg transition-all
       ${
         isActive
           ? "text-white bg-linear-to-r from-purple-500 to-pink-500"
           : "text-gray-700 hover:bg-gray-100"
       }`
          }
        >
          <Calendar className="mr-2" /> My Bookings
        </NavLink>

        <NavLink
          to="/wallet"
          className={({ isActive }) =>
            `flex items-center mb-4 px-3 py-3 rounded-lg transition-all
       ${
         isActive
           ? "text-white bg-linear-to-r from-purple-500 to-pink-500"
           : "text-gray-700 hover:bg-gray-100"
       }`
          }
        >
          <Wallet className="mr-2" /> Wallet
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center mb-4 px-3 py-3 rounded-lg transition-all
       ${
         isActive
           ? "text-white bg-linear-to-r from-purple-500 to-pink-500"
           : "text-gray-700 hover:bg-gray-100"
       }`
          }
        >
          <User className="mr-2" /> Profile
        </NavLink>
      </nav>

      <NavLink to="/" className="flex items-center text-red-500 mt-auto">
        <LogOut className="mr-2" /> Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
