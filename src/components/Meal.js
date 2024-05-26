export function Meal({ name, description, price, imgSrc }) {
  return (
    <div className="meal">
      <img src={imgSrc} alt={name} className="meal-image" />
      <div className="meal-details" aria-label="a white rectangle box showing meal items, description and price">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="meal-info">
          <span className="meal-price">{price}</span>
        </div>
      </div>
    </div>
  );
}


