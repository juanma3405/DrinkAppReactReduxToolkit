import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../store/search";
import { chosenDrinkActions } from "../store/chosenDrink";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./DrinkOfTheDay.css";

const DrinkOfTheDay = () => {
  const navigate = useNavigate();
  const drinkOfTheDay = useSelector((state) => state.randomDrink.drink);
  const selectedDrink = useSelector((state) => state.chosenDrink.drink);
  const dispatch = useDispatch();

  const backToList = () => {
    dispatch(chosenDrinkActions.clearChosenDrink());
    navigate("/search");
  };

  const backToDrinkOfDay = () => {
    dispatch(chosenDrinkActions.clearChosenDrink());
    dispatch(searchActions.cleanSearch());
  };

  if (!drinkOfTheDay) return <div className="drink-container">Loading...</div>;

  if (!selectedDrink)
    return (
      <div>
        <div className="drink-container">
          <div>
            <h1>Your drink of the day</h1>
          </div>
          <h2>{drinkOfTheDay.name}</h2>
          <img
            src={drinkOfTheDay.urlImage}
            alt={drinkOfTheDay.name}
            className="drink-image"
          />
          <div className="instructions">
            <h3>Instructions</h3>
            <p>{drinkOfTheDay.instructions}</p>
          </div>
          <div className="ingredients">
            <h3>Ingredients and measures</h3>
            {drinkOfTheDay.ingredients.map((ingredient, index) => (
              <div key={index}>
                <span>{ingredient}</span>
                <span>{drinkOfTheDay.ingmeasures[index]}</span>
              </div>
            ))}
          </div>
          <br />
          <SearchBar />
        </div>
      </div>
    );

  if (selectedDrink)
    return (
      <div>
        <div className="drink-container">
          <div>
            <h1>Your chosen drink</h1>
          </div>
          <h2>{selectedDrink.name}</h2>
          <img
            src={selectedDrink.urlImage}
            alt={selectedDrink.name}
            className="drink-image"
          />
          <div className="instructions">
            <h3>Instructions</h3>
            <p>{selectedDrink.instructions}</p>
          </div>
          <div className="ingredients">
            <h3>Ingredients and measures</h3>
            {selectedDrink.ingredients.map((ingredient, index) => (
              <div key={index}>
                <span>{ingredient}</span>
                <span>{selectedDrink.ingmeasures[index]}</span>
              </div>
            ))}
          </div>
          <br />
          <button onClick={backToList}>Back to your search list </button>
          <br />
          <button onClick={backToDrinkOfDay}>
            Go back to drink of the day
          </button>
        </div>
      </div>
    );
};

export default DrinkOfTheDay;
