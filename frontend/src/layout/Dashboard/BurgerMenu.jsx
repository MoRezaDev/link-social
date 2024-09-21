import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaLink,
  FaPaintBrush,
  FaEye,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdShare } from "react-icons/md";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false); // State to control burger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <div>
      {/* Burger Menu for Small Devices */}
      <nav className="sm:hidden bg-white shadow-sm shadow-slate-100">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo or title */}
          <h1 className="text-lg font-bold">Your App</h1>

          {/* Burger Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none focus:text-blue-500"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Collapsible Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } px-4 pt-2 pb-4 space-y-2 bg-white`}
        >
          {/* Links for Small Devices */}
          <NavLink
            to="/admin/dashboard/user"
            className={({ isActive }) =>
              `block text-sm font-medium ${
                isActive ? "text-[#00bbff]" : "text-black"
              } hover:bg-gray-100 py-2`
            }
            onClick={toggleMenu}
          >
            <FaUser className="inline mr-2" />
            User
          </NavLink>

          <NavLink
            to="/admin/dashboard/design"
            className={({ isActive }) =>
              `block text-sm font-medium ${
                isActive ? "text-[#00bbff]" : "text-black"
              } hover:bg-gray-100 py-2`
            }
            onClick={toggleMenu}
          >
            <FaPaintBrush className="inline mr-2" />
            Design
          </NavLink>

          <NavLink
            to="/admin/dashboard/share"
            className={({ isActive }) =>
              `block text-sm font-medium ${
                isActive ? "text-[#00bbff]" : "text-black"
              } hover:bg-gray-100 py-2`
            }
            onClick={toggleMenu}
          >
            <MdShare className="inline mr-2" />
            Share
          </NavLink>

          <NavLink
            to="/admindashboard/preview"
            className={({ isActive }) =>
              `block text-sm font-medium ${
                isActive ? "text-[#00bbff]" : "text-black"
              } hover:bg-gray-100 py-2`
            }
            onClick={toggleMenu}
          >
            <FaEye className="inline mr-2" />
            Preview
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default BurgerMenu;
