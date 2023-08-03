import React from 'react'
import ReactDOM from 'react-dom'
import '.components/userDashboardHeader'
import '.components/userDashboardContent'

function userDashboard() {
  return (
    <> 
    <userDashboardHeader/>
    <userDashboardContent/>
    </> 
  )
}

export default userDashboard