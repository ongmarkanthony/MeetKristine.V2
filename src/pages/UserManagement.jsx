import React from 'react'
import UserFooter from '../components/UserFooter'
import Sidebar from '../components/Sidebar'
import AddUser from '../components/AddUser'


const UserManagement = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <div className="flex flex-col sm:flex-row flex-grow w-screen">
        <Sidebar />
      <div className="flex-1 w-screen p-2">
        <AddUser/>
      </div>
      </div>
      <UserFooter />
    </div>
  );
}

export default UserManagement;