import React from "react";
import { FaTrash, FaLink } from "react-icons/fa";

function UserCard({ user, onDelete, onAddLink }) {
  return (
    <div className="w-full max-w-[600px] rounded overflow-hidden shadow-lg bg-white p-4 m-4 relative">
      {/* Header with Delete Button */}
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl text-gray-900">{user.name}</div>
        <button
          onClick={() => onDelete(user)}
          className="text-red-500 hover:text-red-700"
          title="Delete User"
        >
          <FaTrash size={20} />
        </button>
      </div>

      {/* User URL */}
      <p className="text-gray-700 text-base mt-2">
        <a
          href={user.url}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.url}
        </a>
      </p>

      {/* Add Link Button */}
      <button
        onClick={onAddLink}
        className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        <FaLink className="mr-2" /> Add Link
      </button>
    </div>
  );
}

export default UserCard;
