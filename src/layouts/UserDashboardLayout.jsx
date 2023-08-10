import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import UserFooter from '../components/UserFooter';
import YourProfile from './pages/yourProfile';
import BundyClock from '../pages/bundyClock';
import TimeOff from '../pages/timeOff';
import Documents from '../pages/documents';

const UserDashboardLayout = () => {
  return (
    <div className="user-dashboard-layout">
      <UserHeader />
      <Routes>
        <Route path="/yourProfile" element={<YourProfile />} />
        <Route path="/bundyClock" element={<BundyClock />} />
        <Route path="/timeOff" element={<TimeOff />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
      <UserFooter />
    </div>
  );
};

export default UserDashboardLayout;
