import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const TimeChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const timeTrackerTable = [
      { day: "Monday", hours: 8 },
      { day: "Tuesday", hours: 7 },
      { day: "Wednesday", hours: 9 },
      { day: "Thursday", hours: 8 },
      { day: "Friday", hours: 7 },
      { day: "Saturday", hours: 5 },
      { day: "Sunday", hours: 0 },
    ];

    const days = timeTrackerTable.map((item) => item.day);
    const hours = timeTrackerTable.map((item) => item.hours);

    setChartData({
      labels: days,
      datasets: [
        {
          label: "Hours Worked",
          data: hours,
          backgroundColor: "rgba(75,192,192,0.6)",
          borderWidth: 2,
          borderColor: "#777",
          hoverBorderWidth: 3,
          hoverBorderColor: "#000",
        },
      ],
    });
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Bar
        className="w-full max-w-2xl p-4 bg-white rounded shadow"
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Total number of hours worked per day",
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default TimeChart;