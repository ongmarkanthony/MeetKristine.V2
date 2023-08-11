import React from "react";
import DirectoryContent from "../components/DirectoryContent";
import GlobalSidebar from "../components/GlobalSidebar";
import UserFooter from "../components/UserFooter";

const EmployeeDirectory = () => {
  return (
    //CONVERT TO CARD
    <>
      <div className="flex h-screen bg-gray-100">
        <GlobalSidebar />
        <DirectoryContent />
      </div>
      <div>
        <UserFooter />
      </div>
    </>
  );
};

export default EmployeeDirectory;
