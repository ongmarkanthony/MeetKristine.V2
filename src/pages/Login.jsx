import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../utils/userAuth";
import { resetPassword } from "../utils/resetPass";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = () => {
    const role = authenticateUser(username, password);
    setUserRole(role);

    switch (role) {
      case "User":
        navigateTo("/userDashboard");
        break;
      case "Manager":
      case "Admin":
        navigateTo("/adminDashboard");
        break;
      default:
        break;
    }
  };

  // const resetPassword = (username)=>{
  //   resetPassword(username);
  // }

  // const user = users.find(user => user.username === username && user.password === password);

  // if (user) {
  //   user.password == password;
  // }

  // return null;


  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Employee Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="username"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Username"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Username
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                    Submit
                  </button>
                </div>
                {/* <div className="relative">
                  <a onClick={handleForgotPassword} className="text-blue-500">
                    Forgot Password
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;