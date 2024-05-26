import React, { useState, useEffect } from 'react';
import { FoodCard } from './FoodCard';
import _ from 'lodash';
import { Outlet } from 'react-router-dom';
import FOOD_DETAILS2 from '../data/fooddetails.json';
import { getDatabase, ref, get, update, set, child } from 'firebase/database';

export function FoodDetails() {
    const [caloriesAscending, setCaloriesAscending] = useState(true);
    const [sortCriterias, setSortCriterias] = useState([]);
    const [FOOD_DETAILS, setFOOD_DETAILS] = useState(null);

    const db = getDatabase();
    const FoodDataRef = ref(db, "FoodDetails/FoodDetailsData");

    useEffect(() => {
        get(FoodDataRef).then((snapshot) => {
            if (snapshot.exists()) {
                setFOOD_DETAILS(snapshot.val());
            } else {
                setFOOD_DETAILS(FOOD_DETAILS2);
            }
        }).catch((error) => {
            console.error('Error getting data:', error);
        });
    }, []);

    let sortedByCalories = _.sortBy(FOOD_DETAILS, 'calories');

    function sortCalories() {
        setCaloriesAscending(!caloriesAscending);
    }

    function filters(event) {
        setSortCriterias(
            [
                ...sortCriterias, event.currentTarget.name
            ]
        );
    }

    function clearCriterias() {
        setSortCriterias([]);
        window.location.reload();
    }

    if (!caloriesAscending) {
        _.reverse(sortedByCalories);
    }

    let filteredData = sortedByCalories;

    if (sortCriterias.length > 0) {
        filteredData = filteredData.filter((foodItem) => {
            return sortCriterias.every((filter) => {
                switch (filter) {
                    case 'veganoption':
                        return foodItem.veganoption === true;
                    case 'spicy':
                        return foodItem.spicy === true;
                    case 'gfoption':
                        return foodItem.gfoption === true;
                    case 'seafood':
                        return foodItem.seafood === true;
                    default:
                        return true;
                }
            });
        });
    }

    function addRating(foodName, rating) {
        const itemId = Object.keys(FOOD_DETAILS).find(
            (key) => FOOD_DETAILS[key].name === foodName
        );

        if (itemId) {
            const existingAvgRating = FOOD_DETAILS[itemId].avgRating === null ? 0 : parseFloat(FOOD_DETAILS[itemId].avgRating);
            const ratingsCalc = FOOD_DETAILS[itemId].ratings === null ? 0 : parseFloat(FOOD_DETAILS[itemId].ratings + 1);
            const avgRatingCalc = (existingAvgRating * (ratingsCalc - 1) + parseFloat(rating)) / ratingsCalc;

            const updatedItem = {
                ratings: ratingsCalc,
                avgRating: avgRatingCalc,
            };

            update(child(ref(db), `FoodDetails/FoodDetailsData/${itemId}`), updatedItem)
                .then(() => {
                    console.log('Ratings updated successfully!');
                })
                .catch((error) => {
                    console.error('Error updating data:', error);
                });
        }
    }

    var foods = filteredData.map((food) => (
        <div key={food.name}>
            <FoodCard foodItem={food} name={food.name} vegan_option={food.veganoption} gf_option={food.gfoption} spicy={food.spicy} seafood={food.seafood} calories={food.calories} img={food.img} addratingfunc={addRating} />
        </div>
    ));


    return (
        <div className="foodDetailsPage">
            <h1>Filter for food dietary details here!</h1>
            <div className="filters">
                <p>Sort by calories: </p>
                <input type="checkbox" id="caloriesSort" onClick={sortCalories} />Calories Descending (Default ascending)

                <p>Include:</p>
                <input type="checkbox" id="seafood" name="seafood" onClick={filters} />Seafood
                <input type="checkbox" id="veganoption" name="veganoption" onClick={filters} />Vegan Options
                <input type="checkbox" id="gfoption" name="gfoption" onClick={filters} />Gluten Free Options
                <input type="checkbox" id="spicy" name="spicy" onClick={filters} />Spicy
                <input type="checkbox" id="clear" onClick={clearCriterias} />*Clear Criterias*

            </div>
            <div className="foodDetails">
                {foods}
            </div>
            <div><Outlet /></div>
        </div>
    );
}