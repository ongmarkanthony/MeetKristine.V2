import React from 'react'
import UserFooter from '../components/UserFooter';
import MainSidebar from '../components/GlobalSidebar';
import UserDBContent from '../components/UserDBContent';

const UserDashboard = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        <div className="flex flex-col sm:flex-row flex-grow">
          <MainSidebar />
          <UserDBContent />
        </div>
        <UserFooter />
      </div>
  </>
  );
};
export default UserDashboard