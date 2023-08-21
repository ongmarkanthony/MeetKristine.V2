import React from "react";
import AdminDBMainContent from "../components/AdminDBMainContent";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <AdminDBMainContent />
    </div>
  );
};

export default AdminDashboard;
