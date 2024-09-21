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

function LinkCard({ link, user }) {
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
    <div className="flex justify-between items-center bg-gray-300 rounded-sm p-2 mb-2">
      <div className="w-full max-w-[400px] overflow-x-auto custom-scrollbar shrink ">
        <p> {link.url}</p>
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
    <div className="w-full max-w-[600px] rounded overflow-hidden shadow-lg bg-white p-4 m-4 relative">
      {/* Header with Delete Button */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-gray-200 rounded-sm p-2 mb-2">
        <div className="w-full sm:max-w-[450px] overflow-x-auto">
          <div className="font-bold text-md text-gray-800">
            User: {user.name}
          </div>
          <p className="text-gray-700 text-base">
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
        <div className="flex w-fit  gap-2 p-1 bg-gray-300 items-center sm:justify-end sm:min-w-[70px]">
          <QrButton link={user.url} />
          <FaEye
            onClick={() =>
              navigate("/admin/dashboard/preview", { state: { user } })
            }
            className="text-[#00bbff] hover:text-blue-500 cursor-pointer"
          />
          <EditUserButton user={user} />
          <button
            onClick={() => onDelete(user)}
            className="text-[#00bbff] hover:text-blue-500"
            title="Delete User"
          >
            <FaTrash size={16} />
          </button>
        </div>
      </div>

      {/* User URL */}
      <div className="flex flex-col justify-between  bg-gray-200 rounded-sm p-2 mb-2">
        <h1 className="text-md font-bold">Links</h1>
        {user.links?.map((link, idx) => (
          <LinkCard key={idx} link={link} user={user} />
        ))}
      </div>

      {/* Add Link Button */}
      <AddLinksButton user={user} />
    </div>
  );
}

export default UserCard;
