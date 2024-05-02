import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`navbar-container ${showMenu ? "show" : ""}`} id="navbar">
        <div className="logo-container">
          <h2>EvolveByte</h2>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </div>
        <div className="navlinksContainer">
          <Link smooth to="#process" className="navlink">
            Process
          </Link>
          <Link to="" className="navlink">
            Results
          </Link>
          <Link smooth to="#pricing" className="navlink">
            Pricing
          </Link>

          <Link smooth to="#faqs" className="navlink">
            FAQs
          </Link>
          <button className="btn">
            <Link smooth to="#getStarted" className="navlink">
              Get Started
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
