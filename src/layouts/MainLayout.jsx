import React from 'react';
import UserHeader from '../components/UserHeader';
import UserFooter from '../components/UserFooter';


const MainLayout = ({ children}) => {
  return (
    <div className="main-layout">
        <UserHeader />
        <div className="content">
            <main>{children}</main>
        </div>
        <UserFooter />
        </div>
  );
};

export default MainLayout