import React from 'react'; //import React Component
import { Link } from 'react-router-dom'

export function FoodCard(props) {

  return (
    <div className="foodCard">
      <img src={props.img} alt={props.name} className="card-image" />
      <div className="card-details">
        <h3>{props.name}</h3>
        <div className="card-info">
          <span className="card-calories">{props.calories} Calories</span>
          <Link to={`/foodDetails/${props.name}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
}


