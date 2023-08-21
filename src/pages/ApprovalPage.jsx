import React from "react";
import ApprovalTable from "../components/ApprovalTable";

function ApprovalPage() {
  return (
    <>
      <div className="flex h-screen">
        <MainSidebar />
        <ApprovalTable />
      </div>
    </>
  );
}

export default ApprovalPage;
