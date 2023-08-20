import React from 'react'
import MainSidebar from '../components/GlobalSidebar'
import UserFooter from '../components/UserFooter'
import UserDBContent from '../components/UserDBContent'

const UserDashboard = () => {
  return (
    <div className= "flex flex-col min h-screen justify-between bg-gray-100 w-screen">
      <div className="flex flex-col sm:flex-row flex-grow w-3/4">
        <MainSidebar/>
        <UserDBContent />
      </div>
       <UserFooter/>
    </div>
  )
}

export default UserDashboard