import React, { useState } from "react";

const timeTable = () => {
  const [records, setRecords] = useState("");
  const [date, setDate] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");

  const handleAddRecord = () => {
    const record = {
      date,
      timeIn,
      timeOut,
    };

    setRecords([...records, record]);
    setDate("");
    setTimeIn("");
    setTimeOut("");
  };

  const calculateTotalHours = (record) => {
    const timeInParts = record.timeIn.split(":");
    const timeOutParts = record.timeOut.split(":");

    const timeIn = new Date();
    timeIn.setHours(parseInt(timeInParts[0], 10));
    timeIn.setMinutes(parseInt(timeInParts[1], 10));
    timeIn.setSeconds(parseInt(timeInParts[2], 10));

    const timeOut = new Date();
    timeOut.setHours(parseInt(timeOutParts[0], 10));
    timeOut.setMinutes(parseInt(timeOutParts[1], 10));
    timeOut.setSeconds(parseInt(timeOutParts[2], 10));

    const hours = Math.abs(timeOut - timeIn) / 36e5;

    return hours.toFixed(2);
  };

  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time In</th>
            <th className="px-4 py-2">Time Out</th>
            <th className="px-4 py-2">Total Hours</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{record.date}</td>
              <td className="border px-4 py-2">{record.timeIn}</td>
              <td className="border px-4 py-2">{record.timeOut}</td>
              <td className="border px-4 py-2">
                {calculateTotalHours(record)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <input
          type="date"
          className="border rounded-md px-4 py-2 mr-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className="border rounded-md px-4 py-2 mr-2"
          value={timeIn}
          onChange={(e) => setTimeIn(e.target.value)}
        />
        <input
          type="time"
          className="border rounded-md px-4 py-2 mr-2"
          value={timeOut}
          onChange={(e) => setTimeOut(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={handleAddRecord}
        ></button>
      </div>
    </div>
  );
};

export default timeTable;
