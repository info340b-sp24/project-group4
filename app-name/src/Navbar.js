import './Navbar.css';

function NavBar() {
    return (
        <nav>
            {/* MOBILE VIEW */}
            <button className="hamburgerMenu" aria-label="a dropdown menu">
                <span className="material-icons">menu</span>
            </button>
            {/* DESKTOP VIEW */}
            <img
                src="Images/RidgeCupbopRamenLogo.png"
                alt="Logo of Ridge Cupbob & Ramen"
            />
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="order.html">Online Ordering</a></li>
                <li><a href="reservations.html">Reservations</a></li>
                <li><a href="order-popup.html">Order Pop Up</a></li>
                
            </ul>
            <div>
                <a href="https://www.instagram.com/explore/locations/357552958432015/ridge-cupbop-ramen/" target="_blank"
                ><img src="Images/blackinsta.png" alt="instagram logo" /></a>
                <a href="https://www.facebook.com/poemwjwJEDA/" target="_blank"
                ><img src="Images/facebook1.jpg" alt="facebook logo" /></a>
            </div>

        </nav>
    );
}

export default NavBar;