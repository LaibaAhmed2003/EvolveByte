import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="Projectsec">
      <h2
        className="second-heading"
        style={{ textAlign: "center", fontWeight: "500" }}
      >
        Related <span style={{ fontWeight: "500" }}>Projects.</span>
      </h2>
      <div className="tabs">
        <button
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          All
        </button>
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          Website Development & Design
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          Linkedin
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div>
            {/* Content for Website Development & Design */}
            <div className="portfolios">
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/09/MPH-Club-Business-Website-e1631539967786.png"
                  alt=""
                />
                <h4>Cargo</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/09/Curtis-Business-Website-e1631540077875.png"
                  alt=""
                />
                <h4>Capio</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/09/Klangforum-Business-Website.png"
                  alt=""
                />
                <h4>4Site</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
            <div className="portfolios" style={{ marginTop: "40px" }}>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/08/screencapture-en-ae-randbfashion-women-html-2021-08-10-17_10_31-e1631537369511.png"
                  alt=""
                />
                <h4>capio</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/08/screencapture-aksa-tech-2021-08-10-17_20_51-1.png"
                  alt=""
                />
                <h4>4site</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/09/screencapture-terkwaz-2021-09-14-17_52_14-e1631537710408.png"
                  alt=""
                />
                <h4>cargo</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
            {/* Content for Linkedin */}
            {/* Add your content for the Linkedin tab here */}
            <div className="allprojectsec">
              {/* <h5>
            ALL PROJECTS <FontAwesomeIcon icon={faAngleRight} />
          </h5> */}
              <button className="Seebtn" style={{ marginBottom: "60px" }}>
                All Projects
              </button>
              <hr />
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {/* Content for Website Development & Design */}
            <div className="portfolios">
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/09/MPH-Club-Business-Website-e1631539967786.png"
                  alt=""
                />
                <h4>Cargo</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/09/Curtis-Business-Website-e1631540077875.png"
                  alt=""
                />
                <h4>Capio</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/09/Klangforum-Business-Website.png"
                  alt=""
                />
                <h4>4Site</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
            <div className="portfolios" style={{ marginTop: "40px" }}>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/08/screencapture-en-ae-randbfashion-women-html-2021-08-10-17_10_31-e1631537369511.png"
                  alt=""
                />
                <h4>capio</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/08/screencapture-aksa-tech-2021-08-10-17_20_51-1.png"
                  alt=""
                />
                <h4>4site</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://www.evolvebyte.com/wp-content/uploads/2021/09/screencapture-terkwaz-2021-09-14-17_52_14-e1631537710408.png"
                  alt=""
                />
                <h4>cargo</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {/* Content for Linkedin */}
            {/* Add your content for the Linkedin tab here */}
            <div className="portfolios" style={{ paddingBottom: "50px" }}>
              <div className="project1-details">
                <img
                  src="https://www.tftus.com/wp-content/uploads/2022/05/mobile-app-friendly-website-2.png"
                  alt=""
                />
                <h4>capio</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JMwUEdl2931Qx21sqHKFfXFdj7r5uww61dJ6aQrOb_dGXG2QvZYWCSEbSfStLFkumLE&usqp=CAU"
                  alt=""
                />
                <h4>4site</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
              <div className="project1-details">
                <img
                  src="https://cdn.sanity.io/images/1ux2e04i/production/159299cecf1ef7758167ee7703dbb979b14ef2c2-1024x561.jpg"
                  alt=""
                />
                <h4>cargo</h4>
                <p>
                  Building a platform for an ambitious business to dominate
                  their respective market and be admired by their competition.
                </p>
                <button
                  className="Seebtn"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
