import React from 'react'
import TimeTracker from '../components/TimeTracker'
// import TimeChart from '../components/TimeChart'
import UserFooter from '../components/UserFooter'
import GlobalSidebar from '../components/GlobalSidebar'


const bundyClock = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <div className="flex flex-col sm:flex-row flex-grow">
      <GlobalSidebar />
      <TimeTracker/>
      {/* //<TimeChart/> */}
      </div>
      <UserFooter />
    </div>
  </>

  )
}

export default bundyClock