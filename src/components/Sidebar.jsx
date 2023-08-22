import React from 'react'
import UserHeader from './UserHeader'
import ProfilePhoto from './ProfilePhoto'
import NavLink from './NavLink'

const Sidebar = () => {

  return (
    <div className="relative flex flex-col border w-64 bg-blue-500 h-screen">
        <div className=" p-2 text-gray-950"> 
        <UserHeader />
        </div>
        <div className=" p-2 text-gray-950">
        <ProfilePhoto />
      </div>
      <div className=" p-2 text-gray-950 h-60">
        <NavLink/>
      </div>


    </div>
  )
}

export default Sidebar;