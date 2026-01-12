import React from "react";
import { Calendar, Wallet, Settings, House, LogOut, Building2, ChartNoAxesCombined } from "lucide-react";
import SidebarLayout from "../common/SidebarLayout";

const AdminSideBar = ({ admin }) => {  
  const menuLinks = [
  { label: "Overview", route: "/admin/overview" },
  { label: "Salons", route: "/admin/salons" },
  { label: "Transactions", route: "/admin/transactions" },
  { label: "Wallet", route: "/admin/wallet" },
  { label: "Settings", route: "/admin/settings" },
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
