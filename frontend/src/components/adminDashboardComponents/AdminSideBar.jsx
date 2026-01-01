import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Calendar,
  Wallet,
  LogOut,
  Scissors,
  House,
  Menu,
  Settings,
  X,
  Building2,
  ChartNoAxesCombined,
} from "lucide-react";

const UserSideBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow p-4 flex items-center">
        <button className="text-black" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
        <h2 className="ml-4 font-semibold text-black">Salon Dashboard</h2>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:sticky md:top-0
          top-0 left-0 z-50
          h-screen w-64 bg-white shadow-lg
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          flex flex-col
        `}
      >
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500">
              <Scissors className="text-white" size={22} />
            </div>
            <span className="ml-2 font-bold text-xl bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              SalonHub
            </span>
          </div>

          <button className="md:hidden text-black" onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        <div className="mx-6 mb-6 bg-gray-100 p-4 rounded-lg flex items-center">
          <div className="w-12 h-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            {admin.initials}
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-black">{admin.name}</h3>
            <p className="text-sm text-gray-500">{admin.role}</p>
          </div>
        </div>

        <nav className="flex-1 px-6">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              `flex items-center mb-4 px-3 py-3 rounded-lg transition-all
       ${
         isActive
           ? "text-white bg-linear-to-r from-purple-500 to-pink-500"
           : "text-gray-700 hover:bg-gray-100"
       }`
            }
          >
            <House className="mr-2" /> Overview
          </NavLink>

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
            <Building2 className="mr-2" /> Salons
          </NavLink>
          
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `flex items-center mb-4 px-3 py-3 rounded-lg transition-all
       ${
         isActive
           ? "text-white bg-linear-to-r from-purple-500 to-pink-500"
           : "text-gray-700 hover:bg-gray-100"
       }`
            }
          >
            <ChartNoAxesCombined className="mr-2" /> Transactions
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
            to="/settings"
            className={({ isActive }) =>
              `flex items-center mb-4 px-3 py-3 rounded-lg transition-all
       ${
         isActive
           ? "text-white bg-linear-to-r from-purple-500 to-pink-500"
           : "text-gray-700 hover:bg-gray-100"
       }`
            }
          >
            <Settings className="mr-2" /> Settings
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="p-4">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-red-500 px-4 py-3 rounded-lg hover:bg-red-50"
          >
            <LogOut />
            Logout
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default UserSideBar;
