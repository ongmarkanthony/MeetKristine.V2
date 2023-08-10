import React from "react";
import OrgSidebar from "../components/OrgSidebar";
import OrganizationContent from "../components/OrganizationContent";

const Organization = () => {
  return (
    <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
      <OrgSidebar />
      <OrganizationContent />
    </div>
  );
};

export default Organization;
