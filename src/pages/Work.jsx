import { HashLink as Link } from "react-router-hash-link";
import Laura from "../media/LauraEnzor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  return (
    <div className="Work-Container" id="work">
      <p className="heading">OUR WORK</p>
      <h2 className="second-heading">
        our <span>results</span> speak for themselves.
      </h2>
      <div className="projects-maincontainer">
        <div className="project-card">
          <img className="project-image" src={Laura} alt="" />
          <div className="links-sec">
            <h3 className="project-link">projectlahd.com</h3>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>

        <div className="project-card">
          <img className="project-image" src={Laura} alt="" />
          <div className="links-sec">
            <h3 className="project-link">projectlahd.com</h3>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>

        <div className="project-card">
          <img className="project-image" src={Laura} alt="" />
          <div className="links-sec">
            <h3 className="project-link">projectlahd.com</h3>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>
      </div>
      <Link smooth to="#pricing" className="navlink">
        <button className="Seebtn" style={{ margin: "40px 0px" }}>
          All Projects
        </button>
      </Link>
    </div>
  );
};
export default Work;
