import React from "react";
import "../styles/Home.css"; // Make sure to create this CSS file
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title text-[8vw] md:text-[5vw]">
        One Link for All Your Socials
      </h1>
      <p className="description text-justify">
        Create a single link that connects all your social media profiles. Share
        it with your friends and let them discover everything about you!
      </p>
      <Link to="/" className="cta-button">
        Get Started
      </Link>
      <div className="image-container">
        <FaLink size={30} />
      </div>
    </div>
  );
};

export default Home;
