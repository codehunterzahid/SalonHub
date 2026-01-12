import React from "react";
import { Calendar, Wallet, LogOut, Scissors, User, Search } from "lucide-react";
import SidebarLayout from "../common/SidebarLayout";
const UsersSideBar = ({ customer }) => {
  const menuLinks = [
  { label: "Browse Salons", route: "/user/salons" },
  { label: "My Bookings", route: "/user/bookings" },
  { label: "Wallet", route: "/user/wallet" },
  { label: "Profile", route: "/user/profile" },
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
