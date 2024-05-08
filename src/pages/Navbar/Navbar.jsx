import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../media/logo/Whitelogo.png";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`navbar-container ${showMenu ? "show" : ""}`} id="navbar">
        <div className="logo-container">
          <img src={logo} alt="" />
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={showMenu ? faTimes : faBars}
              className="fabars"
            />
          </div>
        </div>

        <div className="navlinksContainer">
          <Link smooth to="#work" className="navlink">
            Results
          </Link>
          <Link smooth to="#process" className="navlink">
            Process
          </Link>
          <Link smooth to="#process" className="navlink">
            Case Studies
          </Link>
          <Link smooth to="#testimonial" className="navlink">
            Testimonial
          </Link>
          <Link smooth to="#faqs" className="navlink">
            FAQs
          </Link>
          <button className="btn">
            <Link smooth to="#getStarted" className="navlink" id="getstar">
              Get Started
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
