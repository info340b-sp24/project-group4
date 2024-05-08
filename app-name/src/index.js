import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Navbar';
import { MainSlideshow } from './MainPageSlideshow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //render the nav bar
  <React.StrictMode>
    <Nav /> 
    <MainSlideshow />
  </React.StrictMode>
);