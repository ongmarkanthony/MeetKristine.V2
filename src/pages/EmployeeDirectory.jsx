import React from "react";
import DirectoryContent from "../components/DirectoryContent";
import UserFooter from "../components/UserFooter";
import Sidebar from "../components/Sidebar";

const EmployeeDirectory = () => {
  return (
    //CONVERT TO CARD
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        <div className="flex flex-col sm:flex-row flex-grow">
        <Sidebar />
        <DirectoryContent />
        </div>
        <UserFooter />
      </div>
    </>
  );
};

export default EmployeeDirectory;
