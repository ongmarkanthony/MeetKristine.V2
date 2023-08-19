import { useState } from 'react';
import { Pie } from 'react-chartjs-2';

const EmployeePerformanceSummary = () => {
  const [totalEmployees, setTotalEmployees] = useState(250);
  const [activeEmployees, setActiveEmployees] = useState(240);
  const [onLeave, setOnLeave] = useState(5);
  const [terminated, setTerminated] = useState(5);

  const data = {
    labels: ['Active Employees', 'On Leave', 'Terminated'],
    datasets: [
      {
        data: [activeEmployees, onLeave, terminated],
        backgroundColor: ['#56CCF2', '#F2994A', '#EB5757'],
      },
    ],
  };

  return (
    <div className="p-4 shadow-md transform perspective(1000px) rotateX(10deg) rotateY(10deg) w-full ">
            <Pie data={data} />
          <ul className="list-disc pl-5 mb-4 shadow-md transform perspective(1000px) rotateX(10deg) rotateY(10deg) text-center w-full">
            <li className="mb-1">Total Employees: {totalEmployees}</li>
            <li className="mb-1">Active Employees: {activeEmployees}</li>
            <li className="mb-1">On Leave: {onLeave}</li>
            <li className="mb-1">Terminated: {terminated}</li>
          </ul>
        </div>
  );
};

export default EmployeePerformanceSummary;