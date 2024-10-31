import "./DrinkDetail.css";

const DrinkDetail = ({ drink, message }) => {
  return (
    <>
      <div>
        <h1>{message}</h1>
      </div>
      <h2>{drink.name}</h2>
      <img src={drink.urlImage} alt={drink.name} className="drink-image" />
      <div className="instructions">
        <h3>Instructions</h3>
        <p>{drink.instructions}</p>
      </div>
      <div className="ingredients">
        <h3>Ingredients and measures</h3>
        {drink.ingredients.map((ingredient, index) => (
          <div key={index}>
            <span>{ingredient}</span>
            <span>{drink.ingmeasures[index]}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default DrinkDetail;
