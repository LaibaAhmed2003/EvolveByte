import ainvent from "../../media/lbg/ainvent.png";
import chase from "../../media/lbg/Chase_creative.png";
import flat from "../../media/lbg/Flatbed.png";
import flying from "../../media/lbg/Flyingtoucan.png";
import Grow from "../../media/lbg/Grow_your_cashflow.png";
import Tiberius from "../../media/lbg/Tiberius.png";
import UAATEAM from "../../media/lbg/UAATEAM.png";
import addsales from "../../media/Brand-without-background/adservice.png";
import arworkflow from "../../media/lbg/arworkflow.png";
// import biologic from "../../media/biologic.png";
import "./Clients.css";

const Clients = () => {
  return (
    <div className="clients-container">
      <h2
        className="second-heading"
        style={{ fontWeight: "500", padding: "0px 10px" }}
      >
        Companies That <span style={{ fontWeight: "500" }}>Trust Us.</span>
      </h2>
      <div className="clients-names">
        <div className="clientsec">
          {/* <img src={addsales} alt="" /> */}
          <img src={arworkflow} alt="" />
          {/* <img src={biologic} alt="" /> */}
          <img src={ainvent} alt="Aivent" />
          <img src={chase} alt="Chase" />
          <img src={flat} alt="Flat" />
          <img src={flying} alt="Flying" />
          <img src={Grow} alt="Grow" />
          <img src={Tiberius} alt="tiberius" />
          <img src={UAATEAM} alt="UAATEAM" />
        </div>
        <div className="clientsec">
          {/* <img src={addsales} alt="" /> */}
          <img src={arworkflow} alt="" />
          {/* <img src={biologic} alt="" /> */}
          <img src={ainvent} alt="Aivent" />
          <img src={chase} alt="Chase" />
          <img src={flat} alt="Flat" />
          <img src={flying} alt="Flying" />
          <img src={Grow} alt="Grow" />
          <img src={Tiberius} alt="tiberius" />
          <img src={UAATEAM} alt="UAATEAM" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
