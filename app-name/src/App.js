function Nav() {
  return (
    <nav>
      <button class="hamburgerMenu">
        <span class="material-icons">menu</span>
      </button>

      <ul>
        <li class="navTitles"><a href="index.html">Home</a></li>
        <li class="navTitles"><a href="order.html">Online Ordering</a></li>
        <li class="navTitles"><a href="reservations.html">Reservations</a></li>
        <li class="navTitles"><a href="order-popup.html">Order Pop Up</a></li>
      </ul>
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