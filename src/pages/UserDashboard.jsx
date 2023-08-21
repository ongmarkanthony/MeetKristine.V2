import React from 'react'
import UserFooter from '../components/UserFooter'
import UserDBContent from '../components/UserDBContent'
import Sidebar from '../components/Sidebar'

const UserDashboard = () => {
  return (
    <div className= "flex flex-col min h-screen justify-between bg-gray-100 w-screen">
      <div className="flex flex-col sm:flex-row flex-grow w-3/4">
        <Sidebar/>
        <UserDBContent />
      </div>
       <UserFooter/>
    </div>
  )
}

export default UserDashboard