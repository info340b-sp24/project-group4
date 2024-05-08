import './Navbar.css';

function Nav() {
    return (
        <nav>
            {/* MOBILE VIEW */}
            <button className="hamburgerMenu">
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

        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default Nav;