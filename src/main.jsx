import React from 'react';
import './index.css'
import UserDashboard from '../components/UserDashboard/UserDashboardPage.jsx';
import { createRoot } from 'react-dom/client';  // Notice the lowercase 'c' in createRoot

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <UserDashboard />
  </React.StrictMode>
);
