import Video1 from "../media/timelinevideo1.mp4";
import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Process2 = () => {
  const [progressHeight, setProgressHeight] = useState(0);
  const [ringTop, setRingTop] = useState(0);
  const progressBarRef = useRef(null);

  const handleMouseMove = (e) => {
    if (progressBarRef.current) {
      const progressBarRect = progressBarRef.current.getBoundingClientRect();
      const mouseY = e.clientY - progressBarRect.top;
      const percentage = (mouseY / progressBarRect.height) * 100;
      setProgressHeight(percentage);

      // Calculate the position of the ring based on progress height
      const ringOffset = 0; // Adjust the distance from the progress bar
      setRingTop((percentage / 100) * progressBarRect.height - ringOffset);
    }
  };

  const handleMouseLeave = () => {
    setProgressHeight(0);
    setRingTop(0);
  };

  useEffect(() => {
    const videos = document.querySelectorAll(".videosec");
    videos.forEach((video) => {
      video.play();
      video.loop = true;
    });
  }, []);

  return (
    <div className="process-con" id="process">
      <p className="heading">PROCESS</p>
      <h2 className="second-heading" style={{ padding: "30px 0px 60px 0px" }}>
        <span>
          Collaboration is easy
          <br />
        </span>
        with our tech-enabled process.
      </h2>
      <div
        className="process-contents"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={progressBarRef}
      >
        <div className="process-left">
          <div className="text-item">
            <h3>REAL-TIME, TACTICAL STRATEGY. </h3>
            <p>
              Chat strategy in real-time with your SEO Strategist. Get keyword
              lists, Blog outlines, technical fixes, and more.
            </p>
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>REAL-TIME, TACTICAL STRATEGY. </h3>
            <p>
              Chat strategy in real-time with your SEO Strategist. Get keyword
              lists, Blog outlines, technical fixes, and more.
            </p>
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
        </div>
        <div className="process-mid">
          <div
            className="ring"
            style={{
              top: ringTop,
              display: progressHeight === 0 ? "none" : "block",
            }}
          ></div>
          <div className="process-line">
            <div
              className="progress"
              style={{ height: `${progressHeight}%` }}
            ></div>
          </div>
        </div>
        <div className="process-right">
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>REAL-TIME, TACTICAL STRATEGY. </h3>
            <p>
              Chat strategy in real-time with your SEO Strategist. Get keyword
              lists, Blog outlines, technical fixes, and more.
            </p>
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>REAL-TIME, TACTICAL STRATEGY. </h3>
            <p>
              Chat strategy in real-time with your SEO Strategist. Get keyword
              lists, Blog outlines, technical fixes, and more.
            </p>
          </div>
        </div>
      </div>
      <Link smooth to="#pricing" className="navlink">
        <button className="Seebtn">See Plans</button>
      </Link>
    </div>
  );
};

export default Process2;
