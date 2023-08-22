import React from 'react'
import LeaveForm from '../components/LeaveForm'
import UserFooter from '../components/UserFooter'
import NavLink from '../components/NavLink'

const TimeOff = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        <div className="flex flex-col sm:flex-row flex-grow">
        <NavLink />
        <LeaveForm />
        </div>
        <UserFooter />
      </div>
    </>
  )
}

export default TimeOff;