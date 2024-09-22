import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

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
  const [isAuthenthicated, setIsAuthenthicated] = useState(null);

  // On component mount, check if there's a auth token in localStorage
  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth && storedAuth.token === token) {
      setIsAuthenthicated(true);
    }
  }, []);

  const loginHandler = (session) => {
    console.log(session);
    if (
      session.username.toLowerCase() === admin.username &&
      session.password.toLowerCase() === admin.password
    ) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ token: "2fcab58712467eab4004583eb8fb7f89" })
      );
      setIsAuthenthicated(true);
      toast.success("logged in success!");
      setTimeout(() => location.reload(), 1000);
    } else {
      console.log("this code runs");
      localStorage.removeItem("auth");
      toast.error("user or password is incorrect");
      setIsAuthenthicated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenthicated, loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
