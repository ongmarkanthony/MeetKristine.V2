import { useState } from "react";

const NavLink = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userRole, setUserRole] = useState("Admin");

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-blue-500 w-64">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-white text-xl font-bold">Logo</h1>
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={handleToggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className={`${isSidebarOpen ? "block" : "hidden"} md:block md:pb-6`}>
        {userRole === "User" && (
          <ul className="mt-4">
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/UserDashboard">Dashboard</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/UserProfile">User Profile</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/BundyClock">Bundy Clock</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/TimeOff">Time Off</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/Documents">Upload Documents</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/EmployeeDirectory">Employee Directory</a>
            </li>
          </ul>
        )}
        {userRole === "Admin" && (
          <ul className="mt-4">
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/UserDashboard">Dashboard</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/UserProfile">User Profile</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/BundyClock">Bundy Clock</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/TimeOff">Time Off</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/Documents">Upload Documents</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/EmployeeDirectory">Employee Directory</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/AdminDashboard">Admin Dashboard</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/Reports">Reports</a>
              <ul className="pl-4">
                <li className="py-1 text-white hover:bg-blue-600">
                  <a href="/EmployeeSalaryReport">Employee Summary Report</a>
                </li>
                <li className="py-1 text-white hover:bg-blue-600">
                  <a href="/EmployeePerDepartment">EmployeePerDepartment</a>
                </li>
                <li className="py-1 text-white hover:bg-blue-600">
                  <a href="/EmployeeInformationReport">
                    Employee Information Report
                  </a>
                </li>
                <li className="py-1 text-white hover:bg-blue-600">
                  <a href="/EmployeeLeavesSummaryReport">Employee</a>
                </li>
              </ul>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/UserManagement">User Management</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
              <a href="/">Logout</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavLink;
