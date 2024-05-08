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

      // Calculate the position of the ring based on progress height
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
      <h2
        className="second-heading"
        style={{ padding: "30px 0px 60px 0px", textTransform: "capitalize" }}
      >
        How does this <span>work?</span>
      </h2>
      <div
        className="process-contents"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={progressBarRef}
      >
        <div className="process-left">
          <div className="text-item">
            <h3>Strategy Call</h3>
            <p>
              We will discuss your all requirements to develop a strategy that
              combines your business objectives with the needs of your target
              audience which will include:
            </p>
            <br />
            <p>- Goal focusing</p>
            <p>- Initial ideation</p>
            <p>- Offer creation</p>
            <p>- Brand voice alignment</p>
            <br />
            <p>
              We will mutually discuss your expectations, vision for your
              business, and a complete roadmap for growth.
            </p>
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>Copywriting & SEO</h3>
            <p>
              All types of high quality designs and websites are useless unless
              you have words that convert your targeted audience. With top-notch
              Copywriting and SEO we make sure to:
            </p>
            <br />
            <p>Connect with the right audience</p>
            <p>Provide them with irresistible offers</p>
            <p>Convert 80% of your website visitors</p>
            <p>Build loyal and long-term customer base</p>
            <br />
            <p>
              Without having persuasive copywriting and implementing SEO
              practices it's almost impossible to get enough conversions.{" "}
            </p>
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>Weekly Meetings & Progress Reporting</h3>
            <p>
              We would love to have weekly meetings with you to get to know your
              thoughts and a detailed discussion on how we can improve further.
            </p>
            <br />
            <p>
              You will also get consistent updates regarding the progress on
              each stage.
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
            <h3>Website Design & Development</h3>
            <p>
              Once we’ve gathered all requirements we’ll offer you consultation
              about your website. Our team will build a highly converting
              website for you to ensure your website:
            </p>
            <br />
            <p>- Builds trust & credibility</p>
            <p>- Optimized for conversions</p>
            <p>- Increase customer engagement</p>
            <p>- Attract warm leads for you 24/7</p>
            <br />
            <p>
              If you already have a website but you’re not getting enough
              results then we will help you figure out the issues and revamp
              your website.
            </p>
          </div>
          <div>
            <video src={Video1} className="videosec" autoPlay loop muted />
          </div>
          <div className="text-item">
            <h3>LinkedIn Growth</h3>
            <p>
              Why spend thousands of $$$ on paid ads when you can generate the
              same results for almost half the amount? With the proven LinkedIn
              growth strategies you can:
            </p>
            <br />
            <p>Get high-ticket clients</p>
            <p>Build your strong business identity</p>
            <p>Have personal brand for you & your employees</p>
            <p>Get potential investment & partnership opportunities</p>
            <br />
            <p>
              LinkedIn has proved far better than various other marketing
              sources in terms of flexibility, potential, and growth
              opportunities.
            </p>
          </div>
        </div>
      </div>
      <Link smooth to="#pricing" className="navlink mtop">
        <button className="Seebtn">Book A Call</button>
      </Link>
    </div>
  );
};

export default Process2;
