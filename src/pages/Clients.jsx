import ainvent from "../media/Brands/ainvent.jpg";
import chase from "../media/Brands/Chasecreative.jpg";
import flat from "../media/Brands/Flatbed.jpg";
import flying from "../media/Brands/Flyingtoucan.jpg";
import Grow from "../media/Brands/Grow.jpg";
import Tiberius from "../media/Brands/Tiberius.jpg";
import UAATEAM from "../media/Brands/UAATEAM.jpg";

const Clients = () => {
  return (
    <div className="clients-container">
      <h2 className="second-heading">
        {/* Who we<span> work</span> with */}
        Companies that <span>trust us.</span>
      </h2>
      <div className="clients-names">
        <div className="clientsec">
          <img src={ainvent} alt="" />
          <img src={chase} alt="" />
          <img src={flat} alt="" />
          <img src={flying} alt="" />
          <img src={Grow} alt="" />
          <img src={Tiberius} alt="" />
          <img src={UAATEAM} alt="" />

          {/* <p>HEARST</p>
          <p>MaroPost</p>
          <p>Shopify</p>
          <p>LUNCHBOOM</p>
          <p>IPG</p>
          <p>RBC</p>
          <p>HEARST</p>
          <p>MaroPost</p>
          <p>Shopify</p>
          <p>LUNCHBOOM</p>
          <p>IPG</p> */}
        </div>
        <div className="clientsec">
          <img src={ainvent} alt="" />
          <img src={chase} alt="" />
          <img src={flat} alt="" />
          <img src={flying} alt="" />
          <img src={Grow} alt="" />
          <img src={Tiberius} alt="" />
          <img src={UAATEAM} alt="" />
          {/* <p>RBC</p>
          <p>HEARST</p>
          <p>MaroPost</p>
          <p>RBC</p>
          <p>HEARST</p>
          <p>MaroPost</p>
          <p>Shopify</p>
          <p>LUNCHBOOM</p>
          <p>IPG</p>
          <p>Shopify</p>
          <p>MaroPost</p>
          <p>Shopify</p> */}
        </div>
      </div>
    </div>
  );
};

export default Clients;
