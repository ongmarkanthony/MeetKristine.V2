import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ userRole }) => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  const commonLinks = [
    { to: '/UserDashboard', label: 'Dashboard' },
    { to: '/UserProfile', label: 'Profile' },
    { to: '/BundyClock', label: 'Bundy Clock' },
    { to: '/TimeOff', label: 'Time Off' },
    { to: '/Documents', label: 'Documents' },
    { to: '/EmployeeDirectory', label: 'Directory' },
  ];

  const renderLinks = () => {
    return (
      <>
        {commonLinks.map((link, index) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => handleLinkClick(link.to)}
          >
            {link.label}
          </Link>
        ))}

        {/* Conditionally render admin links */}
        {userRole === 'admin' && (
          <>
            <Link to="/AdminDashboard" onClick={() => handleLinkClick('/AdminDashboard')}>Admin Dashboard</Link>
            <Link to="/UserManagement" onClick={() => handleLinkClick('/UserManagement')}>User Management</Link>
          </>
        )}

        {/* Common links continued */}
        <Link to="/">Reports</Link>
        <div className="ml-4 flex flex-col items-start space-y-2">
          <Link to="/SalaryReport" onClick={() => handleLinkClick('/EmployeeSalaryReport')}>Employee Salary Report</Link>
          <Link to="/EmployeeInfoReport" onClick={() => handleLinkClick('/EmployeeInfoReport')}>Employee Information Report</Link>
          <Link to="/Department" onClick={() => handleLinkClick('/PerDepartmentReport')}>Employee Per Department</Link>
          <Link to="/EmployeeLeaveReport" onClick={() => handleLinkClick('/EmployeeLeaveReport')}>Employee Leave Report</Link>
        </div>
        <Link to="/Login" onClick={() => handleLinkClick('/Login')}>Log Out</Link>
      </>
    );
  };

  return (
    <div className="p-4 flex flex-col space-y-2 relative  border w-64 bg-blue-500 h-screen">
      {renderLinks()}
    </div>
  );
};

export default NavLink;
