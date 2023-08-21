import { useState } from 'react';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUploadClick = () => {
    if (files.length === 0) {
      setMessage('No files selected for upload.');
    } else {
      setMessage('Files uploaded successfully!');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-500  w-full p-12">
      <div className="absolute bg-black opacity-60 inset-0 z-0 w-full h-full" />
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">File Upload!</h2>
          <p className="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
        </div>
        <form className="mt-8 space-y-3">
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">Title</label>
            <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="mail@gmail.com" />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center">
                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Drag and drop</span> files here <br /> or <a href="#" className="text-blue-600 hover:underline">select a file</a> from your computer
                  </p>
                </div>
                <input type="file" className="hidden" multiple onChange={handleFileChange} />
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: doc,pdf,types of images</span>
          </p>
          <div>
            <button onClick={handleUploadClick} type="button" className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
              Upload
            </button>
          </div>
        </form>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-700">Uploaded Files:</h3>
          <ul className="mt-2 space-y-2">
            {files.map((file, index) => (
              <li key={index} className="border p-2 rounded">
                {file.name} ({Math.round(file.size / 1024)} KB)
              </li>
            ))}
          </ul>
        </div>
        {message && <p className="mt-5 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default FileUpload;