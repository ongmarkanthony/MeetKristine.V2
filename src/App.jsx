import React, { useState } from 'react';
import LoginPage from './pages/loginPage';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';

function App() {
  const [loggedInUserRole, setLoggedInUserRole] = useState('');

  const handleLogin = (userRole) => {
    setLoggedInUserRole(userRole);
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
        </Routes>
        <Routes>
            <Route path="/UserDashboard" component={UserDashboard} />
        </Routes>
      </Router>
  );
}

export default App;
