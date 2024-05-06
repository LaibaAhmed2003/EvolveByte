import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
          <span>Frequently</span> <br /> Asked Questions
        </h2>
        <p>
          EvolveByte is always growing and we're <br /> here to help along the
          way. If you have <br /> additional questions, feel free to reach out.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="FAQ-sess2">
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">
              Why is EvolveByte a better choice than other marketing agencies?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(1)}
            />
          </div>
          {showContent1 && (
            <p>
              Most marketing agencies offer all-in-one services that require
              large budgets and take time to yield visible results.
              <br />
              For example, they may urge you to invest heavily in expensive
              marketing strategies such as paid ads and email marketing, without
              having an actual estimation about results.
              <br />
              At EvolveByte, we have a proven approach for B2B businesses that
              allows you to invest less and achieve the maximum results
              possible.
              <br />
              We attract, engage, and convert your target audience using the
              most effective marketing approaches.
              <br />
              No paid ads,
              <br />
              No complex sales funnel,
              <br />
              No big marketing budget is required here.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">
              How will EvolveByte integrate with our company?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(2)}
            />
          </div>
          {showContent2 && (
            <p>
              Within 24 hours of signing the contract, you will be onboarded to
              Trello. There, you'll have a dedicated project manager who will
              maintain constant communication with you and keep you updated on
              progress.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">
              Will LinkedIn actually help me grow traffic and make more sales?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(3)}
            />
          </div>
          {showContent3 && (
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
              through the platform.
              <br />
              Sharing links on LinkedIn can enhance SEO, leveraging its high
              domain authority to boost your site's visibility in search
              results. In a nutshell, once you implement the right strategies
              for LinkedIn growth, it can become your 24/7 sales generation
              machine.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">When is your team online?</h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(4)}
            />
          </div>

          {showContent4 && (
            <p>
              EvolveByte boasts a diversified team operating across EST, AEST,
              and PST time zones. Whenever you contact us, our team will respond
              within a few hours.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">Can I pause or cancel?</h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(5)}
            />
          </div>

          {showContent5 && (
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
              Can I upgrade my service package later?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(5)}
            />
          </div>

          {showContent5 && (
            <p>
              Scaling your business is easy with EvolveByte. Our plans are
              flexible, so you can contact us anytime to discuss your growing
              business needs, and we will accommodate you within 24 hours.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default FAQs;
