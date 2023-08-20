import { useState } from "react";

const Card = ({ title, icon, value }) => (
  <div className="bg-white rounded-lg p-4 mb-4 flex items-center w-full">
    <div className="flex-shrink-0 mr-4">
      <span className="text-4xl">{icon}</span>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p>{value}</p>
    </div>
  </div>
);

const EmployeeEngagementReport = () => {
  const [reportData, setReportData] = useState([
    {title: "Employee Satisfaction", icon: "🌟", value: "85%"},
    {title: "Average Work Hours", icon: "⏰", value: "42 hours/week"},
    {title: "Average Overtime Hours", icon: "⏱️", value: "5 hours/week"},
    {title: "Employee Turnover Rate", icon: "🔄", value: "2.5%"}
  ]);

  return (
    <div className="p-4 rounded-lg shadow-md transform perspective-1000 rotate-x-10 rotate-y-10 w-full h-full">
      {reportData.map((data, index) => (
        <Card key={index} title={data.title} icon={data.icon} value={data.value} />
      ))}
    </div>
  );
}

export default EmployeeEngagementReport;