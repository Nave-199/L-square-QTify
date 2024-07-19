import React from "react";
import "./HeroImage.css";
import HerLogo from "./HerLogo";

const HeroImage = () => {
  return (
    <div className="heroimage">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div className="heroLogo">
        <HerLogo />
      </div>
    </div>
  );
};

export default HeroImage;
