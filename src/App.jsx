import React, { useState } from 'react';
import LoginPage from "../pages/LoginPage"
import { BrowserRouter as  Route, Routes, } from 'react-router-dom';
import "./index.css";
import UserDashboardPages from "./pages/userDashboardPages";
import UserProfile from "./pages/UserProfile";
import TimeOff from "./pages/TimeOff";
import Documents from "../components/Documents";
import BundyClock from './pages/bundyClock';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/UserDashboardPages" element={<UserDashboardPages />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/BundyClock" element={<BundyClock />} />
        <Route path="/TimeOff" element={<TimeOff />} />
        <Route path="/Document" element={<Documents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
