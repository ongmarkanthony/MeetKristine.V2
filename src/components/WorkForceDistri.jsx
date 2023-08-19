import { useState } from "react";

const WorkForceDistribution = () => {
  const [ageData, setAgeData] = useState([
    { age: "18-24", percentage: 25 },
    { age: "25-34", percentage: 40 },
    { age: "35-44", percentage: 20 },
    { age: "45-54", percentage: 10 },
    { age: "55+", percentage: 5 },
  ]);

  const [genderData, setGenderData] = useState([
    { gender: "Male", percentage: 60 },
    { gender: "Female", percentage: 40 },
  ]);

  const [locationData, setLocationData] = useState([
    { location: "PH", percentage: 65 },
    { location: "US", percentage: 15 },
    { location: "HK", percentage: 20 },

  ]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Workforce Distribution</h1>
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Age Distribution</h2>
        {ageData.map((data) => (
          <div
            key={data.age}
            className="flex items-center mb-2"
          >
            <div
              className="w-1/2 bg-blue-300 h-4 rounded-l"
              style={{ width: `${data.percentage}%` }}
            ></div>
            <div className="w-1/2 pl-2">{`${data.age} (${data.percentage}%)`}</div>
          </div>
        ))}
      </div>
      <div className="w-1/2 mt-8">
        <h2 className="text-2xl font-bold mb-4">Gender Distribution</h2>
        {genderData.map((data) => (
          <div
            key={data.gender}
            className="flex items-center mb-2"
          >
            <div
              className="w-1/2 bg-green-300 h-4 rounded-l"
              style={{ width: `${data.percentage}%` }}
            ></div>
            <div className="w-1/2 pl-2">{`${data.gender} (${data.percentage}%)`}</div>
          </div>
        ))}
      </div>
      <div className="w-1/2 mt-8">
        <h2 className="text-2xl font-bold mb-4">Location Distribution</h2>
        {locationData.map((data) => (
          <div
            key={data.location}
            className="flex items-center mb-2"
          >
            <div
              className="w-1/2 bg-yellow-300 h-4 rounded-l"
              style={{ width: `${data.percentage}%` }}
            ></div>
            <div className="w-1/2 pl-2">{`${data.location} (${data.percentage}%)`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkForceDistribution;