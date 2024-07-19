import React from "react";
import "./Searchbar.css";

const searchbar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search a album of Your Choice." />
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
        Search
      </button>
    </div>
  );
};

export default searchbar;
