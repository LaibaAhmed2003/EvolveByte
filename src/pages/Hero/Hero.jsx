import React from "react";
import video from "../../media/herovid.mp4";
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
          Build Your Thought Leaderships & <br />
          <span className="span">Get Leads from LinkedIn.</span>
        </h1>
        <h5>
          As your LinkedIn partner we help you build your authority, attract the
          right audience, and get your warm leads with higher conversion rate.
        </h5>

        <Link smooth to="#pricing" className="navlink">
          <button className="Seebtn">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
