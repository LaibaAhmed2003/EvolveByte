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
          {/* <Link smooth to="#portfolio" target="_blank" className="navlink">
            Case Studies
          </Link> */}
          {/* <a
            href="http://localhost:5173/portfolio"
            target="_blank"
            className="navlink"
          >
            Case Studies
          </a> */}
          <a
            href="https://www.evolvebyte.com/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="navlink"
          >
            Case Studies
          </a>

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
