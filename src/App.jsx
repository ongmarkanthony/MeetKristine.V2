import React, { useState } from 'react';
import LoginPage from './pages/loginPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserDashboard from './pages/userDashboardPage';

function App() {
  const [loggedInUserRole, setLoggedInUserRole] = useState('');

  const handleLogin = (userRole) => {
    setLoggedInUserRole(userRole);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
        <Route
          path="/userDashboard"
          element={
            loggedInUserRole === 'user' ? (
              <UserDashboard />
            ) : (
              <Link to="/.pages/userDashboardPage">User Dashboard</Link>
            )
          }
        />
       {/* <Route
          path="/adminDashboard"
          element={
            loggedInUserRole === 'admin' ? (
              <AdminDashboard />
            ) : (
              <Link to="/adminDashboard">Admin Dashboard</Link>
            )
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
