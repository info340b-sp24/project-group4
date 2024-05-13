import { HomePage } from "./HomePage";
import NavBar from "./Navbar";

export function App(props) {
    return (
        <div>
            <NavBar /> 
            <HomePage />
            {/* see draft 2 assignment example... make the menu and reservations pages then put them below */}
            {/* <MenuOrderingPage /> */} 
            {/* <ReservationsPage /> */}
        </div>
    )
}