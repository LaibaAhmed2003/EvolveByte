import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import "./work.css";
import pascalvid from "../../media/pascal's-vid.mp4";
import laibavid from "../../media/laiba's-vid.mp4";
import overlayImage1 from "../../media/ppc.png";
import overlayImage2 from "../../media/llc.png";

const Work = () => {
  const [isOverlayVisible, setOverlayVisible] = useState({
    pascal: true,
    laiba: true,
  });
  const handleOverlayClick = (video) => {
    setOverlayVisible((prevState) => ({
      ...prevState,
      [video]: false,
    }));
  };

  return (
    <div className="Work-Container" id="work">
      <p className="heading">Our Work</p>
      <h2 className="second-heading">
        Our <span>Results</span> Speak For Themselves.
      </h2>
      <div className="projects-maincontainer">
        <div className="workpro-container" id="videosec">
          <div className="workpro-innerdev">
            <div className="video-wrapper">
              <video
                src={pascalvid}
                alt="Pascal Video"
                className="workpro-img"
                width="600px"
                height="400px"
                // width="100%"
                // height="100%"
                controls
                style={{
                  cursor: "pointer",
                  display: isOverlayVisible.pascal ? "none" : "block",
                }}
              />
              {isOverlayVisible.pascal && (
                <img
                  src={overlayImage1}
                  alt="Overlay for Pascal Video"
                  className="video-overlay2"
                  onClick={() => handleOverlayClick("pascal")}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
            <h3 className="caption">“The results speak for themselves”</h3>
            {/* <div className="leads-container">
              <div className="leads-contents">
                <h4>+664%</h4>
                <h5>Organic Traffic</h5>
              </div>
              |
              <div className="leads-contents">
                <h4>+264%</h4>
                <h5>Online Leads</h5>
              </div>
            </div> */}
            <p className="video-para">
              Pascal started getting 2x impressions and qualified leads from
              LinkedIn even from the 2nd week. We helped him in defining his
              offer, optimizing his profile, creating sales funnel, and LinkedIn
              content creation on a monthly basis.
            </p>
            <p className="case-link">Read EvolveByte's Study »</p>
          </div>

          <div className="workpro-innerdev">
            <div className="video-wrapper">
              <video
                src={laibavid}
                alt="Laiba Video"
                className="workpro-img"
                width="600px"
                height="400px"
                controls
                style={{
                  cursor: "pointer",
                  display: isOverlayVisible.laiba ? "none" : "block",
                }}
              />
              {isOverlayVisible.laiba && (
                <img
                  src={overlayImage2}
                  alt="Overlay for Laiba Video"
                  className="video-overlay2"
                  onClick={() => handleOverlayClick("laiba")}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
            <h3 className="caption">“Evolvebyte goes above and beyond”</h3>
            {/* <div className="leads-container">
              <div className="leads-contents">
                <h4>+664%</h4>
                <h5>Organic Traffic</h5>
              </div>
              |
              <div className="leads-contents">
                <h4>+264%</h4>
                <h5>Online Leads</h5>
              </div>
            </div> */}
            <p className="video-para">
              Laiba has top-notch website design skills but 3 months ago she was
              confused about her offer and had no clarity about LinkedIn. Today
              she’s getting qualified leads, potential opportunities, and
              growing her network consistently.
            </p>
            <p className="case-link">Read EvolveByte's Case Study »</p>
          </div>
        </div>
      </div>
      <Link smooth to="#testimonial" className="navlink">
        <button className="Seebtn" style={{ margin: "80px 0px" }}>
          What my client say?
        </button>
      </Link>
    </div>
  );
};

export default Work;
