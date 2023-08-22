import React, { useState, useEffect } from "react";

const Header = ({ firstName}) => {
  return (
    <header className="p-4 bg-blue-500 text-white flex flex-row justify-between items-center">
      <h6 className="text-xl font-bold">Welcome, {firstName}!</h6>
    </header>
  );
};

const UserHeader = () => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    fetch(" http://localhost:8000/api/v1/users")
      .then((response) => response.json())
      .then((data) => setFirstName(data.firstName))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 flex flex-col">
      <Header firstName={firstName}/>
    </div>
  );
};

export default UserHeader;