import { Pie } from "react-chartjs-2";

const EmpPerDeptReport = () => {
const data = {
  labels: ["Sales", "IT", "Finance", "Admin", "Human Resources"],
  datasets: [
    {
      data: [15, 136, 35, 20, 12],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)"
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold text-center mb-6">Employee - Department Report</h1>
      <Pie data={data} />
    </div>
  );
}

export default EmpPerDeptReport;