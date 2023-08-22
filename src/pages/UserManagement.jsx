import React from 'react'
import UserFooter from '../components/UserFooter'
import AddUser from '../components/AddUser'
import NavLink from '../components/NavLink'


const UserManagement = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <div className="flex flex-col sm:flex-row flex-grow w-screen">
        <NavLink />
      <div className="flex-1 w-screen p-2">
        <AddUser/>
      </div>
      </div>
      <UserFooter />
    </div>
  );
}

export default UserManagement;