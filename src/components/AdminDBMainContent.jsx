import React from 'react';
import Card1 from './CardOne';
import Card2 from './CardTwo';
import Card3 from './CardThree';
import Card4 from './CardFour';
import EmployeeEngagementReport from './EmployeeEngagmentReport';
import EmpPerDeptReport from './PerDepartmentReport';
import WorkForceDistribution from './WorkForceDistri';
import PerformanceRatings from './PerformanceRating';

const AdminDBMainContent = () => {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-5 gap-4">
        <div className="col-span-2 row-span-2 col-start-2 bg-cyan-600 h-1/2 mt-15">
        <Card1 />
        </div>
        <div className="col-span-2 row-span-2 col-start-4 bg-cyan-600 h-1/2 mt-15">
        <Card2 />
        </div>
        <div className="col-span-2 row-span-2 col-start-6 bg-cyan-600 h-1/2 mt-15">
        <Card3 />
        </div>
        <div className="col-span-2 row-span-2 col-start-8 bg-cyan-600 h-1/2 mt-15">
        <Card4 />
        </div>
        <div className="col-span-3 row-span-3 row-start-3 bg-blue-300 -mt-20 h-3/4">
        <EmployeeEngagementReport />
        </div>
        <div className="col-span-4 row-span-3 col-start-4 row-start-3 -mt-20">
        <WorkForceDistribution />
        </div>
        <div className="col-span-3 row-span-3 col-start-8 row-start-3 -mt-20">
        <PerformanceRatings />
        </div>
    </div>

        </>
  );
};

export default AdminDBMainContent;


