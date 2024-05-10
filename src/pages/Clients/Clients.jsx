import ainvent from "../../media/Brand-without-background/ainvent.png";
import chase from "../../media/Brand-without-background/Chase_creative.png";
import flat from "../../media/Brand-without-background/Flatbed.png";
import flying from "../../media/Brand-without-background/Flyingtoucan.png";
import Grow from "../../media/Brand-without-background/Grow_your_cashflow.png";
import Tiberius from "../../media/Brand-without-background/Tiberius.png";
import UAATEAM from "../../media/Brand-without-background/UAATEAM.png";
import "./Clients.css";

const Clients = () => {
  return (
    <div className="clients-container">
      <h2 className="second-heading" style={{ fontWeight: "500" }}>
        Companies That <span style={{ fontWeight: "500" }}>Trust Us.</span>
      </h2>
      <div className="clients-names">
        <div className="clientsec">
          <img src={ainvent} alt="Aivent" />
          <img src={chase} alt="Chase" />
          <img src={flat} alt="Flat" />
          <img src={flying} alt="Flying" />
          <img src={Grow} alt="Grow" />
          <img src={Tiberius} alt="tiberius" />
          <img src={UAATEAM} alt="UAATEAM" />
        </div>
        <div className="clientsec">
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
