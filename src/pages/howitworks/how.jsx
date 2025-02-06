import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./how.css";
import { HashLink as Link } from "react-router-hash-link";

const How = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);
  const [showContent6, setShowContent6] = useState(false);
  const [showContent7, setShowContent7] = useState(false);
  const [showContent8, setShowContent8] = useState(false);
  const [showContent9, setShowContent9] = useState(false);

  const toggleContent = (questionNumber) => {
    setShowContent1(questionNumber === 1 ? !showContent1 : false);
    setShowContent2(questionNumber === 2 ? !showContent2 : false);
    setShowContent3(questionNumber === 3 ? !showContent3 : false);
    setShowContent4(questionNumber === 4 ? !showContent4 : false);
    setShowContent5(questionNumber === 5 ? !showContent5 : false);
    setShowContent6(questionNumber === 6 ? !showContent6 : false);
    setShowContent7(questionNumber === 7 ? !showContent7 : false);
    setShowContent8(questionNumber === 8 ? !showContent8 : false);
    setShowContent9(questionNumber === 9 ? !showContent9 : false);
  };

  return (
    <>
      <div className="how-container" id="process">
        <h2 className="second-heading">
          Step-by-Step Roadmap<br></br> How We'll Be Working<br></br> On Your
          LinkedIn Growth.
        </h2>
        <div className="FAQ-sess2">
          <div className="question">
            <div className="heading-arrow">
              <h3 className="faq-heading">01. It starts with a call</h3>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow-down"
                onClick={() => toggleContent(1)}
              />
            </div>
            {showContent1 && (
              <p>
                - We will discuss your goals, and We’ll break down my entire
                process.
              </p>
            )}
          </div>
          <div className="question">
            <div className="heading-arrow">
              <h3 className="faq-heading">02. We'll gather all requirements</h3>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow-down"
                onClick={() => toggleContent(2)}
              />
            </div>
            {showContent2 && (
              <p>
                - We’ll send a questionnaire to understand all your business
                objectives.
              </p>
            )}
          </div>
          <div className="question">
            <div className="heading-arrow">
              <h3 className="faq-heading">03. Onboarding You</h3>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow-down"
                onClick={() => toggleContent(3)}
              />
            </div>
            {showContent3 && (
              <p>
                - Once we have our contract, We’ll officially onboard you on
                Trello where you can review everything.
              </p>
            )}
          </div>
          <div className="question">
            <div className="heading-arrow">
              <h3 className="faq-heading">
                04. Your profile optimization begins here
              </h3>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow-down"
                onClick={() => toggleContent(4)}
              />
            </div>
            {showContent4 && (
              <p>
                - We will thoroughly optimize your LinkedIn profile to turn it
                into a high-converting landing page.
              </p>
            )}
          </div>
          <div className="question">
            <div className="heading-arrow">
              <h3 className="faq-heading">
                05. We queue up ideas with content strategy
              </h3>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow-down"
                onClick={() => toggleContent(5)}
              />
            </div>
            {showContent5 && (
              <p>
                - We develop a content strategy that combines your goals with
                the needs of your target audience.
              </p>
            )}
          </div>

          <div className="question">
            <div className="heading-arrow">
              <h3 className="faq-heading">
                06. Creating Linkedin posts for you
              </h3>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow-down"
                onClick={() => toggleContent(6)}
              />
            </div>
            {showContent6 && (
              <p>
                - We will create top-notch LinkedIn posts and share them with
                you to gather your thoughts.
              </p>
            )}
          </div>

          <div className="question">
            <div className="heading-arrow">
              <h3 className="faq-heading">07. Publishing your post</h3>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow-down"
                onClick={() => toggleContent(7)}
              />
            </div>
            {showContent7 && (
              <p>
                - After your approval, We will publish the posts at the optimal
                time according to your time zone.
              </p>
            )}
          </div>
          <div className="question">
            <div className="heading-arrow">
              <h3 className="faq-heading">
                08. Implementing networking strategy
              </h3>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow-down"
                onClick={() => toggleContent(8)}
              />
            </div>
            {showContent8 && (
              <p>
                - My 1-1 consultation will always be available to you for free,
                and We’ll share my proven networking strategy so you know how to
                do LinkedIn engagement in the right way.
              </p>
            )}
          </div>
          <div className="question">
            <div className="heading-arrow">
              <h3 className="faq-heading">09. Now We optimize</h3>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="arrow-down"
                onClick={() => toggleContent(9)}
              />
            </div>
            {showContent9 && (
              <p>
                - We'll monitor the performance of your posts—impressions, ICP
                engagement, leads, etc., to further improve results.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default How;
