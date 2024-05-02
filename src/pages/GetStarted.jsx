import { HashLink as Link } from "react-router-hash-link";

const GetStarted = () => {
  return (
    <div className="GetStarted-Container" id="getStarted">
      <div className="getstarted-innercontainer">
        <p className="heading" style={{ color: "white" }}>
          GET STARTED
        </p>
        <h2 className="second-heading" style={{ padding: "30px 0px 60px 0px" }}>
          how to get started:
        </h2>
        <div className="strategies-container">
          <div className="strategy">
            <div className="big-letter-container">
              <h4 className="big-letter">1</h4>
            </div>
            <h3>BOOK A CALL</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt.
            </p>
          </div>
          <div className="strategy">
            <div className="big-letter-container">
              <h4 className="big-letter">2</h4>
            </div>
            <h3>SEO & CONTENT STRATEGY</h3>
            <p>
              ab veniam dolorum saepe eligendi reprehenderit earum eum ipsum.
            </p>
          </div>
          <div className="strategy">
            <div className="big-letter-container">
              <h4 className="big-letter">3</h4>
            </div>
            <h3>PRODUCTION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit veniam.
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
