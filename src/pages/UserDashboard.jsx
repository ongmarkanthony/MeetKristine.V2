import React from 'react'
import UserFooter from '../components/UserFooter'
import UserDBContent from '../components/UserDBContent'
import NavLink from '../components/NavLink'

const UserDashboard = () => {
  return (
    <div className= "flex flex-col min h-screen justify-between bg-gray-100">
      <div className="flex flex-col sm:flex-row flex-grow w-screen">
        <NavLink/>
        <UserDBContent/>
      </div>
       <UserFooter/>
    </div>
  )
}

export default UserDashboard