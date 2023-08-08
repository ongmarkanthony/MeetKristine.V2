import React from 'react'
import UserHeader from '../components/UserHeader'
import UserSideNavbar from '../components/UserSideNavbar'
import UserFooter from '../components/UserFooter'

const UserDashboardLayout = ({ children }) => {
  return (
    <div className="user-dashboard-layout">
        <UserHeader />
        <div className="content">
            <UserSideNavbar />
            <main> {children} </main>
        </div>
        <UserFooter />
    </div>
  )
}

export default UserDashboardLayout