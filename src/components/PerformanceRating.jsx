import { useState } from "react";

const PerformanceRatings = () => {
  const [ratings, setRatings] = useState({
    needsImprovement: 3,
    belowExpectations: 8,
    satisfactory: 52,
    aboveExpectations: 30,
    outstanding: 7,
  });

  return (
    <div className="flex flex-col items-center h-1/2">
      <h2 className="text-2xl font-bold mb-4">Performance Rating Distribution</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center justify-center bg-red-500 text-white p-4 rounded-md">
          <div>
            <h3 className="text-xl font-bold mb-2">Needs Improvement</h3>
            <p className="text-xl">{ratings.needsImprovement}%</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-orange-500 text-white p-4 rounded-md">
          <div>
            <h3 className="text-xl font-bold mb-2">Below Expectations</h3>
            <p className="text-2xl">{ratings.belowExpectations}%</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-yellow-500 text-white p-4 rounded-md">
          <div>
            <h3 className="text-xl font-bold mb-2">Satisfactory</h3>
            <p className="text-2xl">{ratings.satisfactory}%</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-green-500 text-white p-4 rounded-md">
          <div>
            <h3 className="text-xl font-bold mb-2">Above Expectations</h3>
            <p className="text-2xl">{ratings.aboveExpectations}%</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-md">
          <div>
            <h3 className="text-xl font-bold mb-2">Outstanding</h3>
            <p className="text-2xl">{ratings.outstanding}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceRatings;