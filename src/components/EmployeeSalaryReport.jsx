import { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeSalaryReport = () => {
  const [employees, setEmployees] = useState([]);
  const [search , setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/users');
        setEmployees(response.data.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    if (employees.length > 0) {
      setFilteredEmployees(
        employees.filter(employee =>
          employee.firstName.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, employees]);
    

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Salary Report</h1>
      <input 
        type="text"
        placeholder="Search by first name"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded"
        />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap">{employee.id}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{employee.employee_num}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.jobTitle}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.department}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.salaries}</td>
              </tr>           
               ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeSalaryReport;