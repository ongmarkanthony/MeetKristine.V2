import React from 'react';
import Card1 from './CardOne';
import Card2 from './CardTwo';
import Card3 from './CardThree';
import Card4 from './CardFour';
import EmployeeEngagementReport from './EmployeeEngagmentReport';
import PerformanceRatingDistribution from './PerformanceRating';
import EmpPerDeptReport from './PerDepartmentReport';
import WorkForceDistribution from './WorkForceDistri';
import UserHeader from './UserHeader';

const AdminDBMainContent = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 grid-rows-9 gap-4 bg-white w-full mx-2 mt-10">
      <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 row-span-1 sm:row-span-1 md:row-span-2 lg:row-span-2 bg-blue-500 rounded-lg shadow-md p-4">
        <Card1 />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 row-span-1 sm:row-span-1 md:row-span-2 lg:row-span-2 bg-blue-500 rounded-lg shadow-md p-4">
        <Card2 />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 row-span-1 sm:row-span-1 md:row-span-2 lg:row-span-2 bg-blue-500 rounded-lg shadow-md p-4">
        <Card3 />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 row-span-1 sm:row-span-1 md:row-span-2 lg:row-span-2 bg-blue-500 rounded-lg shadow-md p-4">
        <Card4 />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-5 row-span-2 sm:row-span-2 md:row-span-3 lg:row-span-3 row-start-3 h-120">
        <PerformanceRatingDistribution />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-3 row-span-2 sm:row-span-2 md:row-span-3 lg:row-span-3 col-start-1 sm:col-start-1 md:col-start-3 lg:col-start-6 row-start-3 rounded-lg shadow-md p-4 w-full">
        <EmployeeEngagementReport />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-3 row-span-3 sm:row-span-3 md:row-span-4 lg:row-span-4 row-start-6 rounded-lg shadow-md w-full">
        <EmpPerDeptReport />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-5 row-span-3 sm:row-span-3 md:row-span-4 lg:row-span-4 col-start-1 sm:col-start-1 md:col-start-1 lg:col-start-4 row-start-9 rounded-lg shadow-md h-screen">
        <WorkForceDistribution />
      </div>
    </div>
    </>
  );
};

export default AdminDBMainContent;