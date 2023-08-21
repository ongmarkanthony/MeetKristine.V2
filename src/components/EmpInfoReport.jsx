import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeInfo = ({ employee }) => {
  const { firstName, lastName, jobTitle, department, gender, nationality, country } = employee;

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="text-lg font-semibold">{firstName} {lastName}</div>
      <div className="text-gray-500">{jobTitle}, {department}</div>
      <div className="text-sm">{gender}, {nationality}</div>
      <div className="text-sm">Country: {country}</div>
    </div>
  );
};

const EmpInfoReport = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users')
      .then(response => setEmployees(response.data.data));
  }, []);

  return (
    <div className="space-y-4">
      {employees.map((employee) => (
        <EmployeeInfo key={employee.employeeID} employee={employee} />
      ))}
    </div>
  );
};

export default EmpInfoReport;
