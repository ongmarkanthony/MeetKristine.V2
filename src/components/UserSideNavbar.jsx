import React from 'react'

const UserSideNavbar = () => {
  return (
    <div className= "bg-blue-500 h-screen w-64 flex flex-col py-8">
        <div className= "text-white text-xl font-semibold px-6 mb-8">Welcome User</div>
        <nav className= "flex-1">
            <a href="#" className="text-gray-950 hover:text-white px-6 py-2 block">Your Profile</a>
            <a href="#" className="text-gray-950 hover:text-white px-6 py-2 block">Bundy Clock</a>
            <a href="#" className="text-gray-950 hover:text-white px-6 py-2 block">Time Off</a>
            <a href="#" className="text-gray-950 hover:text-white px-6 py-2 block">Menu1</a>
        </nav>
    </div>
    
  )
}

export default UserSideNavbar