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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to control burger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <div>
      {/* Full Nav for Large Devices */}
      <nav className="h-20 sm:flex mt-1 bg-white hidden items-center justify-center shadow-sm shadow-slate-100">
        <ul className="flex space-x-4 text-xs h-full">
          {/* Links for Large Devices */}
          <NavLink
            to="/dashboard/user"
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-1 justify-center w-24 ${
                isActive
                  ? "text-[#00bbff] border-b-2 border-b-[#00bbff]"
                  : "text-black"
              } hover:bg-gray-100 transition-all ease-linear duration-200 px-4 py-2`
            }
          >
            <FaUser className="text-xl mb-1" />
            <span>User</span>
          </NavLink>

          <NavLink
            to="/dashboard/links"
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-1 justify-center w-24 ${
                isActive
                  ? "text-[#00bbff] border-b-2 border-b-[#00bbff]"
                  : "text-black"
              } hover:bg-gray-100 transition-all ease-linear duration-200 px-4 py-2`
            }
          >
            <FaLink className="text-xl mb-1" />
            <span>Links</span>
          </NavLink>

          <NavLink
            to="/dashboard/design"
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-1 justify-center w-24 ${
                isActive
                  ? "text-[#00bbff] border-b-2 border-b-[#00bbff]"
                  : "text-black"
              } hover:bg-gray-100 transition-all ease-linear duration-200 px-4 py-2`
            }
          >
            <FaPaintBrush className="text-xl mb-1" />
            <span>Design</span>
          </NavLink>

          <NavLink
            to="/dashboard/share"
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-1 justify-center w-24 ${
                isActive
                  ? "text-[#00bbff] border-b-2 border-b-[#00bbff]"
                  : "text-black"
              } hover:bg-gray-100 transition-all ease-linear duration-200 px-4 py-2`
            }
          >
            <MdShare className="text-2xl mb-1" />
            <span>Share</span>
          </NavLink>

          <NavLink
            to="/dashboard/preview"
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-1 justify-center w-24 ${
                isActive
                  ? "text-[#00bbff] border-b-2 border-b-[#00bbff]"
                  : "text-black"
              } hover:bg-gray-100 transition-all ease-linear duration-200 px-4 py-2`
            }
          >
            <FaEye className="text-xl mb-1" />
            <span>Preview</span>
          </NavLink>
        </ul>
      </nav>

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
            to="/dashboard/user"
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
            to="/dashboard/links"
            className={({ isActive }) =>
              `block text-sm font-medium ${
                isActive ? "text-[#00bbff]" : "text-black"
              } hover:bg-gray-100 py-2`
            }
            onClick={toggleMenu}
          >
            <FaLink className="inline mr-2" />
            Links
          </NavLink>

          <NavLink
            to="/dashboard/design"
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
            to="/dashboard/share"
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
            to="/dashboard/preview"
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

export default Navbar;