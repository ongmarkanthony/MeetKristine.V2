import React from 'react';
import './index.css'
import MainLayout from './layouts/MainLayout.jsx';
import UserDashboard from './views/UserDashboard.jsx';
import { createRoot } from 'react-dom/client';  // Notice the lowercase 'c' in createRoot

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MainLayout>
        <UserDashboard />
      </MainLayout>
  </React.StrictMode>
);
