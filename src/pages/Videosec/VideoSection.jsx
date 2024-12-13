import React, { useState } from "react";
import "./videosec.css";
import videoImg from "../../media/nmvid-img.jpg";
const VideoSection = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(true);

  const handleOverlayClick = () => {
    setOverlayVisible(false);
  };

  return (
    <div className="VideoSection-container" id="videosec">
      <div className="videosec-innerdev">
        <div className="video-wrapper">
          {isOverlayVisible && (
            <img
              src={videoImg}
              alt="Overlay"
              className="video-overlay3"
              onClick={handleOverlayClick}
              style={{ cursor: "pointer" }}
            />
          )}
          {!isOverlayVisible && (
            <iframe
              width="910px"
              height="400px"
              src="https://www.youtube.com/embed/KclE-Dj0xPs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-frame"
            ></iframe>
          )}
        </div>
        <h3 className="caption">“Meet Neha Menahil”</h3>
        <div className="leads-container">
          <div className="leads-contents">
            <h4>+664%</h4>
            <h5>Organic Traffic </h5>
          </div>
          |
          <div className="leads-contents">
            <h4>+264%</h4>
            <h5>Online Leads </h5>
          </div>
        </div>
        <p className="video-para">
          Thrive used SEO & PPC to increase the overall traffic to the new Farah
          website by +664%, and along with the new CRO-focused website, they
          were able to increase online leads by over +360%.
        </p>
        <p className="case-link">Read Neha Case Study »</p>
      </div>
    </div>
  );
};

export default VideoSection;
