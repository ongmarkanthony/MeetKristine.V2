import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const Gender = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get('http://example.com/employees');
      const employees = response.data;
      const males = employees.filter(employee => employee.gender === 'Male').length;
      const females = employees.filter(employee => employee.gender === 'Female').length;

      setData({
        labels: ['Males', 'Females'],
        datasets: [{
          data: [males, females],
          backgroundColor: ['blue', 'pink'],
        }],
      });
    };

    fetchEmployees();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Pie data={data} />
    </div>
  );
}

export default Gender;