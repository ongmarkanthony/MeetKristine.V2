import React from 'react'
import EmployeeSalaryReport from '../components/EmployeeSalaryReport'
import UserFooter from '../components/UserFooter'
import NavLink from '../components/NavLink'

const SalaryReport = () => {
  return (
    <div className= "flex flex-col min h-screen justify-between bg-gray-100 w-screen">
      <div className="flex flex-col sm:flex-row flex-grow">
        <NavLink/>
        <EmployeeSalaryReport/>
      </div>
      <UserFooter/>
    </div>


  )
}

export default SalaryReport