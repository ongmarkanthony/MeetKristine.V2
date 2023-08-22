import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  }
  
  return (
    <>
      <div className="p-4 flex flex-col space-y-2">
        <Link onClick={() => handleClick('/UserDashboard')} to="/UserDashboard">Dashboard</Link>
        <Link onClick={() => handleClick('/UserProfile')} to="/UserProfile">Profile</Link>
        <Link onClick={() => handleClick('/BundyClock')} to="/BundyClock">Bundy Clock</Link>
        <Link onClick={() => handleClick('/TimeOff')} to="/TimeOff">Time Off</Link>
        <Link onClick={() => handleClick('/Documents')} to="/Documents">Documents</Link>
        <Link onClick={() => handleClick('/EmployeeDirectory')} to="/EmployeeDirectory">Directory</Link>
        <Link onClick={() => handleClick('/AdminDashboard')} to="/AdminDashboard">Admin Dashboard</Link>
        <Link onClick={() => handleClick('/ReportDashBoard')} to="/ReportDashBoard">Reports</Link>
        <div className="ml-4 flex flex-col items-start space-y-2">
          <Link onClick={() => handleClick('/EmployeeSalaryReport')} to="/EmployeeSalaryReport">Employee Salary Report</Link>
          <Link onClick={() => handleClick('/EmployeeInfoReport')} to="/EmployeeInfoReport">Employee Information Report</Link>
          <Link onClick={() => handleClick('/PerDepartmentReport')} to="/PerDepartmentReport">Employee Per Department</Link>
          <Link onClick={() => handleClick('/EmployeeLeaveReport')} to="/EmployeeLeaveReport">Employee Leave Report</Link>
        </div>
        <Link onClick={() => handleClick('/UserManagement')} to="/UserManagement">User Management</Link>
        <Link onClick={() => handleClick('/Login')} to="/Login">Log Out</Link>
      </div>
    </>
  );
};

export default NavLink;