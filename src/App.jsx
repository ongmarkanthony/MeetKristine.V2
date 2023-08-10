import React, { useState } from 'react';
import LoginPage from "../components/LoginPage"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import "./index.css";
import UserDashboard from "./components/userDashboard";
import UserProfile from "./pages/UserProfile";
import TimeOff from "./pages/TimeOff";
import Documents from "../components/Documents";
import BundyClock from './pages/bundyClock';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/BundyClock" element={<BundyClock />} />
        <Route path="/TimeOff" element={<TimeOff />} />
        <Route path="/Document" element={<Documents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
