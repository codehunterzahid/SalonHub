import React from "react";
import Sidebar from "./UserSideBar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // import auth context

const UserLayout = () => {
  const { user } = useAuth(); 

  const initials = user
    ? user.initials || user.name.split(" ").map(n => n[0]).join("")
    : "";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {user && <Sidebar customer={{ ...user, initials }} />}

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
