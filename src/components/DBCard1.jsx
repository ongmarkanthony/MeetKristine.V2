import React from "react";

const DBCard1 = ({ title, value, percentageChange, since, color }) => {
  return (
    <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">{title}</h5>
              <span className="font-semibold text-xl text-blueGray-700">{value}</span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${color}`}>
                <i className="fas fa-chart-bar"></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={`${percentageChange < 0 ? "text-red-500" : "text-emerald-500"} mr-2`}><i className={`fas ${percentageChange < 0 ? "fa-arrow-down" : "fa-arrow-up"}`}></i> {Math.abs(percentageChange)}% </span>
            <span className="whitespace-nowrap"> Since {since} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const CardDB1 = () => {
  return (
    <div className="flex flex-wrap bg-blue-500">
      <DBCard1 title="Work Hours" value="48.36" percentageChange={2.99} since="last week" color="bg-red-500" />
      <DBCard1 title="Task To Do" value="10" percentageChange={-4.01} since="last week" color="bg-pink-500" />
      <DBCard1 title="Overtime" value="16.25" percentageChange={-1.25} since="last week" color="bg-lightBlue-500" />
      <DBCard1 title="Performance" value="92.02%" percentageChange={12} since="last month" color="bg-emerald-500" />
    </div>
  );
};

export default CardDB1;
