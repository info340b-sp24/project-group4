import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import firebase, {initializeApp} from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyBysLZwAcRqpIHWSloDZ_4X9YB5WtdMeqU",
  authDomain: "ridge-cupbop-and-ramen-website.firebaseapp.com",
  databaseURL: "https://ridge-cupbop-and-ramen-website-default-rtdb.firebaseio.com",
  projectId: "ridge-cupbop-and-ramen-website",
  storageBucket: "ridge-cupbop-and-ramen-website.appspot.com",
  messagingSenderId: "1030325681414",
  appId: "1:1030325681414:web:8259b5fd366f0810e6b287"
};
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);