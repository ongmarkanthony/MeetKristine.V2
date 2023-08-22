import React from "react";
import AdminDBMainContent from "../components/AdminDBMainContent";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <div className="sidebar">
        <NavLink />
      </div>
      <AdminDBMainContent />
    </div>
  );
};

export default AdminDashboard;
