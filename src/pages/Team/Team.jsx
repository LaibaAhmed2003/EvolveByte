import Neha from "../../media/Team/Neha.png";
import Laiba from "../../media/Team/Laiba.png";
import Jazbia from "../../media/Team/Jazbia.png";
import AliMustafa from "../../media/Team/AliMustafa.png";
import HassanAsgar from "../../media/Team/HassanAsgar.png";
import Other from "../../media/Team/Other.png";
import "./team.css";

const Team = () => {
  return (
    <div className="Team-Container">
      <p className="heading">TEAM MEMBERS</p>
      <h2 className="second-heading" style={{ padding: "30px 0px 10px 0px" }}>
        <span>Brains</span> Behind EvolveByte.
      </h2>
      <p style={{ padding: "0px 0px 20px 0px" }}>
        Combining years of experience in tech & marketing for IT businesses to
        develop strategies that deliver real business growth.
      </p>
      <div className="Team-members">
        <div className="member">
          <img src={Neha} alt="" />
          <div className="name-des">
            <h5>Neha Menahil</h5>
            <h3>LinkedIn Growth Expert</h3>
          </div>
        </div>

        <div className="member">
          <img src={AliMustafa} alt="" />
          <div className="name-des">
            <h5>Ali Mustafa</h5>
            <h3>Marketing Head</h3>
          </div>
        </div>

        <div className="member">
          <img src={Laiba} alt="" />
          <div className="name-des">
            <h5>Laiba Ahmed</h5>
            <h3>Project Manager</h3>
          </div>
        </div>
      </div>
      <div className="Team-members">
        <div className="member">
          <img src={Jazbia} alt="" />
          <div className="name-des">
            <h5>Jazbia Ahmed</h5>
            <h3>Graphics Designer</h3>
          </div>
        </div>
        <div className="member">
          <img src={HassanAsgar} alt="" />
          <div className="name-des">
            <h5>Hassan Asgar</h5>
            <h3>Social Media Manager</h3>
          </div>
        </div>
        <div className="member">
          <img src={Other} alt="" />
          <div className="name-des">
            <h5>Team Members</h5>
            <h3>7 Content Writers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
