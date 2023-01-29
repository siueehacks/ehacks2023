import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Prizes from "../components/Prizes";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";
import Navbar from "../components/Navbar";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="Page">
      <div>
        <Navbar/>
      </div>
      <div className="ContentBox">
        <section className="Anchor" id="home">
          <Home />
        </section>
        <section className="Anchor" id="about">
          <About />
        </section>
        <section className="Anchor" id="schedule">
          <Schedule />
        </section>
        <section className="Anchor" id="prizes">
          <Prizes />
        </section>
        <section className="Anchor" id="sponsors">
          <Sponsors />
        </section>
        <section className="Anchor" id="faq">
          <Faq />
        </section>
        <section className="Anchor" id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
