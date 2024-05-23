import { HomePage } from "./HomePage";
import { ReservationsPage } from "./ReservationsPage";
import { Menu } from "./Menu";
import NavBar from "./Navbar";
import { FoodDetails } from "./FoodDetails";
import FOOD_DETAILS from '../data/fooddetails.json'; 
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link, Navigate } from 'react-router-dom'

export function App() {
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
                <Route path="foodDetails" element={<FoodDetails data ={FOOD_DETAILS} />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>

            {/* <HomePage /> */}
            {/* <Menu /> */}
            {/* <ReservationsPage /> */}
        </div>
    )
}