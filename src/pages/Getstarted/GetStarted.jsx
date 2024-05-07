import { HashLink as Link } from "react-router-hash-link";

const GetStarted = () => {
  return (
    <div className="GetStarted-Container" id="getStarted">
      <div className="getstarted-innercontainer">
        <p className="heading" style={{ color: "white" }}>
          GET STARTED
        </p>
        <h2 className="second-heading" style={{ padding: "30px 0px 60px 0px" }}>
        How to get started
        </h2>
        <div className="strategies-container">
          <div className="strategy">
            <div className="big-letter-container">
              <h4 className="big-letter">1</h4>
            </div>
            <h3>Book a Call</h3>
            <p>
            Schedule a call with us to discuss more on how we can help your business.
            </p>
          </div>
          <div className="strategy">
            <div className="big-letter-container">
              <h4 className="big-letter">2</h4>
            </div>
            <h3>Growth strategy creation</h3>
            <p>
            We’ll gather all requirements from you to create a profitable growth strategy.
            </p>
          </div>
          <div className="strategy">
            <div className="big-letter-container">
              <h4 className="big-letter">3</h4>
            </div>
            <h3>Implementation</h3>
            <p>
            We’ll start implementing our growth plan to meet your desired business objectives.
            </p>
          </div>
        </div>
        <Link smooth to="#pricing" className="navlink">
          <button className="Seebtn">See Plans</button>
        </Link>
      </div>
    </div>
  );
};
export default GetStarted;
