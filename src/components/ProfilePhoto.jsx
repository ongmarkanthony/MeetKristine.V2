import { useState } from "react";

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
    <div className=" justify-start grid">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <img
          src={profilePic === "avatar" ? "/path/to/avatar.jpg" : profilePic}
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mb-4"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleChangePic}
          className="hidden"
          id="profile-pic-input"
        />
        <label
          htmlFor="profile-pic-input"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer"
        >
          Upload Picture
        </label>
      </div>
    </div>
  );
};

export default ProfilePhoto;