import { useState } from "react";


const Card2 = () => {
    const [averageHours, setAverageHours] = useState(48.36);

  return (
    <div className="bg-cyan-400 rounded-lg shadow-md p-4 h-1/4">
      <div className="flex items-center mb-4">
        <svg
          className="w-6 h-6 fill-current text-cyan-600 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 16.2L4.8 12l1.4-1.4L9 13.4l8.6-8.6L19 5.8 9 16.2z" />
        </svg>
        <h2 className="text-xl text-gray-800 font-semibold">Average Work Hours</h2>
      </div>
      <div className="text-4xl text-gray-800 font-bold mt-8">{averageHours}</div>
    </div>
  );
}

export default Card2;
