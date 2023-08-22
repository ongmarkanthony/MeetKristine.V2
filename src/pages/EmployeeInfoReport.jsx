import React from "react";
import UserFooter from "../components/UserFooter";
import EmpInfoReport from "../components/EmpInfoReport";
import NavLink from "../components/NavLink";

const EmployeeInformationReport = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        <div className="flex flex-col sm:flex-row flex-grow">
        <NavLink />
        <EmpInfoReport/>
        </div>
        <UserFooter />
      </div>
    </>
  );
};

export default EmployeeInformationReport;
