import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //render the nav bar
  <React.StrictMode>
    <Nav /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// In general, you’ll code React apps by implementing components in one or more modules(e.g., App.js, AboutPage.js), which will then be imported and used by the index.js file.See the Components section below for details (from textbook chapter15)