import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavLink = ({ userRole }) => {
  const [activeLink, setActiveLink] = useState('');
  const loggedInUser = useSelector((state) => state.loggedInUser);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const commonLinks = [
    { to: '/UserDashboard', label: 'Dashboard' },
    { to: '/UserProfile', label: 'Profile' },
    { to: '/BundyClock', label: 'Bundy Clock' },
    { to: '/TimeOff', label: 'Time Off' },
    { to: '/Documents', label: 'Documents' },
    { to: '/EmployeeDirectory', label: 'Directory' },
  ];

  const adminLinks = [
    { to: '/AdminDashboard', label: 'Admin Dashboard' },
    { to: '/UserManagement', label: 'User Management' },
  ];

  const additionalLinks = [
    { to: '/', label: 'Reports' },
    { to: '/SalaryReport', label: 'Employee Salary Report' },
    { to: '/EmployeeInfoReport', label: 'Employee Information Report' },
    { to: '/Department', label: 'Employee Per Department' },
    { to: '/EmployeeLeaveReport', label: 'Employee Leave Report' },
  ];

  const renderLinks = () => {
    return (
      <>
        {userRole === 'USER' && commonLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => handleLinkClick(link.to)}
          >
            {link.label}
          </Link>
        ))}

        {/* Conditionally render admin links */}
        {userRole === 'admin' && adminLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => handleLinkClick(link.to)}
          >
            {link.label}
          </Link>
        ))}

        {/* Conditionally render additional links for admin role */}
        {userRole === 'admin' && additionalLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => handleLinkClick(link.to)}
          >
            {link.label}
          </Link>
        ))}

        <Link to="/Login" onClick={() => handleLinkClick('/Login')}>
          Log Out
        </Link>
      </>
    );
  };

  return (
    <div className="p-4 flex flex-col space-y-2 relative border w-64 bg-blue-500 h-screen">
      {renderLinks()}
    </div>
  );
};

export default NavLink;
