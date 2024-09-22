import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Header() {
  const { isAuthenthicated, logoutHandler } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="w-full rounded-sm h-[60px] bg-white p-2 shadow-md flex items-center justify-between">
      <div>Header</div>
      <div>
        {isAuthenthicated ? (
          <button
            onClick={logoutHandler}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
