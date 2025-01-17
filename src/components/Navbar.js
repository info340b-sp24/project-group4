import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    const [sideMenuVisible, setSideMenuVisiblility] = useState(false);

    const sideMenu = useRef(null);

    function hamburgerClick(event) {
        setSideMenuVisiblility(!sideMenuVisible);
        sideMenu.current.style.display = sideMenuVisible ? 'inline-block' : 'none';
    }

    return (
        <nav>
            <button className="hamburgerMenu" onClick={hamburgerClick} aria-label="a dropdown menu">
                <span className="material-icons">menu</span>
            </button>
            <div className="sideMenu" ref={sideMenu}>
                <ul>
                    <li><NavLink to="home">Home</NavLink></li>
                    <li><NavLink to ="menu">Menu</NavLink></li>
                    <li><NavLink to="reservations">Reservations</NavLink></li>
                    <li><NavLink to="foodDetails">Food Details</NavLink></li>
                </ul>
            </div>

            <img
                src="Images/RidgeCupbopRamenLogo.png"
                alt="Logo of Ridge Cupbob & Ramen"
            />
            <ul className="navdesktop">
                <li><NavLink to="home">Home</NavLink></li>
                <li><NavLink to="menu">Menu</NavLink></li>
                <li><NavLink to="reservations">Reservations</NavLink></li>
                <li><NavLink to="foodDetails">Food Details</NavLink></li>
            </ul>
            <div className="navdesktop">
                <a href="https://www.instagram.com/explore/locations/357552958432015/ridge-cupbop-ramen/" target="_blank"
                ><img src="Images/blackinsta.png" alt="instagram logo" /></a>
                <a href="https://www.facebook.com/poemwjwJEDA/" target="_blank"
                ><img src="Images/facebook1.jpg" alt="facebook logo" /></a>
            </div>
        </nav>
    );
}

export default NavBar;