import { useState } from "react";
import profilePic from "../assets/Avatar.jpg";

const ProfilePhoto = () => {
  const [profilePic, setProfilePic] = useState("avatar");

  const handleChangePic = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPic = e.target.result;
        setProfilePic(newPic);
        // Logic to store the newPic in the backend database
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" flex justify-center item-center">
      <div className=" flex flex-col rounded-lg shadow-lg items-center">
        <img
          src={profilePic === "avatar" ? "../assets/Avatar.jpg" : profilePic}
          alt="Profile Picture"
          className="w-full h-auto rounded-full  mx-auto object-cover"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleChangePic}
          className="hidden text-center"
          id="profile-pic-input"
        />
        <label
          htmlFor="profile-pic-input"
          className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg cursor-pointer"
        >
          Change Profile
        </label>
      </div>
    </div>
  );
};

export default ProfilePhoto;