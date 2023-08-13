import React from "react";

const UserNavbar = () => {
  return (
    <div className="bg-blue-500 h-screen w-64 flex flex-col py-8">
      <div className="text-white text-xl font-semibold px-6 mb-8">
        Welcome User
      </div>
      <nav className="flex-1">
        <Link
          to="/UserProfile"
          className="text-gray-950 hover:text-white px-6 py-2 block"
        >
          Your Profile
        </Link>
        <Link
          to="/BundyClock"
          className="text-gray-950 hover:text-white px-6 py-2 block"
        >
          Bundy Clock
        </Link>
        <Link
          to="/TimeOff"
          className="text-gray-950 hover:text-white px-6 py-2 block"
        >
          Time Off
        </Link>
        <Link to="/" className="text-gray-950 hover:text-white px-6 py-2 block">
          Menu1
        </Link>
      </nav>
    </div>
  );
};

export default UserNavbar;
