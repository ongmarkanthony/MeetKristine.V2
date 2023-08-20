import React, { useState } from "react";
import ProfilePhoto from "./ProfilePhoto";
import UserHeader from "./UserHeader";
import LinkComponent from "./NavLink";


const MainSidebar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div className="flex flex-col border w-screen">
      <div className="bg-blue-500 p-2 text-white">
        <UserHeader />
      </div>
      <div className="bg-red-500 p-2 text-white">
        <ProfilePhoto />
      </div>
      <div className="bg-green-500 p-2 text-white h-3/4">
        <LinkComponent />
      </div>
    </div>
  );
};
export default MainSidebar;
