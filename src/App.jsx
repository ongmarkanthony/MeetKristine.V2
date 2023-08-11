import React, { useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import Management from "./pages/Management";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import UserDashboardPages from "./pages/UserDashboardPage";
import UserProfile from "./pages/UserProfile";
import TimeOff from "./pages/TimeOff";
import Documents from "./pages/Documents";
<<<<<<< HEAD
import BundyClock from "./pages/BundyClock";
=======
import BundyClock from './pages/bundyClock';

>>>>>>> 79cc6c59390535015a4f79fefd51f7c06243f289

const App = () => {
  const [loggedInUserRole, setLoggedInUserRole] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/UserDashboardPages" element={<UserDashboardPages />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/BundyClock" element={<BundyClock />} />
        <Route path="/TimeOff" element={<TimeOff />} />
        <Route path="/Document" element={<Documents />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Management" element={<Management />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
