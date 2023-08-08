import React, { useEffect, useState } from 'react';

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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2 bg-blue-200 border border-blue-500">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">49.36</h2>
            <p className="leading-relaxed">Total Number of Hours Work Per Week</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2 bg-blue-200 border border-blue-500">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">5</h2>
            <p className="leading-relaxed">Available Leave Credits</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2 bg-blue-200 border border-blue-500">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">7</h2>
            <p className="leading-relaxed">Available Vacation Leave Credits</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2 bg-blue-200 border border-blue-500">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">5</h2>
            <p className="leading-relaxed">Available Sick Leave Credits</p>
          </div>
        </div>
      </div>
      <div className="container px-5 py-18 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <div className=" flex-grow p-4 lg:w-1/2 md:w-full bg-blue-300 border border-blue-600">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Approved Leave Applications</h2>
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Employee Name</th>
                      <th className="px-4 py-2">Leave Type</th>
                      <th className="px-4 py-2">Start Date</th>
                      <th className="px-4 py-2">End Date</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">John Doe</td>
                      <td className="border px-4 py-2">Vacation</td>
                      <td className="border px-4 py-2">2023-08-10</td>
                      <td className="border px-4 py-2">2023-08-15</td>
                      <td className="border px-4 py-2">Approved</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Jane Doe</td>
                      <td className="border px-4 py-2">Vacation</td>
                      <td className="border px-4 py-2">2023-08-10</td>
                      <td className="border px-4 py-2">2023-08-15</td>
                      <td className="border px-4 py-2">Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div className="flex-grow p-4 lg:w-1/2 md:w-full">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-center">Upcoming Holidays</h2>
                <table className="table-auto mx-auto text-left">
                  <tbody>
                    {holidays.map((holiday) => (
                      <tr key={holiday.name}>
                        <td className="border px-4 py-2">{holiday.name}</td>
                        <td className="border px-4 py-2">{holiday.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    </section>
  );
};
export default UserDashboard