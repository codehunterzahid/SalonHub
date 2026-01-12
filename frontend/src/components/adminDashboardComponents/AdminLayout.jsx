import React from "react";
import Sidebar from "./AdminSideBar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminLayout = () => {
  const { user } = useAuth();

  const initials = user
    ? user.initials || user.name.split(" ").map(n => n[0]).join("")
    : "";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {user && <Sidebar admin={{ ...user, initials }} />}

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
