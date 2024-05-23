export function Meal({ name, description, price, imgSrc }) {
  return (
    <div className="meal">
      <img src={imgSrc} alt={name} className="meal-image" />
      <div className="meal-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="meal-info">
          <span className="meal-price">{price}</span>
        </div>
      </div>
    </div>
  );
}


