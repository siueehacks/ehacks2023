import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './navbar/Navbar';
import links from "../src/navbar/nav.json";
import { ChakraProvider } from '@chakra-ui/react';

import App from './pages/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar anchors={links.components} />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
