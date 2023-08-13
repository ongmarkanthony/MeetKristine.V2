import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, icon, name }) => {
  return (
    <Link
      to={to}
      className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-700 hover:text-white mt-auto"
    >
      <i className={`mr-2 ${icon}`} /> {name}
    </Link>
  );
};

const SideNavLink = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <nav className={`flex-1 flex-col ${showSideNav ? 'flex' : 'hidden'}`}>
      <NavLink to="/ProfileInfo" icon="fas fa-home" name="Profile" />
      <NavLink to="/BundyClock" icon="fas fa-file-alt" name="Bundy Clock" />
      <NavLink to="/Timeoff" icon="fas fa-users" name="Time Off" />
      <NavLink to="/Document" icon="fas fa-store" name="Documents" />
      <NavLink to="/ReportDashBoard" icon="fas fa-exchange-alt" name="Reports" />
      <NavLink to="/EmployeeDirectory" icon="fas fa-exchange-alt" name="Directory" />
      <NavLink to="/" icon="fas fa-sign-out-alt" name="Close" />
    </nav>
  );
};

export default SideNavLink;
