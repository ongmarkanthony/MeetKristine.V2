import React from 'react'
import UserHeader from './UserHeader'
import ProfilePhoto from './ProfilePhoto'
import NavLink from './NavLink'

const Sidebar = () => {

  return (
    <div className="relative flex flex-col border w-64">
        <div className="bg-blue-500 p-2 text-gray-950"> 
        <UserHeader />
        </div>
        <div className="bg-red-500 p-2 text-white">
        <ProfilePhoto />
      </div>
      <div className="bg-green-500 p-2 text-white h-3/4">
        <NavLink/>
      </div>


    </div>
  )
}

export default Sidebar;