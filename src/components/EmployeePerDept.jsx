import { useState, useEffect } from 'react';
import axios from 'axios';

const DepartmentList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/api/v1/users');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {data.map((department, index) => (
        <div key={index} className="flex justify-between items-center p-2 bg-gray-100 mb-2 rounded">
          <div className="text-lg font-bold">{department.name}</div>
          <div>Total Employees: {department.totalEmployees}</div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
