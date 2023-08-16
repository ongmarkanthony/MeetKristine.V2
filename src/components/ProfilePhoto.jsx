import { useState } from "react";

const Avatar = () => {
  const [avatar, setAvatar] = useState("DefaultAvatar");
}

const ProfilePhoto = () => {
  const [profilePic, setProfilePic] = useState("DefaultAvatar");

  const handleChangePic = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
      fetch ("/api/upload", {
        method: "POST",
        body: profilePic
      })  
      
  
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col rounded-lg shadow-lg items-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-auto rounded-full mx-auto object-cover"
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