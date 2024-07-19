import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Feedback from "../Feedback/FeedbackButton";

const Navbar = ({ onFeedbackButtonClick }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div>
        <Searchbar />
      </div>
      <div className="feedback">
        <Feedback onFeedbackButtonClick={onFeedbackButtonClick} />
      </div>
    </div>
  );
};

export default Navbar;
