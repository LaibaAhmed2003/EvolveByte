import React from "react";
import video from "../../media/herovid.mp4";
import { HashLink as Link } from "react-router-hash-link";
import "./hero.css";

import Martin from "../../media/Clients/Martin.png";
import Andrew from "../../media/Clients/Andrew.png";
import Matheas from "../../media/Clients/Matheas.png";
import Selva from "../../media/Clients/selva.png";
import karl from "../../media/Clients/karl.jpg";
import Isabella from "../../media/Clients/Isabell.jpg";
import Dan from "../../media/Clients/Dan.jpg";
import Laura from "../../media/Clients/Laura.jpg";
import Werner from "../../media/Clients/Werner.jpg";
import sidra from "../../media/Clients/sidrasaleem.jpg";
import laiba from "../../media/Clients/laiba.jpg";
import aliaslam from "../../media/Clients/aliaslam.jpg";
import pascal from "../../media/Clients/pascalimg.jpg";
import russ from "../../media/Clients/russ.jpg";
const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <div className="video-overlay">
        {/* <video
          className="video-background"
          src={video}
          autoPlay
          muted
          loop
          // style={{ opacity: "0.1" }}
        ></video> */}
      </div>
      <div className="hero-content">
        <h1>
          Build Your Thought Leaderships &
          <br />
          <span className="span">
            Get Leads from <a style={{ fontSize: "80px" }}> LinkedIn. </a>
          </span>
        </h1>
        <h5>
          As your LinkedIn partner we help you build your authority, attract the
          right audience, and get your warm leads with higher conversion rate.
        </h5>
        <Link
          smooth
          to="https://calendly.com/evolvebyte/meeting"
          target="_blank"
          className="navlink"
        >
          <button className="Seebtn">Book a Call</button>
        </Link>
        <div className="images-folder">
          {/* <img src={Martin} alt="" className="martin" /> */}
          <img src={Andrew} alt="" className="andrew" />
          <hr className="connection-line1" />
          <img src={Matheas} alt="" className="matheas" />
          <hr className="connection-line2" />
          <img src={pascal} alt="" className="karl" />
          <hr className="connection-line3" />

          <img src={Selva} alt="" className="selva" />
          <hr className="connection-line4" />

          <img src={Isabella} alt="" className="isabella" />
          <hr className="connection-line5" />

          <img src={Dan} alt="" className="dan" />
          <hr className="connection-line6" />

          <img src={Laura} alt="" className="laura" />
          <hr className="connection-line7" />

          <img src={Werner} alt="" className="werner" />
          <hr className="connection-line8" />

          {/* <img src={aliaslam} alt="" className="aliaslam" /> */}
          <img src={russ} alt="" className="sidra" />
          <img src={laiba} alt="" className="laiba" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
