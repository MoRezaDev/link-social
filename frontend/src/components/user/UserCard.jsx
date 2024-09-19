import React, { useState } from "react";
import { FaEdit, FaTrash, FaUserEdit } from "react-icons/fa";
import AddLinksButton from "../buttons/AddLinksButton";

function UserCard({ user, onDelete, onAddLink }) {
  return (
    <div className="w-full max-w-[600px] rounded overflow-hidden shadow-lg bg-white p-4 m-4 relative">
      {/* Header with Delete Button */}
      <div className="flex justify-between items-center bg-gray-200 rounded-sm p-2 mb-2">
        <div>
          <div className="font-bold text-md text-gray-800">
            User: {user.name}
          </div>
          <p className="text-gray-700 text-base ">
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
        <div className="flex gap-3 items-center justify-center">
          <button
            onClick={() => onDelete(user)}
            className="text-[#00bbff] hover:text-blue-500"
            title="Edit User"
          >
            <FaUserEdit size={16} />
          </button>
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

      {/* Add Link Button */}
      <AddLinksButton user={user} />
    </div>
  );
}

export default UserCard;
