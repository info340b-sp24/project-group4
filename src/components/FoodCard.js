import React from 'react';
import { Link } from 'react-router-dom'

export function FoodCard(props) {

  return (
    <div className="foodCard">
      <img src={props.img} alt={props.name} className="card-image" />
      <div className="card-details" aria-label="white box showing a food card with details">
        <h3>{props.name}</h3>
        <div className="card-info">
          <span className="card-calories">{props.calories} Calories</span>
          <Link to={`/foodDetails/${encodeURIComponent(props.name)}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
}


