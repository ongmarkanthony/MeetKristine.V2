import { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeCard = ({ employee }) => (
  <div className="p-4 m-2 bg-white shadow-lg rounded-lg">
    <h2 className="text-xl font-bold">{employee.firstName} {employee.lastName}</h2>
    <p className="text-gray-600">{employee.jobTitle}</p>
    <p className="text-gray-500">{employee.department}</p>
    <a href={`mailto:${employee.email}`} className="text-blue-500 underline">{employee.email}</a>
  </div>
);

const DirectoryContent = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users')
      .then(response => {
        if (Array.isArray(response.data.data)) {
          setEmployees(response.data.data);
        } else {
          console.error('Error fetching employee data:', response.data.data);}
        // setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  const filteredEmployees = employees.filter(employee =>
    employee.firstName.toLowerCase().includes(search.toLowerCase())
    && employee.department.toLowerCase().includes(filterDepartment.toLowerCase())
  );

  return (
    <div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border-2 border-gray-300 p-2 rounded-lg"
          onChange={(e) => setSearch(e.target.value)}
          />
          <input
          type="text"
          placeholder="Filter by department"
          className="border-2 border-gray-300 p-2 rounded-lg ml-2"
          onChange={(e) => setFilterDepartment(e.target.value)}
        />
    </div>
    <div className="flex flex-wrap justify-center p-4">
    {filteredEmployees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
    </div>
    </div>
  );
};

export default DirectoryContent;
