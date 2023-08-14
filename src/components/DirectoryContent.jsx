import { useState, useEffect } from 'react';
import axios from 'axios';

const TeamMember = ({ name, role, email, phone }) => (
  <div className="p-4 lg:w-1/2">
    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
      <img
        alt="team"
        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
        src="https://dummyimage.com/200x200"
      />
      <div className="flex-grow sm:pl-8">
        <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
        <h3 className="text-gray-500 mb-3">{role}</h3>
        <p className="mb-4">{email}</p>
        <p className="mb-4">{phone}</p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;

  useEffect(() => {
    axios.get(`https://api.example.com/team-members?page=${currentPage}&limit=${itemsPerPage}&search=${searchTerm}`)
      .then(response => setTeamMembers(response.data))
      .catch(error => console.error(error));
  }, [currentPage, searchTerm]);

  const nextPage = () => setCurrentPage(prevPage => prevPage + 1);
  const prevPage = () => setCurrentPage(prevPage => prevPage - 1);
  const handleSearch = event => setSearchTerm(event.target.value);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
            Meet the Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Meet the remarkable individuals that make up Kristine's dedicated team! Let's take a closer look at the members who collaborate with Kristine to achieve outstanding results and create a positive impact.
          </p>
        </div>
        <div className="flex justify-end">
          <input type="text" onChange={handleSearch} className="px-3 py-2 border-gray-300 rounded-lg" placeholder="Search" />
        </div>
      </div>
      <div className="flex flex-wrap">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <div className="flex justify-end mt-1">
        <button onClick={prevPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <button onClick={nextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
          Next
        </button>
      </div>
    </section>
  );
}