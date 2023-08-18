import React from 'react';
import Card1 from './CardOne';
import Card2 from './CardTwo';
import Card3 from './CardThree';
import Card4 from './CardFour';
import EmployeeEngagementReport from './EmployeeEngagmentReport';
import EmployeeLeaveSummaryReport from './EmployeeLeaveSummaryReport';
import TaskToDo from './TaskSummary';
import EmployeePerformanceSummary from './EmployeePerformanceSummary';

const AdminDBMainContent = () => {
  return (
<>

<div className="grid grid-cols-4 grid-rows-5 gap-4">
    <div >
        <Card1 />
    </div>
    <div >
        <Card2 />
    </div>
    <div >
        <Card3 />
    </div>
    <div >
        <Card4 />
    </div>
    <div className="col-span-2">
        <EmployeeEngagementReport />
    </div>
    <div className="col-start-3">
        <EmployeePerformanceSummary />
    </div>
    <div className="col-start-4">7</div>
    <div className="col-span-2 row-start-3">8</div>
    <div className="col-span-2 col-start-3 row-start-3">9</div>
    <div className="col-span-4 row-start-4">10</div>
</div>
    
</>  
);
};

export default AdminDBMainContent;
