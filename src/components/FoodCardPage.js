import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { Link } from 'react-router-dom'


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
                </div>
            </div>
        </div>
    );
}

