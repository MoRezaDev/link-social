import React from "react";

function AvatarComponent({ imageUrl, altText = "User Avatar" }) {
  // Fallback image when no imageUrl is provided
  const defaultImage = "/assets/profile.png";

  return (
    <div className="size-24 rounded-full overflow-hidden border-2 border-gray-300 shadow-lg">
      <img
        src={imageUrl || defaultImage} // Use the provided image or fallback
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default AvatarComponent;
