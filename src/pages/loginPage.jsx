import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../utils/userAuth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigateTo = useNavigate();

  const handleLogin = () => {
    const role = authenticateUser(username, password);
    setUserRole(role);

    switch (role) {
      case 'User':
        navigateTo('/userDashboard');
        break;
      case 'Manager':
      case 'Admin':
        navigateTo('/adminDashboard');
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">Employee Login</h2>
        <div className="relative mb-4">
          <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
