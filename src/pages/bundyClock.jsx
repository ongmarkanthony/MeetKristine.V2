import React, { useEffect, useState } from 'react';
import UserFooter from '../components/UserFooter';
import GlobalSidebar from '../components/GlobalSidebar';
import TimeTracker from '../components/TimeTracker';
import TaskBar from '../components/TaskBar';


const BundyClock = () => {
  
return (
        <>
        <div className="flex flex-col min-h-screen justify-between bg-gray-100">
          <div className="flex flex-col sm:flex-row flex-grow">
          <GlobalSidebar />
          <TimeTracker />
          <TaskBar />
          </div>
          <UserFooter />
        </div>
      </>
  
 );
};

export default BundyClock;
