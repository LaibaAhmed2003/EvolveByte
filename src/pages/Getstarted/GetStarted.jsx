import { HashLink as Link } from "react-router-hash-link";
import "./getstarted.css";

const GetStarted = () => {
  return (
    <div className="GetStarted-Container" id="getStarted">
      <div className="getstarted-innercontainer">
        <p className="heading" style={{ color: "yellow" }}>
          Get Started
        </p>
        <h2
          className="second-heading"
          style={{
            padding: "30px 0px 60px 0px",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          How To Get Started?
        </h2>
        <div className="strategies-container">
          <div className="strategy">
            <div className="big-letter-container">
              <h4 className="big-letter">1</h4>
            </div>
            <h3>Book A Call</h3>
            <p>
              Schedule a call with us to discuss more on how we can help your
              business.
            </p>
          </div>
          <div className="strategy">
            <div className="big-letter-container">
              <h4 className="big-letter">2</h4>
            </div>
            <h3>Growth Strategy Creation</h3>
            <p>
              We’ll gather all requirements from you to create a profitable
              growth strategy.
            </p>
          </div>
          <div className="strategy">
            <div className="big-letter-container">
              <h4 className="big-letter">3</h4>
            </div>
            <h3>Implementation</h3>
            <p>
              We’ll start implementing our growth plan to meet your desired
              business objectives.
            </p>
          </div>
        </div>
        <Link
          smooth
          to="https://calendly.com/evolvebyte/meeting"
          target="_blank"
          className="navlink"
        >
          <button className="Seebtn">Contact Now</button>
        </Link>
      </div>
    </div>
  );
};
export default GetStarted;
