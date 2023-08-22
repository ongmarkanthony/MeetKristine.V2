import React from 'react'
import TimeTracker from '../components/TimeTracker'
import UserFooter from '../components/UserFooter'
import NavLink from '../components/NavLink'


const BundyClock = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <div className="flex flex-col sm:flex-row flex-grow">
        <NavLink />
        <TimeTracker/>
      </div>
      <UserFooter />
    </div>
  );
}

export default BundyClock