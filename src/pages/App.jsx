import Home from './Home';
import About from './About';
import Contact from './Contact';
import Faq from './Faq';
import Prizes from './Prizes';
import Schedule from './Schedule';
import Sponsors from './Sponsors';

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