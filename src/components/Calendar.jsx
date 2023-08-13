import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const calendar = [];

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(
        <div key={`empty-${i}`} className="h-12 w-12"></div>
      );
    }

    // Add cells for each day in the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(
        <div key={`day-${day}`} className="h-12 w-12 flex items-center justify-center">
          {day}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}
        >
          Previous Month
        </button>
        <h2 className="text-lg font-semibold">
          {monthsOfYear[date.getMonth()]} {date.getFullYear()}
        </h2>
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}
        >
          Next Month
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-gray-500 font-semibold text-sm">
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar
