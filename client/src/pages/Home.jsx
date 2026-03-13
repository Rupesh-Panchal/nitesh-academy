import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Achievers from "../components/Achievers";
import WhyChoose from "../components/WhyChoose";
import "../styles/Home.css";

const Home = () => {

  return (
    <div>

      <Navbar />
      <Hero/>
      <Achievers/>
      <WhyChoose/>
      <Footer />

    </div>
  );
};

export default Home;