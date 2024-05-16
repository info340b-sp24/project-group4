import './Meal.css';

export function Meal({ name, description, price, imgSrc, tags }) {
  return (
    <div className="meal">
      <img src={imgSrc} alt={name} className="meal-image" />
      <div className="meal-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="meal-info">
          <span className="meal-price">{price}</span>
          <div className="meal-tags">
            {tags.map((tag, index) => (
              <span key={index} className={`tag ${tag.toLowerCase()}`}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
