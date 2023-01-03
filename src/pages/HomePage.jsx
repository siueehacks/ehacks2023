import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Faq from '../components/Faq';
import Prizes from '../components/Prizes';
import Schedule from '../components/Schedule';
import Sponsors from '../components/Sponsors';
import Navbar from '../components/navbar/Navbar';
import links from "../components/navbar/nav.json";


const HomePage = () => {
    return (
        <div>
            <Navbar anchors={links.components} />
            <section id="home">
            <Home />
            </section>
            <section id="about">
            <About />
            </section>
            <section id="schedule">
            <Schedule />
            </section>
            <section id="prizes">
            <Prizes />
            </section>
            <section id="sponsors">
            <Sponsors />
            </section>
            <section id="faq">
            <Faq />
            </section>
            <section id="contact">
            <Contact />
            </section>
        </div>
    )
}

export default HomePage;