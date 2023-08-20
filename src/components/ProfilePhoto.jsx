import { useState, useEffect } from "react";
import axios from 'axios';

const defaultImage = "https://via.placeholder.com/150";

const UserProfile = ({ userId, size }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState(defaultImage);
  const imageSize = size === "large" ? "w-28 h-28" : "w-10 h-10";
  const textVisibility = size === "large" ? "block" : "hidden";

  useEffect(() => {
    axios.get(`https://api.example.com/user/${userId}`)
      .then(response => {
          setName(response.data.name);
          setRole(response.data.role);
          setImage(response.data.imageUrl || defaultImage);
      });
  }, [userId]);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    const formData = new FormData();
    formData.append('file', event.target.files[0]);

    axios.post(`https://api.example.com/user/${userId}/image`, formData);
  };

  return (
    <div className="text-white shadow w-full p-2 flex items-center justify-between">
      <div className="flex items-center">
        <div className="mt-8 text-center">
          <img 
            src={image} 
            alt="" 
            className={`m-auto rounded-full object-cover ${imageSize}`}/>
          <h5 className={`mt-4 text-xl font-semibold text-gray-600 ${textVisibility}`}>{name}</h5>
          <span className={`text-gray-400 ${textVisibility}`}>{role}</span>
          <input 
            type="file" 
            onChange={handleImageChange} 
            className={`mt-4 ${textVisibility}`}
          />
        </div>
      </div>
    </div>
  );
};

const ProfilePhoto = () => {
  const [userId, setUserId] = useState(null);
  
  useEffect(() => {
    axios.get(' http://localhost:8000/api/v1/users')
      .then(response => {
          setUserId(response.data.userId);
      });
  }, []);

  return (
    userId && <UserProfile userId={userId} size="large" />
  );
};

export default ProfilePhoto;