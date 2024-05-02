import test1 from "../media/test1.jpeg";
const Team = () => {
  return (
    <div className="Team-Container">
      <p className="heading">TEAM MEMBERS</p>
      <h2 className="second-heading" style={{ padding: "30px 0px 60px 0px" }}>
        The <span>Brains</span> behind EvolveByte.
      </h2>
      <div className="Team-members">
        <div className="member">
          <img src={test1} alt="" />
          <div className="name-des">
            <h5>Neha Menahil</h5>
            <h3>Founder</h3>
          </div>
        </div>
        <div className="member">
          <img src={test1} alt="" />
          <div className="name-des">
            <h5>Laiba Ahmed</h5>
            <h3>Web Developer</h3>
          </div>
        </div>
        <div className="member">
          <img src={test1} alt="" />
          <div className="name-des">
            <h5>Hadiyan Ahmed</h5>
            <h3>Hr Manager</h3>
          </div>
        </div>
      </div>
      <div className="Team-members">
        <div className="member">
          <img src={test1} alt="" />
          <div className="name-des">
            <h5>Neha Menahil</h5>
            <h3>Founder</h3>
          </div>
        </div>
        <div className="member">
          <img src={test1} alt="" />
          <div className="name-des">
            <h5>Laiba Ahmed</h5>
            <h3>Web Developer</h3>
          </div>
        </div>
        <div className="member">
          <img src={test1} alt="" />
          <div className="name-des">
            <h5>Hadiyan Ahmed</h5>
            <h3>Hr Manager</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
