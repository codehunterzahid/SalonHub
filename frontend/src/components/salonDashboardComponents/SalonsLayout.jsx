import React, { useState } from "react";
import Sidebar from "./SalonsSideBar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const [customer, setCustomer] = useState({
    name: "Ali Raza",
    role: "Salon Owner",
    initials: "AR",
  });

  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar customer={customer} setCustomer={setCustomer} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
