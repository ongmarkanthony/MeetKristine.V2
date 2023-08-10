import React from "react";
import CardContainer from "../components/CardContainer";
import ManagementHeader from "../components/ManagementHeader";

const Management = () => {
  return (
    <div className="flex flex-col items-center justify-end max-w-1268px mx-auto md:px-5 w-full">
      <div className="flex flex-col gap-30px items-start justify-start w-full">
        <p className="font-medium text-2xl md:text-22px text-black-900_01 sm:text-xl">
          Candidate Management
        </p>
        <div>
          <ManagementHeader />
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default Management;
