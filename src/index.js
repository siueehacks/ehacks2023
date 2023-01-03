import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './components/navbar/Navbar';
import links from "./components/navbar/nav.json";
import { ChakraProvider } from '@chakra-ui/react';

import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar anchors={links.components} />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
