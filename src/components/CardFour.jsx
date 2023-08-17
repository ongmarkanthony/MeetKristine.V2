import React, { useState } from "react";

const Arrow = ({ direction, color }) => (
  <svg
    className={`w-6 h-6 fill-current ${color} ml-2`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    {direction === "up" && <path d="M7 10l5 5 5-5H7z" />}
    {direction === "down" && <path d="M7 14l5-5 5 5H7z" />}
  </svg>
);

const Card4 = () => {
  const [satisfactionRating, setSatisfactionRating] = useState(79);

  const getRatingColor = () => {
    return satisfactionRating < 80 ? "text-red-500" : "text-green-500";
  };

  return (
    <div className="bg-cyan-400 rounded-lg shadow-md p-4 h-1/4">
      <div className="flex items-center mb-4">
        <svg
          className="w-6 h-6 fill-current text-gray-600 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19.707 5.293L18.293 6.707l-3.536-3.536A1 1 0 0 0 14.586 3H9.414A2 2 0 0 0 7.414 4.586L3.878 8.121a4 4 0 0 0-.707 4.95l1.293 1.293a1 1 0 0 0 1.414 0L9 12.414A2 2 0 0 0 9.414 11H14.586a1 1 0 0 0 .707-1.707l-1.293-1.293a4 4 0 0 0-.707-4.95l3.536 3.536 1.414-1.414zM12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <h2 className={`text-xl font-semibold ${getRatingColor()}`}>
          Employee Satisfaction Ratings
          {satisfactionRating < 80 ? (
            <Arrow direction="down" color={getRatingColor()} />
          ) : (
            <Arrow direction="up" color={getRatingColor()} />
          )}
        </h2>
      </div>
      <div className={`text-4xl font-bold mt-5 ${getRatingColor()}`}>{satisfactionRating}%</div>
    </div>
  );
}

export default Card4;
