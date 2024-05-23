
import React, { useState } from 'react'; 
import { FoodCard } from './FoodCard';
import _ from 'lodash';

export function FoodDetails(props) {
    const [caloriesAscending, setCaloriesAscending] = useState(true);

    var sortedByCalories = _.sortBy(props.data, 'calories');

    if (!caloriesAscending) {
        _.reverse(sortedByCalories);
    }

    var foods = sortedByCalories.map((food) => (
        <div key={food.name}>  
            <FoodCard foodItem={food} name={food.name} vegan_option={food.veganoption} gf_option={food.gfoption} spicy={food.spicy} seafood={food.seafood} calories={food.calories} img={food.img} />
        </div>
    ));

    return (
        <div className="foodDetails">
            {foods}
        </div>
    );
}