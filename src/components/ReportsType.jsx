import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReportsType = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={handleToggle}
      >
        Reports
      </button>
      {isOpen && (
        <ul className="absolute mt-2 py-2 w-48 bg-white border rounded shadow">
          <li>
            <Link
              to="/item1"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Report 1
            </Link>
          </li>
          <li>
            <Link
              to="/item2"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Report 2
            </Link>
          </li>
          <li>
            <Link
              to="/item3"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Report 3
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ReportsType;
