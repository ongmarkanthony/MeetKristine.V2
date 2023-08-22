import { useState, useEffect } from "react";
import axios from "axios";

const UserTotalWorkHours = () => {
  const [totalHours, setTotalHours] = useState(48.36);

  useEffect(() => {
    const getTotalHours = async () => {
      try {
        const response = await axios.get("https://api.example.com/workhours");
        setTotalHours(response.data.totalHours);
      } catch (error) {
        console.error(error);
      }
    };

    getTotalHours();
  }, []);

  return (
    <div className="p-4 bg-green-100 rounded-md shadow-md text-center text-lg font-bold h-1/4">
      Total Work Hours: {totalHours}
    </div>
  );
};

export default UserTotalWorkHours;
