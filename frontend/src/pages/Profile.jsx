import React from "react";
import { useSearchParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import AvatarComponent from "../components/others/AvatarComponent";
import LinkCard from "../components/card/LinkCard";

import "../styles/preview.css";
import { processLinks } from "../helper/functions";
import NoUserFound from "../components/not-found/NoUserFound";
import NoLinks from "../components/not-found/NoLinks";

function Profile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const category = searchParams.get("category");

  const { users } = useUser();
  if (!users) return <h1>Loading...</h1>;
  console.log(name);
  console.log(users);
  let foundedUser = category
    ? users?.find((user) => user.name === name && user.category === category)
    : name
    ? users?.find((user) => user.name === name)
    : null;

  if (!foundedUser) return <NoUserFound />;

  if (!foundedUser.links) return <NoLinks />;

  const links = processLinks(foundedUser.links);

  console.log(name);
  console.log(category);
  return (
    <div className="w-full p-2 flex flex-col gap-4 items-center scale-up">
      <div className="flex flex-col gap-2 items-center">
        <AvatarComponent />
        <h1 className="font-bold text-2xl text-gray-700">{foundedUser.name}</h1>
      </div>
      {links.map((link, idx) => (
        <LinkCard key={idx} link={link} />
      ))}
    </div>
  );
}

export default Profile;
