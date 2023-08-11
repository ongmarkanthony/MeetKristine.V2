<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";

const BundyClock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");

  const handleTimeIn = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
=======
import React, { useEffect, useState } from 'react';

const BundyClock = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');

  const handleTimeIn = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
>>>>>>> 79cc6c59390535015a4f79fefd51f7c06243f289
    const timeIn = `${hours}:${minutes}:${seconds}`;

    setTimeIn(timeIn);
  };

  const handleTimeOut = () => {
    const currentTime = new Date();
<<<<<<< HEAD
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
=======
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
>>>>>>> 79cc6c59390535015a4f79fefd51f7c06243f289
    const timeOut = `${hours}:${minutes}:${seconds}`;

    setTimeOut(timeOut);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
<<<<<<< HEAD
      const hours = currentTime.getHours().toString().padStart(2, "0");
      const minutes = currentTime.getMinutes().toString().padStart(2, "0");
      const seconds = currentTime.getSeconds().toString().padStart(2, "0");
      const currentDate = currentTime.getDate().toString().padStart(2, "0");
=======
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const seconds = currentTime.getSeconds().toString().padStart(2, '0');
      const currentDate = currentTime.getDate().toString().padStart(2, '0');
>>>>>>> 79cc6c59390535015a4f79fefd51f7c06243f289

      setDate(currentDate);
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
<<<<<<< HEAD
  });

  return (
    <>
      <UserHeader />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{time}</h1>
        <p className="text-2xl">{date}</p>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleTimeIn}
          >
            Time In
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ml-4"
            onClick={handleTimeOut}
          >
            Time Out
          </button>
        </div>
        {timeIn && <p className="text-green-500 mt-2">Time In: {timeIn}</p>}
        {timeOut && <p className="text-red-500 mt-2">Time Out: {timeOut}</p>}
      </div>
    </>
=======

    return () => {
      clearInterval(interval); // Clear the interval in cleanup function
    };
  }, []); // Provide an empty dependency array to run the effect only once

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{time}</h1>
      <p className="text-2xl">{date}</p>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={handleTimeIn}
        >
          Time In
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ml-4"
          onClick={handleTimeOut}
        >
          Time Out
        </button>
      </div>
      <div>
        {timeIn && <p className="text-green-500 mt-2">Time In: {timeIn}</p>}
        {timeOut && <p className="text-red-500 mt-2">Time Out: {timeOut}</p>}
      </div>
    </div>
>>>>>>> 79cc6c59390535015a4f79fefd51f7c06243f289
  );
};

export default BundyClock;
