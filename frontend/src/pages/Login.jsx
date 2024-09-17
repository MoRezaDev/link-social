import React from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const isLoggedin = false;
  return isLoggedin ? <Navigate to="/" /> : <div>Login</div>;
}

export default Login;
