import { useState } from "react";


const Card2 = () => {
    const [averageHours, setAverageHours] = useState(48.36);

  return (
    <div className="bg-cyan-400 rounded-lg shadow-md p-4 h-1/2">
      <div className="flex items-center mb-4">
      <svg className="w-[47px] h-[47px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
      </svg>
        <h2 className="text-2xl text-gray-800 font-semibold text-center">Ave. Work Hours</h2>
      </div>
      <div className="text-4xl text-gray-800 font-bold mt-7">{averageHours}</div>
    </div>
  );
}

export default Card2;
