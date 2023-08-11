import React from 'react'
import { useState } from 'react'

const ProfilePhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("myFile", selectedFile, selectedFile.name);
    console.log(selectedFile);
  };

  return (
    <div className='max-w-md mx-auto bg-white p-5 rounded-md shadow-sm'>
      <form>
        <div>
          {imagePreview && (
            <div className='mb-4'>
              <img src={imagePreview} alt='Profile' className='h-40 w-40 object-cover rounded-full' />
            </div>
          )}
          <label className='block text-sm font-medium text-gray-700'>
            Profile photo
          </label>
          <div className='mt-1 flex items-center'>
            <input
              type='file'
              onChange={onFileChange}
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePhoto;
