import React from "react";

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-blue-500">
      <div
        className={`fixed z-30 inset-y-0 left-0 transform transition duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '250px' }}
      >
        <div className="flex flex-col h-full bg-red-600 shadow-lg">
          <div className="flex items-center justify-center h-20 border-b">
            <h1 className="text-white text-2xl font-bold">Meet Kristine</h1>
            <div className="text-white text-xl font-semibold px-6 mb-8">
              Welcome User
            </div>
            <div className="overflow-y-auto">
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
                <Link
                  to="/"
                  className="text-gray-950 hover:text-white px-6 py-2 block"
                >
                  Menu1
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-grow">
      <button onClick={toggleMenu} className="p-4">
        Toggle Menu
      </button>
    </div>
  );
};

export default UserNavbar;
