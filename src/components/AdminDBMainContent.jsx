import React from 'react';
import Card1 from './CardOne';
import Card2 from './CardTwo';
import Card3 from './CardThree';
import Card4 from './CardFour';
import EmployeeEngagementReport from './EmployeeEngagmentReport';
import EmployeeLeaveSummaryReport from './EmployeeLeaveSummaryReport';
import TaskToDo from './TaskSummary';

const AdminDBMainContent = () => {
  return (
  <section>
    <div className=" flex flex-col">
      <div className="flex flex-row ml-5 mr-5">
          <div className="h-1/4 mx-2 sm:mx-4 md:mx-8 rounded-3xl">
            <Card1 />
          </div>
          <div className="h-1/4 mx-2 sm:mx-4 md:mx-8 rounded-3xl">
            <Card2/>
          </div>
          <div className="h-1/4 mx-2 sm:mx-4 md:mx-8 rounded-3xl">
            <Card3 />
          </div>
          <div className="h-1/4 mx-2 sm:mx-4 md:mx-8 rounded-3xl">
            <Card4 />
          </div>
        </div> 
      </div>
      <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4 ml-10 w-full ">
          <div className="bg-cyan-200 p-4 w-1/2 h-1/2">
              <EmployeeEngagementReport/>
          </div>
          <div className="bg-cyan-200 p-4 mr-10 w-1/3 h-1/2 ">
            <EmployeeLeaveSummaryReport/>
          </div>
          <div className="bg-cyan-200 p-4 mr-10 w-1/3 h-1/2 ">
            <TaskToDo/>
          </div>

        </div>
      </div>
  </section>
  );
};

export default AdminDBMainContent;
