import React from "react";
import UserFooter from "../components/UserFooter";
import Sidebar from "../components/Sidebar";
import EmpInfoReport from "../components/EmpInfoReport";

const EmployeeInformationReport = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        <div className="flex flex-col sm:flex-row flex-grow">
        <Sidebar />
        <EmpInfoReport/>
        </div>
        <UserFooter />
      </div>
    </>
  );
};

export default EmployeeInformationReport;
