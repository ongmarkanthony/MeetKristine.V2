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
            <td className="border p-2">{row.time_in}</td>
            <td className="border p-2">{row.time_out}</td>
            <td className="border p-2">{row.totalHours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TimeTracker = () => {
  const [time_in, setTime_In] = useState(null);
  const [time_out, setTime_Out] = useState(null);
  const [isTime_In, setIsTime_In] = useState(false);
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
    const currentTime_In = new Date();
    setTime_In(currentTime_In);
    setIsTime_In(true);
    setRecords((prevRecords) => [
      ...prevRecords,
      {
        date: currentDate.toLocaleDateString(),
        time_in: currentTime_In.toLocaleTimeString(),
        time_out: "",
        totalHours: ""
      },
    ]);
    axios.post('http://localhost:8000/api/v1/time-events', {date: currentDate.toLocaleDateString(), time_in: currentTime_In.toLocaleTimeString()});
  };

  const handleTime_Out = () => {
    const currentTimeOut = new Date();
    setTime_Out(currentTimeOut);
    setIsTime_In(false);
    setRecords((prevRecords) => {
      const updatedRecords = [...prevRecords];
      const time_in = new Date(updatedRecords[updatedRecords.length - 1].time_in); // Corrected variable name
      const totalHours = (currentTimeOut - time_in) / (1000 * 60 * 60); // Use currentTimeOut instead of currentTime_Out
      updatedRecords[updatedRecords.length - 1].time_out = currentTimeOut.toLocaleTimeString(); // Corrected variable name
      updatedRecords[updatedRecords.length - 1].totalHours = totalHours.toFixed(2); // Corrected variable name
      return updatedRecords;
    });
    axios.post('http://localhost:8000/api/v1/time-events', {date: currentDate.toLocaleDateString(), time_out: currentTimeOut.toLocaleTimeString()});
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
          disabled={isTime_In}
        >
          Time In
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          onClick={handleTime_Out}
          disabled={!isTime_In}
        >
          Time Out
        </button>
        <div className="text-xl sm:text-2xl font-semibold text-center">
        {isTime_In ? "Time In: " + (time_in ? time_in.toLocaleTimeString() : "") : "Time Out: " + (time_out ? time_out.toLocaleTimeString() : "")}
        </div>
        <Table rows={records} />
      </div>
    </div>
  );
};

export default TimeTracker;