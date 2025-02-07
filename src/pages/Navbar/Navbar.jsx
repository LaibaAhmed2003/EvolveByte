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
          <Link smooth to="#services" className="navlink">
            What we do
          </Link>
          <Link smooth to="#work" className="navlink">
            Our Work
          </Link>
          <Link smooth to="#process" className="navlink">
            How it work
          </Link>
          {/* <a
            href="https://www.evolvebyte.com/portfolio"
            target="_blank"
            className="navlink"
          > */}

          {/* <Link smooth to="#testimonial" className="navlink">
            Testimonial
          </Link>
          <Link smooth to="#faqs" className="Link">
            FAQs
          </Link> */}
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
