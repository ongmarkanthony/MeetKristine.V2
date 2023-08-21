import React from 'react'
import LeaveForm from '../components/LeaveForm'
import UserFooter from '../components/UserFooter'
import Sidebar from '../components/Sidebar'

const TimeOff = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        <div className="flex flex-col sm:flex-row flex-grow">
        <Sidebar />
        <LeaveForm />
        </div>
        <UserFooter />
      </div>
    </>
  )
}

export default TimeOff;