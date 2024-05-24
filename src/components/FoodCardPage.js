import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import FOOD_DETAILS from '../data/fooddetails.json'; 

export function FoodCardPage() {
    const { foodName } = useParams();

    console.log(foodName);
    const foodNameString = decodeURIComponent(foodName);

    console.log(foodNameString);

    let food = _.find(FOOD_DETAILS, { name: foodNameString });

    if (!food) {
        return <div>Food not found</div>;
    }

    return (
        <div className='cardPageDetail'>
            <h1>Details for {food.name}</h1>
            <p className="lead">{food.name} {food.calories}</p>
            <div>
                {food.name}
                {food.calories}
                {food.gfoption}
            </div>
        </div>
    );
}

