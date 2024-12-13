import Hero from "../Hero/Hero";
import Clients from "../Clients/Clients";
import Work from "../Work/Work";
// import Services from "../Services/Services";
import Services from "../Services/Service2";
import VideoSection from "../Videosec/VideoSection";
import Process2 from "../Process/Process2";
import Testimonial from "../Testimonial/Testimonial";
import Pricing from "../Pricing/Pricing";
import Team from "../Team/Team";
import How from "../howitworks/how";
import Calendly from "../Calendly/Calendly";
import GetStarted from "../Getstarted/GetStarted";
import Lowernavbar from "../../Lowernavbar";
import FAQs from "../FAQs/FAQs";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Lowernavbar />
      <Clients />
      <Work />
      <Services />
      {/* <VideoSection /> */}
      <How />
      {/* <Process2 /> */}
      <Testimonial />
      <Pricing />
      <GetStarted />
      <Team />
      <FAQs />
      {/* <Calendly /> */}
      <Footer />
    </div>
  );
};
export default Home;
