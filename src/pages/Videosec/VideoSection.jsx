import "./videosec.css";
import video from "../../media/videoimg.png";

const VideoSection = () => {
  return (
    <div className="VideoSection-container" id="videosec">
      <div className="videosec-innerdev">
        <img src={video} alt="Laura Enzor" className="video-img" />
        <h3 className="caption">“The results speak for themselves”</h3>
        <div className="leads-container">
          <div className="leads-contents">
            <h4>+664%</h4>
            <h5>Organic Traffic </h5>
          </div>
          |
          <div className="leads-contents">
            <h4>+264%</h4>
            <h5>Online Leads </h5>
          </div>
        </div>
        <p className="video-para">
          Thrive used SEO & PPC to increase the overall traffic to the new Farah
          website by +664% and along with the new CRO focused Website were able
          to increase online leads by over +360%.
        </p>
        <p className="case-link">Read Neha Case Study »</p>
      </div>
    </div>
  );
};

export default VideoSection;
