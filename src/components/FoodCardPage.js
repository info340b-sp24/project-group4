import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import FOOD_DETAILS from '../data/fooddetails.json'; 

export function FoodCardPage(props) {
    const urlParams = useParams();

    const foodNameString = urlParams.foodName;

    let food = _.find(FOOD_DETAILS, { name: foodNameString });

    return (
        <div className='cardPageDetail'>
            <h1>Adopt {food.name}</h1>
            <p className="lead">{food.name} {food.calories}</p>
            <div>
                {food.name}
                {food.calories}
                {food.gfoption}
            </div>
        </div>
    );
}

