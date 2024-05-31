import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import FOOD_DETAILS2 from '../data/fooddetails.json';
import { Link, useParams } from 'react-router-dom';
import { AddInput } from './AddInput'; 
import { getDatabase, ref, onValue, get } from "firebase/database";
import StarRatings from 'react-star-ratings';




export function FoodCardPage() {
    const [FOOD_DETAILS, setFOOD_DETAILS] = useState(null);
    const [currRatings, setCurrRatings] = useState(0);
    const [currAvgRatings, setCurrAvgRatings] = useState(0);

    const { foodName } = useParams();
    const foodNameString = decodeURIComponent(foodName);

    const db = getDatabase();
    const FoodDataRef = ref(db, "FoodDetails/FoodDetailsData");

    useEffect(() => {
        async function fetchData() {
            try {
                const snapshot = await get(FoodDataRef);
                setFOOD_DETAILS(snapshot.val());
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (FOOD_DETAILS) {
            getRatings();
        }
    }, [FOOD_DETAILS]);

    function getRatings() {
        if (!FOOD_DETAILS) return;

        const itemId = Object.keys(FOOD_DETAILS).find(
            (key) => FOOD_DETAILS[key].name === foodNameString
        );

        if (itemId) {
            setCurrAvgRatings(FOOD_DETAILS[itemId].avgRating);
            setCurrRatings(FOOD_DETAILS[itemId].ratings);
        }
    }

    let food = _.find(FOOD_DETAILS, { name: foodNameString });

    if (!food) {
        return <div>Food not found</div>;
    }

    return (
        <div aria-label='pop up food card detail' className="cardPageDetail">
            <Link to={`/foodDetails`} className="btn btn-primary material-icons">close</Link>

            <h1>Food Details for {food.name} ({food.calories} Calories)</h1>

            <div className='foodDetailsContainer'>
                <img src={food.img} alt='{food.name}' />
                <div>
                    <p>Has gluten free options? {food.gfoption ? 'Yes' : 'No'}.</p>
                    <p>Has vegan options? {food.veganoption ? 'Yes' : 'No'}.</p>
                    <p>Spicy? {food.spicy ? 'Yes' : 'No'}.</p>
                    <p>Contains seafood? {food.seafood ? 'Yes' : 'No'}.</p>
                    <p>Total ratings: {currRatings === null ? '' : (currRatings)}</p>
                    <p>Average rating: {currAvgRatings === null ? '' : (currAvgRatings.toFixed(2))}</p>
                    <StarRatings
                        rating={currAvgRatings}
                        starRatedColor="gold"
                        starDimension="20px"
                        numberOfStars={5}
                        name='rating'
                    />
                </div>
            </div>
            {/* Add user comment add/or image */}
            <AddInput foodName={foodNameString} />
        </div>
    );
}

