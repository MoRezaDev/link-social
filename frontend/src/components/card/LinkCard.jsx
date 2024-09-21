import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaLink,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa"; // Importing icons

import "../../styles/preview.css";

function LinkCard({ link }) {
  console.log(link);
  // Mapping 'content' to icons
  const iconMap = {
    instagram: <FaInstagram className="text-pink-500" />,
    linkedin: <FaLinkedin className="text-blue-500" />,
    email: <FaEnvelope className="text-red-500" />,
    phone: <FaPhone className="text-green-500" />,
    whatsapp: <FaWhatsapp className="text-green-600" />,
    telegram: <FaTelegram className="text-blue-400" />,
    other: <FaLink className="text-gray-500" />, // Fallback icon for unknown URLs
  };

  const renderLink = () => {
    if (link.content === "phone") {
      // For phone numbers, use 'tel:' protocol
      return (
        <a href={`tel:${link.url}`} className="text-blue-600  truncate bg-link-card ">
          {`${link.name}`}
        </a>
      );
    } else if (link.content === "whatsapp") {
      // For WhatsApp numbers, use WhatsApp API
      return (
        <a
          href={`https://wa.me/${link.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600  truncate bg-link-card "
        >
          {`${link.name}`}
        </a>
      );
    } else if (link.content === "email") {
      // For Email
      return (
        <a
          href={`mailto: ${link.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600  truncate bg-link-card"
        >
          {`${link.name}`}
        </a>
      );
    } else if (link.content === "telegram") {
      // For Telegram links, use Telegram URL
      return (
        <a
          href={`https://t.me/${link.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600  truncate bg-link-card "
        >
          {`${link.name}`}
        </a>
      );
    } else {
      // For other types of links
      return (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600  truncate bg-link-card"
        >
          {link.name}
        </a>
      );
    }
  };

  return (
    <div className="w-full max-w-[500px] bg-white p-4 flex items-center gap-2 border shadow-md rounded-md">
      {/* Display icon based on content */}
      <div className="text-2xl bg-icon-card">
        {iconMap[link.content] || iconMap["other"]}{" "}
        {/* Fallback to 'other' if content is not mapped */}
      </div>
      {/* Render the link */}
      {renderLink()}
    </div>
  );
}

export default LinkCard;
