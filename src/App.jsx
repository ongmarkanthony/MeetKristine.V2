import React, {} from 'react';
import LoginPage from "./pages/loginPage"
import yourPage from "./UserDashboard/yourProfile"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './views/UserDashboard';
import UserDashboardLayout from './layouts/UserDashboardLayout';
//import AdminDashBoardLayout from './layouts/AdminDashBoardLayout'; // 

function determineLayout(userRole) {
  if (userRole === 'user') {
    return (
      <UserDashboardLayout>
        <UserDashboard />
      </UserDashboardLayout>
    );
  } else if (userRole === 'admin') {
    return (
      <AdminDashBoardLayout>
        <AdminDashboard />
      </AdminDashBoardLayout>
    );
  }
}

const App = () => {
  const userRole = 'admin'; 
  const layout = determineLayout(userRole);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/dashboard" element={layout} />
      </Routes>
    </Router>
  );
};

export default App;
