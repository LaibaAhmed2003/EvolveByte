import "./Portfolio.css";
import Client from "../Clients/Clients";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div className="Portfolio-container" id="portfolio">
      <div className="portfolio-firstsec">
        <div className="portfolio-firstsec-con">
          <div className="pimg">
            <img
              src="https://qodeinteractive.com/wp-content/uploads/2022/01/Personal-Portfolio-wordpress-themes-collection.jpg"
              alt=""
            />
          </div>
          <div className="pcontent">
            <h2>
              Website <br /> Design & Build
            </h2>
            <p>
              Transform your recruitment website into a digital shop window to
              showcase your brand’s purpose and promise, and start converting
              your audiences and admirers into clients, candidates, and future
              employees.
            </p>
            <h5>
              EXPLORE <FontAwesomeIcon icon={faAngleRight} />
            </h5>
          </div>
        </div>
        <div className="first-b-con">
          <h3>WEB SERVICES AGENCY</h3>
          <hr />
        </div>
      </div>
      <div className="portfolio-secondsec">
        <h2>What to expect…</h2>
        <div className="design-con">
          <h3>Design and Wireframe</h3>
          <p>
            By working closely with you to learn about your business and target
            audiences, we create a truly bespoke website design and wireframe
            that is as unique as you and your business.
          </p>
        </div>
        <hr />

        <div className="design-con">
          <h3>Build & Development</h3>
          <p>
            Once you’ve signed off on the website structure, design, and user
            journey experience via our online collaboration portal, we get to
            work building and developing your new site, optimised to be
            responsive across all devices and browsers.
          </p>
        </div>
        <hr />
        <div className="design-con">
          <h3>Administration & Management</h3>
          <p>
            We don’t believe in sticky revenue commercial models, so we build
            all our websites to include front-end editing tools to enable you to
            edit and evolve the website for years to come without additional
            costs for updates and administration.
          </p>
        </div>
        <hr />
        <div className="design-con">
          <h3>Hosting & Security</h3>
          <p>
            Once your website is ready to go live, we offer several
            cost-effective hosting and maintenance plans to keep your website
            safe and continue performing at the highest standard.
          </p>
        </div>
        <hr />
      </div>
      <div className="portfolio-3rdsec">
        <h2>
          Get in touch today to discuss what a{" "}
          <span style={{ fontWeight: "600" }}>new website </span>could do for
          you.
        </h2>
        <h5>
          ENQUIRE NOW <FontAwesomeIcon icon={faAngleRight} />
        </h5>
      </div>
      <div className="portfoliosection">
        <h3>Related Projects</h3>
        <div className="portfolios">
          <div className="project1-details">
            <img
              src="https://www.tftus.com/wp-content/uploads/2022/05/mobile-app-friendly-website-2.png"
              alt=""
            />
            <h4>Cargo</h4>
            <p>
              Building a platform for an ambitious business to dominate their
              respective market and be admired by their competition.
            </p>
          </div>
          <div className="project1-details">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JMwUEdl2931Qx21sqHKFfXFdj7r5uww61dJ6aQrOb_dGXG2QvZYWCSEbSfStLFkumLE&usqp=CAU"
              alt=""
            />
            <h4>Capio</h4>
            <p>
              Building a platform for an ambitious business to dominate their
              respective market and be admired by their competition.
            </p>
          </div>
          <div className="project1-details">
            <img
              src="https://cdn.sanity.io/images/1ux2e04i/production/159299cecf1ef7758167ee7703dbb979b14ef2c2-1024x561.jpg"
              alt=""
            />
            <h4>4Site</h4>
            <p>
              Building a platform for an ambitious business to dominate their
              respective market and be admired by their competition.
            </p>
          </div>
        </div>
        <div className="allprojectsec">
          <h5>
            ALL PROJECTS <FontAwesomeIcon icon={faAngleRight} />
          </h5>
          <hr />
        </div>
      </div>
      <Client />
      <div className="support-container">
        <h2>We can also support you with…</h2>
        <div className="support-innersec">
          <div className="seo">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <h5>
              SEO <FontAwesomeIcon icon={faAngleRight} />
            </h5>
          </div>
          <div className="Copywriting">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GUAfk9N6mrW-cGnafv0J8r0qAHV4Wf8P6Q&s"
              alt=""
            />
            <h5>
              Copywriting <FontAwesomeIcon icon={faAngleRight} />
            </h5>
          </div>
          <div className="LinkedIn">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCh1yv_F54xeJaqo9GBVOgdzSlMyc7f4t7w&s"
              alt=""
            />
            <h5>
              LinkedIn Services <FontAwesomeIcon icon={faAngleRight} />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
