import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Prizes from '../pages/Prizes';
import Schedule from '../pages/Schedule';
import Sponsors from '../pages/Sponsors';

const App = () => {
    return (
        <div>
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

export default App;