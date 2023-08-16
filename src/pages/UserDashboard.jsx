import React, { useEffect, useState } from 'react'
import UserFooter from '../components/UserFooter';
import TaskBar from '../components/TaskBar';
import TimeChart from '../components/TimeChart';
import MainSidebar from '../components/GlobalSidebar';
import UserDBContent from '../components/UserDBContent';

const UserDashboard = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch("https://holidayapi.com/v1/holidays?pretty&key=8e2addfa-5dc8-49e0-890f-467a7c128dbe&country=PH&year=2022");
        const data = await response.json();
        setHolidays(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHolidays  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        <div className="flex flex-col sm:flex-row flex-grow">
          <MainSidebar />
          <UserDBContent />
        </div>
        <UserFooter />
      </div>
  </>
  );
};
export default UserDashboard