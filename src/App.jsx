import React, { useState } from 'react';
import LoginPage from "../components/LoginPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import UserDashboard from "./components/userDashboard";
import UserProfile from "./components/UserProfile";
import TimeOff from "./components/TimeOff";
import Documents from "../components/Documents";
import BundyClock from './components/bundyClock';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {loggedIn && (
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/BundyClock" element={<BundyClock />} />
        <Route path="/TimeOff" element={<TimeOff />} />
        <Route path="/Document" element={<Documents />} />
      </Routes>
    </Router>
  );}

export default App;
