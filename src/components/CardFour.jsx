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
    <div className="bg-cyan-400 rounded-lg shadow-md p-4 h-1/2">
      <div className="flex items-center mb-4">
      <svg className="w-[47px] h-[47px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm.524 5.61a.5.5 0 0 1 .4-.34l1.122-.164.5-1.016a.521.521 0 0 1 .9 0l.5 1.016 1.122.164a.5.5 0 0 1 .277.853l-.812.791.192 1.116a.5.5 0 0 1-.725.528l-1-.528-1 .528a.5.5 0 0 1-.725-.528l.192-1.116-.812-.791a.5.5 0 0 1-.131-.513Zm-6 0a.5.5 0 0 1 .4-.34l1.126-.164.5-1.016a.521.521 0 0 1 .9 0l.5 1.016 1.122.164a.5.5 0 0 1 .277.853l-.812.791.192 1.116A.5.5 0 0 1 8 9.058L7 8.53l-1 .528a.5.5 0 0 1-.725-.528l.192-1.116-.812-.791a.5.5 0 0 1-.131-.513ZM10 16c-3.047 0-5.5-2.735-5.5-5h1a11.7 11.7 0 0 0 4.5.583c2.614 0 4.308-.391 4.524-.673l.976.09c0 2.265-2.453 5-5.5 5Z"/>
      </svg>
        <h2 className={`text-2xl font-semibold text-center ${getRatingColor()}`}>
          Employee Satisfaction
          {satisfactionRating < 80 ? (
            <Arrow direction="down" color={getRatingColor()} />
          ) : (
            <Arrow direction="up" color={getRatingColor()} />
          )}
        </h2>
      </div>
      <div className={`text-4xl font-bold mt-6 ${getRatingColor()}`}>{satisfactionRating}%</div>
    </div>
  );
}

export default Card4;
