import { HomePage } from "./HomePage";
import { ReservationsPage } from "./ReservationsPage";
import { Menu } from "./Menu";
import NavBar from "./Navbar";
import { FoodDetails } from "./FoodDetailsPage";
import { FoodCardPage } from "./FoodCardPage";
import FOOD_DETAILS from '../data/fooddetails.json';
import { Routes, Route, Navigate } from 'react-router-dom'

export function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="menu" element={<Menu />} />
                <Route path="reservations" element={<ReservationsPage />} />
                <Route path="foodDetails" element={<FoodDetails data={FOOD_DETAILS} />}>
                    <Route path=":foodName" element={<FoodCardPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    )
}