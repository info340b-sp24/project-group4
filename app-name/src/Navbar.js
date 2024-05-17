import React, { useState } from 'react';
import './Navbar.css';

function NavBar() {
    const [sideMenuVisible, setSideMenuVisiblility] = useState(false);
    function hamburgerClick(event) {
        setSideMenuVisiblility(!sideMenuVisible);
        const sideMenu = document.querySelector('.sideMenu');
        sideMenu.style.display = sideMenuVisible ? 'inline-block' : 'none';
    }

    return (
        <nav>
            {/* MOBILE VIEW */}
            <button className="hamburgerMenu" onClick={hamburgerClick} aria-label="a dropdown menu">
                <span className="material-icons">menu</span>
            </button>
            <div className="sideMenu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="order.html">Online Ordering</a></li>
                    <li><a href="reservations.html">Reservations</a></li>
                    <li><a href="order-popup.html">Order Pop Up</a></li>
                </ul>
            </div>

            {/* DESKTOP VIEW */}
            <img
                src="Images/RidgeCupbopRamenLogo.png"
                alt="Logo of Ridge Cupbob & Ramen"
            />
            <ul className="desktop">
                <li><a href="index.html">Home</a></li>
                <li><a href="order.html">Online Ordering</a></li>
                <li><a href="reservations.html">Reservations</a></li>
                <li><a href="order-popup.html">Order Pop Up</a></li>
                
            </ul>
            <div className="desktop">
                <a href="https://www.instagram.com/explore/locations/357552958432015/ridge-cupbop-ramen/" target="_blank"
                ><img src="Images/blackinsta.png" alt="instagram logo" /></a>
                <a href="https://www.facebook.com/poemwjwJEDA/" target="_blank"
                ><img src="Images/facebook1.jpg" alt="facebook logo" /></a>
            </div>

        </nav>
    );
}

export default NavBar;