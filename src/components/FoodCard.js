export function FoodCard({ name, description, price, imgSrc }) {
  return (
    <div className="foodCard">
      <img src={imgSrc} alt={name} className="card-image" />
      <div className="card-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="card-info">
          <span className="card-price">{price}</span>
        </div>
      </div>
    </div>
  );
}


