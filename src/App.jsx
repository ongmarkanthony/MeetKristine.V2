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
import ProfileInfoForm from "./components/ProfileInfoForm";
import ApprovalPage from "./pages/ApprovalPage";
import AddUser from "./pages/AddUser";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  const [loggedInUserRole, setLoggedInUserRole] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/BundyClock" element={<BundyClock />} />
        <Route path="/TimeOff" element={<TimeOff />} />
        <Route path="/Document" element={<Documents />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Management" element={<Management />} />
        <Route path="/ReportDashBoard" element={<ReportDashBoard />} />
        <Route path="/EmployeeDirectory" element={<EmployeeDirectory />} />
        <Route path="/ProfileInfo" element={<ProfileInfoForm />} />
        <Route path="/Approval" element={<ApprovalPage />} />
        <Route path="/AddUser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
