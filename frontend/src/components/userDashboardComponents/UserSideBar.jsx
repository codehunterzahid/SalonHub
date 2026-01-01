import React from "react";
import { Calendar, Wallet, LogOut, Scissors, User, Search } from "lucide-react";
import SidebarLayout from "../common/SidebarLayout";
const UsersSideBar = ({ customer }) => {
  const menuLinks = [
    { label: "Browse Salons", route: "/salons", icon: <Search /> },
    { label: "My Bookings", route: "/bookings", icon: <Calendar /> },
    { label: "Wallet", route: "/wallet", icon: <Wallet /> },
    { label: "Profile", route: "/profile", icon: <User /> },
  ];

  return (
    <SidebarLayout
      user={{ ...customer, logoIcon: <Scissors />, logoutIcon: <LogOut /> }}
      title="SalonHub"
      menuLinks={menuLinks}
    />
  );
};

export default UsersSideBar;
