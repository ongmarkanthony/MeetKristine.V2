import React from "react";
import AdminDBMainContent from "../components/AdminDBMainContent";
import MainSidebar from "../components/GlobalSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <div className="sidebar">
        <MainSidebar />
      </div>
      <AdminDBMainContent />
    </div>
  );
};

export default AdminDashboard;
