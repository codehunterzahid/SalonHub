import React, { useState } from "react";
import Sidebar from "./AdminSideBar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const [admin, setAdmin] = useState({
    name: "Zahid Khan",
    role: "Customer",
    initials: "ZK",
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar admin={admin} />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
