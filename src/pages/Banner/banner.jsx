import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <a
              href="https://www.linkedin.com/in/personalbrandingconsultant/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Visit LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
