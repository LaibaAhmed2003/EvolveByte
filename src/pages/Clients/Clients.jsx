import ainvent from "../../media/Brands/ainvent.jpg";
import chase from "../../media/Brands/Chasecreative.jpg";
import flat from "../../media/Brands/Flatbed.jpg";
import flying from "../../media/Brands/Flyingtoucan.jpg";
import Grow from "../../media/Brands/Grow.jpg";
import Tiberius from "../../media/Brands/Tiberius.jpg";
import UAATEAM from "../../media/Brands/UAATEAM.jpg";

const Clients = () => {
  return (
    <div className="clients-container">
      <h2 className="second-heading">
        Companies that <span>trust us.</span>
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
