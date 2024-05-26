import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';



export function FoodCard(props) {
  const db = getDatabase();
  const FoodDataRef = ref(db, "FoodDetailsData");

  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
    console.log(newRating);
    props.addratingfunc(props.name, newRating);
  };




  return (
    <div className="foodCard">
      <img src={props.img} alt={props.name} className="card-image" />
      <div className="card-details" aria-label="white box showing a food card with details">
        <h1>{props.name}</h1>
        <div className="card-info">
          <span className="card-calories">{props.calories} Calories</span>
          <Link to={`/foodDetails/${encodeURIComponent(props.name)}`} className="btn btn-primary">Details</Link>
        </div>
        <div>
          <h2>Rate this product:</h2>
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            starDimension = "20px"
            changeRating={changeRating}
            numberOfStars={5}
            name='rating'
          />
          <p>Your rating: {rating}</p>
        </div>
      </div>
    </div>
  );
}


