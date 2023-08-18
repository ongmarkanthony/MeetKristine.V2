import React from "react";

const EmployeeEngagementReport = () => (
  <div className="p-4 bg-cyan-100 shadow-md transform perspective(1000px) rotateX(10deg) rotateY(10deg)">
    <Card title="Employee Satisfaction" icon="🌟" value="85%" />
    <Card title="Average Work Hours" icon="⏰" value="42 hours/week" />
    <Card title="Average Overtime Hours" icon="⏱️" value="5 hours/week" />
    <Card title="Employee Turnover Rate" icon="🔄" value="2.5%" />
  </div>
);

const Card = ({ title, icon, value }) => (
  <div className="bg-white rounded-lg p-4 mb-4 flex items-center w-1/2">
    <div className="flex-shrink-0 mr-4">
      <span className="text-4xl">{icon}</span>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p>{value}</p>
    </div>
  </div>
);

export default EmployeeEngagementReport;