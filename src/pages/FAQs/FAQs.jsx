import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./FAQ.css";

const FAQs = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);

  const toggleContent = (questionNumber) => {
    setShowContent1(questionNumber === 1 ? !showContent1 : false);
    setShowContent2(questionNumber === 2 ? !showContent2 : false);
    setShowContent3(questionNumber === 3 ? !showContent3 : false);
    setShowContent4(questionNumber === 4 ? !showContent4 : false);
    setShowContent5(questionNumber === 5 ? !showContent5 : false);
  };

  return (
    <div className="FAQ-container" id="faqs">
      <div className="FAQ-sess1">
        <h2 className="second-heading" style={{ padding: "30px 0px 20px 0px" }}>
          <span>Your burning </span> <br /> questions.
        </h2>
        <p>
          EvolveByte is always growing and we're <br /> here to help along the
          way. If you have <br /> additional questions, feel free to reach out.
        </p>
        <button className="btn" style={{ padding: "10px 20px" }}>
          Get Started
        </button>
      </div>
      <div className="FAQ-sess2">
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">
              01. Will LinkedIn actually help me grow traffic and make more
              sales?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(1)}
            />
          </div>
          {showContent1 && (
            <p>
              LinkedIn is one of the highest-converting marketing channels on
              the planet. When you look at the stats, it's pretty wild.
              <br />
              LinkedIn’s user base of over 800 million professionals offers vast
              networking possibilities that can lead to business opportunities.
              <br />
              Being consistent on LinkedIn can establish you as an industry
              expert, attracting potential clients among LinkedIn’s user base
              actively seeking industry insights.
              <br />
              LinkedIn Sales Navigator can enhance lead generation efforts, with
              LinkedIn claiming a 17% higher win rate when leads are sourced
              through the platform. Sharing links on LinkedIn can enhance SEO,
              leveraging its high domain authority to boost your site's
              visibility in search results
              <br />
              In a nutshell, once you implement the right strategies for
              LinkedIn growth, it can become your 24/7 sales generation machine.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">
              02. How can you help me with LinkedIn?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(2)}
            />
          </div>
          {showContent2 && (
            <p>
              We help you attract the right people on LinkedIn and grow your
              business by offering you my all-in-one LinkedIn growth services -
              Profile optimization, LinkedIn content creation, Networking
              strategy, 1-1 consultation, and cold outreach.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">03. What is your working timezone?</h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(3)}
            />
          </div>
          {showContent3 && (
            <p>
               We work according to EST and PST time zones. Whenever you send us
              a message, We’ll get back to you as soon as possible.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">04. Can I pause or cancel?</h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(4)}
            />
          </div>

          {showContent4 && (
            <p>
              There are no annual contracts or irreversible commitments. You can
              pause or cancel at any time. Cancellations take effect at the
              start of your next billing cycle.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">
              05. How to discuss this further in detail?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(5)}
            />
          </div>

          {showContent5 && (
            <p>You can simply book a meeting by visiting the calendly link.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default FAQs;
