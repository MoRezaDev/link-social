import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaLink, FaPaintBrush, FaEye } from "react-icons/fa";
import { MdShare } from "react-icons/md";

function DashLayout() {
  return (
    <>
      <nav className="h-20 mt-1 bg-white flex items-center justify-center shadow-sm shadow-slate-100">
        <ul className="flex space-x-4 text-xs h-full">
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
      <Outlet />
    </>
  );
}

export default DashLayout;
