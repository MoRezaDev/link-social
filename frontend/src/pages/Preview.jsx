import React from "react";
import { useLocation } from "react-router-dom";
import { processLinks } from "../helper/functions";
import LinkCard from "../components/card/LinkCard";
import AvatarComponent from "../components/others/AvatarComponent";

import "../styles/preview.css";

function Preview() {
  const location = useLocation();
  const links = processLinks(location.state?.user?.links);
  console.log(links);

  if (!links.length) return <div>There is no links to show!</div>;
  return (
    <div className="w-full flex flex-col gap-4 items-center scale-up">
      <div className="flex flex-col gap-2 items-center">
        <AvatarComponent />
        <h1 className="font-bold text-2xl text-gray-700">
          {location.state?.user.name}
        </h1>
      </div>
      {links?.map((link, idx) => (
        <LinkCard key={idx} link={link} />
      ))}
    </div>
  );
}

export default Preview;
