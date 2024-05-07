const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="firstsec">
          <div className="content">
            <h2>
              Book a call now. Start publishing
              <br /> top-tier content tomorrow.
            </h2>
          </div>
          <div className="calltoaction">
            <p>
              Speak to a specialist to get a<br /> personalized content
              strategy.
            </p>
            <button className="Seebtn">See Plans</button>
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
