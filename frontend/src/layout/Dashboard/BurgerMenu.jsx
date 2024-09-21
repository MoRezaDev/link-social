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

function BurgerMenu({ isOpen, setIsOpen }) {
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
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
        to="/admin/dashboard/preview"
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
  );
}

export default BurgerMenu;
