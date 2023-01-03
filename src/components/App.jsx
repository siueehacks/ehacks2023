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
            <Home />
            <About />
            <Schedule />
            <Prizes />
            <Sponsors />
            <Faq />
            <Contact />
        </div>
    )
}

export default App;