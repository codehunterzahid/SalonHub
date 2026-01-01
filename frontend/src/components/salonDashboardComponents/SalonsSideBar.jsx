import React from "react";
import { Calendar, Wallet, Scissors, Settings, House, LogOut } from "lucide-react";
import SidebarLayout from "../common/SidebarLayout";

const SalonsSideBar = ({ salonOwner }) => {
  const menuLinks = [
    { label: "Overview", route: "/overview", icon: <House /> },
    { label: "Bookings", route: "/bookings", icon: <Calendar /> },
    { label: "Services", route: "/services", icon: <Scissors /> },
    { label: "Wallet", route: "/wallet", icon: <Wallet /> },
    { label: "Settings", route: "/settings", icon: <Settings /> },
  ];

  return (
    <SidebarLayout
      user={{ ...salonOwner, logoIcon: <Scissors />, logoutIcon: <LogOut /> }}
      title="SalonHub"
      menuLinks = {menuLinks}
    />
  );
};

export default SalonsSideBar;
