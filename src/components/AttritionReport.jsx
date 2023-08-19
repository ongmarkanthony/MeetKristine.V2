import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resignedEmployees = [
          { month: 'January', count: 10 },
          { month: 'February', count: 8 },
          { month: 'March', count: 15 },
          // more data...
        ];

        const labels = resignedEmployees.map(item => item.month);
        const counts = resignedEmployees.map(item => item.count);

        setData({
          labels: labels,
          datasets: [{
            label: 'Resigned Employees',
            data: counts,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.6)',
            hoverBorderColor: 'rgba(75,192,192,1)',
          }]
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Attrition Report</h2>
      <Line 
        data={data} 
        options={{ maintainAspectRatio: false }} 
      />
    </div>
  );
};

export default App;
