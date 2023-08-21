import { useState } from 'react';

const EmployeeLeaveSummaryReport = () => {
  const [report, setReport] = useState([]);

  const fetchReport = async () => {
    const response = await fetch('http://localhost:8000/api/v1/users');
    const data = await response.json();
    setReport(data);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Employee Leave Summary Report</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchReport}>Fetch Report</button>
      <div className="mt-4">
        {report.length > 0 ? (
          report.map((item, index) => (
            <div key={index} className="border p-2 mb-2">
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.leaveDays} days of leave</p>
            </div>
          ))
        ) : (
          <p>No report available.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeLeaveSummaryReport;