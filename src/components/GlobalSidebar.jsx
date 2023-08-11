import { useState } from "react";
import { Doughnut } from "react-chartjs-2"; //Install react-chartjs-2 using yarn
import "chart.js/auto";

import React from "react";

const GlobalSidebar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const data = {
    labels: ["Nuevos", "Registrados"],
    datasets: [
      {
        data: [30, 65],
        backgroundColor: ["#00F0FF", "#8B8B8D"],
      },
    ],
  };

  return (
    <div className="w-64 max-h-screen bg-white p-4 shadow-lg">
      <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <img src="#" alt="Logo" className="w-28 h-18 mr-2" />
            <h2 className="font-bold text-xl">Meet Kristine</h2>
          </div>
          <div className="md:hidden flex items-center">
            <button id="menuBtn" onClick={() => setShowSideNav(!showSideNav)}>
              <i className="fas fa-bars text-gray-500 text-lg"></i>
            </button>
          </div>
        </div>

        <div className="space-x-5">
          <button>
            <i className="fas fa-bell text-gray-500 text-lg"></i>
          </button>
          <button>
            <i className="fas fa-user text-gray-500 text-lg"></i>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-wrap">
        <div
          className={`p-2 bg-white w-full md:w-60 flex flex-col ${
            showSideNav ? "" : "md:flex hidden"
          }`}
        >
          <nav>
            <a
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-home mr-2"></i>Profile
            </a>
            <a
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-file-alt mr-2"></i>Bundy Clock
            </a>
            <a
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-users mr-2"></i>Time Off
            </a>
            <a
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-store mr-2"></i>Documents
            </a>
            <a
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-exchange-alt mr-2"></i>Reports
            </a>
            <a
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-exchange-alt mr-2"></i>Directory
            </a>
          </nav>

          <a
            className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto"
            href="#"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlobalSidebar;
