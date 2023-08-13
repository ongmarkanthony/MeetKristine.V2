import React from 'react'
import GlobalSideBar from '../components/GlobalSideBar'
import LeaveForm from '../components/LeaveForm'
import UserFooter from '../components/UserFooter'

const TimeOff = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        <div className="flex flex-col sm:flex-row flex-grow">
        <GlobalSideBar />
        <LeaveForm />
        </div>
        <UserFooter />
      </div>
    </>
  )
}

export default TimeOff