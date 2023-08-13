import React from "react";
import ApprovalTable from "../components/ApprovalTable";
import GlobalSidebar from "../components/GlobalSidebar";

function ApprovalPage() {
  return (
    <>
      <div className="flex h-screen">
        <GlobalSidebar />
        <ApprovalTable />
      </div>
    </>
  );
}

export default ApprovalPage;
