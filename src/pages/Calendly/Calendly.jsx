import React from "react";

const Calendly = () => {
  return (
    <div
      className="Calendly"
      style={{ backgroundColor: "black", padding: "10px 200px 130px 200px" }}
    >
      <div style={{ backgroundColor: "black" }}>
        <iframe
          src="https://calendly.com/evolvebyte/meeting"
          width="100%"
          height="800px"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default Calendly;
