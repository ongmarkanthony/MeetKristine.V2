import { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceRow = ({ attendance }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{attendance.employeeId}</td>
      <td className="border px-4 py-2">{attendance.firstName}</td>
      <td className="border px-4 py-2">{attendance.lastName}</td>
      <td className="border px-4 py-2">{attendance.jobTitle}</td>
      <td className="border px-4 py-2">{attendance.department}</td>
      <td className="border px-4 py-2">{attendance.date}</td>
      <td className="border px-4 py-2">{attendance.status}</td>
    </tr>
  );
};

const AttendanceSummaryReport = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [period, setPeriod] = useState('daily');

  useEffect(() => {
    axios.get('http://your-backend-url.com/api/attendance')
      .then((response) => {
        setAttendanceData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSelectChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4">Attendance Summary Report</h1>
      <div className="mb-4 flex flex-col sm:flex-row items-center sm:justify-between">
        <label className="block text-gray-700 text-sm font-bold mb-2 sm:mb-0" htmlFor="period">
          View By
        </label>
        <select
          className="shadow appearance-none border rounded w-full sm:w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 sm:mt-0"
          id="period"
          value={period}
          onChange={handleSelectChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="3months">Every 3 Months</option>
          <option value="6months">Every 6 Months</option>
          <option value="12months">Yearly</option>
        </select>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Employee ID</th>
            <th className="border px-4 py-2">First Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Job Title</th>
            <th className="border px-4 py-2">Department</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendance, index) => (
            <AttendanceRow key={index} attendance={attendance} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceSummaryReport;