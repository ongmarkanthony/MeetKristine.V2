import React, { useState } from "react";

const Sidebar = () => {
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
      <div
        className={`${isSidebarOpen ? "block" : "hidden"} md:block md:pb-6`}
      >
        {userRole === "User" && (
        <ul className="mt-4">
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./UserDashboard">Dashboard</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./UserProfile">User Profile</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./BundyClock">Bundy Clock</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./TimeOff">Time Off</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./Documents">Upload Documents</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./EmployeeDirectory">Employee Directory</a>
          </li>
        </ul>
        )}
        {userRole === "Admin" && (
            <ul className="mt-4">
            <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./UserDashboard">Dashboard</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./UserProfile">User Profile</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./BundyClock">Bundy Clock</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./TimeOff">Time Off</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./Documents">Upload Documents</a>
          </li>
          <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./EmployeeDirectory">Employee Directory</a>
          </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./UserDashboard">AdminDashboard</a>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./UserProfile">Reports</a>
            <ul className="pl-4"> 
            <li className="py-1 text-white hover:bg-blue-600">
            <a href="./Subpage1">Subpage 1</a>
            </li>
            <li className="py-1 text-white hover:bg-blue-600">
            <a href="./Subpage2">Subpage 2</a>
            </li>
            <li className="py-1 text-white hover:bg-blue-600">
            <a href="./Subpage2">Subpage 3</a>
            </li>
            <li className="py-1 text-white hover:bg-blue-600">
             <a href="./Subpage2">Subpage 4</a>
            </li>
            </ul>
            </li>
            <li className="px-4 py-2 text-white hover:bg-blue-600">
            <a href="./BundyClock"> User Management</a>
            </li>
            </ul> 
        )}
        <button className="px-4 py-2 mt-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;