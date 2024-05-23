import { HomePage } from "./HomePage";
import { ReservationsPage } from "./ReservationsPage";
import { Menu } from "./Menu";
import NavBar from "./Navbar";
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link, Navigate } from 'react-router-dom'

export function App(props) {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="menu" element={<Menu />} />
                <Route path="reservations" element={<ReservationsPage />} >
                    {/* <Route path=":petName" element={<PetDetail />} />
                    <Route index element={<PetList pets={pets} />} /> */}
                </Route>
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>

            {/* <HomePage /> */}
            {/* <Menu /> */}
            {/* <ReservationsPage /> */}
        </div>
    )
}