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

  return <Line data={data} />;
};

export default PerformanceRatingDistribution;