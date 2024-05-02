import React, { useState } from "react";
const Pricing = () => {
  const [showMonthly, setShowMonthly] = useState(true);
  const handleMonthlyClick = () => {
    setShowMonthly(true);
  };
  const handleQuaterlyClick = () => {
    setShowMonthly(false);
  };

  return (
    <div className="Pricing-Container" id="pricing">
      <div className="headings">
        <p className="heading">OFFERINGS</p>
        <h2 className="second-heading" style={{ padding: "30px 0px 60px 0px" }}>
          book a call today. <span>improve</span> <br /> your seo tomorrow.
        </h2>
      </div>
      <div className="filters">
        <div
          className={`${showMonthly ? "Activefilter" : ""}`}
          onClick={handleMonthlyClick}
        >
          Monthly
        </div>
        <div
          className={`${!showMonthly ? "Activefilter" : ""}`}
          onClick={handleQuaterlyClick}
        >
          Quaterly
        </div>
      </div>
      {/* Price card Container for Monthly */}
      <div
        className="pricecard-container"
        style={{
          display: showMonthly ? "flex" : "none",
        }}
      >
        {/* Pricecard 1 */}
        <div className="pricecard">
          <div className="part1">
            <h5 className="bestbtn">BEST FOR CONTENT TEAMS</h5>
            <h4 className="outline">Monthly</h4>
            <p className="description">
              SEO strategy and implementation for brands that already have
              content departments.
            </p>
          </div>
          <div className="part2">
            <p className="startingat">STARTING AT</p>
            <h3 className="Price">$8,999/mo</h3>
          </div>
          <div className="part3">
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategist
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Project Manager
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Technical SEO
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategy
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Content Outlines
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Customer Service via Slack
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Auto publishing on your site
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Monthly Reporting
            </p>
            <button className="pricebtn">Get Started</button>
          </div>
        </div>
        {/* Pricecard 2 */}
        <div
          className="pricecard"
          style={{ backgroundColor: "#2869f6", color: "white" }}
        >
          <div className="part1">
            <h5 className="bestbtn" style={{ border: "1px solid white" }}>
              BEST FOR CONTENT TEAMS
            </h5>
            <h4 className="outline">CORE</h4>
            <p className="description" style={{ color: "#d8d5d5" }}>
              SEO strategy and implementation for brands that already have
              content departments.
            </p>
          </div>
          <div className="part2">
            <p className="startingat" style={{ color: "#d8d5d5" }}>
              STARTING AT
            </p>
            <h3 className="Price">$8,999/mo</h3>
          </div>
          <div className="part3">
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategist
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Project Manager
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Technical SEO
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategy
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Content Outlines
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Customer Service via Slack
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Auto publishing on your site
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Monthly Reporting
            </p>
            <button className="pricebtn">Get Started</button>
          </div>
        </div>

        {/* Pricecard 3 */}
        <div className="pricecard" style={{ backgroundColor: "yellow" }}>
          <div className="part1">
            <h5 className="bestbtn">BEST FOR CONTENT TEAMS</h5>
            <h4 className="outline">CORE</h4>
            <p className="description">
              SEO strategy and implementation for brands that already have
              content departments.
            </p>
          </div>
          <div className="part2">
            <p className="startingat">STARTING AT</p>
            <h3 className="Price">$8,999/mo</h3>
          </div>
          <div className="part3">
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategist
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Project Manager
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Technical SEO
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategy
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Content Outlines
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Customer Service via Slack
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Auto publishing on your site
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Monthly Reporting
            </p>
            <button className="pricebtn">Get Started</button>
          </div>
        </div>
      </div>
      {/* Price card Container for Quaterly */}
      <div
        className="pricecard-container"
        style={{
          display: showMonthly ? "none" : "flex",
        }}
      >
        {/* Pricecard 1 */}
        <div className="pricecard">
          <div className="part1">
            <h5 className="bestbtn">BEST FOR CONTENT TEAMS</h5>
            <h4 className="outline">Quaterly</h4>
            <p className="description">
              SEO strategy and implementation for brands that already have
              content departments.
            </p>
          </div>
          <div className="part2">
            <p className="startingat">STARTING AT</p>
            <h3 className="Price">$8,999/mo</h3>
          </div>
          <div className="part3">
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategist
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Project Manager
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Technical SEO
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategy
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Content Outlines
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Customer Service via Slack
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Auto publishing on your site
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Monthly Reporting
            </p>
            <button className="pricebtn">Get Started</button>
          </div>
        </div>
        {/* Pricecard 2 */}
        <div
          className="pricecard"
          style={{ backgroundColor: "#2869f6", color: "white" }}
        >
          <div className="part1">
            <h5 className="bestbtn" style={{ border: "1px solid white" }}>
              BEST FOR CONTENT TEAMS
            </h5>
            <h4 className="outline">CORE</h4>
            <p className="description" style={{ color: "#d8d5d5" }}>
              SEO strategy and implementation for brands that already have
              content departments.
            </p>
          </div>
          <div className="part2">
            <p className="startingat" style={{ color: "#d8d5d5" }}>
              STARTING AT
            </p>
            <h3 className="Price">$8,999/mo</h3>
          </div>
          <div className="part3">
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategist
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Project Manager
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Technical SEO
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategy
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Content Outlines
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Customer Service via Slack
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Auto publishing on your site
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Monthly Reporting
            </p>
            <button className="pricebtn">Get Started</button>
          </div>
        </div>

        {/* Pricecard 3 */}
        <div className="pricecard" style={{ backgroundColor: "yellow" }}>
          <div className="part1">
            <h5 className="bestbtn">BEST FOR CONTENT TEAMS</h5>
            <h4 className="outline">CORE</h4>
            <p className="description">
              SEO strategy and implementation for brands that already have
              content departments.
            </p>
          </div>
          <div className="part2">
            <p className="startingat">STARTING AT</p>
            <h3 className="Price">$8,999/mo</h3>
          </div>
          <div className="part3">
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategist
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Project Manager
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Technical SEO
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>SEO Strategy
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Content Outlines
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Customer Service via Slack
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Auto publishing on your site
            </p>
            <p className="smalldes">
              <span className="plussign">+</span>Monthly Reporting
            </p>
            <button className="pricebtn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
