import React from "react";
import DirectoryContent from "../components/DirectoryContent";
import GlobalSidebar from "../components/GlobalSidebar";
import UserFooter from "../components/UserFooter";

const EmployeeDirectory = () => {
  return (
    //CONVERT TO CARD
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        <div className="flex flex-col sm:flex-row flex-grow">
        <GlobalSidebar />
        <DirectoryContent />
        </div>
        <UserFooter />
      </div>
    </>
  );
};

export default EmployeeDirectory;
