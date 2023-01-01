import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './navbar/Navbar';
import links from "../src/navbar/nav.json";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Prizes from './pages/Prizes';
import Schedule from './pages/Schedule';
import Sponsors from './pages/Sponsors';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar anchors={links.components} />
    <Home />
    <About />
    <Contact />
    <Faq />
    <Prizes />
    <Schedule />
    <Sponsors />
  </React.StrictMode>
);
