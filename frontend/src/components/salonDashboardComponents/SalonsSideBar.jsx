import React from "react";
import { Calendar, Wallet, Scissors, Settings, House, LogOut } from "lucide-react";
import SidebarLayout from "../common/SidebarLayout";

const SalonsSideBar = ({ salonOwner }) => {
 const menuLinks = [
  { label: "Overview", route: "/salon/overview" },
  { label: "Bookings", route: "/salon/bookings" },
  { label: "Services", route: "/salon/services" },
  { label: "Wallet", route: "/salon/wallet" },
  { label: "Settings", route: "/salon/settings" },
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
