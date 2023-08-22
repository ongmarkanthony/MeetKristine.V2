import React from 'react'
import Sidebar from '../components/Sidebar'
import EmployeeSalaryReport from '../components/EmployeeSalaryReport'
import UserFooter from '../components/UserFooter'

const DepartmentReport = () => {
  return (
    <div className= "flex flex-col min h-screen justify-between bg-gray-100 w-screen">
      <div className="flex flex-col sm:flex-row flex-grow">
        <Sidebar/>
        <EmployeePerDept/>
        <PerDepartmentReport/>
      </div>
      <UserFooter/>
    </div>


  )
}

export default DepartmentReport;