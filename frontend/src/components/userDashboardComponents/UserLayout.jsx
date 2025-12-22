import React, { useState } from "react";
import Sidebar from "./SideBar";
import SalonPage from "./Salons"; // Or any other page component

const UserLayout = () => {
  const [customer, setCustomer] = useState({
    name: "Zahid Khan",
    role: "Customer",
    initials: "ZK",
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar customer={customer} setCustomer={setCustomer} />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <SalonPage />
      </main>
    </div>
  );
};

export default UserLayout;
