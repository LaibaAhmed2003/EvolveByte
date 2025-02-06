import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="det-main">
          <div className="number det">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            (+92)3117025767
          </div>
          <div className="email det">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            hello@evolvebyte.com
          </div>
          <div className="linkedin det">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Workbench, 13-D, Market, D Block, Valencia, Lahore
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
