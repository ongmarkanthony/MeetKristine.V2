import React from "react";
import { Line } from "react-chartjs-2";

const PerformanceRatingDistribution = () => {
  const data = {
    labels: [
      "Exceptional",
      "Exceeds Expectations",
      "Meets Expectations",
      "Below Expectations",
      "Unsatisfactory"
    ],
    datasets: [
      {
        label: "Performance Rating Distribution",
        data: [20, 35, 40, 4, 1],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  return (
    <div className="mt-3">
      <h1 className="text-2xl font-semibold text-center mb-6">Performance Rating Distribution</h1>
      <Line data={data} />
    </div>
  )
  
};

export default PerformanceRatingDistribution;