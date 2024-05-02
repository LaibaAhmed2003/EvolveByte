import React from "react";
import video from "../media/herovideo.mp4";
import { HashLink as Link } from "react-router-hash-link";
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
          style={{ opacity: "0.3" }}
        ></video>
      </div>
      <div className="hero-content">
        <h1>
          The easiest way to
          <br /> grow sales with <span style={{ color: "yellow" }}>SEO.</span>
        </h1>
        <h5>
          Conversion-focused SEO and content marketing for a simple monthly
          rate.
        </h5>

        <Link smooth to="#pricing" className="navlink">
          <button className="Seebtn">See Plans</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
