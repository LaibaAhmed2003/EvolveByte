import Video1 from "../../media/timelinevideo1.mp4";
import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./process.css";

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
      const ringOffset = 0;
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
      <p className="heading">Process</p>
      <h2 className="second-heading">
        Step-by-Step Roadmap How We'll Be Working On Your LinkedIn Growth
      </h2>
      <div
        className="process-contents"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={progressBarRef}
      >
        <div className="process-left">
          <div className="text-item">
            <h3>01. It starts with a call</h3>
            <p>
              - We will discuss your goals, and I’ll break down my entire
              process.
            </p>
            <br />
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>02. I'll gather all requirements</h3>
            <p>
              - I’ll send a questionnaire to understand all your business
              objectives.
            </p>
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>03. Onboarding You</h3>
            <p>
              - Once we have our contract, I’ll officially onboard you on Trello
              where you can review everything.
            </p>
          </div>

          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>07. Publishing your post</h3>
            <p>
              - After your approval, I will publish the posts at the optimal
              time according to your time zone.
            </p>
          </div>

          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>08. Now I optimize</h3>
            <p>
              - I'll monitor the performance of your posts—impressions, ICP
              engagement, leads, etc., to further improve results.
            </p>
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
            <h3>04. Your profile optimization begins here</h3>
            <p>
              - I will thoroughly optimize your LinkedIn profile to turn it into
              a high-converting landing page.
            </p>
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>05. I queue up ideas with content strategy</h3>
            <p>
              - I develop a content strategy that combines your goals with the
              needs of your target audience.
            </p>
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>

          <div className="text-item">
            <h3>06. Creating Linkedin posts for you</h3>
            <p>
              - I will create top-notch LinkedIn posts and share them with you
              to gather your thoughts.
            </p>
          </div>

          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>

          <div className="text-item">
            <h3>09. Consultation and sharing networking strategy</h3>
            <p>
              - My 1-1 consultation will always be available to you for free,
              and I’ll share my proven networking strategy so you know how to do
              LinkedIn engagement in the right way.
            </p>
          </div>
        </div>
      </div>
      <Link smooth to="#pricing" className="navlink mtop">
        <button className="Seebtn bookcall">Book A Call</button>
      </Link>
    </div>
  );
};

export default Process2;
