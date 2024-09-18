import React, { createContext, useState, useEffect } from "react";

// Create the context
export const UserContext = createContext();

// UserContext Provider component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  // On component mount, check if there's a user in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      setUsers(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
