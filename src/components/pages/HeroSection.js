import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Taste the difference</h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://firebasestorage.googleapis.com/v0/b/aries-a37e7.appspot.com/o/aries-menu.pdf?alt=media&token=76811f7a-fa19-475f-8de9-cccf52e096de";
          }}
        >
          DOWNLOAD MENU
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
