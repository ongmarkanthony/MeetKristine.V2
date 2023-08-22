import React from "react";
import ProfileInfoForm from "../components/ProfileInfoForm";
import AddressInfoForm from "../components/AddressInfoForm";
import OtherInfoForm from "../components/OtherInfoForm";
import UserFooter from "../components/UserFooter";
import Sidebar from "../components/Sidebar";

const UserProfile = () => {

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <div className="flex-1 md:w-80 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex flex-col h-screen bg-white p-4 shadow-lg w-full overflow-auto">
        <ProfileInfoForm/>
        <AddressInfoForm />
        <OtherInfoForm/>
      </div>
    </div>
  );
};

export default UserProfile;
