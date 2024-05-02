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
          Contact Studios is always growing and we're <br /> here to help along
          the way. If you have <br /> additional questions, feel free to reach
          out.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="FAQ-sess2">
        <div className="question">
          <div className="heading-arrow">
            <h3>
              WHY IS CONTACT STUDIOS A BETTER CHOICE THAN HIRING IN-HOUSE?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(1)}
            />
          </div>
          {showContent1 && (
            <p>
              Most businesses can't find, train or afford to hire the SEO
              Strategists, Content Managers, Writers, and Designers necessary to
              scale SEO. Thats not even counting the time it takes to create an
              effective SEO strategy and seamless production process.
              <br />
              With Contact Studios, for the same price as hiring a single
              employee, and you get a team of the top 1% of SEO strategists,
              editors, writers, and designers. Simply put, Contact Studios makes
              content marketing and SEO exponentially more cost-effective and
              simple.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3>
              WHY IS CONTACT STUDIOS A BETTER CHOICE THAN OTHER SEO AGENCIES OR
              CONTENT AGENCIES?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(2)}
            />
          </div>
          {showContent2 && (
            <p>
              Most businesses can't find, train or afford to hire the SEO
              Strategists, Content Managers, Writers, and Designers necessary to
              scale SEO. Thats not even counting the time it takes to create an
              effective SEO strategy and seamless production process. With
              Contact Studios, for the same price as hiring a single employee,
              and you get a team of the top 1% of SEO strategists, editors,
              writers, and designers. Simply put, Contact Studios makes content
              marketing and SEO exponentially more cost-effective and simple.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3>HOW MANY BLOG POSTS CAN YOU CREATE PER MONTH?</h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(3)}
            />
          </div>
          {showContent3 && (
            <p>
              Most businesses can't find, train or afford to hire the SEO
              Strategists, Content Managers, Writers, and Designers necessary to
              scale SEO. Thats not even counting the time it takes to create an
              effective SEO strategy and seamless production process. With
              Contact Studios, for the same price as hiring a single employee,
              and you get a team of the top 1% of SEO strategists, editors,
              writers, and designers. Simply put, Contact Studios makes content
              marketing and SEO exponentially more cost-effective and simple.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3>HOW WILL CONTACT STUDIOS INTEGRATE WITH ME?</h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(4)}
            />
          </div>

          {showContent4 && (
            <p>
              Most businesses can't find, train or afford to hire the SEO
              Strategists, Content Managers, Writers, and Designers necessary to
              scale SEO. Thats not even counting the time it takes to create an
              effective SEO strategy and seamless production process. With
              Contact Studios, for the same price as hiring a single employee,
              and you get a team of the top 1% of SEO strategists, editors,
              writers, and designers. Simply put, Contact Studios makes content
              marketing and SEO exponentially more cost-effective and simple.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3>
              WHY IS CONTACT STUDIOS A BETTER CHOICE THAN HIRING IN-HOUSE?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(5)}
            />
          </div>

          {showContent5 && (
            <p>
              Most businesses can't find, train or afford to hire the SEO
              Strategists, Content Managers, Writers, and Designers necessary to
              scale SEO. Thats not even counting the time it takes to create an
              effective SEO strategy and seamless production process. With
              Contact Studios, for the same price as hiring a single employee,
              and you get a team of the top 1% of SEO strategists, editors,
              writers, and designers. Simply put, Contact Studios makes content
              marketing and SEO exponentially more cost-effective and simple.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default FAQs;
