import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const SidebarLayout = ({ user, title, menuLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow p-4 flex items-center">
        <button className="text-black" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
        <h2 className="ml-4 font-semibold text-black">{title}</h2>
      </div>

      {/* Mobile Overlay */}
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
        {/* Logo */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500">
              {user.logoIcon}
            </div>
            <span className="ml-2 font-bold text-xl bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {title}
            </span>
          </div>

          <button className="md:hidden text-black" onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        {/* User Info */}
        <div className="mx-6 mb-6 bg-gray-100 p-4 rounded-lg flex items-center">
          <div className="w-12 h-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            {user.initials}
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-black">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        </div>

        {/* links */}
        <nav className="flex-1 px-6">
          {menuLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.route}
              className={({ isActive }) =>
                `flex items-center mb-4 px-3 py-3 rounded-lg transition-all ${
                  isActive
                    ? "text-white bg-linear-to-r from-purple-500 to-pink-500"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span className="mr-2">{link.icon}</span> {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-red-500 px-4 py-3 rounded-lg hover:bg-red-50"
          >
            {user.logoutIcon} Logout
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default SidebarLayout;
