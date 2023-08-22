import React from 'react'
import UserFooter from '../components/UserFooter'
import NavLink from '../components/NavLink'
import EmployeePerDepartment from '../components/PerDepartmentReport'

const DepartmentReport = () => {
  return (
    <div className= "flex flex-col min h-screen justify-between bg-gray-100 w-screen">
      <div className="flex flex-col sm:flex-row flex-grow">
        <NavLink/>
        <EmployeePerDepartment/>
      </div>
      <UserFooter/>
    </div>


  )
}

export default DepartmentReport;