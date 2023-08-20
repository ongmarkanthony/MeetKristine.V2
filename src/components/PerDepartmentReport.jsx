import { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList({ employees, filter }) {
  const filtered = employees.filter((employee) => employee.department === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filtered.map((employee) => (
        <div key={employee.id} className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-2">{employee.firstName}{employee.lastName}</h2>
          <p className="text-md">{employee.department}</p>
        </div>
      ))}
    </div>
  );
}

export default function EmployeePerDepartment() {
  const [filter, setFilter] = useState('All');
  const [employees, setEmployees] = useState([]);
  const departments = ['All', 'Admin', 'HR', 'Accounting', 'Finance', 'Marketing', 'Sales'];

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users')
      .then(response => setEmployees(response.data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-6">
      <select defaultValue="All" onChange={(e) => setFilter(e.target.value)} className="mb-4 w-full p-2 border rounded">
        {departments.map((department) => (
          <option key={department} value={department}>
            {department}
          </option>
        ))}
      </select>

      {filter === 'All' ? (
        employees.map((employee) => (
          <EmployeeList key={employee.id} employees={employees} />
        ))
      ) : (
        <EmployeeList employees={employees} filter={filter} />
      )}
    </div>
    

  );
}