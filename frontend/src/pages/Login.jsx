import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../styles/login.css";

function Login() {
  const { isAuthenthicated, loginHandler } = useAuth();
  const sessionRef = useRef({ username: "", password: "" });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      sessionRef.current.username = value;
    }
    if (name === "password") {
      sessionRef.current.password = value;
    }
  };

  return isAuthenthicated ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <div className="flex flex-col items-center mt-10 min-h-screen bg-gray-100">
      <div className="w-[90%] sm:w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>

        <div className="space-y-8">
          <div className="input-container">
            <input
              onChange={changeInputHandler}
              name="username"
              type="text"
              className="input-field"
              placeholder=" "
            />
            <label className="input-label">Username</label>
          </div>

          <div className="input-container">
            <input
              onChange={changeInputHandler}
              name="password"
              type="password"
              className="input-field"
              placeholder=" "
            />
            <label className="input-label">Password</label>
          </div>
        </div>

        <button
          onClick={() => loginHandler(sessionRef.current)}
          className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign In
        </button>

        <div className="flex justify-between mt-4 text-sm text-blue-500">
          <span className="cursor-pointer hover:underline">
            Forgot password?
          </span>
          <span className="cursor-pointer hover:underline">
            Create an account
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
