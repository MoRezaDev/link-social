import React from "react";
import { FaUserSlash } from "react-icons/fa"; // React Icons for adding some flair

const NoUserFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <FaUserSlash className="text-6xl text-gray-400" />
      <h2 className="text-xl font-bold text-gray-700">No User Found</h2>
      <p className="text-gray-500">
        Sorry, we couldn’t find the user you were looking for.
      </p>
    </div>
  );
};

export default NoUserFound;
