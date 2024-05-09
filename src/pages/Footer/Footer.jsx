import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="firstsec">
          <div className="content">
            <h2>
              Book a call now.
              <br /> Let's talk growth
            </h2>
          </div>
          <div className="calltoaction">
            <p>
              We'll show you the roadmap for expanding <br></br> your business
              with proven marketing strategies.
            </p>
            <button className="Seebtn">
              <Link
                to="https://calendly.com/evolvebyte/meeting"
                target="_blank"
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Book Call
              </Link>
            </button>
          </div>
        </div>
        <div className="sndsec">
          <div className="text">
            <h2>EvolveByte</h2>
            <p>
              We create content that is
              <br /> impossible to ignore.
            </p>
          </div>
          <div className="links-container">
            <div className="links">
              <h2>NAVIGATION</h2>
              <a href="">Book a call</a>
              <a href="">careers</a>
            </div>
            <div className="social-links links">
              <h2>FOLLOW US</h2>
              <a href="">Facebook</a>
              <a href="">Linkedin</a>
              <a href="">Instagram</a>
              <a href="">Youtube</a>
            </div>
          </div>
        </div>
        <div className="trdsec">
          <div className="terms">
            <a href="">Terms</a>
            <a href="">Privacy</a>
          </div>
          <div className="copyright">
            <p>2024 EvolveByte. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
