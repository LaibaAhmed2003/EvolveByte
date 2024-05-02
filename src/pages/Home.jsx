import Hero from "./Hero";
import Clients from "./Clients";
import Work from "./Work";
import Services from "./Services";
import Process2 from "./Process2";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Team from "./Team";
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
      <Process2 />
      <Testimonial />
      <Pricing />
      <GetStarted />
      <Team />
      <FAQs />
      <Footer />
    </div>
  );
};
export default Home;
