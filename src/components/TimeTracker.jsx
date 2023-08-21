import { useState, useEffect } from "react";
import axios from 'axios';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-2xl md:text-3xl font-bold">
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
};

const Table = ({ rows }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2">Date</th>
          <th className="border p-2">Time In</th>
          <th className="border p-2">Time Out</th>
          <th className="border p-2">Total Number of Hours</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className="border p-2">{row.date}</td>
            <td className="border p-2">{row.timeIn}</td>
            <td className="border p-2">{row.timeOut}</td>
            <td className="border p-2">{row.totalHours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TimeTracker = () => {
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);
  const [isTimeIn, setIsTimeIn] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleTimeIn = () => {
    const currentTimeIn = new Date();
    setTimeIn(currentTimeIn);
    setIsTimeIn(true);
    setRecords((prevRecords) => [
      ...prevRecords,
      {
        date: currentDate.toLocaleDateString(),
        timeIn: currentTimeIn.toLocaleTimeString(),
        timeOut: "",
        totalHours: ""
      },
    ]);
    axios.post('http://backend-url/time-in', {date: currentDate.toLocaleDateString(), timeIn: currentTimeIn.toLocaleTimeString()});
  };

  const handleTimeOut = () => {
    const currentTimeOut = new Date();
    setTimeOut(currentTimeOut);
    setIsTimeIn(false);
    setRecords((prevRecords) => {
      const updatedRecords = [...prevRecords];
      const timeIn = new Date(updatedRecords[updatedRecords.length - 1].timeIn);
      const totalHours = (currentTimeOut - timeIn) / (1000 * 60 * 60);
      updatedRecords[updatedRecords.length - 1].timeOut = currentTimeOut.toLocaleTimeString();
      updatedRecords[updatedRecords.length - 1].totalHours = totalHours.toFixed(2);
      return updatedRecords;
    });
    axios.post('http://backend-url/time-out', {date: currentDate.toLocaleDateString(), timeOut: currentTimeOut.toLocaleTimeString()});
  };

  return (
    <div className="p-4 sm:w-3/4 md:w-1/2 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Bundy clock</h1>
      <div className="text-xl sm:text-2xl font-semibold text-center">
        {currentDate.toLocaleDateString()} 
      </div>
      <div className="text-center">
        <Clock />
      </div>
      <div className="flex flex-col gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={handleTimeIn}
          disabled={isTimeIn}
        >
          Time In
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          onClick={handleTimeOut}
          disabled={!isTimeIn}
        >
          Time Out
        </button>
        <div className="text-xl sm:text-2xl font-semibold text-center">
        {isTimeIn ? "Time In: " + (timeIn ? timeIn.toLocaleTimeString() : "") : "Time Out: " + (timeOut ? timeOut.toLocaleTimeString() : "")}
        </div>
        <Table rows={records} />
      </div>
    </div>
  );
};

export default TimeTracker;