import React, { useState, useEffect } from 'react';
import { FoodCard } from './FoodCard';
import _ from 'lodash';
import { Outlet } from 'react-router-dom';
import FOOD_DETAILS2 from '../data/fooddetails.json';
import { getDatabase, ref, get, update, child } from 'firebase/database';

export function FoodDetails() {
    const [sortCriterias, setSortCriterias] = useState([]);
    const [FOOD_DETAILS, setFOOD_DETAILS] = useState(null);
    const [selectedRanking, setSelectedRanking] = useState('calories');
    const [isDescending, setIsDescending] = useState(false);

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

    let sortedFoods = _.sortBy(FOOD_DETAILS, selectedRanking);

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
                .catch((error) => {
                    console.error('Error updating data:', error);
                });
        }
    }

    function handleChangeRanking(event) {
        setSelectedRanking(event.target.value);
    }

    function handleReverse() {
        setIsDescending(!isDescending);
    }

    if (isDescending) {
        _.reverse(sortedFoods);
    }

    let filteredData = sortedFoods;

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

    let foods = filteredData.map((food) => (
        <div key={food.name}>
            <FoodCard foodItem={food} name={food.name} vegan_option={food.veganoption} gf_option={food.gfoption} spicy={food.spicy} seafood={food.seafood} calories={food.calories} img={food.img} addratingfunc={addRating}  />
        </div>
    ));

    return (
        <div className="foodDetailsPage">
            <h1>Filter for food dietary details here!</h1>
            <div className="filters">
                <h2>Sort foods by criterias: </h2>
                <select value={selectedRanking} onChange={handleChangeRanking}>
                    <option value="" disabled>Select a sorting option</option>
                    <option value="calories">Calories</option>
                    <option value="ratings">Total Ratings</option>
                    <option value="avgRatings">Average Rating</option>
                </select>

                <input type="checkbox" id="reverseSort" name = "resverseSort" onClick={handleReverse} />
                <label for="reverseSort">Sort by Descending (Defaulted to ascending)</label>


                <h2>Include:</h2>
                <input type="checkbox" id="seafood" name="seafood" onClick={filters} />
                <label for="seafood">Seafood</label>
                <input type="checkbox" id="veganoption" name="veganoption" onClick={filters} />
                <label for="veganoption">Vegan Options</label>
                <input type="checkbox" id="gfoption" name="gfoption" onClick={filters} />
                <label for="gfoption">Gluten Free Options</label>
                <input type="checkbox" id="spicy" name="spicy" onClick={filters} />
                <label for="spicy">Spicy</label>
                <input type="checkbox" id="clear" onClick={clearCriterias} />
                <label for="clear">Clear Criterias</label>

            </div>
            <div className="foodDetails">
                {foods}
            </div>
            <div><Outlet /></div>
        </div>
    );
}