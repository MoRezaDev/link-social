import React, { useState } from "react";
import {
  FaCopy,
  FaTrash,
  FaEye,
  FaQrcode,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaLink,
} from "react-icons/fa";
import AddLinksButton from "../buttons/AddLinksButton";
import EditUserButton from "../buttons/EditUserButton";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";

import "../../styles/User.css";
import { useNavigate } from "react-router-dom";
import QrButton from "../buttons/QrButton";
import { processLink } from "../../helper/functions";

function LinkCardInside({ link, user }) {
  const { users } = useUser();

  const linkWithContent = processLink(link);

  const deleteHandler = (e) => {
    const filteredLinks = user.links.filter((lk) => lk.name !== link.name);
    const tempUsers = users;
    const indexUser = tempUsers.findIndex((us) => us.id === user.id);
    tempUsers[indexUser].links = filteredLinks;
    localStorage.setItem("users", JSON.stringify(tempUsers));

    toast.success("deleted!");
    setTimeout(() => {
      location.reload();
    }, 1000);
  };

  //handling Icons
  const iconMap = {
    instagram: <FaInstagram className="text-pink-500" />,
    linkedin: <FaLinkedin className="text-blue-500" />,
    email: <FaEnvelope className="text-red-500" />,
    phone: <FaPhone className="text-green-500" />,
    whatsapp: <FaWhatsapp className="text-green-600" />,
    telegram: <FaTelegram className="text-blue-400" />,
    other: <FaLink className="text-gray-500" />, // Fallback icon for unknown URLs
  };

  const handleCopy = () => {
    const textToCopy = link.url;
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast.success("Copied to clipboard!");
    });
  };
  return (
    <div className="flex border border-slate-500 justify-between items-center bg-gray-300 rounded-sm p-2 mb-2">
      <div className="w-full max-w-[400px] overflow-x-auto custom-scrollbar shrink ">
        <p className="text-sm font-semibold"> {link.url}</p>
        <div>{iconMap[linkWithContent.content] || iconMap["other"]}</div>
      </div>
      <div className="flex items-center justify-end gap-2 min-w-[60px]">
        <button
          type="button"
          className=" text-gray-500 hover:text-gray-700 bg-transparent"
          onClick={handleCopy}
        >
          <FaCopy />
        </button>
        <FaTrash
          onClick={deleteHandler}
          className="cursor-pointer text-red-500 transition hover:text-red-700"
          size={13}
        />
      </div>
    </div>
  );
}

function UserCard({ user, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="w-full  max-w-[600px] h-[300px] p-4 m-4 shadow-lg bg-white rounded-sm">
      <div className="w-full h-full overflow-auto bg-white relative custom-scrollbar">
        {/* Header with Delete Button */}
        <div className="flex   flex-col sm:flex-row justify-between sm:items-center bg-gray-200 rounded-sm p-2 mb-2">
          <div className="w-full sm:max-w-[450px] overflow-x-auto">
            <div className="font-bold text-md text-gray-800 bg-gray-300 w-fit px-2 mb-1">
              User: {user.name}
            </div>
            <p className="text-gray-700 text-base mb-2 sm:mb-0 bg-gray-300 w-fit px-2">
              <a
                href={user.url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.url}
              </a>
            </p>
          </div>

          <div className="flex w-fit gap-2 p-1 bg-gray-300 items-center sm:justify-end sm:min-w-[125px]">
            <div className="relative group">
              <button
                type="button"
                className=" text-gray-500 hover:text-gray-700 bg-transparent"
                onClick={() => {
                  const textToCopy = user.url;
                  navigator.clipboard.writeText(textToCopy).then(() => {
                    toast.success("Copied to clipboard!");
                  });
                }}
              >
                <FaCopy size={16} />
              </button>
              <span className="absolute top-[110%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-black text-white rounded-md p-1 w-auto min-w-[80px] text-center">
                Copy URL
              </span>
            </div>
            <div className="relative group">
              <QrButton
                size={16}
                link={user.url}
                className="text-green-500 hover:text-green-300 cursor-pointer"
              />
              <span className="absolute top-[110%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-black text-white rounded-md p-1 w-auto min-w-[80px] text-center">
                QR Code
              </span>
            </div>

            <div className="relative group">
              <FaEye
                size={16}
                onClick={() =>
                  navigate("/admin/dashboard/preview", { state: { user } })
                }
                className="text-blue-600 hover:text-blue-400 cursor-pointer"
              />
              <span className="absolute top-[110%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-black text-white rounded-md p-1 w-auto min-w-[80px] text-center">
                View User
              </span>
            </div>

            <div className="relative group">
              <EditUserButton
                size={16}
                user={user}
                className="text-yellow-500 hover:text-yellow-300 cursor-pointer"
              />
              <span className="absolute top-[110%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-black text-white rounded-md p-1 w-auto min-w-[80px] text-center">
                Edit User
              </span>
            </div>

            <div className="relative group">
              <button
                onClick={() => onDelete(user)}
                className="text-red-500 hover:text-red-300 cursor-pointer"
                title="Delete User"
              >
                <FaTrash size={16} />
              </button>
              <span className="absolute top-[110%] left-1/2 transform -translate-x-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-black text-white rounded-md p-1 w-auto min-w-[80px] text-center">
                Delete User
              </span>
            </div>
          </div>
        </div>

        {/* User URL */}
        <div className="flex flex-col justify-between   bg-gray-200 rounded-sm p-2 mb-2">
          <h1 className="text-md font-bold">Links</h1>
          {user.links?.map((link, idx) => (
            <LinkCardInside key={idx} link={link} user={user} />
          ))}
        </div>

        {/* Add Link Button */}
        <AddLinksButton user={user} />
      </div>
    </div>
  );
}

export default UserCard;
