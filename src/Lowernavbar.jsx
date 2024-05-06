import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Lowernavbar = () => {
  return (
    <div className="Lowernavbar-container">
      <div className="innerlowernav">
        <Link smooth to="#work" className="navlink">
          Work
        </Link>
        <Link smooth to="#videosec" className="navlink">
          Why us?
        </Link>
        <Link smooth to="#services" className="navlink">
          Services
        </Link>
        <Link smooth to="#process" className="navlink">
          Process
        </Link>
        <Link smooth to="#testimonial" className="navlink">
          Testimonials
        </Link>
        {/* <Link smooth to="#pricing" className="navlink">
          Pricing
        </Link> */}
        <Link smooth to="#getStarted" className="navlink">
          Steps
        </Link>
        <Link smooth to="#faqs" className="navlink">
          FAQs
        </Link>
      </div>
    </div>
  );
};

export default Lowernavbar;
