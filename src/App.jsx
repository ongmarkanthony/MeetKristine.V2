import React, { useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import Management from "./pages/Management";
import LoginPage from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import UserProfile from "./pages/UserProfile";
import TimeOff from "./pages/TimeOff";
import Documents from "./pages/Documents";
import BundyClock from "./pages/bundyClock";
import ReportDashBoard from "./pages/ReportDashBoard";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import ApprovalPage from "./pages/ApprovalPage";
import AddUser from "./pages/AddUser";
import UserDashboard from "./pages/UserDashboard";
import PasswordResetForm from "./components/PasswordResetForm";
import EmployeeSalaryReport from "./components/EmployeeSalaryReport";
import PerformanceRatings from "./components/PerformanceRating";
import PerDepartmentReport from "./components/PerDepartmentReport";

const App = () => {
  const [loggedInUserRole, setLoggedInUserRole] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/BundyClock" element={<BundyClock />} />
        <Route path="/TimeOff" element={<TimeOff />} />
        <Route path="/Document" element={<Documents />} />
        <Route path="/Management" element={<Management />} />
        <Route path="/ReportDashBoard" element={<ReportDashBoard />} />
        <Route path="/EmployeeDirectory" element={<EmployeeDirectory />} />
        <Route path="/Approval" element={<ApprovalPage />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/PasswordResetForm" element={<PasswordResetForm />} />
        <Route path="/EmployeeSalaryReport" element={<EmployeeSalaryReport />} />
        <Route path="/PerformanceRatings" element={<PerformanceRatings />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/PerDepartmentReport" element={<PerDepartmentReport />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
