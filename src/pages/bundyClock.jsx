import React from 'react'
import TimeTracker from '../components/TimeTracker'
import UserFooter from '../components/UserFooter'
import MainSidebar from '../components/GlobalSidebar'


const bundyClock = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <div className="flex flex-col sm:flex-row flex-grow">
        <MainSidebar />
        <TimeTracker/>
      </div>
      <UserFooter />
    </div>
  );
}

export default bundyClock