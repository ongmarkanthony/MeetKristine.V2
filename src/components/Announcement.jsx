import { useState } from 'react'

const Announcement = ({ title, message }) => (
  <div className="p-4 bg-blue-200 rounded-lg">
    <h2 className="text-xl font-bold text-blue-700">{title}</h2>
    <p className="mt-2 text-blue-600">{message}</p>
  </div>
)

const HRAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([
    { title: 'Holiday Notice', message: 'The office will be closed on Monday.' },
    { title: 'Meeting Reminder', message: 'There is a team meeting tomorrow at 10am.' },
    { title: 'Salary Increment', message: 'All employee will get a 5% increment in this month.' },
    { title: 'New Employee', message: 'We have a new team member, John Doe.' },
    { title: 'Software Update', message: 'All systems will be under maintenance tomorrow from 1pm to 2pm.' }
  ])

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold text-gray-700">Employee Announcements</h1>
      {announcements.map((announcement, index) => (
        <Announcement key={index} title={announcement.title} message={announcement.message} />
      ))}
    </div>
  )
}

export default HRAnnouncement