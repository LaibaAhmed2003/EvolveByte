import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../media/logo/Whitelogo.png";
import "./navbar.css";
import Banner from "../Banner/banner";
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
          {/* <a
            href="https://www.evolvebyte.com/portfolio"
            target="_blank"
            className="navlink"
          > */}
          <a href="#testimonial" target="_blank" className="navlink">
            Case Studies
          </a>

          <Link smooth to="#testimonial" className="navlink">
            Testimonial
          </Link>
          <Link smooth to="#faqs" className="Link">
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
