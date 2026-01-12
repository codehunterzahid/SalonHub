import React from "react";
import Sidebar from "./SalonsSideBar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SalonsLayout = () => {
  const { user } = useAuth();

  const initials = user
    ? user.initials || user.name.split(" ").map(n => n[0]).join("")
    : "";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {user && <Sidebar salonOwner={{ ...user, initials }} />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SalonsLayout;
