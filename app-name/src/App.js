import { HomePage } from "./HomePage";
import { ReservationsPage } from "./ReservationsPage";
import { Menu } from "./Menu";
import NavBar from "./Navbar";

export function App(props) {
    return (
        <div>
            <NavBar />
            <HomePage />
            <Menu />
            <ReservationsPage />
        </div>
    )
}