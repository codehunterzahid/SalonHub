import React from "react";
import { Calendar, Wallet, Settings, House, LogOut, Building2, ChartNoAxesCombined } from "lucide-react";
import SidebarLayout from "../common/SidebarLayout";

const AdminSideBar = ({ admin }) => {
  const menuLinks = [
    { label: "Overview", route: "/overview", icon: <House /> },
    { label: "Salons", route: "/salons", icon: <Building2 /> },
    { label: "Transactions", route: "/transactions", icon: <ChartNoAxesCombined /> },
    { label: "Wallet", route: "/wallet", icon: <Wallet /> },
    { label: "Settings", route: "/settings", icon: <Settings /> },
  ];

  return (
    <SidebarLayout
      user={{ ...admin, logoIcon: <Building2 />, logoutIcon: <LogOut /> }}
      title="SalonHub"
      menuLinks={menuLinks}
    />
  );
};

export default AdminSideBar;
