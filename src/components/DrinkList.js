import ApiDrinkService from "../services/ApiDrinkService.service";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { chosenDrinkActions } from "../store/chosenDrink";
import { searchActions } from "../store/search";
import responseToDrink from "../utils/responseToDrink";
import "./DrinkList.css";

const DrinkList = () => {
  debugger;
  const navigate = useNavigate();
  const drinks = useSelector((state) => state.search.drinks);
  const dispatch = useDispatch();

  const choseDrink = async (drink) => {
    let idDrink;
    try {
      if (drink.idDrink !== undefined) {
        idDrink = drink.idDrink?.toString();
      }
      const response = await ApiDrinkService.getCocktailDetail(idDrink);
      const newDrink = responseToDrink(response);
      dispatch(chosenDrinkActions.setChosenDrink({ drink: newDrink }));
    } catch (error) {
      console.error("Error fetching drink data: ", error);
      navigate("/error");
    }
    navigate("/chosenDrink");
  };

  const backToInit = () => {
    dispatch(searchActions.cleanSearch());
    navigate("/");
  };

  return (
    <>
      <div className="grid-container">
        {drinks.map((drink) => (
          <li key={drink.idDrink} className="grid-item">
            <img
              src={drink.urlImage}
              onClick={() => choseDrink(drink)}
              alt="Drink"
              style={{ cursor: "pointer" }}
            />
            <p>{drink.name}</p>
          </li>
        ))}
      </div>
      <button className="btn-style" onClick={backToInit}>
        Back to drink of the day
      </button>
    </>
  );
};

export default DrinkList;
