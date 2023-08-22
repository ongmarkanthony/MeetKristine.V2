import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "../utils/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "../store/loggedInUserAction";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  const dispatch = useDispatch();
  // const toggleForgotPassword = () => {
  //   setForgotPassword((prevForgotPassword) => !prevForgotPassword);
  // };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = await response.json();
        authenticateUser(user);
        dispatch(setLoggedInUser(true));
        setIsLoggedIn(true);
      } else {
        throw new Error("Invalid Credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loggedInUser = useSelector((state) => state.loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      navigate('/UserDashboard');
    }
  }, [loggedInUser]);

  return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Employee Login</h1>
            </div>
            <form onSubmit={handleLogin}>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
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
                  <button type ="submit" 
                  onClick = {handleLogin}
                  className="bg-blue-500 text-white rounded-md px-2 py-1">
                    Submit
                  </button>
                  </div>
                  </div>
                  </div>
                </form>
                </div>
                {/* <div className="relative">
                  <label className="inline-flex items-center">
                    <input 
                    type="radio" 
                    className="form-radio" 
                    name="passwordOption" value="forgot" 
                    checked={forgotPassword} 
                    onChange={toggleForgotPassword}
                    />
                    <Link to="/PasswordResetForm" className="ml-2">Forgot Password?</Link>
                  </label> */}

              </div>
            </div>
          </div>
  );
};
export default Login;