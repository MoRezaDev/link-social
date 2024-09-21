import React from "react";
import { FaLink } from "react-icons/fa"; // Icon to represent no links

const NoLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <FaLink className="text-6xl text-gray-400" />
      <h2 className="text-xl font-bold text-gray-700">No Links Available</h2>
      <p className="text-gray-500">
        This user hasn't added any links yet. Check back later!
      </p>
    </div>
  );
};

export default NoLinks;
