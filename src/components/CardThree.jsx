import { useState } from "react";

const Card3 = () => {
    const [attritionRate, setAttritionRate] = useState(3);

  const getAttritionRateColor = () => {
    if (attritionRate > 3) {
      return "text-red-500";
    } else if (attritionRate < 3) {
      return "text-gray-950";
    } else {
      return "text-gray-800";
    }
  };

  const getArrowIcon = () => {
    if (attritionRate > 3) {
      return (
        <svg
          className="w-8 h-8 fill-current text-red-500 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      );
    } else if (attritionRate < 3) {
      return (
      <svg className="w-[10px] h-[10px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m1 7 4 4 4-4M1 1l4 4 4-4"/>
        </svg>
        );
    } else {
      return null;
    }
  };

  return (
    <div className="bg-cyan-400 rounded-lg shadow-md p-4 h-1/2">
      <div className="flex items-center mb-4">
      <svg className="w-[47px] h-[47px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M1 1v14h16m0-9-3-2-3 5-3-2-3 4"/>
      </svg>
          <h2 className={`text-2xl font-semibold ${getAttritionRateColor()}`}>
          Attrition Rate
          {getArrowIcon()}
        </h2>
      </div>
      <div className={`text-4xl font-bold mt-10 text-center ${getAttritionRateColor()}`}>{attritionRate}%</div>
    </div>
  );
}

export default Card3;