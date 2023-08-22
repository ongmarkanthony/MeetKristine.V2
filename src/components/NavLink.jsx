import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }
  
  return (
    <div className="p-4 flex flex-col space-y-2">
      <Link to="/UserDashboard" onClick={() => handleLinkClick('/UserDashboard')}>Dashboard</Link>
      <Link to="/UserProfile" onClick={() => handleLinkClick('/UserProfile')}>Profile</Link>
      <Link to="/BundyClock" onClick={() => handleLinkClick('/BundyClock')}>Bundy Clock</Link>
      <Link to="/TimeOff" onClick={() => handleLinkClick('/TimeOff')}>Time Off</Link>
      <Link to="/Documents" onClick={() => handleLinkClick('/Documents')}>Documents</Link>
      <Link to="/EmployeeDirectory" onClick={() => handleLinkClick('/EmployeeDirectory')}>Directory</Link>
      <Link to="/AdminDashboard" onClick={() => handleLinkClick('/AdminDashboard')}>Admin Dashboard</Link>
      <Link to="/">Reports</Link>
      <div className="ml-4 flex flex-col items-start space-y-2">
        <Link to="/" onClick={() => handleLinkClick('/EmployeeSalaryReport')}>Employee Salary Report</Link>
        <Link to="/EmployeeInfoReport" onClick={() => handleLinkClick('/EmployeeInfoReport')}>Employee Information Report</Link>
        <Link to="/PerDepartmentReport" onClick={() => handleLinkClick('/PerDepartmentReport')}>Employee Per Department</Link>
        <Link to="/EmployeeLeaveReport" onClick={() => handleLinkClick('/EmployeeLeaveReport')}>Employee Leave Report</Link>
      </div>
      <Link to="/UserManagement" onClick={() => handleLinkClick('/UserManagement')}>User Management</Link>
      <Link to="/Login" onClick={() => handleLinkClick('/Login')}>Log Out</Link>
    </div>
  );
};

export default NavLink;
