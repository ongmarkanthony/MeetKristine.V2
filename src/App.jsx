import React, { useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import Management from "./pages/Management";
import LoginPage from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import UserProfile from "./pages/UserProfile";
import TimeOff from "./pages/TimeOff";
import Documents from "./pages/Documents";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import ApprovalPage from "./pages/ApprovalPage";
import AddUser from "./components/AddUser";
import UserDashboard from "./pages/UserDashboard";
import PasswordResetForm from "./components/PasswordResetForm";
import EmployeeSalaryReport from "./components/EmployeeSalaryReport";
import PerformanceRatings from "./components/PerformanceRating";
import PerDepartmentReport from "./components/PerDepartmentReport";
import UpdatePassword from "./components/UpdatePassword";
import NewPassword from "./components/UpdatePassword";
import ProfileInfoForm from "./components/ProfileInfoForm";
import SalaryReport from "./pages/SalaryReport";
import FileUpload from "./components/FileUpload";
import EmployeeInformationReport from "./pages/EmployeeInfoReport";
import EmpInfoReport from "./components/EmpInfoReport";
import UserManagement from "./pages/UserManagement";
import BundyClock from "./pages/BundyClock";
import EmployeeLeaveReport from "./components/EmployeeLeaveSummaryReport";
import TimeTracker from "./components/TimeTracker";
import EmployeePerDepartment from "./components/PerDepartmentReport";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  const [loggedInUserRole, setLoggedInUserRole] = useState("admin");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/BundyClock" element={<BundyClock />} />
          <Route path="/TimeOff" element={<TimeOff />} />
          <Route path="/Documents" element={<Documents />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/EmployeeDirectory" element={<EmployeeDirectory />} />
          <Route path="/Approval" element={<ApprovalPage />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/PasswordResetForm" element={<PasswordResetForm />} />
          <Route
            path="/EmployeeSalaryReport"
            element={<EmployeeSalaryReport />}
          />
          <Route path="/PerformanceRatings" element={<PerformanceRatings />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route
            path="/PerDepartmentReport"
            element={<PerDepartmentReport />}
          />
          <Route path="/UpdatePassword" element={<UpdatePassword />} />
          <Route path="/PasswordResetForm" element={<NewPassword />} />
          <Route path="/ProfileInfoForm" element={<ProfileInfoForm />} />
          <Route path="/SalaryReport" element={<SalaryReport />} />
          <Route path="/FileUpload" element={<FileUpload />} />
          <Route
            path="/EmployeeInformationReport"
            element={<EmployeeInformationReport />}
          />
          <Route path="/EmpInfoReport" element={<EmpInfoReport />} />
          <Route path="/UserManagement" element={<UserManagement />} />
          <Route
            path="/EmployeeLeaveSummaryReport"
            element={<EmployeeLeaveReport />}
          />
          <Route path="/TimeTracker" element={<TimeTracker />} />
          <Route
            path="/EmployeePerDepartment"
            element={<EmployeePerDepartment />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
