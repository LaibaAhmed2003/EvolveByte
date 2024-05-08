import React from "react";
import video from "../../media/herovideo.mp4";
import { HashLink as Link } from "react-router-hash-link";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <div className="video-overlay">
        <video
          className="video-background"
          src={video}
          autoPlay
          muted
          loop
          style={{ opacity: "0.2" }}
        ></video>
      </div>
      <div className="hero-content">
        <h1>
          Turn Your Brand Into A <br />
          <span
            style={{ color: "yellow", fontWeight: "500", marginTop: "15px" }}
          >
            6 Figure{" "}
          </span>{" "}
          Sales Channel.
        </h1>
        <h5>
          We help you get more qualified traffic, sales and revenue through
          content-driven Website & LinkedIn Growth.
        </h5>

        <Link smooth to="#pricing" className="navlink">
          <button className="Seebtn">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
