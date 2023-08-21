import React from "react";
import {Link } from "react-router-dom";

const NavLink = () => {
  
  return (
    <>
      <div className="p-4 flex flex-col space-y-2">
        <Link to="/UserDashboard">Dashboard</Link>
        <Link to="/UserProfile">Profile</Link>
        <Link to="/BundyClock">Bundy Clock</Link>
        <Link to="/TimeOff">Time Off</Link>
        <Link to="/Documents">Documents</Link>
        <Link to="/EmployeeDirectory">Directory</Link>
        <Link to="/AdminDashboard">Admin Dashboard</Link>
        <Link to="/ReportDashBoard">
          Reports
        </Link>
          <div className="ml-4 flex flex-col items-start space-y-2">
            <Link to="/EmployeeSalaryReport">Employee Salary Report</Link>
            <Link to="/EmployeeInfoReport">Employee Information Report</Link>
            <Link to="/sub-report-3">Sub Report 3</Link>
          </div>
        <Link to="/AddUser">Add User</Link>
        <Link to="/LoginPage">Log Out</Link>
      </div>
    </>
  );
};
export default NavLink;