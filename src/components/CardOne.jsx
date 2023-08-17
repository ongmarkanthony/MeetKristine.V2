import { useState } from "react";

const Icon = () => (
  <svg
    className="w-6 h-6 fill-current text-gray-600 mr-2"
    xmlns=""
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4h16v4H4zm0 6h16v4H4zm0 6h16v4H4zm0 6h16v4H4z" />
  </svg>
);

const Card1 = () => {
  const [totalEmployees, setTotalEmployees] = useState(100);

  return (
    <div className="bg-cyan-400 rounded-lg shadow-md p-4  h-1/4">
      <div className="flex items-center mb-4">
        <Icon />
        <h2 className="text-xl font-semibold mb-11">Total Employees</h2>
      </div>
      <div className="text-4xl font-bold mt-8">{totalEmployees}</div>
    </div>
  );
}

export default Card1