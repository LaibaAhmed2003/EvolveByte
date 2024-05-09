import { HashLink as Link } from "react-router-hash-link";
import Laura from "../../media/LauraEnzor.jpg";
import "./work.css";

const Work = () => {
  return (
    <div className="Work-Container" id="work">
      <p className="heading">Our Work</p>
      <h2 className="second-heading">
        Our <span>Results</span> Speak For Themselves.
      </h2>
      <div className="projects-maincontainer">
        <div className="workpro-container" id="videosec">
          <div className="workpro-innerdev">
            <img src={Laura} alt="Laura Enzor" className="workpro-img" />
            <h3 className="caption">“The results speak for themselves”</h3>
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
              Thrive used SEO & PPC to increase the overall traffic to the new
              Farah website by +664% and along with the new CRO focused Website
              were able to increase online leads by over +360%.
            </p>
            <p className="case-link">Read Neha Case Study »</p>
          </div>
          <div className="workpro-innerdev">
            <img src={Laura} alt="Laura Enzor" className="workpro-img" />
            <h3 className="caption">“The results speak for themselves”</h3>
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
              Thrive used SEO & PPC to increase the overall traffic to the new
              Farah website by +664% and along with the new CRO focused Website
              were able to increase online leads by over +360%.
            </p>
            <p className="case-link">Read Neha Case Study »</p>
          </div>
        </div>
      </div>
      <Link smooth to="#pricing" className="navlink">
        <button className="Seebtn" style={{ margin: "80px 0px" }}>
          See All Projects
        </button>
      </Link>
    </div>
  );
};
export default Work;
