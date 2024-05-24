
import React, { useState } from 'react';
import { FoodCard } from './FoodCard';
import _ from 'lodash';
import { Outlet } from 'react-router-dom';

export function FoodDetails(props) {
    const [caloriesAscending, setCaloriesAscending] = useState(true);
    const [sortCriterias, setSortCriterias] = useState([]);


    var sortedByCalories = _.sortBy(props.data, 'calories');

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
            console.log('Checking food item:', foodItem);

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


    var foods = filteredData.map((food) => (
        <div key={food.name}>
            <FoodCard foodItem={food} name={food.name} vegan_option={food.veganoption} gf_option={food.gfoption} spicy={food.spicy} seafood={food.seafood} calories={food.calories} img={food.img} />
        </div>
    ));


    return (
        <div className="foodDetailsPage">
            <h1>Check food details here!</h1>
            <div class="filters">
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