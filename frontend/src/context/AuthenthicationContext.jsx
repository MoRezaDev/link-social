import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Create the context
export const AuthContext = createContext();

//hard code dirty way
const admin = {
  username: "admin",
  password: "mehrgan123",
};

const token = "2fcab58712467eab4004583eb8fb7f89";

// UserContext Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenthicated, setIsAuthenthicated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const navigate = useNavigate();

  // On component mount, check if there's an auth token in localStorage
  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth && storedAuth.token === token) {
      setIsAuthenthicated(true);
    }
    setIsLoading(false); // Done checking auth, set loading to false
  }, []);

  const loginHandler = (session) => {
    if (
      session.username.toLowerCase() === admin.username &&
      session.password.toLowerCase() === admin.password
    ) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ token: "2fcab58712467eab4004583eb8fb7f89" })
      );
      setIsAuthenthicated(true);
      toast.success("Logged in successfully!");
      setTimeout(() => location.reload(), 1000);
    } else {
      localStorage.removeItem("auth");
      toast.error("Username or password is incorrect");
      setIsAuthenthicated(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setTimeout(() => {
      setIsAuthenthicated(false);
      navigate("/");
    }, 1000);
    toast.success("Logged out!");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenthicated, isLoading, loginHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
