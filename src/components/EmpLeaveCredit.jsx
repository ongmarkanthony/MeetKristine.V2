import { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeLeaveCredit = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users')
      .then(response => {
        setEmployeeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  let filteredData = employeeData.filter(data =>
    data.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col space-y-2">
      <input
        className="border-gray-300 border-2 rounded-md p-2"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Employee Num</th>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">SL</th>
            <th className="border border-gray-300 px-4 py-2">VL</th>
            <th className="border border-gray-300 px-4 py-2">PL</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data) => (
            <tr key={data.id}>
              <td className="border border-gray-300 px-4 py-2">{data.empNum}</td>
              <td className="border border-gray-300 px-4 py-2">{data.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{data.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{data.sl}</td>
              <td className="border border-gray-300 px-4 py-2">{data.vl}</td>
              <td className="border border-gray-300 px-4 py-2">{data.pl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeLeaveCredit;