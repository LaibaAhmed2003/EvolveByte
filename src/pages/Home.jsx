import Hero from "./Hero";
import Clients from "./Clients";
import Work from "./Work";
import Services from "./Services";
import VideoSection from "./VideoSection";
import Process2 from "./Process2";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Team from "./Team";
import Calendly from "./Calendly";
import GetStarted from "./GetStarted";
import Lowernavbar from "../Lowernavbar";
import FAQs from "./FAQs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Lowernavbar />
      <Clients />
      <Work />
      <Services />
      <VideoSection />
      <Process2 />
      <Testimonial />
      <Pricing />
      <GetStarted />
      <Team />
      <FAQs />
      <Calendly />
      <Footer />
    </div>
  );
};
export default Home;
